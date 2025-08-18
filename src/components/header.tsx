'use client'
import Link from "next/link"
import { Button } from "./ui/button"

import { usePathname } from 'next/navigation'

export const Header = () => {

    const pathname = usePathname()

    const heading = {
        '/': 'AnK',
        '/blog': 'Always Learning'
    }

    return (
        <div className="h-[50px] w-full flex justify-between items-end">
            <div className="flex gap-4">
                <img src={'/logo.png'} alt='logo' className="h-[35px]" />
                <span className="font-karma text-[22px] mt-[5px] font-bold text-[#3C3A35]">{heading[pathname as keyof typeof heading]}</span>
            </div>
            <div className="flex items-center gap-12">
                <Link className="font-satoshi text-[#3C3A35] text-[14px] font-medium" href="/">Home</Link>
                <Link className="font-satoshi text-[#3C3A35] text-[14px] font-medium" href="/blog">Blog</Link>
                <Link className="font-satoshi text-[#3C3A35] text-[14px] font-medium" href="/work">Work</Link>
                <Link href="/contact">
                    <Button className="cursor-pointer">Contact</Button>
                </Link>
            </div>
        </div>
    )
}