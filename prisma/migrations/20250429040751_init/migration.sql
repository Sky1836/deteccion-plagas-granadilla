-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contraseña" TEXT NOT NULL,
    "telefono" TEXT,
    "rol" TEXT NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Farm" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "hectareas" DOUBLE PRECISION NOT NULL,
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Farm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plaga" (
    "id" SERIAL NOT NULL,
    "nombre_cientifico" TEXT NOT NULL,
    "nombre_comun" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Plaga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetallesPlaga" (
    "id" SERIAL NOT NULL,
    "sintomas" TEXT NOT NULL,
    "imagen_referencia" TEXT NOT NULL,
    "condiciones_favorables" TEXT NOT NULL,
    "plagaId" INTEGER NOT NULL,

    CONSTRAINT "DetallesPlaga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deteccion" (
    "id" SERIAL NOT NULL,
    "imagen_analizada" TEXT NOT NULL,
    "resultado" TEXT NOT NULL,
    "fecha_analisis" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "farmId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Deteccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VersionModeloIA" (
    "id" SERIAL NOT NULL,
    "nombre_modelo" TEXT NOT NULL,
    "framework" TEXT NOT NULL,
    "precision_entrenamiento" DOUBLE PRECISION NOT NULL,
    "precision_validacion" DOUBLE PRECISION NOT NULL,
    "fecha_entrenamiento" TIMESTAMP(3) NOT NULL,
    "notas" TEXT,

    CONSTRAINT "VersionModeloIA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeteccionModelo" (
    "id" SERIAL NOT NULL,
    "deteccionId" INTEGER NOT NULL,
    "modeloId" INTEGER NOT NULL,

    CONSTRAINT "DeteccionModelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MetricaInferencia" (
    "id" SERIAL NOT NULL,
    "deteccionId" INTEGER NOT NULL,
    "tiempo_respuesta" DOUBLE PRECISION NOT NULL,
    "tamano_imagen" INTEGER NOT NULL,
    "resolucion_imagen" TEXT NOT NULL,

    CONSTRAINT "MetricaInferencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recomendacion" (
    "id" SERIAL NOT NULL,
    "plagaId" INTEGER NOT NULL,
    "nombre_insecticida" TEXT NOT NULL,
    "principio_activo" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "modo_accion" TEXT NOT NULL,
    "dosis_recomendada" TEXT NOT NULL,
    "consideraciones" TEXT NOT NULL,

    CONSTRAINT "Recomendacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HistorialRecomendacion" (
    "id" SERIAL NOT NULL,
    "deteccionId" INTEGER NOT NULL,
    "recomendacionId" INTEGER NOT NULL,
    "fecha_recomendacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "HistorialRecomendacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ComentarioUsuario" (
    "id" SERIAL NOT NULL,
    "deteccionId" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "nivel_confianza" TEXT NOT NULL,
    "fecha_comentario" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ComentarioUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Farm" ADD CONSTRAINT "Farm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallesPlaga" ADD CONSTRAINT "DetallesPlaga_plagaId_fkey" FOREIGN KEY ("plagaId") REFERENCES "Plaga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deteccion" ADD CONSTRAINT "Deteccion_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deteccion" ADD CONSTRAINT "Deteccion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeteccionModelo" ADD CONSTRAINT "DeteccionModelo_deteccionId_fkey" FOREIGN KEY ("deteccionId") REFERENCES "Deteccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeteccionModelo" ADD CONSTRAINT "DeteccionModelo_modeloId_fkey" FOREIGN KEY ("modeloId") REFERENCES "VersionModeloIA"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MetricaInferencia" ADD CONSTRAINT "MetricaInferencia_deteccionId_fkey" FOREIGN KEY ("deteccionId") REFERENCES "Deteccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recomendacion" ADD CONSTRAINT "Recomendacion_plagaId_fkey" FOREIGN KEY ("plagaId") REFERENCES "Plaga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialRecomendacion" ADD CONSTRAINT "HistorialRecomendacion_deteccionId_fkey" FOREIGN KEY ("deteccionId") REFERENCES "Deteccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HistorialRecomendacion" ADD CONSTRAINT "HistorialRecomendacion_recomendacionId_fkey" FOREIGN KEY ("recomendacionId") REFERENCES "Recomendacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentarioUsuario" ADD CONSTRAINT "ComentarioUsuario_deteccionId_fkey" FOREIGN KEY ("deteccionId") REFERENCES "Deteccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComentarioUsuario" ADD CONSTRAINT "ComentarioUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
