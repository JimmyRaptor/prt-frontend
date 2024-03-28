const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    // Polyfills for Node.js core modules
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback.buffer = require.resolve("buffer/");
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    // ProvidePlugin for Buffer
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // NodePolyfillPlugin
    config.plugins.push(new NodePolyfillPlugin());
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  babel: {
    plugins: [
      ["@babel/plugin-transform-react-jsx", { throwIfNamespace: false }],
    ],
  },
};
