const ScoreBoard = ({ setTurn, setMatriz, setBlackCount, setWhiteCount, whiteCount, blackCount, turn }) => {

    const resetGame = () => {
        setMatriz([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 2, 0, 0, 0],
            [0, 0, 0, 2, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ]);
        setTurn(true);
        setWhiteCount(2);
        setBlackCount(2);
    };

    return (
        <div className="">
            <h1 className="ml-64 mt-10 text-6xl">Othello</h1>
            <div className="ml-28 border-double border-2 border-orange-900">

                <div className="mt-10 flex justify-center">Blanco tiene: {whiteCount} fichas en el tablero</div>
                <div className=" flex justify-center">Negro tiene: {blackCount} fichas en el tablero</div>
                <div className=" flex justify-center">Es el truno de {turn === false ? 'Blanco' : 'Negro'}</div>

                <button
                    onClick={resetGame}
                    className="flex justify-center mt-10 bg-green-600 text-white rounded-lg py-2 px-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                >
                    Reiniciar
                </button>
            </div>
        </div>
    );
};


export default ScoreBoard