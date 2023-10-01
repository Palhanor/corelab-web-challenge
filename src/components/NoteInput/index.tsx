import { useState } from "react";
import INote from "../../interfaces/note";

export default function NoteInput({ addNote }: { addNote: (note: INote) => void }) {
  const [note, setNote] = useState<INote>({ title: "", text: "", color: "", favorite: false })

  const handleAddNote = () => {
    addNote(note)
    setNote({ title: "", text: "", color: "", favorite: false })
  }

  return (
    <div className="w-2/5 border bg-white border-zinc-300 shadow-md rounded-md m-auto">
      <div className="flex items-center justify-around border-b border-zinc-300">
        <input type="text" placeholder="Título" value={note.title} onChange={e => setNote({ ...note, title: e.target.value })} className="w-full pl-5 py-3 outline-none rounded-l-md placeholder:font-semibold placeholder:text-black" />
        <img src={note.favorite ? "./star-full.svg" : "./star-empty.svg"} alt="Estrela" className="h-5 mr-4" onClick={() => setNote({ ...note, favorite: !note.favorite })} />
      </div>
      <div className="flex">
        <textarea
          placeholder="Criar nota..."
          value={note.text}
          onChange={e => setNote({ ...note, text: e.target.value })}
          className="w-full h-12 pl-5 py-3 border rounded-lg border-none resize-none outline-none placeholder:text-gray-600"
        ></textarea>
        {note.title && note.text && <button onClick={handleAddNote} className="mr-4">aaa</button>}
      </div>
    </div>
  );
}
