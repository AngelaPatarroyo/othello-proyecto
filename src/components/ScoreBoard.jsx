const ScoreBoard = ({
    setTurn,
    setMatriz,
    setBlackCount,
    setWhiteCount,
    whiteCount,
    blackCount,
    turn,
    setEndGame,
  }) => {
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
      setEndGame(false);
      setWhiteCount(30);
      setBlackCount(30);
    };
  
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="border-2 border-black rounded-md w-96 p-6 ml-24 bg-slate-100 shadow-inner">
          <h1 className="text-5xl font-bold text-center mb-4">Othello</h1>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white border border-black mr-6"></div>
            <p className="text-4xl font-bold mr-6">{whiteCount}</p>
            <div className="w-16 h-16 rounded-full bg-black border border-black mr-6"></div>
            <p className="text-4xl font-bold">{blackCount}</p>
          </div>
          <div className="flex items-center justify-center mb-4">
            <p className="text-4xl font-bold">Turn:</p>
            <div
              className={`w-8 h-8 rounded-full border-black border-2 ml-4 ${
                turn === true ? "bg-black" : "bg-white"
              }`}
            ></div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={resetGame}
              className="relative bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-white font-bold rounded-lg py-3 px-6 w-full overflow-hidden transform transition duration-200 hover:-translate-y-1 mx-auto"
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ScoreBoard;
  