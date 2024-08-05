"use client"

export default function Sidebar({
																	notes,
																	activeNoteId,
																	setActiveNoteId,
																	setIsCreatingNote,
																	search,
																	setSearch
																}) {
	return (
		<aside className="absolute top-0 left-0 bottom-0 w-1/3 overflow-y-scroll p-2 border-r border-gray-300">
			<button
				onClick={() => setIsCreatingNote(true)}
				className="text-lg font-bold border border-gray-600 rounded-lg w-full p-2"
			>➕ 새로운 노트
			</button>

			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="w-full p-2 border rounded-md border-gray-600 mt-2"
				placeholder={"노트를 검색하세요"}
			/>

			<ul className="mt-2 flex flex-col gap-2">
				{notes.map((note) => (
					<li key={note.id}>
						<button
							className={`${activeNoteId === note.id ? "font-bold" : ""}`}
							onClick={() => {
								setIsCreatingNote(false)
								setActiveNoteId(note.id)
							}}>{note.title}</button>
					</li>
				))}
			</ul>
		</aside>
	)
}