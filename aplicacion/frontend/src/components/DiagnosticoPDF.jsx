// src/components/DiagnosticoPDF.jsx
import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 20 },
    title: { fontSize: 18, marginBottom: 10 },
    section: { marginBottom: 10 },
    image: { width: 300, height: 200, marginBottom: 10 },
});

export default function DiagnosticoPDF({ diagnostico }) {
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Diagnóstico de Plaga</Text>

                <View style={styles.section}>
                    <Text>Fecha: {diagnostico.fecha}</Text>
                    <Text>Plaga detectada: {diagnostico.plaga}</Text>
                    <Text>Confianza: {diagnostico.confianza}%</Text>
                </View>

                <Image src={diagnostico.imagen} style={styles.image} />

                <View style={styles.section}>
                    <Text>Recomendación:</Text>
                    <Text>{diagnostico.recomendacion}</Text>
                </View>
            </Page>
        </Document>
    );
}
