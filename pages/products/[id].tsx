import * as prd from "../../lib/products";
import Image from "next/image";

export async function getStaticPaths() {
  const products = await prd.getProductsFromApi();
  const paths = products.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));
  return {
    paths,
    fallback: "blocking", // generate a new page if the user visits a page that doesn't exist
  };
}

export async function getStaticProps({ params }) {
  try {
    const product = await prd.getOneProductFromApi(params.id);
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default function ProductPage({ product }) {
  return (
    <div className="p-3 border rounded">
      <h1 className="text-5xl pb-6 underline">{product.title}</h1>
      <div className="flex flex-col lg:flex-row">
        <div className='place-self-center relative'>
          <Image
            src={product.picture}
            width={480}
            height={480}
            alt={product.title}
            style={{
                objectFit: "cover",
                }}
            className="rounded"
          />
        </div>
        <div className="lg:pl-10 flex-1">
          <p className="lg:text-s text-l font-bold">{product.description}</p>
          <span className="lg:text-xs text-s">
            Looking for a unique addition to your retro collection? Look no
            further than our vintage-inspired shipping crate! Crafted with the
            utmost care and attention to detail, our shipping crate is the
            perfect piece to add some character to your home or office space.
            With its distressed wood finish and rustic metal accents, this crate
            is sure to evoke feelings of nostalgia and charm. Not just a
            decorative piece, our shipping crate is also functional, providing
            ample storage space for all your retro treasures. Whether
            you&apos;re storing vinyl records, old books, or vintage clothing,
            this crate is the perfect solution. Don&apos;t settle for boring
            storage solutions. Order our retro-inspired shipping crate today and
            add a touch of vintage charm to your home!
          </span>
          <p className="font-bold mt-2 text-xl">{product.price}€</p>
        </div>
      </div>
    </div>
  );
}
