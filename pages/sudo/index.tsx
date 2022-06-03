
export default function SudoPage() {
    function submit(e: React.FormEvent) {
        e.preventDefault();
     
    }
    return (
        <>
            <form onSubmit={submit} className="flex space-x-3">
                <p>[sudo] password for <b className="text-white">zenn@riyuzenn</b> ~ $ </p>
                <input className="outline-none bg-black" spellCheck={false}></input>
            </form>
            <p id="result"></p>
        </>
    )
}