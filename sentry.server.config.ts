// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'
import { ProfilingIntegration } from '@sentry/profiling-node'

Sentry.init({
  dsn: 'https://f65fb78e4c067345a15174f08fcbcaa5@o4506584409964544.ingest.sentry.io/4506584411799552',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  profilesSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  integrations: [
    // Add profiling integration to list of integrations
    new ProfilingIntegration(),
  ],
})
