
import Link from "next/link";

interface Metadata {
    title: string,
    desc: string,
    readtime: string,
    date: string,
    slug: string,
    pin: boolean,
}
interface IPost {
    metadata: Metadata,
}
type Post = {
    posts: IPost[]
}
export default function PostIndex({ posts }: Post) {
    return (
        <>
            <p><span className="bg-[#75ACB3] text-black px-2">BLOG POST</span></p>
            <br />
           
            <ul className="mt-2">
                {posts.map((post, index) => {
                    return (
                        <>
                            
                            <li>
                                
                                <div className="flex space-x-2">
                                    <p>{`[${post.metadata.date}] -`}</p>
                                    <Link href={`/posts/${post.metadata.slug}`} key={post.metadata.slug}>
                                        <a className="underline">{`${post.metadata.title.toLowerCase()} (${post.metadata.readtime})...`}</a>
                                    </Link>
                                </div>
                            </li>
                        </>
                        
                    )
                })}

            </ul>
        </>
    )
}