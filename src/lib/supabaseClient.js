'use server'; 

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function getNumber() {
  const number = await prisma.contador.findUnique({
    where: { id: 1 }
  });
  return number;
}
export async function updateNumber(newNumber) {
    try {
      // update with prisma client 
      const updatedNumber= await prisma.contador.update({
        where: { id: 1 }, 
        data: { Number: newNumber } 
      });
      
      return updatedNumber;
    } catch (error) {
      console.error('Error al actualizar el número:', error);
      throw error;
    }
}