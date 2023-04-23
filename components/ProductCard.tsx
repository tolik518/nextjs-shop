import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="border w-80 rounded p-1 shadow hover:shadow-2xl dark:shadow-sky-900 dark:hover:shadow-sky-400">
      <Link href={`/products/${product.id}`}>
        <div  className="h-320 w-240">
        <Image src={product.picture}
               width={320}
               height={240}
               alt={product.title}
               style={{
                 objectFit: "cover",
               }}
               className="aspect-video h-320 w-240"
        />
        </div>
        <div className="my-1 p-1">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <span className="text-right">{product.price}€</span>
        </div>
      </Link>
    </div>
  );
}
