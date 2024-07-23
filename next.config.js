const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  async redirects() {
    return [
      {
        source: "/craft",
        destination: "https://github.com/brijr/craft",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@bridgertower",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/brdgr",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/brijr",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://twitter.com/bridgertower",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "https://read.cv/brijr",
        permanent: true,
      },
      {
        source: "/brands",
        destination: "/",
        permanent: true,
      },
      {
        source: "/os",
        destination: "/",
        permanent: true,
      },
      {
        source: "/software",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ventures",
        destination: "/",
        permanent: true,
      },
      {
        source: "/websites",
        destination: "/",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
