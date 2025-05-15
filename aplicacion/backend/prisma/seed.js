const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const updatedUser = await prisma.user.update({
    where: { id: 24 },
    data: { rol: 'ADMIN' },
  });

  console.log('✅ Usuario actualizado a ADMIN:', updatedUser);
}

main()
  .catch((e) => {
    console.error('❌ Error al actualizar usuario:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
