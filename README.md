<!-- create a awesome readme -->
# Lonely Island 
A graph problem that creates very sad lonely island. 
<br/>
<br/>

### Reason: 
---
I was click baited into a programming problem on youtube and paused it to solve it before watching the solution. 


<br/>

### Problem:
---

Return all island's from the given matrix

`0 = water`

`1 = land`

 An island is a piece of land that does not have adjacent land either up, right, down, or left of it's current location 

<br />

### Example:
---

#### Input: 
```js
[
   [1, 1, 0, 0, 0]
   [0, 1, 0, 0, 1]
   [1, 0, 0, 1, 0]
   [0, 0, 0, 0, 0]
   [1, 0, 1, 0, 1]
]
```
<br />

#### Output:
```js
[
   ['~', '~', '~', '~', '~']
   ['~', '~', '~', '~',  1 ]
   [ 1 , '~', '~',  1 , '~']
   ['~', '~', '~', '~', '~']
   [ 1 , '~',  1 , '~',  1 ]
]
```

### Solution:
---

<br />

O(n + m * 4)

n = row

m = col

4 = sum iteration

> This simplifies down to O(n)
> 
> `4 ` is constant so we can remove this 
>
> `m ` given the length is constant we now know that our solution scales at the time complexity of 
>
>`O(n)`  


```js
//Get it? Like the Maldives but in the meta verse 🥁🐍
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
```
#### console.log:
```js
[
  [  1 , '~', '~', '~', '~' ],
  [ '~',  1 , '~', '~', '~' ],
  [  1 , '~', '~', '~', '~' ],
  [ '~',  1 , '~', '~',  1  ],
  [ '~', '~', '~',  1 , '~' ]
]
```