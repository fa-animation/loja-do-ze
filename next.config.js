const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiEndpoint: process.env.API_ENDPOINT || '/api',
    author: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN,
    message: process.env.VERCEL_GIT_COMMIT_MESSAGE,
    message_sha: process.env.VERCEL_GIT_COMMIT_SHA,
    provider: process.env.VERCEL ? 'vercel' : 'local',
  }
}

module.exports = nextConfig