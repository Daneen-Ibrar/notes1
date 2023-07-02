import './styles.css'
import { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
function App() {
  const [notes, setNotes] = useState([])
  const [darkmode, setDarkMode] = useState(false)

  useEffect(() => {
       const savedNotes = JSON.parse(localStorage.getItem('react-todo-app-data'))
       if(savedNotes){
		setNotes(savedNotes)
	   }
	}, [])

  useEffect(() => {
	localStorage.setItem('react-todo-app-data', 
	JSON.stringify(notes)

	)
  }, [notes])

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: Math.floor(Math.random() * 10),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  const [searchText, setSearchText] = useState('')

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
  return <div className={`${darkmode && "dark-mode"}`}>
  <div className='container'>
  <Header handleDark={setDarkMode} />
  <Search handleSearchNote={setSearchText}/>
  <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleDelete={deleteNote} handleAddNote={addNote} />
  </div>
 </div>
}
export default App;
