import React from "react";
import * as prd from "../lib/products"
import ProductCard from "../components/ProductCard";

export async function getStaticProps() {
  try {
    const products = await prd.getProductsFromApi();

    return {
      props: {
        products
      }
    }
  } catch (error) {
    return {
      notFound: true
    };
  }

}

const HomePage: React.FC = ({products}: any) => {
  return (
    <>
      <main>
        <ul className="2xl:mx-10 xl:mx-10 md:mx-0 grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {products.map((product) => (
            <li key={ product.id }>
              <ProductCard product={product}/>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
