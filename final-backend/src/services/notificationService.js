const prisma = require('../lib/prisma');

/**
 * Log an activity to the audit trail
 */
async function logActivity({
  actorId,
  actorName,
  actorRole,
  action,
  entityType,
  entityId,
  entityCode,
  prevStatus,
  newStatus,
  ipAddress,
  userAgent,
  notes,
  metadata,
}) {
  try {
    return await prisma.activityLog.create({
      data: {
        actorId: actorId || null,
        actorName: actorName || null,
        actorRole: actorRole || null,
        action,
        entityType: entityType || null,
        entityId: entityId || null,
        entityCode: entityCode || null,
        prevStatus: prevStatus || null,
        newStatus: newStatus || null,
        ipAddress: ipAddress || null,
        userAgent: userAgent || null,
        notes: notes || null,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });
  } catch (err) {
    console.error('[ActivityLog] Failed to log activity:', err.message);
    return null;
  }
}

/**
 * Create a notification for Super Admin
 */
async function createNotification({ type, title, message, targetUrl, entityId, metadata }) {
  try {
    return await prisma.notification.create({
      data: {
        type,
        title,
        message,
        targetUrl: targetUrl || null,
        entityId: entityId || null,
        metadata: metadata ? JSON.stringify(metadata) : null,
      },
    });
  } catch (err) {
    console.error('[Notification] Failed to create notification:', err.message);
    return null;
  }
}

/**
 * Helper: notify + log for Self-Activation of a Safety Tag
 */
async function onTagSelfActivated({ tag, ownerName, ownerPhone, ipAddress, userAgent }) {
  await Promise.all([
    logActivity({
      actorRole: 'customer',
      actorName: ownerName,
      action: 'TAG_ACTIVATED',
      entityType: 'tag',
      entityId: tag.id,
      entityCode: tag.tagCode,
      prevStatus: 'inactive',
      newStatus: 'active',
      ipAddress,
      userAgent,
      notes: `Self-activation by customer: ${ownerName} (${ownerPhone})`,
    }),
    createNotification({
      type: 'TAG_ACTIVATED',
      title: '🔔 New Safety Tag Activated',
      message: `Tag ${tag.tagCode} was self-activated by ${ownerName} (${maskPhone(ownerPhone)}).`,
      targetUrl: `/admin/inventory?tab=safety-tags&highlight=${tag.id}`,
      entityId: tag.id,
      metadata: { tagCode: tag.tagCode, ownerName, ownerPhone: maskPhone(ownerPhone) },
    }),
  ]);
}

/**
 * Helper: notify + log for Partner Tag Assignment
 */
async function onTagAssignedByPartner({ tag, partner, ownerName, ownerPhone, ipAddress, userAgent }) {
  await Promise.all([
    logActivity({
      actorId: partner.id,
      actorName: partner.name,
      actorRole: 'partner',
      action: 'TAG_ASSIGNED',
      entityType: 'tag',
      entityId: tag.id,
      entityCode: tag.tagCode,
      prevStatus: 'unassigned',
      newStatus: 'assigned',
      ipAddress,
      userAgent,
      notes: `Assigned to ${ownerName} by partner ${partner.name}`,
    }),
    createNotification({
      type: 'PARTNER_ASSIGNED',
      title: '📦 Tag Assigned by Partner',
      message: `Partner "${partner.name}" assigned tag ${tag.tagCode} to ${ownerName}.`,
      targetUrl: `/admin/inventory?tab=safety-tags&highlight=${tag.id}`,
      entityId: tag.id,
      metadata: { tagCode: tag.tagCode, partnerName: partner.name, ownerName },
    }),
  ]);
}

/**
 * Helper: notify + log for B2B QR Go Live
 */
async function onProductGoLive({ product, actorId, actorName, actorRole, ipAddress, userAgent }) {
  await Promise.all([
    logActivity({
      actorId,
      actorName,
      actorRole,
      action: 'GO_LIVE',
      entityType: 'product',
      entityId: product.id,
      entityCode: product.productCode,
      prevStatus: 'inactive',
      newStatus: 'live',
      ipAddress,
      userAgent,
      notes: `B2B QR Product ${product.productCode} set to Live by ${actorName}`,
    }),
    createNotification({
      type: 'GO_LIVE',
      title: '🚀 B2B QR Went Live',
      message: `Product "${product.name}" (${product.productCode}) is now Live.`,
      targetUrl: `/admin/inventory?tab=b2b-qr&highlight=${product.id}`,
      entityId: product.id,
      metadata: { productCode: product.productCode, productName: product.name, actorName },
    }),
  ]);
}

function maskPhone(phone) {
  if (!phone) return '';
  const str = phone.toString();
  if (str.length <= 4) return '****';
  return str.slice(0, 2) + '****' + str.slice(-2);
}

module.exports = {
  logActivity,
  createNotification,
  onTagSelfActivated,
  onTagAssignedByPartner,
  onProductGoLive,
  maskPhone,
};
