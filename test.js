const arr = [
    {name: "erfan"},
    {name: "ali"},
    {name: "negim"}
];


const filter = arr.filter(item => item.name !== "erfan"); 
console.log(filter);