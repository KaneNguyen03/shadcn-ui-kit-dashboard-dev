import { generateMeta } from "@/lib/utils";
import AddProductForm from "./add-product-form";

export async function generateMetadata() {
  return generateMeta({
    title: "Add Product",
    description:
      "Add new products page. A fast and efficient product addition process using Next.js and Tailwind CSS. User-friendly interface with easily editable form fields.",
    canonical: "/pages/products/create"
  });
}

export default function Page() {
  return (
    <div className="container max-w-screen-lg">
      <div className="space-y-4">
        <AddProductForm />
      </div>
    </div>
  );
}
