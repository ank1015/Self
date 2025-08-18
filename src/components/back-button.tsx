"use client"
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";


export const BackButton = () => {

    const router = useRouter()

    return (
        <div className="cursor-pointer" onClick={() => {router.back()}}>
            <ChevronLeft />
        </div>
    )

}