import Note from "./Note"
import AddNote from "./AddNote"
function NotesList ({notes, handleAddNote, handleDelete}) {
   return <div className="notes-list">
        {notes.map((notes) => <Note  handleDelete={handleDelete} id={notes.id} text={notes.text} date={notes.date}/>)}
  <AddNote handleAddNote={handleAddNote}/>
        </div>
}
 
export default NotesList