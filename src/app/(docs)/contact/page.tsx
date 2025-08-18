/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Separator } from '@/app/page';
import AiProjects from '@/components/ai-projects';
import BeforeAiProjects from '@/components/before-ai-projects';
import { About } from "@/features/profile/componente/about";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";
import { USER } from "@/data/user";

export const metadata: Metadata = {
    title: "Contact",
    description: "A collection of projects and work I did in my Software Developer journey.",
  };

const Contact = () => {
    return (
        <>
        <div className="screen-line-after px-4">
            <h1 className="text-3xl font-semibold">Contact</h1>
        </div>

        {/* <div className="screen-line-after p-4">
            <p className="font-mono text-sm text-balance text-muted-foreground">
                {metadata.description}
            </p>
        </div> */}

        <Separator />

        <div className='screen-line-before'>

        </div>
        <PanelContent className="mt-4 mb-40">
            <Prose>
                <Markdown>
                    {`You can contact me at [contact@ank1015.com](mailto:contact@ank1015.com) or message me on [X (twitter)](https://x.com/ank1015).`}
                </Markdown>
            </Prose>
        </PanelContent>

        <svg
            className="h-28 w-full text-border"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 514 258"
            fill="none"
        >
            <path
            d="M65 193v64h128v-64H65Zm0 0H1V65h64m0 128V65m384 0H321v128h128m0-128V1H257v256h192v-64m0-128v128m0-128h64v128h-64M65 65h128V1H65v64Z"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            />
      </svg>

        <div className="h-40" />

        </>
    )
}

export default Contact