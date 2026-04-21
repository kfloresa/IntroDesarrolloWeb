const Perfil = () => {
    return (
        <div>
            <img src={"https://imgs.search.brave.com/AaGyHxyA4-vo-1RVJMaJ1uHrmFhjyrrhql3XxAjRMPk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXRhbS5teC9zaXRl/cy93d3cuaXRhbS5t/eC9maWxlcy9jb2xt/aWxsby1pdGFtLTIw/MjEuanBn"} alt="Colmillo"/>
        </div>
    );
}

function Galeria() {
    return (
        <div>
            <h1>Galeria de ITAM</h1>
            <Perfil />
            <Perfil />
            <Perfil />
        </div>
    );
}

export default Galeria;