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
import { BackButton } from "@/components/back-button";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Goals & LLM's",
    description: "This post breaks down Agentic Systems from first principles to build up a foundation for Workflows and Agents.",
  };

const GoalsAndLLMs = () => {
    return (
        <div className="mx-8 pb-20">
            <div className="mt-[min(11vh,100px)]">
                <div className="flex items-center space-x-4">
                    <BackButton />
                    <TypographyH1 className="text-[#34322D] font-satoshi">Goals & LLM&apos;s</TypographyH1>
                </div>
                <div className="mt-10 flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <Button className="bg-[#F8F8F7] text-[#34322D] border-[#DEDEDD]" variant={'outline'} size={'icon'}>
                            <Calendar color="#34322D" className="text-[#34322D]" />
                        </Button>
                        <TypographySmall className="text-[#34322D]">Thrusday, July 31</TypographySmall>
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
                            Lately, I&apos;ve been obsessed with Agentic Systems. If you use X or LinkedIn, you&apos;ve probably seen the terms AI agents, AI Workflows and statements like &quot;Automate your work&quot;, &quot;This agent will replace you&quot;, etc. While the demos are exciting, I found myself wanting to cut through the hype and understand how they really work from the ground up.
                        </TypographyP>
                        <TypographyP className="text-[#34322D]">
                            So, I decided to go back to first principles. Forget the fancy frameworks for a moment. If I were to build a system that uses an LLM to complete a goal, what are the absolute, non-negotiable building blocks? 
                        </TypographyP>
                        <TypographyP className="text-[#34322D]">
                            This is the first in a three-part series where I&apos;ll share my journey of breaking down agentic systems into simple, logical components. Let&apos;s start at the very beginning.
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        It All Starts with a Goal (G)
                    </TypographyH3>
                    <div>
                        <TypographyP className="text-[#34322D]">
                            Before you can build anything, you need to know what you want to accomplish. Every system is built to achieve a <b>Goal</b>. Think of a goal G as:
                        </TypographyP>
                        <TypographyList items={[`A desired final state (“Send an email”, "Get morning coffee").`, `A success recogniser R—something (or someone) that can say, “Yes, we’re done.”`]} />
                        <TypographyBlockquote>Keep it simple: for now, R is just a yes/no switch. Later can refine it to handle “good-enough” cases.</TypographyBlockquote>
                        <TypographyP className="text-[#34322D]">
                            As I thought about it, I realized not all goals are same. To get organized, I sorted them into three simple categories:
                        </TypographyP>
                        <TypographyList
                            items={[
                                <>
                                    <b>Class A: The &quot;Recipe Exists&quot; Goals.</b> These are goals that I know are achievable because a procedure to get them done already exists . A perfect example is booking a flight from SF to New York for next Tuesday. It might have a few steps, but there is a known, reliable path to get it done.
                                </>
                                ,
                                <>
                                    <b>Class B: The &quot;Figure It Out&quot; Goals.</b> These are goals where I don&apos;t know for sure if there&apos;s a clear path to success . My goal might be to &quot;write a viral blog post.&quot; I can try different things, but there&apos;s no guaranteed recipe for virality. The procedure is open-ended, and I just have to keep working until I (hopefully) complete the goal.
                                </>
                                ,
                                <>
                                    <b>Class C: The &quot;Nope, Can&apos;t Do It&quot; Goals. </b> These are goals that are known to be impossible under the rules of our universe . For instance, if my goal is to &quot;Building a perpetual motion machine&quot; no procedure in existence—no matter how clever—is ever going to achieve it . We can safely ignore these for now.
                                </>
                            ]}
                        />
                    </div>
                    <TypographyH3 className="my-10">
                        Enter the Procedure (ρ)
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            For any achievable goal (Class A or B), I need a Procedure (ρ). This is just my term for any finite recipe that produces actions to move me closer to my goal .
                        </TypographyP>
                        <TypographyP>
                            This &quot;recipe&quot; isn&apos;t just a simple checklist. In my definition, a procedure can be sophisticated:
                        </TypographyP>
                        <TypographyList 
                            items={[
                                <>
                                    It can be <b>adaptive</b>, changing its actions based on new information.
                                </>
                                ,
                                <>
                                    It can use <b>randomness</b> to try different things.
                                </>
                                ,
                                <>
                                    It can even <b>consult oracles</b> (or experts) when it gets stuck.
                                </>
                                ,
                            ]}
                        />
                        <TypographyP>
                            With a Class A goal, at least one ρ already exists. For Class B we may have to discover ρ, and Class C means no ρ will ever work.
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        The Superpower: LLMs as Action-Takers
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            This is where things get exciting. We have this incredible new tool: <b>the Large Language Model</b> (LLM). We can think of LLM as an intelligent black box that takes text as input and produces relevant text as output.
                        </TypographyP>
                        <TypographyP>
                            But the real &quot;aha!&quot; moment comes with that we can instruct the LLM to output its response in a <b>structured format</b>, like JSON or a list of actions.
                        </TypographyP>
                        <TypographyP>
                            Why is this a superpower? Because structured text isn&apos;t just for reading; it&apos;s for doing. We can use the LLM&apos;s output into a direct command to run any other part of the system as we already know which how its format gonna be.
                        </TypographyP>
                        <TypographyP>
                            For example, We can give the LLM a prompt:
                        </TypographyP>
                        <TypographyBlockquote>
                            &quot;I want to know the weather in New York.&quot;
                        </TypographyBlockquote>
                        <TypographyP>
                            But the LLM does not have real time knowledge. So instead of just getting a sentence back, We can tell it to give me a command:
                        </TypographyP>
                        <TypographyBlockquote>
                            &#123; &quot;function&quot;: &quot;get_weather&quot;, &quot;parameters&quot;: &#123; &quot;city&quot;: &quot;New York&quot; &#125; &#125;
                        </TypographyBlockquote>
                        <TypographyP>
                            Now we can use this output to run the function get_weather with the appropriate parameters. Suddenly, the LLM has gone from a conversationalist to an action-taker. It’s the engine we can use to execute the individual steps in any procedure.
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        Next Up: Assembling the Pieces
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            So, we have three foundational building blocks:
                        </TypographyP>
                        <TypographyList
                            items={[
                                <>
                                    A clear <b>Goal</b>.
                                </>
                                ,
                                <>
                                    A <b>Procedure</b> to achieve it.
                                </>
                                ,
                                <>
                                    An <b>LLM</b> to execute the steps in that procedure.
                                </>
                            ]}
                        />
                        <TypographyP>
                            Now a question arises that sits at the heart of modern AI design: <b>Who is in charge of creating the procedure</b> to reach the goal?
                        </TypographyP>
                        <TypographyP>
                            Am I, the human, writing the step-by-step recipe? Or am I giving the LLM the end goal and trusting it to figure out the recipe on its own?
                        </TypographyP>
                        <TypographyP>
                            How we answer that question is, the core difference between a Workflow and an Agent. And that&apos;s exactly what I&apos;ll break down in Part 2.
                        </TypographyP>
                    </div>
                    <Separator className="my-8" />
                </div>
            </div>
        </div>
    )
}

export default GoalsAndLLMs;