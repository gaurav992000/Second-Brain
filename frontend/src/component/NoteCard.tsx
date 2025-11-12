
export function NoteCard({ notes }: { notes: string }) {
    return <div>
        <div className="min-h-56 w-56 rounded-md outline-slate-200 border bg-white shadow-xl shadow-gray-500">
            <div>
                <h1>Notes</h1>
            </div>
            <div className=" ">
                {notes}
            </div>

        </div>


    </div>
}