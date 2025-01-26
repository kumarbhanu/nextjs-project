"use server";

import { prisma } from "@/db/prisma";
// import { PrismaClient } from "@prisma/client";
import { LATEST_PRODUCT_LIMIT } from "../constants";

export async function getLatestProducts() {
  const data = prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return data;
}

//get single product by its slug
export async function getProductBySlug(slug:string) {
  const data = prisma.product.findFirst({
  where:{slug:slug}
  });

  return data;
}
