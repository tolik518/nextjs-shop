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
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const product = await prd.getOneProductFromApi(params.id);
    return {
        props: {
            product
        }
    };
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


