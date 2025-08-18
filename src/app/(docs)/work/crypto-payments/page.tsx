import type { Metadata } from "next";
import { Separator } from '@/app/page';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";
import Image from "next/image";

const content = `
Co-founder of a consumer based crypto payments application built to bring the blockchain technology to the masses and making international payments easier.

* Managed a team of 5 to build the future of payments. (LOL failed. Many learning tho.)

* Got accepted in the Nailwal Fellowship and received a grant of $50K and a lot of mentorship.

`

export const metadata: Metadata = {
    title: "Crypto Payments application",
    description: "A collection of projects and work i did in my Software Developer journey.",
  };

const Karaoke = () => {

    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">Crypto Payments application</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            {/* <Video src={'https://storage.googleapis.com/ank1015/karaoke.mp4'} /> */}
            <Image src={'https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/flex.png'} alt="poker-application-landing" height={200} width={200} sizes="100vw" className="w-full h-auto" />
        </div>

        <PanelContent>
            <Prose>
                <Markdown>
                    {content}
                </Markdown>
            </Prose>
        </PanelContent>

        <div className="h-16" />

        </>
    )
}

export default Karaoke