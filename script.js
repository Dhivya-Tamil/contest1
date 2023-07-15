/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let ans = arr.map(function(element){
      if(element.profession == "developer"){
          return element
      }
  });
  console.log(ans);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   arr.forEach(function(words){
      if(words.profession=="developer"){
          console.log(words)
      }
  })
}

function addData() {
  //Write your code here, just console.log
  let obj = { id: 4, name: "susan", age: "20", profession: "intern" }
  arr.push(obj)
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.splice(2,1)
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let obj2 = [
      { id: 4, name: "Divya", age: "18", profession: "developer" },
      { id: 5, name: "Abinaya", age: "20", profession: "developer" },
      { id: 6, name: "Buvana", age: "19", profession: "system admin" },
    ];
  //   arr.splice(3,0,...obj2)
  let arr3 = arr.concat(obj2)
  console.log(arr3)
}