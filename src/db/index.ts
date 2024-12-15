import { PrismaClient } from "@prisma/client";

/* eslint-disable no-var */
declare global {
  var cachedClient: PrismaClient;
}
/* eslint-disable no-var */
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedClient) {
    global.cachedClient = new PrismaClient();
  }
  prisma = global.cachedClient;
}

export const db = prisma;
