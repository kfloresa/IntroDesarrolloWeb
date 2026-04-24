import { Programa } from "./Programa"

export const Carreras = ({}) => {
    const listaCarreras = [
        {
            nombre: 'Actuaría',
            url: 'https://actuaria.itam.mx/es',
            imagen: 'https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-actuaria.webp',
            plan: 'https://carreras.itam.mx/wp-content/plugins/pdfjs-viewer-for-elementor//assets/js/pdfjs/web/viewer.html?file=https://carreras.itam.mx/wp-content/uploads/licenciaturas/plan-de-estudios/plan-de-estudios-licenciatura-actuaria.pdf'
        },
        {
            nombre: 'Administración de Negocios',
            url: 'https://administracion.itam.mx/',
            imagen: 'https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-admin.webp',
            plan: 'https://carreras.itam.mx/wp-content/plugins/pdfjs-viewer-for-elementor//assets/js/pdfjs/web/viewer.html?file=https://carreras.itam.mx/wp-content/uploads/licenciaturas/plan-de-estudios/plan-de-estudios-licenciatura-administracion.pdf'
        },
        {
            nombre: 'Ciencia de Datos',
            url: 'https://cienciadedatos.itam.mx/',
            imagen: 'https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-datos.webp',
            plan: 'https://carreras.itam.mx/wp-content/plugins/pdfjs-viewer-for-elementor//assets/js/pdfjs/web/viewer.html?file=https://carreras.itam.mx/wp-content/uploads/licenciaturas/plan-de-estudios/plan-de-estudios-licenciatura-ciencia-de-datos.pdf'
        },
        {
            nombre: 'Ciencia Política',
            url: 'https://cienciapolitica.itam.mx/',
            imagen: 'https://carreras.itam.mx/wp-content/uploads/2025/07/mini-2025-cpol.webp',
            plan: 'https://carreras.itam.mx/wp-content/plugins/pdfjs-viewer-for-elementor//assets/js/pdfjs/web/viewer.html?file=https://carreras.itam.mx/wp-content/uploads/licenciaturas/plan-de-estudios/plan-de-estudios-licenciatura-ciencia-politica.pdf'
        }
    ]

    return (
        <div whitespace="nowrap" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            {listaCarreras.map((carrera, index) => (
                <Programa
                    key={index}
                    nombre={carrera.nombre}
                    url={carrera.url}
                    imagen={carrera.imagen}
                    plan={carrera.plan}
                />
            ))}
        </div>
    )
}