import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
import Head from "next/head";

const Post = ({ matter, slug, mdxSource }: any) => {
   return (
       <>
            <Head>
                <title>{`~ / posts / ${slug}`}</title>
            </Head>
            <div className="w-[90%] h-[90%] max-h-xl mt-5"><MDXRemote {...mdxSource}/></div>
       </>
      
  );
};

export default Post;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('pages/posts'));

    const paths = files.map((file) => {
        return {
            params: {
                slug: file.replace(".mdx", ""),
            },
        };
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }: any) {
    // read each file
    const markdown = fs.readFileSync(
      path.join("pages/posts", slug + ".mdx"),
      "utf-8"
    );
  
    // Extract front matter
    const { data: frontMatter, content } = matter(markdown);
  
    const mdxSource = await serialize(content);
  
    return {
      props: {
        frontMatter,
        slug,
        mdxSource,
      },
    };
  }