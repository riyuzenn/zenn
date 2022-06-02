import Link from "next/link"

export default function Header() {
    return (
        <div className="flex h-10 border-dashed border-y-[1px] border-white/20 items-center justify-end px-5 ">
            <ul className="flex space-x-5 text-[13px]">
              <li><Link href="/"><a >~</a></Link></li> 
              <li>/</li> 
              <li><Link href="/sudo"><a>sudo</a></Link></li>  
              <li>/</li> 
              <li><Link href="/about"><a>whoami</a></Link></li> 
              <li>/</li> 
              <li><Link href="/contact"><a>contact</a></Link></li> 
            </ul>
        </div>

    )
}