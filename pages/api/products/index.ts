import { NextApiRequest, NextApiResponse } from "next";
import * as prd from '../../../lib/products';

async function handler(req: NextApiRequest, res: NextApiResponse){
  const products = await prd.getProductsFromApi();
  res.status(200).json(products)
}

export default handler;
