const fs = require("fs");


// const Note = {
//     title: "job",
//     body: "go to job"
// };

const dataBuffer = fs.readFileSync("1-json.json");
const dataToString = dataBuffer.toString();
let toObject = JSON.parse(dataToString);
toObject.name = "ali";
toObject.age = "15"; 

// console.log(toObject);


// const ReadHTML = fs.readFileSync("index.html");
// console.log(ReadHTML.toString());

fs.writeFileSync("app.css" , "hellow");
// fs.appendFileSync("app.css" , " shet");
// fs.openSync("index.html");
// fs.unlink("app.css" , function(err){
//     if(err){
//         console.log("error");
//     }

//     console.log("Sucessful!");
// });
// console.log(test);

fs.readdir("../node_modules" , (err,files)=>{
    if(err)
    {
        console.log("error");
    }
    
    files.forEach(item => console.log(item));
})


