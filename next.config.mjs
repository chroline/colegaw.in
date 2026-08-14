import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    // Serve the portraits byte-for-byte as authored; the optimizer's re-encode
    // visibly degraded them. This disables /_next/image entirely.
    unoptimized: true,
    // Not inert despite `unoptimized`: without it, the `quality` props in
    // page.tsx trigger the "quality not configured in images.qualities" dev
    // warning (and Next 16 will require this config).
    qualities: [95],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
