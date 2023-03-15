import Swal from 'sweetalert2'
import Tile from './Tile'



export const TileChecker = ({ x, y, endGame, turn, matriz, setMatriz, setTurn }) => {

    const checkTile = () => {
        if (endGame) {
            return false;
        }
        const value = turn ? 2 : 1;
        const oppositeColor = turn ? 1 : 2;
        const newMatriz = [...matriz];
        if (newMatriz[x][y] === 0) {
            // Verifica si la ficha seleccionada está entre dos fichas del color opuesto
            let shouldFlip = false;

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    if (matriz[x + i]?.[y + j] === oppositeColor) {
                        let row = x + i;
                        let col = y + j;
                        while (matriz[row]?.[col] === oppositeColor) {
                            row += i;
                            col += j;
                        }
                        if (matriz[row]?.[col] === value) {
                            // se pueden voltear las fichas en esta dirección
                            for (let k = i, l = j; matriz[x + k]?.[y + l] === oppositeColor;
                                k += i, l += j) {
                                newMatriz[x + k][y + l] = value;
                            }
                            shouldFlip = true;
                        }
                    }
                }
            }
            if (shouldFlip) {
                newMatriz[x][y] = value;
                setMatriz(newMatriz);
                setTurn(!turn);
                return true;
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'Are you sure?',
                    text: 'This move is not allowed!',
                })
                return false;
            }
        }
        return false;
    };

    return (
        <Tile
            value={matriz[x][y]}
            onClick={checkTile}
        />
    );
};

export default TileChecker;