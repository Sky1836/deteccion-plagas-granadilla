const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Crear un usuario
  const user = await prisma.user.create({
    data: {
      nombre: 'María Campesina',
      email: 'maria@granja.com',
      telefono: '0988888888',
      rol: 'AGRICULTOR',
    },
  });

  // 2. Crear una plaga
  const plaga = await prisma.plaga.create({
    data: {
      nombre: 'Ácaro Rojo',
      descripcion: 'Plaga microscópica que daña las hojas de forma progresiva.',
      tipo: 'ácaro',
    },
  });

  // 3. Crear un insecticida asociado a la plaga
  const insecticida = await prisma.insecticida.create({
    data: {
      nombre: 'Acaricida Max',
      compuesto: 'Abamectina',
      aplicacion: 'Aplicar en aspersión foliar cada 5 días.',
      plagaId: plaga.id,
    },
  });

  // 4. Crear un diagnóstico asociado al usuario y la plaga
  const diagnostico = await prisma.diagnostico.create({
    data: {
      imagenUrl: 'https://via.placeholder.com/200',
      resultado: 'Infestación moderada de Ácaro Rojo',
      recomendacion: 'Usar Acaricida Max cada 5 días por dos semanas',
      fecha: new Date(),
      userId: user.id,
      plagaId: plaga.id,
    },
  });

  console.log('✅ Seed completo con nuevos datos:');
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
