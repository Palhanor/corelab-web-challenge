export default function Header({search, setSearch}: {search: string, setSearch: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <header className="px-8 py-5 flex justify-between items-center shadow-md w-full">
      <div className="flex items-center">
        <img src={"./favicon.svg"} alt="Logo" className="h-10 mr-6" />
        <h1 className="text-gray-500 mr-8 text-lg font-semibold">CoreNotes</h1>
        <input
          type="text"
          placeholder="Pesquisar notas"
          className="p-2 rounded-md shadow-md w-[40vw] border border-zinc-300"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <button className="text-gray-600 text-lg" onClick={() => setSearch("")}>
        <img src={"./close.svg"} alt="Apagar busca" className="h-5" />
      </button>
    </header>
  );
}