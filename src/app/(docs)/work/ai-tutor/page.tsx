import type { Metadata } from "next";
import { Separator } from '@/app/page';
import Video from 'next-video';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";

const content = `
A conversational AI agent that teaches a topic while controlling a 2D canvas to write notes while teaching, giving a visual aspect to make it feel like a real classroom.

The main features of this product are:
* **Planning**: First an agent plans the lesson and creates a structure for it based on the user query and depth.
* **Teaching**: A conversational voice agent starts teaching one section after the other while asking the user for any doubts. The user can also interrupt the agent at any point to ask a question or add more context.
* **Note Making**: The conversational agent fires events to a canvas agent to write stuff on the whiteboard. The agent intelligently understands the placing of prior texts and paddings so the notes can be created structurally and no overlaps takes place.

Future plans:
* Introduce diagrams. Allow the canvas agent to make diagrams and insert images so the notes can be even more visual.
* Make the whiteboard collaborative and allow the user to add stuff on it with the agent.

`

export const metadata: Metadata = {
    title: "AI Tutor",
    description: "An AI tutor that explains you concepts in a live conversational class and also manages its own whiteboard to write notes on while teaching.",
  };

const AiTutor = () => {

    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">AI Tutor</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            <Video src={'https://storage.googleapis.com/ank1015/ai-tutor.mp4'} />
        </div>

        <PanelContent>
            <Prose>
                <Markdown>
                    {content}
                </Markdown>
            </Prose>
        </PanelContent>

        </>
    )
}

export default AiTutor