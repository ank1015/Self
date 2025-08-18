import type { Metadata } from "next";
import { Separator } from '@/app/page';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";
import Image from "next/image";

const content = `
Co-founder and CTO of a poker application built to not just play but to also learn and socialize with others. 

Features:
* **Poker**: Play poker with friends and family in private rooms or in public tournaments.
* **Learning**: Every day puzzles and poker tips to improve your game.
* **Socialize**: Rant rooms to discuss games. Also a voice chat over the table to talk to your friends while playing.

Scaled up to 200+ weekly players.

`

export const metadata: Metadata = {
    title: "Poker application",
    description: "A collection of projects and work i did in my Software Developer journey.",
  };

const Karaoke = () => {

    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">Poker Application</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            {/* <Video src={'https://storage.googleapis.com/ank1015/karaoke.mp4'} /> */}
            <Image src={'https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/nerdee-poker.png'} alt="poker-application-landing" height={200} width={200} sizes="100vw" className="w-full h-auto" />
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