const board = [
	['5', '3', '.', '.', '7', '.', '.', '.', '.'],
	['6', '.', '.', '1', '9', '5', '.', '.', '.'],
	['.', '9', '8', '.', '.', '.', '.', '6', '.'],
	['8', '.', '.', '.', '6', '.', '.', '.', '3'],
	['4', '.', '.', '8', '.', '3', '.', '.', '1'],
	['7', '.', '.', '.', '2', '.', '.', '.', '6'],
	['.', '6', '.', '.', '.', '.', '2', '8', '.'],
	['.', '.', '.', '4', '1', '9', '.', '.', '5'],
	['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const solveSudoku = (board) => {
	const isValid = (board, row, col, num) => {
		// check row
		for (let i = 0; i < 9; i++) {
			if (board[row][i] === num) {
				return false;
			}
		}

		// check column
		for (let i = 0; i < 9; i++) {
			if (board[i][col] === num) {
				return false;
			}
		}

		// check 3x3 box
		const rowStart = Math.floor(row / 3) * 3;
		const colStart = Math.floor(col / 3) * 3;
		for (let i = rowStart; i < rowStart + 3; i++) {
			for (let j = colStart; j < colStart + 3; j++) {
				if (board[i][j] === num) {
					return false;
				}
			}
		}

		return true;
	};

	const solve = (board) => {
		for (let row = 0; row < 9; row++) {
			for (let col = 0; col < 9; col++) {
				if (board[row][col] === '.') {
					for (let num = 1; num <= 9; num++) {
						if (isValid(board, row, col, num.toString())) {
							board[row][col] = num.toString();
							if (solve(board)) {
								return true;
							} else {
								board[row][col] = '.';
							}
						}
					}
					return false;
				}
			}
		}
		return true;
	};

	solve(board);
	return board;
};
