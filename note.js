const fs = require('fs');

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
    const note = loadNote();
    const filter = note.filter(item => item !== title);
    
    saveNotes(filter);
}


module.exports = {
    add: addNote,
    load: loadNote,
    remove: removeNote
};