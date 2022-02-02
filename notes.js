const fs = require('fs')

const addNotes = (title, body) =>{
    const note = {
        title,
        body: body
    }
    console.log(note);
    fs.writeFileSync('notes.json', JSON.stringify(note));

}

const loadNotes = () =>{
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        return JSON.parse(notesBuffer.toString())
    } catch (error) {
        return []
    }
}

module.exports = {addNotes, loadNotes };
