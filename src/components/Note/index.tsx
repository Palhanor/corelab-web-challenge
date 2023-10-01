import INote from "../../interfaces/note";

export default function MockedNote({ note, deleteNote, changeNote }: {note: INote, deleteNote: (id: number) => void, changeNote: (id: number, currentNote: INote) => void}) {
    return (
        <div className="bg-gray-100 border rounded-2xl">
            <div className="flex justify-between items-center border-b border-zinc-300 p-4">
                <h2 className="text-md font-bold">{note.title}</h2>
                <img src={note.favorite ? "./star-full.svg" : "./star-empty.svg"} alt="Estrela" className="h-5" onClick={() => changeNote(note?.id as number, {...note, favorite: !note.favorite})} />
            </div>
            <p className="mt-2 p-4 h-48">
                {note.text}
            </p>
            <div className="flex justify-between mt-4 px-6 py-4">
                <div className="flex">
                    <span className="mr-4 cursor-pointer">
                        <img src={"./pen.svg"} alt="Editar" className="h-4" />
                    </span>
                    <span className="mr-4 cursor-pointer">
                        <img src={"./color.svg"} alt="Modificar cor" className="h-4" />
                    </span>
                </div>
                <span className="cursor-pointer" onClick={() => deleteNote(note.id || 1)}>
                    <img src={"./close.svg"} alt="Apagar nota" />
                </span>
            </div>
        </div>
    );
}