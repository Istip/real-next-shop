import Link from "next/link";
import { ProductInterface } from "../../type";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface Props {
  product: ProductInterface;
}

const Product = ({ product }: Props) => {
  return (
    <>
      <div className="w-full relative group border border-stone-950 overflow-hidden group">
        <div>
          <div>
            <Link href="/">
              <Image
                src={urlForImage(product?.image)}
                alt={product.title}
                width={700}
                height={700}
                className="w-72 h-72 object-contain"
                priority={false}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
