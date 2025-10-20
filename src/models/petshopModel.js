import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAllPets = async () => {
  return await prisma.pet.findMany({
    orderBy: { nome: "asc" },
  });
};

export const findPetById = async (id) => {
  return await prisma.pet.findUnique({
    where: { id: Number(id)}
  })
}
