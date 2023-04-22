import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
    return (
        <Link href={`/products/${product.id}`}>
        <Image src={ product.picture } width={ 200 } height={ 200 } alt={ product.title } className='rounded'/>
        { product.title }
      </Link>
    );
}
