import { NextApiRequest, NextApiResponse } from "next";
import * as prd from '../../../lib/products';

async function handler(req: NextApiRequest, res: NextApiResponse){
    const id = Number(req.query.id);
    const products = await prd.getOneProductFromApi(id);
    res.status(200).json(products)
}

export default handler;
