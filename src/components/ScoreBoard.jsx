

const ScoreBoard = () => {
    return (
        <div className="">

            <h1 className=" ml-64 mt-10 text-6xl">Othello</h1>

            <div className="ml-28 border-double border-2 border-orange-900">
                <p>{`Es el turno del jugador Negro`}</p>
                <p>Te quedan 10 fichas</p>
            </div>
            <div className="mt-40 ml-20">
                <p>Jugador Negro tiene: 32 Fichas</p>
                <p>Jugador Blanco tiene: 32 Fichas</p>
            </div>
        </div>
    )
}

export default ScoreBoard