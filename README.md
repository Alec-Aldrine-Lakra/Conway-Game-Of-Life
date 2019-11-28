The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.

Rule

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

* Any live cell with fewer than two live neighbors dies, as if caused by under-population.
* Any live cell with two or three live neighbors’ lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by overcrowding.
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

Logic

Prepared a 50*50 table whose each cell represents the cell in game of life. At first I randomly distribute dead and alive cells and start the game of life based on above rulesets. One can even click on a cell to toggle it dead/alive giving a zero-player some interaction. The edge cells form a wrap around with cells on the opposite corner so that every cell gets its 8 neighbors to determine its state. 