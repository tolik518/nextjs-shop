
function cleanProduct(product) {
    const picture_formats = product?.attributes.picture?.data?.attributes?.formats;

    return {
        id: product?.id,
        title: product?.attributes.title,
        description: product?.attributes.description,
        price: product?.attributes.price,
        picture: picture_formats?.large?.url ??
                 picture_formats?.medium?.url ??
                 picture_formats?.small?.url
    }
}

export async function getProductsFromApi() {
    const response = await fetch("http://localhost:1337/api/products?populate=*");
    const products = await response.json();
    return products.data.map(cleanProduct);
}

export async function getOneProductFromApi(id: number) {
    const response = await fetch(`http://localhost:1337/api/products/${id}?populate=*`);
    const products = await response.json();
    return cleanProduct(products.data);
}
