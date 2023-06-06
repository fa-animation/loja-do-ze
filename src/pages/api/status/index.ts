// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    vercel_region: process.env.VERCEL_REGION,
    timezone: process.env.TZ,
    last_commit_author: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN,
    last_commit_message: process.env.VERCEL_GIT_COMMIT_MESSAGE,
    last_commit_message_sha: process.env.VERCEL_GIT_COMMIT_SHA,
    provider: process.env.VERCEL ? 'vercel' : 'local',
  })
}
