import Link from "next/link"
import { useRouter } from "next/router"
export default function Header() {
    const router = useRouter();
    
    return (
        <div className="flex h-10 border-dashed border-y-[1px] border-white/20 items-center justify-end px-5 ">
            <ul className="flex space-x-5 text-[13px] header">
              <li><Link href="/"><a >~</a></Link></li> 
              <li className="hover:bg-none">/</li> 
              <li><Link href="/sudo"><a className={router.asPath == "/sudo" ? "bg-white/70 text-black" : ""}>sudo</a></Link></li>  
              <li>/</li> 
              <li><Link href="/about"><a className={router.asPath == "/about" ? "bg-white/70 text-black" : ""}>whoami</a></Link></li> 
              <li>/</li> 
              <li><Link href="/contact"><a className={router.asPath == "/contact" ? "bg-white/70 text-black" : ""}>contact</a></Link></li> 
            </ul>
        </div>

    )
}