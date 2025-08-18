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
    title: "Hire",
    description: "A collection of projects and work I did in my Software Developer journey.",
  };

const content = `
  Hey, I am looking for a full time role in a company/startup that is researching or building Agentic AI applications in any domain.

  Pros of hiring me:
  * I am really really passionate passionate about this field and learning more while building
  * I am willing to work 80+ hours week. Having worked on my own startups and projects for majority of last 2 years, it's a routine for me.
  * I get things done quickly. Even if I don't know something, I usually find a way to get it done.

`

const WorkPage = () => {
    return (
        <>
        <div className="screen-line-after px-4">
            <h1 className="text-3xl font-semibold">I am looking for a full time role</h1>
        </div>

        {/* <div className="screen-line-after p-4">
            <p className="font-mono text-sm text-balance text-muted-foreground">
                {metadata.description}
            </p>
        </div> */}

        <Separator />

        <div className='screen-line-before'>

        </div>

        <PanelContent className="mt-4">
            <Prose>
                <Markdown>
                    {content}
                </Markdown>
            </Prose>
        </PanelContent>

        <PanelContent className="mt-8">
            <Prose>
                <Markdown>
                    {`Checkout out my recent work and experience [here](https://ank1015.com/work).`}
                </Markdown>
            </Prose>
        </PanelContent>

        <PanelContent className="mt-4">
            <Prose>
                <Markdown>
                    {`You can contact me at [contact@ank1015.com](mailto:contact@ank1015.com).`}
                </Markdown>
            </Prose>
        </PanelContent>

        <div className="h-20" />

        </>
    )
}

export default WorkPage