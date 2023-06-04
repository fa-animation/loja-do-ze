import type { NextApiRequest, NextApiResponse } from 'next'

const statuses = ['Online', 'Online', 'Online', 'Offline', 'Instável'];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  res.status(200).json({ status: randomStatus });
}