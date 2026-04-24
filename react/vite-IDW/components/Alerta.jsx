export default function Alerta({ texto, tipo }) {
    let colorFondo
    switch (tipo) {
        case "error":
            colorFondo = "red"
            break
        case "advertencia":
            colorFondo = "yellow"
            break
        case "OK":
            colorFondo = "green"
            break
        default:
            colorFondo = "blue"
    }

    const colorTexto = tipo === "error" ? "white" : "black";

    return (
        <div style={{ backgroundColor: colorFondo, color: colorTexto }}>
            {texto}
        </div>
    );
}