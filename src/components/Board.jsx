import React, { useState } from 'react';

/* false = turno blanco
    true = turno negro */

/* 1=blanco
2=negro
0=vacio */

const Board = () => {
    const [turn, setTurn] = useState(true);
    const [matriz, setMatriz] = useState(Array(8).fill(0).map(() => Array(8).fill(0)));
    matriz[3][3] = 2;
    matriz[4][3] = 1;
    matriz[4][4] = 2;
    matriz[3][4] = 1;

    const checkTile = (x, y) => {
        if (matriz[x][y] !== 0) {
            return false;
        }
        const value = turn ? 2 : 1;
        setMatriz(matriz => {
            const newMatriz = [...matriz];
            newMatriz[x][y] = value;
            return newMatriz;
        });
        setTurn(prevTurn => !prevTurn);
    };
    const Tile = ({ row, col, value, onClick }) => (
        
        <div onClick={() => onClick(row, col)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
            {value !== 0 && (
                <div className={`${value === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />
            )}
        </div>
    );

 
    return (
        <div className="mt-14">
            {matriz.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-start ml-44">
                    {row.map((value, colIndex) => (
                        <Tile
                            key={colIndex}
                            row={rowIndex}
                            col={colIndex}
                            value={value}
                            onClick={checkTile}
                        />
                    ))}
                </div>
            ))}
            
        </div>
    );
};

export default Board;
