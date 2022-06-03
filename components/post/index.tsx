
import Link from "next/link";


interface IPost {
    title: string,
    desc: string,
    readtime: string,
    date: string,
    slug: string,
}
type Post = {
    posts: IPost[],
    pinnedPosts: IPost[],
}
export default function PostIndex({ posts, pinnedPosts }: Post) {
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
                                    <p>{`[${post.date}] -`}</p>
                                    <Link href={`/posts/${post.slug}`} key={post.slug}>
                                        <a className="underline">{`${post.title.toLowerCase()} (${post.readtime})...`}</a>
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