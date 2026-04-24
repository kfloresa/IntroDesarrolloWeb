export const Programa = ({nombre, url, imagen, plan}) => {
    return (
        <div display="inline-block" style={{margin: '20px', textAlign: 'center'}}>
            <img src={imagen} alt={nombre} width='400' />
            <h2><a href={url} target="_blank" rel="noopener noreferrer">{nombre}</a></h2>
            <a href={plan} target="_blank" rel="noopener noreferrer">Plan de estudios</a>
        </div>

    )
}