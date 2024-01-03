ALTER TABLE "images" ADD PRIMARY KEY ("name");--> statement-breakpoint
ALTER TABLE "images" ADD COLUMN "image_metadata" json;--> statement-breakpoint
ALTER TABLE "images" ADD COLUMN "create_date" timestamp;--> statement-breakpoint
ALTER TABLE "images" ADD COLUMN "modify_date" timestamp;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "images" ("name");