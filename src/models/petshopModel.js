import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAllPets = async () => {
  return await prisma.pet.findMany({
    orderBy: { nome: "asc" },
  });
};
