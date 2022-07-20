

import { useEffect } from "react";

export default function Dotfiles() {
   useEffect(() => {
         window.location.href = "https://github.com/riyuzenn/dotfiles"
      }, [])
   return (
         <>
            <p>redirecting ~ https://github.com/riyuzenn/dotfiles</p>
         </>
      )
   }
