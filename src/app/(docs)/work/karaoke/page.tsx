import type { Metadata } from "next";
import { Separator } from '@/app/page';
import Video from 'next-video';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";

const content = `
A karaoke application that breaks down a song into its vocals and instrumental components to mix and play with it.

This project was vibe coded in a day when i was playing with new AI tools. Inspired by a twitter post.
`

export const metadata: Metadata = {
    title: "Vibe karaoke",
    description: "A collection of projects and work i did in my Software Developer journey.",
  };

const Karaoke = () => {

    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">Vibe Karaoke</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            <Video src={'https://storage.googleapis.com/ank1015/karaoke.mp4'} />
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