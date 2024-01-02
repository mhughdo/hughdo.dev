import dotenv from 'dotenv'
import type { Config } from 'drizzle-kit'

dotenv.config({
  path: '.env.development.local',
})

export default {
  schema: './src/db/schema.ts',
  out: './src/db/drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL_NON_POOLING!,
  },
} satisfies Config
