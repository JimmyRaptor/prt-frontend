const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    // Polyfills for Node.js core modules
    config.resolve.fallback = config.resolve.fallback || {};
    config.resolve.fallback.buffer = require.resolve("buffer/");

    // ProvidePlugin for Buffer
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      })
    );

    // NodePolyfillPlugin
    config.plugins.push(new NodePolyfillPlugin());


    return config;
  },
  babel: {
    plugins: [
      ['@babel/plugin-transform-react-jsx', { throwIfNamespace: false }]
    ]
  }
};
