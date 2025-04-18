//GLOBALS - NO WINDOW !!!!

//__dirname     -Path to current directory
// __filename   -file name
// requires     -functions to use modules(commonjs)
// module       -Infor about current module(file)   
// process      -Infor about env where the program is being excuted
console.log(__filename);
setInterval(() => {
  console.log('Hello World');
}, 1000);