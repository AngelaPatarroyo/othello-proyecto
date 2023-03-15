

const ScoreBoard = ({
  whiteCount,
  blackCount,
  turn,
  boardSize,
  setMatriz,
  setWhiteCount,
  setBlackCount,
  setTurn,
  setEndGame,
  baseMatriz,
  baseMatriz10x10,
  handleBoardSize,
}) => {
  const newGame = () => {
    const initialMatriz =
      boardSize === 8 ? baseMatriz() : baseMatriz10x10();
    setMatriz(initialMatriz);
    setWhiteCount(boardSize === 8 ? 32 : 50);
    setBlackCount(boardSize === 8 ? 32 : 50);
    setTurn(true);
    setEndGame(false);
  };
  return (
    <div className="h-auto mt-28 ml-24 flex flex-col items-center">
      <div className="border-2 border-black rounded-md w-96 p-6 mb-6 bg-slate-100 shadow-inner">
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
            className={`w-8 h-8 rounded-full border-black border-2 ml-4 
              ${turn === true ? "bg-black" : "bg-white"
              }`}
          ></div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={newGame}
            className="relative bg-gray-500 hover:bg-gray-600 focus:ring-2 
              focus:ring-gray-500 focus:ring-opacity-50 text-white font-bold 
              rounded-lg py-3 px-6 w-full overflow-hidden transform transition 
              duration-200 hover:-translate-y-1 mx-auto"
          >
            New Game
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in
          shadow-md hover:shadow-xl transform hover:-translate-y-1"
          onClick={handleBoardSize}
        >
          Change the board size
        </button>
      </div>
    </div>
  );
};

export default ScoreBoard;
