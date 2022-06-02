import type { NextPage } from "next";
import Head from "next/head";
import { SiTwitter, SiGithub, SiAboutdotme, SiDiscord } from "react-icons/si";
import PostIndex from "../components/post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";


const Index: NextPage = ({ posts }: any) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>~</title>
      </Head>


        <div className="flex space-x-2">
          <h2>zenn@riyuzenn ~ $ <span className=" font-thin">cat <span className="text-green-500">profile.txt</span></span></h2>
          <div className="w-2 bg-white/76 animate-blink"></div>
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
        <PostIndex posts={posts} />
        

    </>
  )
}

export default Index;
export async function getStaticProps() {
  // Read the pages/posts dir
  let files = fs.readdirSync(path.join("pages/posts"));

  // Get only the mdx files
  files = files.filter((file) => file.split(".")[1] === "mdx");

  // Read each file and extract front matter
  const posts = await Promise.all(
    files.map((file) => {
      const mdWithData = fs.readFileSync(
        path.join("pages/posts", file),
        "utf-8"
      );

      const { data: metadata } = matter(mdWithData);
      
      return {
        metadata,
        slug: file.split(".")[0],
      };
    })
  );

  // Return all the posts and slug as props
  return {
    props: {
      posts,
    },
  };
}