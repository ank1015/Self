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

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Workflows vs Agents",
    description: "This post delves into using different types of Agentic systems.",
  };


const WorkflowsVsAgents = () => {
    return (
        <div className="mx-8 pb-20">
            <div className="mt-[min(11vh,100px)]">
                <div className="flex items-center space-x-4">
                    <BackButton />
                    <TypographyH1 className="text-[#34322D] font-satoshi">Workflows Vs Agents</TypographyH1>
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
                            In the last post, We laid out basic building blocks for understanding agentic systems: It all starts with a <b>Goal</b>, you need a <b>Procedure</b> to get there, and you can use an <b>LLM</b> as a powerful engine to execute the steps.
                        </TypographyP>
                        <TypographyP className="text-[#34322D]">
                            This led us to a fundamental question: When We building a system, who is actually in charge of creating the procedure? Are we the one designing the step-by-step plan, or is the LLM?
                        </TypographyP>
                        <TypographyP className="text-[#34322D]">
                            I think, the answer to this question is the single biggest difference between what I call a <b>AI Workflow</b> and what I call an <b>AI Agent</b>.
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        The Workflow: Where We are the Architect
                    </TypographyH3>
                    <div>
                        <TypographyP className="text-[#34322D]">
                            The first path is the one We feel most in control of. In a Workflow, We are the architect. We explicitly write down the entire procedure, breaking the goal down into a series of fixed tasks .
                        </TypographyP>
                        <TypographyP className="text-[#34322D]">
                            The LLM&apos;s role here is to be a fantastic employee. It doesn’t improvise; it just executes the one or more tasks we assigned it, exactly as we told it to.
                        </TypographyP>
                        <TypographyP>
                            For example, imagine We want to automate managing customer emails. We can build a workflow like this:
                        </TypographyP>
                        <TypographyList
                            items={[
                                <>
                                    <b>Step 1:</b> Our system scans my inbox for new customer emails.
                                </>
                                ,
                                <>
                                    <b>Step 2:</b> It sends the email content to an LLM with a precise prompt: &quot;Read this email and categorize it as either a &apos;Billing Inquiry&apos; or a &apos;Technical Support&apos; question.&quot;
                                </>
                                ,
                                <>
                                    <b>Step 3:</b> Based on the LLM&apos;s structured output, an automation rule forwards the email to the correct department&apos;s queue.
                                </>
                            ]}
                        />
                        <TypographyP>
                            We call this approach <b>rigid</b>, and that’s its strength . The process is predictable and reliable. This is perfect for systems designed for goals that always follow the same procedure .
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        The Agent: Where the LLM Is the Architect
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            The second path is where We hand over control. With an Agent, We don&apos;t give the LLM a detailed procedure. We give it the high-level goal and ask it to figure out the procedure on its own . The LLM acts as the manager, operating in a loop: it decides on a step, acts, observes the result, and then decides the next step, repeating until the goal is met .
                        </TypographyP>
                        <TypographyP>
                            Imagine a much more complex goal, like &quot;Improve customer satisfaction.&quot; This is too broad for a simple workflow. We give this goal to an agent. It might decide to:
                        </TypographyP>
                        <TypographyList 
                            items={[
                                <>
                                    Analyze recent customer support tickets to find common complaints.
                                </>
                                ,
                                <>
                                    Based on that, draft a new FAQ page to address these issues.
                                </>
                                ,
                                <>
                                    Then, monitor if the number of tickets about those issues decreases.
                                </>
                                ,
                                <>
                                    If not, it might try a new strategy, like drafting better template replies for the support team.
                                </>
                            ]}
                        />
                        <TypographyP>
                        This approach is incredibly <b>dynamic</b> . It can change its plan on the fly, which is what makes agents so powerful for systems that have to handle a wide variety of goals, where each goal might need a <b>completely different procedure</b>.
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        The Ideal vs. The Reality: Why Not Use Agents for Everything?
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            This leads to a logical question: If an agent is so powerful and flexible, why not use it for everything? Ideally, a sufficiently intelligent agent could achieve whatever a workflow can, and much more .
                        </TypographyP>
                        <TypographyP>
                            But the reality, right now, is that the LLMs are not yet perfectly intelligent . They have real-world limitations. They can be less reliable, they hallucinate, have strict context limits that cause them to forget information, suffer from higher latency (slowness), and are often more expensive to run for simple tasks .
                        </TypographyP>
                        <TypographyP>
                            This is the big trade-off. Because of these current downsides, for goals with a fixed procedure where we need high reliability and efficiency, a workflow is often the smarter, more practical choice today .
                        </TypographyP>
                        <TypographyP>
                            So why bother with agents at all? Because building a custom workflow for every single potential goal is often impossible or would require a massive amount of upfront work. We can&apos;t program a workflow for every unique customer problem or research question. Agents make sense when we need a system to handle a vast, unpredictable range of goals, and we are willing to accept their current downsides to gain that flexibility.
                        </TypographyP>
                    </div>
                    <TypographyH3 className="my-10">
                        Cheat Sheet
                    </TypographyH3>
                    <div>
                        <TypographyTable 
                            headers={['Feature', 'Workflow', 'Agent']}
                            rows={[
                                [`Who's the Architect?`, "Us, the system designer", "The LLM"], 
                                ["Control Flow", "Static, predefined", "Dynamic, context-aware"],
                                ["Reliability", "High", "Low"],
                                ["Adaptability", "Low", "High"],
                                ["Transparency", "High", "Low"],
                                ["Cost / Latency", "Low", "High"],
                                ["Best For", "Systems where goals share the same procedure.", "Systems that handle goals requiring different procedures."]
                            ]}
                        />
                    </div>
                    <TypographyH3 className="my-10">
                        Next Up: The Hybrid approach
                    </TypographyH3>
                    <div>
                        <TypographyP>
                            So We have two main approaches: the controlled Workflow and the creative Agent. But the more I think about it, the more I realize &quot;versus&quot; is the wrong word. The most powerful solutions I&apos;ve seen aren&apos;t purely one or the other.
                        </TypographyP>
                        <TypographyP>
                            In the next post, We will dive deep into this middle ground. I’ll share my personal framework for deciding when to lean one way or the other and explore the powerful hybrid patterns that combine the reliability of workflows with the flexibility of agents. Let&apos;s try to figure out how these two concepts can work together, not just against each other.
                        </TypographyP>
                    </div>
                    <Separator className="my-8" />
                </div>
            </div>
        </div>
    )
}

export default WorkflowsVsAgents;