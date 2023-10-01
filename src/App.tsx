// Modificar o texto da nota
// Modificar cor da nota
// Conectar com a API (fetch)

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Note from './components/Note'
import NoteInput from './components/NoteInput'
import useNotes from './hooks/useNotes'

function App() {
  const { notes, addNote, deleteNote, changeNote } = useNotes();
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <main className='bg-gray-200 min-h-screen pt-8 px-[7%] pb-[10vh]'>
        <NoteInput addNote={addNote} />
        <div className='mt-8'>
          <span className='mx-3 block text-gray-600 font-medium'>Favoritas</span>
          <div className='mt-2 mb-5 grid grid-cols-3 gap-4'>
            {notes.filter(
              note => note.favorite &&
                (note.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                  note.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())))
              .map(note => (
                <Note deleteNote={deleteNote} key={note.id} note={note} changeNote={changeNote} />
              ))}
          </div>
          <span className='mx-3 block text-gray-600 font-medium'>Outras</span>
          <div className='mt-2 mb-5 grid grid-cols-3 gap-4'>
            {notes.filter(note => !note.favorite &&
              (note.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
                note.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              )).map(note => (
                <Note deleteNote={deleteNote} key={note.id} note={note} changeNote={changeNote} />
              ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
