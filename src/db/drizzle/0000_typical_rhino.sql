CREATE TABLE IF NOT EXISTS "images" (
	"id" serial NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"name" text NOT NULL,
	"type" varchar(6) NOT NULL,
	"key" text NOT NULL,
	"url" text NOT NULL,
	"blur_data_url" text
);
