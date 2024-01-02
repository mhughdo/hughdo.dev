import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const images = pgTable('images', {
  id: serial('id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
  name: text('name').notNull(),
  type: varchar('type', { length: 6 }).notNull(),
  key: text('key').notNull(),
  url: text('url').notNull(),
  blurDataURL: text('blur_data_url'),
})
