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
        setWhiteCount(30);
        setBlackCount(30);
    };

    return (
        <div>
        <p className="text-8xl font-bold ml-36">Othello</p>
            <div className="ml-14 mt-32 rounded-3xl inset-10 -inset-y-36">
                <div className="flex ml-16">
                <div className="bg-white h-16 w-16 rounded-full mr-3 mt-11"></div>
                <div className="flex text-6xl justify-center mt-8"> :  {whiteCount} </div>
                <div className=" ml-8 bg-black h-16 w-16 rounded-full mr-3 mt-8"></div>
                <div className="flex text-6xl justify-center mt-8">: {blackCount}</div>
                </div>
                <div className="flex justify-center text-3xl mt-10 ml-28"> <b className="mr-3">{turn === false ? 'White! ' : 'Black! '} </b>  it's your turn</div>
                <button
                    onClick={resetGame}
                    className="ml-56 mb-8 mt-8 bg-green-600 text-white font-bold rounded-lg py-2 px-4 
                    hover:bg-green-700 focus:outline-none focus:ring-2 
                    focus:ring-green-600 focus:ring-opacity-50"
                >
                    New Game
                </button>
            </div>
        </div>
        
    );
};


export default ScoreBoard