const Pelicula = ({ pelicula }) => {

    return (

        <>
            <h2>{pelicula.titulo}</h2>
            <img src={pelicula.cartel} alt={pelicula.titulo} width="300" referrerPolicy='no-referrer' />
            <p>{pelicula.sinopsis}</p>
        </>
    )
}

export default Pelicula