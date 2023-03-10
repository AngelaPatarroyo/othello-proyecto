import { useState } from "react";

const BoardSizeChange = ({ setMatriz, turn, setTurn }) => {
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
    }
    
  };


  return (
    <div>
      <button className="ml-56 mb-8 mt-8 bg-green-600 text-white font-bold rounded-lg py-2 px-4 
                    hover:bg-green-700 focus:outline-none focus:ring-2 
                    focus:ring-green-600 focus:ring-opacity-50" onClick={handleBoardSizeChange}>Change the board size</button>
    </div>
  );
};

export default BoardSizeChange;
