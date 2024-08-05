"use client"

import {useState} from "react"
import {supabase} from "@/utils/supabase"

export default function NewNote({fetchNotes, setActiveNoteId, setIsCreatingNote}) {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	const onSave = async () => {
		if (!title || !content) {
			alert("제목과 내용을 입력해주세요")
			return
		}

		const {data, error} = await supabase
			.from("note")
			.insert({
				title,
				content
			})
			.select()

		if (error) {
			alert(error.message)
			return
		}


		await fetchNotes()
		setActiveNoteId(data[0].id)
		setIsCreatingNote(false)
	}


	return (
		<div className="w-2/3 p-2 flex flex-col gap-2 absolute top-0 bottom-0 right-0">
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				type="text"
				placeholder="노트의 제목을 입력하세요"
				className="border rounded-md border-gray-300 text-xl p-2"
			/>

			<textarea
				value={content}
				onChange={(e) => setContent(e.target.value)}
				className="border rounded-md border-gray-300 text-lg p-2 grow"
			/>

			<div className="w-full flex justify-end">
				<button
					onClick={() => onSave()}
					className="py-1 px-3 rounded-full border-2 border-green-600 hover:bg-green-200"
				>저장
				</button>
			</div>
		</div>
	)
}