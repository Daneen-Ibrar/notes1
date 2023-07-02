import React from 'react'
import { useState } from 'react'
function AddNote({handleAddNote}) {
  const [noteText, setNoteText] = useState('')
  const characterLimit = 300
 const handleChange = (event) =>{
  if(characterLimit - event.target.value.length >=0){
    setNoteText(event.target.value)
  }

 }

 const handleSaveClick = () => {
  if(noteText.trim().length > 0 ){
    handleAddNote(noteText)
    setNoteText('')
  } 
     

 }
  return (
    <div className='note new'>
    <textarea spellCheck={true} value={noteText} 
    onChange={handleChange} 
    rows="8" 
    cols="10" 
    placeholder='Type to add a note...'
    ></textarea>
    <div className='note-footer '>
    <small className='characterLimit'>{characterLimit - noteText.length} remaining</small>
    <button className='save' onClick={handleSaveClick}>Save</button>
    </div>
    </div>
    
  )
}

export default AddNote