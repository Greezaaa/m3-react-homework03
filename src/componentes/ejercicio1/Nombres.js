const Nombres = () => {
    const nombres = ["Felipe", "Andres", "Sergio", "Pedro"]
    return (
        <>
            {
                nombres.map((nombre, i) => {
                    return (
                        <p key={i}>{nombre}</p>
                    )
                })
            }
        </>
    )
}

export default Nombres