import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req, res) {
    console.log('revalidate_products.tsx');
    const body = req.body;
    if (body.model === 'product') {
        const id = body.entry.id;
        console.log('revalidate id: ', id);
        await Promise.all([
            res.revalidate('/'),
            res.revalidate(`/products/${id}`),
        ]);
    }
    res.status(204).end();
}
