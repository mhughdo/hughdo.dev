import { index, json, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

import { ImageMetadata } from '@/types'

export const images = pgTable(
  'images',
  {
    id: serial('id').unique().primaryKey(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    deletedAt: timestamp('deleted_at'),
    name: text('name').notNull().unique(),
    type: varchar('type', { length: 6 }).notNull(),
    key: text('key').notNull(),
    url: text('url').notNull(),
    blurDataURL: text('blur_data_url'),
    imageMetadata: json('image_metadata').$type<ImageMetadata>().notNull(),
    createDate: timestamp('create_date'),
    modifyDate: timestamp('modify_date'),
  },
  (table) => ({
    nameIdx: index('name_idx').on(table.name),
  })
)
