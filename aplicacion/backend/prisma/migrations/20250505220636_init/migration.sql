-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('AGRICULTOR', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefono" TEXT,
    "rol" "Rol" NOT NULL DEFAULT 'AGRICULTOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diagnostico" (
    "id" SERIAL NOT NULL,
    "imagenUrl" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "recomendacion" TEXT,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "plagaId" INTEGER NOT NULL,

    CONSTRAINT "Diagnostico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plaga" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Plaga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insecticida" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "compuesto" TEXT NOT NULL,
    "aplicacion" TEXT NOT NULL,
    "plagaId" INTEGER NOT NULL,

    CONSTRAINT "Insecticida_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Plaga_nombre_key" ON "Plaga"("nombre");

-- AddForeignKey
ALTER TABLE "Diagnostico" ADD CONSTRAINT "Diagnostico_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Diagnostico" ADD CONSTRAINT "Diagnostico_plagaId_fkey" FOREIGN KEY ("plagaId") REFERENCES "Plaga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insecticida" ADD CONSTRAINT "Insecticida_plagaId_fkey" FOREIGN KEY ("plagaId") REFERENCES "Plaga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
