import type { Metadata } from "next";
import { Separator } from '@/app/page';
import Video from 'next-video';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";
import { USER } from "@/data/user";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExampleReport1 } from "@/components/example-reports";



export const metadata: Metadata = {
    title: "Agentic Deep Researcher",
    description: "A Deep Researcher agent that changes it's research path as it gains new information. Scored 2nd on deep research bench above openai deep researcher.",
  };

const content = `
A Deep Researcher system that iterates and updates its research path as it finds new information across web pages and PDFs, including reports and academic papers.

**It scored 47.29% in the overall category, above the OpenAI o3 researcher in the Deep Research Bench.**
(I couldn't run all the benchmark queries as I ran out of API credits.)

Check out this example report written by the agent:
`

const content2 = `
### Architecture

The entire system consists of two main components: the **Researcher Agent** and the **Report Writer Agent**.

The Researcher Agent carries out the research process in iterations. It first breaks down the query using first principles and creates an initial plan for the first iteration. It then finds 15–20 web sources and PDFs to gather relevant information and stores this in a knowledge base. This information is then used to make the plan for the next iteration. This process continues for 8–10 iterations until the topic has been covered with sufficient breadth and depth.

The Writer Agent uses the knowledge base to write a report. First, a planner agent creates a structure for the report, including its sections and subsections. Then, individual section writer agents write the sections, and the final report is generated. I noticed that dividing the report into smaller sections and writing them separately produces a better report than writing it all at once, although this does increase the cost somewhat due to repetitive input context.

### Comparison's from other agents

Research is an iterative process. When you start searching, you find something new and then you research more about the new stuff. This iterative workflow has allowed the system write better reports.

Still a lot of prompt and cost optimization to do.

`

const AgenticNotebook = () => {


    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">Agentic Deep Researcher</h1>
        </div>

        <Separator />

        <div className="flex flex-col md:flex-row gap-4 px-8 py-8">
            <div className="relative w-full md:w-1/2 h-64">
                <Image
                    src={'https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/deep-research.png'}
                    alt="benchmarks"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>
            <div className="relative w-full md:w-1/2 h-64">
                <Image
                    src={'https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/GyZbYaNXoAMQlgQ.jpeg'}
                    alt="other-benchmarks"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                />
            </div>
        </div>

        

        <PanelContent>
            <Prose>
                <Markdown>
                    {content}
                </Markdown>
            </Prose>
        </PanelContent>

        <div className="flex md:flex-row flex-col justify-around py-8 px-4 gap-4 ">
            <ExampleReport1 />
        </div>

        <PanelContent>
            <Prose>
                <Markdown>
                    {content2}
                </Markdown>
            </Prose>
        </PanelContent>

        <div className="h-20" />
        </>
    )
}

export default AgenticNotebook