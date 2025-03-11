import { ShoppingBagIcon } from "lucide-react"
import Link from "next/link"
interface teste{
  vibe: number
}

export function IconCompras({vibe}:teste){
  return(
    <div>
      <Link href='/Carrinho'>
        <div className="fixed">
          <div className="flex items-center ">
            <ShoppingBagIcon className="text-[#737380] cursor-pointer"  />
            <p className="relative  top-4 left-[-10] text-xs rounded-full p-[3] px-[8] cursor-pointer text-[#fff] bg-[#DE3838]" >{vibe}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}