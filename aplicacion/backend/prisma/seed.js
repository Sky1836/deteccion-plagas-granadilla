const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Crear un usuario
  const user = await prisma.user.create({
    data: {
      nombre: 'Juan Agricultor',
      email: 'juan@agro.com',
      telefono: '0999999999',
      rol: 'AGRICULTOR',
    },
  });

  // 2. Crear una plaga
  const plaga = await prisma.plaga.create({
    data: {
      nombre: 'Mosca Blanca',
      descripcion: 'Pequeña plaga que afecta cultivos frutales.',
      tipo: 'insecto',
    },
  });

  // 3. Crear un insecticida asociado a la plaga
  const insecticida = await prisma.insecticida.create({
    data: {
      nombre: 'BlancaKill',
      compuesto: 'Imidacloprid',
      aplicacion: 'Aplicar directamente en hojas una vez por semana.',
      plagaId: plaga.id,
    },
  });

  // 4. Crear un diagnóstico asociado al usuario y la plaga
  const diagnostico = await prisma.diagnostico.create({
    data: {
      imagenUrl: 'https://via.placeholder.com/150',
      resultado: 'Presencia leve de Mosca Blanca',
      recomendacion: 'Aplicar BlancaKill durante 3 semanas',
      fecha: new Date(),
      userId: user.id,
      plagaId: plaga.id,
    },
  });

  console.log('✅ Seed completo:');
  console.log({ user, plaga, insecticida, diagnostico });
}

main()
  .catch((e) => {
    console.error('❌ Error en seed:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
