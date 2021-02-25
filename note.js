const fs = require('fs');
const chalk = require("chalk");
const lodash = require("lodash");
const {isEmpty} = lodash;

//ADD to json file =>> Function
const addNote = (title , body)=>
{
    const init = loadNote();
    if(isEmpty(init))
    {
        init.push({
            title,
            body
        });
        saveNotes(init);
        console.log(chalk.green("Note added!"));
    }else{
        const duplicate = [...init];
        const filter = duplicate.filter(item => item.title === title);
        if(filter.length > 0)
        {
            console.log(chalk.red.inverse("this note saved before"))
        }else{
            init.push({
                title,
                body
            });
            saveNotes(init);
            console.log(chalk.green("Note added!"));
        }
    }
}


//Apply a changes in Json file
const saveNotes = (notes)=>{
    const convertJSON = JSON.stringify(notes);
    fs.writeFileSync("note.json" , convertJSON);
}

//Preparation for operation (JSON-File)
const loadNote = ()=>
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
    
    if(note.length > filter.length) {
        console.log(chalk.green("Note Delete Sucessful!"));
    }else{
        console.log(chalk.red("Not a found this title in notes!"));
    }

    note = filter;
    
    saveNotes(note);
}


//Show all Notes 
const showNotes = ()=>{
    let notes = loadNote();

    if(isEmpty(notes)) {
        console.log(chalk.red.inverse("Empty Notes!"));
    }else{
        notes.forEach(item =>{
            console.log(`
                ${chalk.blue("title:")} ${chalk.green(item.title)}  
                ${chalk.blue("body:")} ${chalk.gray(item.body)} 
                `
            );
        });
    }
};


const readNote = (title)=>{
    const receiveNote = loadNote();

    const filter = receiveNote.filter(item => item.title === title);
    const once = filter[0];

    console.log(chalk.green(`title: ${once.title}`));
    console.log(chalk.yellowBright(`title: ${once.body}`));
};



module.exports = {
    add: addNote,
    load: loadNote,
    remove: removeNote,
    show: showNotes,
    read: readNote
};