import React, { useState } from 'react'

const Board = () => {
    /* false = turno blanco
    true = turno negro */
    const [turn, setTurn] = useState(false)
    /* 1=blanco
    2=negro
    0=vacio */
    const [matriz, setMatriz] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]])

    console.log(matriz[0])

    const checkTile = (x, y) => {
        if (matriz[x][y] !== 0) {
            return false
        }
        let aux = [...matriz]
        if (turn) {
            aux[x][y] = 2
        } else {
            aux[x][y] = 1
        }
        setMatriz(aux)
        setTurn(!turn)
    }

    return (
        
        <div className='mt-14'>
            <div className="flex justify-center">
                <div onClick={() => checkTile(0, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(0, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[0][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(1, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][0] !== 0 && <div className={`${matriz[1][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][1] !== 0 && <div className={`${matriz[1][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][2] !== 0 && <div className={`${matriz[1][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][3] !== 0 && <div className={`${matriz[1][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][4] !== 0 && <div className={`${matriz[1][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][5] !== 0 && <div className={`${matriz[1][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][6] !== 0 && <div className={`${matriz[1][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(1, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[1][7] !== 0 && <div className={`${matriz[1][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(2, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[2][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(2, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[2][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(2, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[2][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(2, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[2][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(2, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[2][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(2, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[2][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(2, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[2][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(2, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[2][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(3, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[3][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(3, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[3][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(3, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[3][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(3, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[3][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(3, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[3][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(3, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[3][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(3, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[3][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(3, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[3][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(4, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[4][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(4, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[4][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(4, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[4][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(4, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[4][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(4, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[4][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(4, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[4][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(4, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[4][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(4, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[4][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(5, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[5][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(5, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[5][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(5, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[5][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(5, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[5][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(5, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[5][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(5, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[5][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(5, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[5][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(5, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[5][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(6, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[6][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(6, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[6][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(6, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[6][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(6, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[6][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(6, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[6][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(6, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[6][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(6, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[6][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(6, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[6][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
            <div className="flex justify-center">
                <div onClick={() => checkTile(7, 0)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[7][0] !== 0 && <div className={`${matriz[0][0] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(7, 1)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[7][1] !== 0 && <div className={`${matriz[0][1] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(7, 2)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[7][2] !== 0 && <div className={`${matriz[0][2] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(7, 3)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[7][3] !== 0 && <div className={`${matriz[0][3] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(7, 4)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[7][4] !== 0 && <div className={`${matriz[0][4] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(7, 5)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[7][5] !== 0 && <div className={`${matriz[0][5] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(7, 6)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[7][6] !== 0 && <div className={`${matriz[0][6] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
                <div onClick={() => checkTile(7, 7)} className="flex items-center justify-center bg-green-600 h-20 w-20 border-solid border-2 border-green-800">
                    {matriz[7][7] !== 0 && <div className={`${matriz[0][7] === 1 ? 'bg-white' : 'bg-black'} h-16 w-16 rounded-full`} />}
                </div>
            </div>
        </div>
        
    )
}

export default Board;