const fs = require('fs');
const chalk = require("chalk");

//ADD to json file =>> Function
const addNote = function(title , body)
{
    const init = loadNote();
    
    init.push({
        title,
        body
    });

    saveNotes(init);
}


//Apply a changes in Json file
const saveNotes = (notes)=>{
    const convertJSON = JSON.stringify(notes);
    fs.writeFileSync("note.json" , convertJSON);
}

//Preparation for operation (JSON-File)
const loadNote = function()
{
    try{
        const dataBuffer = fs.readFileSync("note.json");
        const convertString = dataBuffer.toString();
        return JSON.parse(convertString);
    } catch(err)
    {
        return [];
    }
}


//Remove intended note
const removeNote = (title)=>{
    let note = loadNote();
    const filter = note.filter(item => item.title !== title);
    note = filter;

    saveNotes(note);
}


//Show all Notes 
const showNotes = ()=>{
    let notes = loadNote();

    notes.forEach(item =>{
        console.log(`
            ${chalk.blue("title:")} ${chalk.green(item.title)}  
            ${chalk.blue("body:")} ${chalk.gray(item.body)} 
            `
        );
    });
};



module.exports = {
    add: addNote,
    load: loadNote,
    remove: removeNote,
    show: showNotes
};