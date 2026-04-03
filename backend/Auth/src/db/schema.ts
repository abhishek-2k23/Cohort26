import {pgTable, uuid, boolean, text, varchar, timestamp} from 'drizzle-orm/pg-core';

export const usersTable = pgTable("users", {
    id:  uuid('id').primaryKey().defaultRandom(),
    firstName: varchar('firstName', {length: 255}).notNull(),
    lastName: varchar('lastName', {length: 255}),
    email: varchar('email', {length: 322}).notNull().unique(),
    emailVerified: boolean('emailVerified').default(false).notNull(),

    password: varchar('password', {length: 66}),
    salt: text('salt'),

    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').$onUpdate(() => new Date())
})