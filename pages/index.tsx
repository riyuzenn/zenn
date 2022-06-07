import Typed from "react-typed";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import { SiTwitter, SiGithub, SiAboutdotme, SiDiscord } from "react-icons/si";
import PostIndex from "../components/post";
import data from "../zenn.config";

export default function IndexPage() {
    const [a, b] = useState(false);
    

    return (
        <>
            <div className={`flex h-[80vh] justify-center items-center ${a ? 'hidden': 'block'}`}>
                <div className="flex-col leading-4 min-w-[40%] max-w-[40%]">
                    <button className="hover:underline" onClick={() => b(true)}>skip intro <span>&rarr;</span></button>
                    <br />
                    <br />
                    <Typed 
                        className="intro"
                        strings={['when you connect to the internet, you become subject to many threats. as a developer, my goal is to design and innovate open source, highly scalable secure environments for folks who value their privacy.']} 
                        onComplete={() => setTimeout(() => { b(true) }, 1000)}
                        typeSpeed={30}
                    />
                </div>
                
            
            </div>
            <div className={`flex flex-col h-auto justify-center my-5 fade-in ${a ? 'block': 'hidden'}`}>
                <div className="w-[90%] h-[90%] max-h-xl xl:max-w-[50%] lg:max-w-[50%] md:max-w-[50%] sm:max-w-[90%] mr-auto ml-auto">
                    <Header />
                    <div className="my-10">
                        <Head>
                            <title>~</title>
                        </Head>

                            
                            <div className="flex space-x-2">
                            <h2>zenn@riyuzenn ~ $ <span className=" font-thin">cat <span className="text-green-500 prof">profile.txt</span></span></h2>
                            </div>
                            <br></br>
                            <div className="flex items-center space-x-12">
                            <div className="flex-col">
                                <p className="text-white/90">
                                (\ /)	<br />
                                ( . .)	<br />
                                c(<span className="text-[#B075B3]">"</span>)(<span className="text-[#B075B3]">"</span>) <br />

                                </p>
                            </div>
                            <div className="flex-col">
                                <div className="flex space-x-5">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2"><SiAboutdotme size={13} /></span>
                                    whoami: 
                                </p>
                                <a target="_blank" href="/" className="underline text-white">zenn</a>
                                
                                </div>
                                <div className="flex space-x-5">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2"><SiGithub size={12} /></span>
                                    github: 
                                </p>
                                <a target="_blank" href="https://github.com/riyuzenn" className="underline text-white">@riyuzenn</a>
                                
                                </div>
                                <div className="flex space-x-3">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2"><SiTwitter size={12}/></span>
                                    twitter: 
                                </p>
                                <a target="_blank" href="https://twitter.com/riyuzenn" className="underline text-white">@riyuzenn</a>
                                
                                </div>
                                <div className="flex space-x-3">
                                <p className="flex items-center text-[#7975B3] font-medium">
                                    <span className="pr-2"><SiDiscord size={12} /></span>
                                    discord: 
                                </p>
                                <a target="_blank" href="https://discord.com/" className="underline text-white">zenn#7473</a>
                                
                                </div>
                            </div>
                            </div>
                            <br />
                            <p><span className="bg-[#75ACB3] text-black px-2">ABOUT ME</span></p>
                            <br />
                            <p>an <span>open-source</span> enthusiast who's passionate — obsessed in innovating and building things from scratch — on how stuff works.</p>
                            <br />
                            <PostIndex posts={data.posts} pinnedPosts={data.pinnedPosts} />
                            

                        </div>
                    <Footer />
                </div>
            </div>
            
        </>
    )
}

export async function getStaticProps(ctx: any) {
    return {
        props: { noLayout : true }
    }
}
