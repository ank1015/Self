/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Separator } from '@/app/page';
import AiProjects from '@/components/ai-projects';
import BeforeAiProjects from '@/components/before-ai-projects';

export const metadata: Metadata = {
    title: "Work",
    description: "A collection of projects and work I did in my Software Developer journey.",
  };

const WorkPage = () => {
    return (
        <>
        <div className="screen-line-after px-4">
            <h1 className="text-3xl font-semibold">Work</h1>
        </div>

        <div className="screen-line-after p-4">
            <p className="font-mono text-sm text-balance text-muted-foreground">
                {metadata.description}
            </p>
        </div>

        <Separator />

        <div className='screen-line-before'>

        </div>

        <AiProjects />
        <BeforeAiProjects />
        </>
    )
}

export default WorkPage