import Image from 'next/image'
import Left from '../../../public/Arrowleft.png'
import Right from '../../../public/Arrowright.png'
import Link from 'next/link'

export function CardNumbers(){
    return(
        <>
            <div className=" h-14 text-[#737380] items-center px-[100] flex gap-3 justify-end bg-[#F0F0F5]">
                <p className=" flex cursor-pointer justify-center w-8 h-8 rounded-lg  bg-[#E9E9F0] text-[#FFA585] border border-[#FFA585]  items-center">1</p>
                <p className=" flex cursor-pointer justify-center w-8 h-8 rounded-lg  bg-[#E9E9F0] transition-all duration-500 hover:text-[#FFA585] hover:border border-[#FFA585] items-center"><Link href='/Carrinho'>2</Link></p>
                <p className=" flex cursor-pointer justify-center w-8 h-8 rounded-lg  bg-[#E9E9F0] transition-all duration-500 hover:text-[#FFA585] hover:border border-[#FFA585] items-center">3</p>
                <p className=" flex cursor-pointer justify-center w-8 h-8 rounded-lg  bg-[#E9E9F0] transition-all duration-500 hover:text-[#FFA585] hover:border border-[#FFA585] items-center">4</p>
                <p className=" flex cursor-pointer justify-center w-8 h-8 rounded-lg  bg-[#E9E9F0] transition-all duration-500 hover:text-[#FFA585] hover:border border-[#FFA585] items-center">5</p>
                <div className="flex gap-2 items-center">
                    <Image   className="flex justify-center cursor-pointer w-8 h-8 rounded-lg bg-slate-100 items-center transition-all duration-500 hover:text-[#FFA585] hover:border border-[#FFA585]" src={Left} alt=""/>
                    <Image  className="flex justify-center cursor-pointer w-8 h-8 rounded-lg bg-slate-100 items-center transition-all duration-500 hover:text-[#FFA585] hover:border border-[#FFA585]" src={Right} alt=""/>
                </div>
            </div>
        </>
    )
}