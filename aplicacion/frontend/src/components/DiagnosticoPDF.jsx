import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
} from '@react-pdf/renderer';

// Estilos personalizados
const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
        fontFamily: 'Helvetica',
        lineHeight: 1.6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerContainer: {
        borderBottom: '1px solid #ccc',
        paddingBottom: 10,
        marginBottom: 20,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 4
    },
    subtitle: {
        fontSize: 12,
        color: '#555'
    },
    section: {
        marginBottom: 14
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#388E3C'
    },
    text: {
        marginBottom: 4
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        border: '2px solid #ddd',
        marginBottom: 20
    },
    organicContainer: {
        padding: 10,
        backgroundColor: '#E8F5E9',
        border: '1px solid #A5D6A7',
        borderRadius: 6
    },
    footer: {
        borderTop: '1px solid #ccc',
        paddingTop: 8,
        fontSize: 10,
        color: '#888',
        textAlign: 'center'
    }
});

export default function DiagnosticoPDF({ diagnostico, contenido }) {
    if (!contenido) return null;

    const fecha = new Date(diagnostico.fecha).toLocaleDateString('es-EC', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <Document>
            <Page style={styles.page}>
                {/* Encabezado */}
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Informe de Diagnóstico de Plaga</Text>
                    <Text style={styles.subtitle}>Emitido el {fecha}</Text>
                </View>

                {/* Información de la plaga */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>{contenido.title}</Text>
                    <Text style={styles.text}>{contenido.type}</Text>
                    <Text style={styles.text}>{contenido.symptoms}</Text>
                    <Text style={styles.text}>{contenido.damage}</Text>
                    <Text style={styles.text}>{contenido.prevention}</Text>
                    <Text style={styles.text}>{contenido.chemical}</Text>
                </View>

                {/* Imagen */}
                <Image src={diagnostico.imagen} style={styles.image} />

                {/* Control Orgánico */}
                <View style={[styles.section, styles.organicContainer]}>
                    <Text style={styles.sectionTitle}>{contenido.organicTitle}</Text>
                    <Text>{contenido.organic}</Text>
                </View>

                {/* Pie de página */}
                <View fixed style={styles.footer}>
                    <Text>Granashield • Página 1</Text>
                    <Text>{new Date().toLocaleDateString('es-EC')}</Text>
                </View>
            </Page>
        </Document>
    );
}
