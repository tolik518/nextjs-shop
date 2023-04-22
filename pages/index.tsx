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
        <ul>
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
