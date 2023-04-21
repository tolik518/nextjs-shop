import { fetchFromApi } from "./api";

const CMS_URL = "http://localhost:1337";

function cleanProduct(product) {
    const picture_formats = product?.attributes.picture?.data?.attributes?.formats;
    const picture_file = product?.attributes.picture?.data?.attributes?.url ??
                         picture_formats?.large?.url ??
                         picture_formats?.medium?.url ??
                         picture_formats?.small?.url ??
                         "/uploads/No_Image_Available.jpg";
    const picture_url = CMS_URL + picture_file;
    return {
        id: product?.id,
        title: product?.attributes.title,
        description: product?.attributes.description,
        price: product?.attributes.price,
        picture: picture_url
    }
}

export async function getProductsFromApi() {
    const products = await fetchFromApi(`${CMS_URL}/api/products?populate=*`);
    return products.data.map(cleanProduct);
}

export async function getOneProductFromApi(id: number) {
    const product = await fetchFromApi(`${CMS_URL}/api/products/${id}?populate=*`);
    return cleanProduct(product.data);
}
