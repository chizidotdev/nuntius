const withTM = require('next-transpile-modules')(['@amica/ui']);

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
});
