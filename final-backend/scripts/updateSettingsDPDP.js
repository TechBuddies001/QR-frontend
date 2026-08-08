const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const privacyPolicyDPDP = `
<div class="space-y-6">
  <p><strong>Last Updated: July 2026</strong></p>
  
  <p>At V-Kawach, we respect your privacy and are committed to protecting your personal data in compliance with the Digital Personal Data Protection (DPDP) Act, 2023.</p>

  <h3 class="text-xl font-bold">1. Data We Collect</h3>
  <ul class="list-disc pl-5 space-y-2">
    <li><strong>Device & Location:</strong> IP address and generalized location when you scan a QR code, used strictly for security monitoring and preventing misuse.</li>
    <li><strong>Contact Information:</strong> If you choose to contact a vehicle owner, we collect your mobile number to facilitate the connection.</li>
  </ul>

  <h3 class="text-xl font-bold">2. Purpose of Collection</h3>
  <p>We collect this data solely for:</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>Establishing a secure, masked communication bridge between the scanner and the owner.</li>
    <li>Sending emergency SOS notifications to authorized family members.</li>
    <li>Preventing spam and abuse on our platform.</li>
  </ul>

  <h3 class="text-xl font-bold">3. Data Sharing</h3>
  <p>Your personal contact number is <strong>never</strong> shared with the QR code owner. Calls and WhatsApp messages are routed through our secure proxy provider (Exotel) to ensure 100% masking and privacy.</p>

  <h3 class="text-xl font-bold">4. Data Retention</h3>
  <p>Scan logs and proxy communication logs are retained for a maximum of <strong>90 days</strong> for security auditing purposes, after which they are automatically and securely deleted from our servers.</p>

  <h3 class="text-xl font-bold">5. Your Rights (DPDP Act)</h3>
  <p>Under the DPDP Act, you have the right to:</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>Access the personal data we hold about you.</li>
    <li>Request correction of inaccurate data.</li>
    <li>Request erasure of your personal data ("Right to be Forgotten").</li>
  </ul>
  <p>To exercise these rights, please email our Data Protection Officer at <strong>privacy@tarkshyasolution.in</strong>.</p>

  <h3 class="text-xl font-bold">6. Security</h3>
  <p>We use industry-standard encryption (SSL/TLS), strict access controls, and regular security audits to protect your data against unauthorized access or breaches.</p>
</div>
`;

const termsDPDP = `
<div class="space-y-6">
  <p><strong>Last Updated: July 2026</strong></p>
  
  <p>Welcome to V-Kawach. By using our platform, scanning our QR codes, or purchasing our products, you agree to the following terms.</p>

  <h3 class="text-xl font-bold">1. Service Description</h3>
  <p>V-Kawach provides a secure, privacy-first smart identity solution. We enable instant communication between a scanner and a vehicle/property owner without revealing either party's personal contact details.</p>

  <h3 class="text-xl font-bold">2. User Consent</h3>
  <p>By initiating a call or message through our platform, you explicitly consent to the collection of your IP address and phone number for the sole purpose of bridging the communication securely, as outlined in our Privacy Policy.</p>

  <h3 class="text-xl font-bold">3. Acceptable Use</h3>
  <p>You agree not to use the V-Kawach service for spamming, harassment, or any illegal activities. We reserve the right to block scanners or suspend owners who violate these terms.</p>

  <h3 class="text-xl font-bold">4. Premium Services</h3>
  <p>Certain features, such as Call Masking and Sequential Emergency Routing, are available exclusively to Premium subscribers. Subscriptions are billed according to our pricing schedule and are non-refundable once activated.</p>

  <h3 class="text-xl font-bold">5. Limitation of Liability</h3>
  <p>While we strive for 100% uptime, V-Kawach is not liable for any damages resulting from delayed notifications, carrier network failures, or inability to contact the owner during an emergency.</p>
</div>
`;

async function main() {
  console.log('Updating Privacy Policy...');
  await prisma.setting.upsert({
    where: { key: 'privacy_policy_content' },
    update: { value: privacyPolicyDPDP },
    create: { key: 'privacy_policy_content', value: privacyPolicyDPDP },
  });

  console.log('Updating Terms & Conditions...');
  await prisma.setting.upsert({
    where: { key: 'terms_content' },
    update: { value: termsDPDP },
    create: { key: 'terms_content', value: termsDPDP },
  });

  console.log('DPDP settings successfully updated!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
