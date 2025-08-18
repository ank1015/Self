


import { TypographyH1 } from "@/components/typography/h1";
import { TypographySmall } from "@/components/typography/small";
import { Button } from "@/components/ui/button";
import { BookText, Calendar, Calendar1, Monitor } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { TypographyP } from "@/components/typography/p";
import { TypographyH2 } from "@/components/typography/h2";
import { TypographyH3 } from "@/components/typography/h3";
import { TypographyList } from "@/components/typography/list";
import { TypographyBlockquote } from "@/components/typography/blockquote";
import { TypographyInlineCode } from "@/components/typography/inline-code";
import { TypographyTable } from "@/components/typography/table";
import { BackButton } from "@/components/back-button";

const WorkflowsAndAgents = () => {
    return (
        <div className="mx-8 pb-20">
            <div className="mt-[min(11vh,100px)]">
                <div className="flex items-center space-x-4">
                    <BackButton />
                    <TypographyH1 className="text-[#34322D] font-satoshi">Workflows and Agents</TypographyH1>
                </div>
                <div className="mt-10 flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <Button className="bg-[#F8F8F7] text-[#34322D] border-[#DEDEDD]" variant={'outline'} size={'icon'}>
                            <Calendar color="#34322D" className="text-[#34322D]" />
                        </Button>
                        <TypographySmall className="text-[#34322D]">Friday, Aug 1</TypographySmall>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button className="bg-[#F8F8F7] text-[#34322D] border-[#DEDEDD]" variant={'outline'} size={'icon'}>
                            <Monitor color="#34322D" className="text-[#34322D]" />
                        </Button>
                        <TypographySmall className="text-[#34322D]">Tech</TypographySmall>
                    </div>
                </div>
                <Separator className="my-4" />
                <div className="mt-10">
                    <div>
                        <TypographyP className="text-[#34322D]">
                            In the last post, We laid out the two ends of a spectrum: the rigid Workflow and the dynamic Agent. We framed it as a choice based on trade-offs. But the most interesting work happens not at the poles, but in the vast space in between.
                        </TypographyP>
                        <TypographyP className="text-[#34322D]">
                            The real question isn&apos;t &quot;Workflow vs. Agent.&quot; It&apos;s &quot;What&apos;s the right blend of a workflow and an agent?&quot;
                        </TypographyP>
                        <TypographyP className="text-[#34322D]">
                            In this post, I want to share the mental framework I&apos;m developing to answer that question and explore the powerful hybrid systems that are emerging from this new way of thinking.
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        Decision Framework: When to Lean Which Way?
                    </TypographyH3>
                    <div>
                        <TypographyTable 
                            headers={['Question', 'Lean Workflow when…', 'Lean Agent when…']}
                            rows={[
                                [`Do We already know a solid procedure?`, `The path is a clear "Yes."`, `The path is "No / only partially" known.`], 
                                ["How tight are the SLA & compliance needs?", "Need millisecond responses & strict audit trails.", "Timing is flexible & the task is exploratory."],
                                ["What’s the cost of a bad step?", "High (e.g., it moves money or deletes data).", "Moderate, and mistakes are recoverable."],
                                ["Does the domain change often?", "Rarely. The rules are stable.", "Daily, or the environment is unpredictable."],
                            ]}
                        />
                    </div>
                    <TypographyH3 className="my-10">
                        The Axis of Autonomy
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            On the far left of the axis, We have the fully deterministic Workflow. It&apos;s predictable and reliable. On the far right, I have the non-deterministic Agent, which is creative and autonomous.
                        </TypographyP>
                        <TypographyP>
                            (Diagram Idea: A horizontal line. The left end is labeled &quot;Workflow (Deterministic & Reliable)&quot;. The right end is labeled &quot;Agent (Non-Deterministic & Flexible)&quot;. The space in between is labeled &quot;Hybrid Systems&quot;.)
                        </TypographyP>
                        <TypographyP>
                            The most robust and useful systems we have right now are Hybrid Systems that intentionally pick a spot somewhere in the middle of this axis.
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        Architectural Patterns for Convergence: The Blueprints
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            A hybrid system combines the reliability of workflows with the adaptability of agents. There are two main ways to build one:
                        </TypographyP>
                        <TypographyList
                            items={[
                                <>
                                    <b>Sequential Orchestration (The Assembly Line):</b> This is the most straightforward pattern. We can think of it as a digital assembly line where specialized agents are chained together in a predefined, linear sequence. Each agent does its job and passes its work to the next one down the line.
                                </>
                                ,
                                <>
                                    <b>Concurrent Orchestration (The Expert Panel):</b> This pattern is like asking a panel of experts for their opinion all at once. A request is broadcast to multiple agents who work in parallel, each tackling the problem from a different angle.
                                </>
                                ,
                                <>
                                    <b>Handoff Orchestration (The Smart Router):</b> I think of this as an intelligent dispatcher. An initial &quot;triage&quot; agent receives a task, figures out what it&apos;s about, and then dynamically &quot;hands it off&quot; to the most appropriate specialist agent in my fleet.
                                </>
                                ,
                                <>
                                    <b>Group Chat Orchestration (The Team Meeting):</b> This is the most advanced pattern, and it&apos;s the one that feels the most like the future. It&apos;s like putting a team of agents into a shared chat room to solve a problem together, often with a &quot;manager&quot; agent facilitating the conversation.
                                </>
                            ]}
                        />
                    </div>
                    <TypographyH3 className="my-10">
                        New Mental Model: The Fleet and the Assembly Line
                    </TypographyH3>
                    <div>
                            <TypographyList
                                items={[
                                    <>
                                        <b>Workflows are the Backbone: </b>The workflow is the stable, predictable &quot;assembly line&quot;. We can use it for the reliable and auditable parts of the process—initial data intake, pre-processing, and managing the final state of a task (like closing a ticket).
                                    </>
                                    ,
                                    <>
                                        <b>Agents are the Specialized Artisans: </b> Along this assembly line, We have &quot;fleet&quot; of skilled, adaptable agents. We can call on these specialists to perform the complex or custom steps—like complex reasoning, handling messy data, or engaging in a conversation.
                                    </>
                                ]}
                            />
                            <TypographyP>
                                Ideally, an all-powerful agent capable of handling all workflows would be sufficient for a system, but that&apos;s not possible yet. So, we need to find a sweet spot to minimize the trade-offs according to our requirements.
                            </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        Putting it up together
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            Understanding Agents and Workflows from first principles help design better Agentic systems. How can you design workflows to resemble Agents? Finding the sweet spot is the key to building robust and useful systems. 
                        </TypographyP>
                    </div>
                    <Separator className="my-8" />
                </div>
            </div>
        </div>
    )
}

export default WorkflowsAndAgents;