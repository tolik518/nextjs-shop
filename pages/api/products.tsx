import * as prd from '../../lib/products';

async function handler(req, res) {
    const products = await prd.getProductsFromApi();
  res.status(200).json(products)
}

export default handler;
