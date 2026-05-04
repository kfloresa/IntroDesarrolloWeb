export default function SingleTask({ id, texto, colorFondo, estaCompletada, setEstaCompletada }) {
    return(<div>
        <input type="checkbox" checked={estaCompletada} onChange={() => {
            setEstaCompletada(id);
        }} />
        <label style={{ backgroundColor: colorFondo, borderRadius: '5px', color: '#000000' }}>{texto}</label>
    </div>)
}