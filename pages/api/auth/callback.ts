import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { query: { code, state }} = req;
  res.status(200).json({ name: 'John Doe' })
};