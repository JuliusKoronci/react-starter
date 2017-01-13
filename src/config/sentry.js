import Raven from 'raven-js';

const sentry_key = '3c7cdcf3a11e4952aeb4c14aa0026e7c';
const sentry_app = '126199';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
