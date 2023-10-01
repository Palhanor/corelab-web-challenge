import { useState } from "react";
import INote from "../interfaces/note";
import addId from "../utils/id";

export default function useNotes() {
    const [notes, setNotes] = useState<INote[]>([{ id: 1, title: "Boa noite", text: "Amor", color: "#FFFFFF", favorite: true }, { id: 2, title: "Tchauzinho", text: "Baby", color: "#FFFFFF", favorite: false }]);
    
    function addNote(note: INote) {
        setNotes(prev => [...prev, {...note, id: addId()}])
    }

    function deleteNote(id: number) {
        setNotes(prev => prev.filter(note => note.id !== id))
    }

    function changeNote(id: number, currentNote: INote) {
        setNotes(prev => prev.map(prevNote => prevNote.id !== id ? prevNote : currentNote))
    }

    return {notes, addNote, deleteNote, changeNote}
}