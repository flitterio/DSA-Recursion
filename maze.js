let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
        [' ', ' ', ' ', '*', ' ', ' ', ' '],
        ['*', '*', ' ', '*', ' ', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', '*', '*', '*', '*', '*', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'e']
    ];

let mazeRoute = function(x=0, y=0, maze){
    const rows = maze.length-1;
    const colums = maze[0].length-1;
    //base case
    if(maze[y][x] === 'e'){
        return ''
    }

    if(maze[y][x+1] !== '*' && x < colums){
        maze[y][x] = '*'
        return 'R' + mazeRoute(x+1, y, maze)
    }
    if (maze[y][x - 1] !== '*' && x >= 0) {
        maze[y][x] = '*'
        return 'L' + mazeRoute(x - 1, y, maze)
    }

    if (maze[y + 1][x] !== '*' && y < rows) {
        maze[y][x] = '*'
        return 'D' + mazeRoute(x, y + 1, maze)
    }

    if (maze[y - 1][x] !== '*' && y >= 0) {
        maze[y][x] = '*'
        return 'U' + mazeRoute(x, y - 1, maze)
    }
}

console.log(mazeRoute(0, 0, mySmallMaze));