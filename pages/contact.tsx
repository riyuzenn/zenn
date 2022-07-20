import type { NextPage } from "next";
import PageHead from "../components/head";

const AboutPage: NextPage = () => {
    return (
        <>
            <PageHead title="zenn@riyuzenn ~/contact" desc="send me a message anonymously" />
            <p>email: <a className="text-white underline" href="mailto://riyuzenn@pm.me">riyuzenn@pm.me</a></p>
            <p>discord: <a className="text-white underline" href="mailto://riyuzenn@pm.me">zenn#7473</a></p>
            <hr className="my-4 border-dashed border-white/50" />
            <form onSubmit={(e: React.FormEvent) => { e.preventDefault(); }} className="flex space-x-3">
                <p>[] send me a message : </p>
                <input id="msg" autoComplete="off" className="bg-transparent outline-none text-white/50"></input>
            </form>
            <p className="text-[10px]">don't worry i use aes. your msg is safely stored</p>
            
        </>
    )
}
export default AboutPage;
