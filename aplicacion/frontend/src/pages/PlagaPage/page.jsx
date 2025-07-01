import React from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';
import MenuDesplegable from '../../components/MenuDesplegable';
import { useNavigate } from 'react-router-dom';

const plagas = {
    trips: {
        nombre: 'Trips (Frankliniella occidentalis)',
        descripcion:
            'Los trips son insectos diminutos que se alimentan de las hojas y flores, causando daños visibles y transmitiendo virus que afectan la productividad del cultivo.',
        sintomas: [
            'Quemazón en hojas jóvenes',
            'Amarillamiento y encrespamiento de hojas',
            'Disminución del área fotosintética',
            'Malformaciones en frutos y transmisión de virus',
        ],
        insecticidas: [
            'Piretroides: cipermetrín, deltametrín, lambda-cihalotrín',
            'Neonicotinoides: imidacloprid, acetamiprid',
            'Sulfosilaminas: sulfoxaflor',
        ],
        epocas: 'Más comunes en climas secos y cálidos, especialmente entre junio y septiembre.',
        prevencion: [
            'Monitoreo constante del cultivo',
            'Rotación de cultivos y eliminación de malezas',
            'Uso de trampas cromáticas azules',
        ],
        imagenes: ['/img/trips1.jpg', '/img/trips2.jpg'],
    },
    arania: {
        nombre: 'Araña Roja (Tetranychus urticae)',
        descripcion:
            'La araña roja es un ácaro que ataca las hojas, generando manchas y debilitamiento de la planta. Su reproducción es muy rápida en ambientes secos y calurosos.',
        sintomas: [
            'Pequeños puntos amarillos en hojas',
            'Hojas secas y caída prematura',
            'Presencia de telarañas finas en el envés de las hojas',
        ],
        insecticidas: [
            'Órganos fosforados: fenamifós, fosmet',
            'Piretroides: cipermetrín',
        ],
        epocas: 'Frecuente durante épocas secas con altas temperaturas (enero a abril).',
        prevencion: [
            'Aumento de humedad en el cultivo',
            'Eliminación de hojas infectadas',
            'Control biológico con enemigos naturales como Phytoseiulus persimilis',
        ],
        imagenes: ['/img/arania1.jpg', '/img/arania2.jpg'],
    },
};

export default function PlagaPage() {
    const { tipo } = useParams();
    const info = plagas[tipo];
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!info) return <div className="plaga-container error">Plaga no encontrada.</div>;

    return (
        <>
            <MenuDesplegable
                userName={user?.nombre}
                onNavigate={(seccion) => {
                    if (seccion === 'inicio') navigate('/agricultor');
                    if (seccion === 'historial') navigate('/historial');
                    if (seccion === 'trips') navigate('/plaga/trips');
                    if (seccion === 'arania') navigate('/plaga/arania');
                }}
            />
            <div className="plaga-container">
                <h1 className="titulo">{info.nombre}</h1>
                <p className="descripcion">{info.descripcion}</p>

                <section>
                    <h2>Síntomas</h2>
                    <ul>{info.sintomas.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </section>

                <section>
                    <h2>Insecticidas Recomendados</h2>
                    <ul>{info.insecticidas.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
                </section>

                <section>
                    <h2>Épocas del Año de Mayor Incidencia</h2>
                    <p>{info.epocas}</p>
                </section>

                <section>
                    <h2>Medidas de Prevención</h2>
                    <ul>{info.prevencion.map((p, idx) => <li key={idx}>{p}</li>)}</ul>
                </section>

                <section>
                    <h2>Imágenes</h2>
                    <div className="imagenes">
                        {info.imagenes.map((src, idx) => (
                            <img key={idx} src={src} alt={`Imagen ${idx + 1}`} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
} 
