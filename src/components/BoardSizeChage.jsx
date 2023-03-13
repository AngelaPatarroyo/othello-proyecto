import { useState } from "react";

const BoardSizeChange = ({ setMatriz, turn, setTurn, setEndGame }) => {
  const [boardSize, setBoardSize] = useState(8);

  const handleBoardSizeChange = () => {
    if (boardSize === 8) {
      setBoardSize(10);
      setMatriz([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ]);
      if (turn === false) {
        setTurn(true);
        setEndGame(false);
      }
    } else {
      const newMatriz = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 2, 0, 0, 0],
        [0, 0, 0, 2, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ];
      
      setMatriz(newMatriz);
      setBoardSize(8);
      setTurn(true);
      setEndGame(false);
    }
    
  };


  return (
    <div className="absolute top-0 right-0 mt-8 mr-24 flex justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleBoardSizeChange}
      >
        Change the board size
      </button>
    </div>
  );
};



export default BoardSizeChange;
