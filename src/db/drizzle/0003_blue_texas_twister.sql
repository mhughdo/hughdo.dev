/*
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'images'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually

    Hope to release this update as soon as possible
*/

ALTER TABLE "images" DROP CONSTRAINT "images_pkey";--> statement-breakpoint
ALTER TABLE "images" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "images" ADD CONSTRAINT "images_id_unique" UNIQUE("id");--> statement-breakpoint
ALTER TABLE "images" ADD CONSTRAINT "images_name_unique" UNIQUE("name");
