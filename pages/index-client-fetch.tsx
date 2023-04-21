import Head from "next/head";
import React, { useEffect } from "react";
import Title from "../components/Title";
import * as prd from "../lib/products"


const HomePage: React.FC = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    prd.getProductsFromApi().then((products) => {
      setProducts(products);
    });
  }, []);

  console.log(products);
  return (
    <>
      <Head>
        <title>NextJS Shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="p-6">
        <Title>Retro Consoles Shop</Title>
        <ul className="dark:text-gray-300">
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default HomePage;
