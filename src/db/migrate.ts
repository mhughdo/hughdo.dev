import { createClient } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { migrate } from 'drizzle-orm/vercel-postgres/migrator'

const client = createClient()
await client.connect()
const db = drizzle(client)
const main = async () => {
  await migrate(db, { migrationsFolder: './drizzle' })
  console.log('Migrate successfully')
  await client.end()
}

main()
