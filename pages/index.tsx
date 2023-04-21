import React from "react";
import * as prd from "../lib/products"
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const products = await prd.getProductsFromApi();

  return {
    props: {
      products
    },
    revalidate: 60 // get the data from the api every 60 seconds
  }
}

const HomePage: React.FC = ({products}: any) => {

  return (
    <>
      <main>
        <ul>
          {products.map((product) => (
            <li key={ product.id }>
              <Link href={`/products/${product.id}`}>
                <Image src={ product.picture } width={ 200 } height={ 200 } alt={ product.title } className='rounded'/>
                { product.title }
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
