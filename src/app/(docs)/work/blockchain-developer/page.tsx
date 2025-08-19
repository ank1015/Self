import type { Metadata } from "next";
import { Separator } from '@/app/page';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";
import Image from "next/image";

const content = `
I started my career as a blockchain developer in July 2021. Here are major things i did during that time period

* Worked as a blockchain developer and Researcher for a year in a startup building a on-chain Perpetuals and Options Exchange.
* Won over $20K in various online as well as offline hackathons like ETH Global Online, ETH London, BNB Chain HackaEvolution, etc.
* Founded a blockchain club in my university and led a team to win the gold medal in blockchain related problem statement for the university.

`

export const metadata: Metadata = {
    title: "Blockchain Developer",
    description: "My journey as a blockchain full-stack developer. During this period, i worked in some startups and won multiple online and offline hackathon's.",
  };

const Karaoke = () => {

    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">Blockchain Developer</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            {/* <Video src={'https://storage.googleapis.com/ank1015/karaoke.mp4'} /> */}
            <Image src={'https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/Blockchain%20developer.png'} alt="poker-application-landing" height={200} width={200} sizes="100vw" className="w-full h-auto" />
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