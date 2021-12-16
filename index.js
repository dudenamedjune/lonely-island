const metaDieves = [
    [1, 0, 0, 1, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
];

const isIsland = (island, row, column) => {
    const current = island[row][column];
    const nextRow = island[row + 1] || [];
    const prevRow = island[row - 1] || [];
    const currentRow = island[row];

    const top = prevRow[column] || 0;
    const bottom = nextRow[column] || 0;
    const left = currentRow[column - 1] || 0;
    const right = currentRow[column + 1] || 0;

   if (current === 0) {
       return false;
   };
   
   //TODO: Refactor this so that you can base a radius argument and dynamically check the surrounding cells
   // hence why the reduce is here and not a simple top + bottom + left + right
   const sum = [top, bottom, left, right].reduce((acc, cur) => acc + cur, 0);
   
   return !sum;  
};

const main = () => {

    const lonelyIslands = metaDieves.map((row, rowIndex) => {
       return row.map((col, columnIndex) => { 
              return  isIsland(metaDieves, rowIndex, columnIndex) ? 1 : "~";
       }, []);
    }, []);
    console.log(lonelyIslands);
};

main();