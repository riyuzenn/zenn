import PageHead from "../../components/head";

export default function SudoPage() {
    function submit(e: React.FormEvent) {
        e.preventDefault();
     
    }
    return (
        <>
            <PageHead title="zenn@riyuzenn ~/sudo" desc="uh oh, only authorized personnel are allowed" />
            <form onSubmit={submit} className="flex space-x-3">
                <p>[sudo] password for <b className="text-white">zenn@riyuzenn</b> ~ $ </p>
                <input className="outline-none bg-transparent" spellCheck={false}></input>
            </form>
            <p id="result"></p>
        </>
    )
}
