import * as prd from '../../lib/products';
import Image from "next/image";


export async function getStaticPaths() {
    const products = await prd.getProductsFromApi();
    const paths = products.map((product) => ({
        params: {
            id: product.id.toString()
        },
    }));
    return {
        paths,
        fallback: "blocking" // generate a new page if the user visits a page that doesn't exist
    };
}

export async function getStaticProps({ params }) {
    try {
        const product = await prd.getOneProductFromApi(params.id);
        return {
            props: {
                product
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}

export default function ProductPage({ product }) {
    return (
        <div className='flex p-6 border rounded-xl'>
            <div className='h-300 w-300'>
                <Image src={ product.picture }
                        width={ 257 }
                        height={ 257 }
                        style={{
                            objectFit:"cover"
                        }}
                        quality={75}
                        alt={ product.title }
                        className='rounded aspect-square'
                />
            </div>
            <div className='pl-10'>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
            </div>
        </div>
    );
}


