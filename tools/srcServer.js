// This file configures the development web server
// which supports hot reloading and synchronized testing.

// Require Browsersync along with webpack and middleware for it
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const bundler = webpack(config);

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  port: 8081,
  ui: {
    port: 8082
  },
  open: false,
  server: {
    baseDir: 'src',
    middleware: [
      webpackDevMiddleware(bundler),

      // bundler should be the same as above
      webpackHotMiddleware(bundler)
    ]
  },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/*.html'
  ]
});
