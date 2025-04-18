// npm - global commmand, comes with Node
// npm --version

// local dependency - use it only in this particular Project 
// npm i <packageName>

// global dependency - use it in any Project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

const _=require('lodash')
const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);