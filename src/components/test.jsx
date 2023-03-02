for (let x = 0; x <= 7; x++) {
    for (let y = 0; y <= 7; y++) {
      if (((x > 0 && y > 0 && x <= 7 && y <= 7) && matriz[x - 1][y] === oppositeColor) || matriz[x + 1][y] === oppositeColor || matriz[x][y - 1] === oppositeColor || matriz[x][y + 1] === oppositeColor || matriz[x - 1][y - 1] === oppositeColor || matriz[x - 1][y + 1] === oppositeColor || matriz[x + 1][y - 1] === oppositeColor || matriz[x + 1][y + 1] === oppositeColor) {
        // hacer algo aquí si se cumple la condición
      }
    }
  }