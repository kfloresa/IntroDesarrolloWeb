export default function BotonOperacion({ cambiar, operacion, numero }) {
    let funcion
    switch (operacion) {
        case "+":
            funcion = (contador) => contador + numero
            break;
        case "-":
            funcion = (contador) => contador - numero
            break;
        case "*":
            funcion = (contador) => contador * numero
            break;
        default:
            funcion = (contador) => contador
    }


    let operacionTexto
    switch (operacion) {
        case "+":
            operacionTexto = `Sumar ${numero}`
            break;
        case "-":
            operacionTexto = `Restar ${numero}`
            break;
        case "*":
            operacionTexto = `Multiplicar por ${numero}`
            break;
        default:
            operacionTexto = "Operación desconocida"
    }

    return (
            <button onClick={() => cambiar(funcion)}>
                {operacionTexto}
            </button>
        );
}