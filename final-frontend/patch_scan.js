const fs = require('fs');
const path = require('path');

const filePath = '/var/www/final-frontend/src/app/scan/[productCode]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const importReplacement = `import { useParams, useRouter } from "next/navigation";`;
content = content.replace(`import { useParams } from "next/navigation";`, importReplacement);

const routerHook = `  const params = useParams();
  const productCode = params.productCode as string;
  const router = useRouter();`;
content = content.replace(`  const params = useParams();\n  const productCode = params.productCode as string;`, routerHook);

const oldVerifyProduct = `    const verifyProduct = async () => {
      try {
        const response = await api.get(\`/products/scan/\${productCode}\`);
        setProduct(response.data.product);
      } catch (err: any) {
        setError(err.response?.data?.error || "Invalid Product Code");
      } finally {
        setLoading(false);
      }
    };
    verifyProduct();`;

const newVerifyProduct = `    const verifyProduct = async () => {
      try {
        const response = await api.get(\`/products/scan/\${productCode}\`);
        setProduct(response.data.product);
        setLoading(false);
      } catch (err: any) {
        try {
          const tagResponse = await api.get(\`/public/tag/\${productCode}\`);
          if (tagResponse.data.tag) {
            router.push(\`/tag/\${productCode}\`);
            return;
          }
        } catch (tagErr) {
          // Fall through to error
        }
        setError(err.response?.data?.error || "Invalid Product Code");
        setLoading(false);
      }
    };
    verifyProduct();`;

content = content.replace(oldVerifyProduct, newVerifyProduct);

fs.writeFileSync(filePath, content, 'utf8');
console.log('File patched successfully');
