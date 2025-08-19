import type { Metadata } from "next";
import { Separator } from '@/app/page';
import Video from 'next-video';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";
import { USER } from "@/data/user";



export const metadata: Metadata = {
    title: "Agentic Python Notebook",
    description: "Cursor for Python Notebooks. This is an agentic notebook that implements, executes, and improves on its mistakes in notebook cells.",
  };

const content = `
A web-based Python notebook with an AI agent that lives inside it. Check out this demo where the agent implements an LSTM model inside the notebook to predict the future price of $AAPL.

The main features of this product are:
* **Planning**: The agent first analyzes the user query to create a plan for it. This helps the agent stay on track, increases its accuracy by 40%, and reduces the context by approximately 50%.
* **Human in the loop**: The agent always asks the user before executing any cell. The user can also interrupt the agent at any point to add more context or give feedback.
* **Self-improvement**: The outputs of the cell execution are fed back to the agent. If any error occurs in the code, the agent quickly analyzes and corrects it before moving on to the next step. In the demo, the agent's code gave an error in cell 7, but it quickly recognized and corrected it before proceeding.
* **Documentation**: The agent generate and inserts Markdown cells wherever needed to keep the notebook well documented.

This is a multi agent system. It consists of a Plan Maker and many different ReAct (Reason + Act) style sub agents that executes an individual step until it is completed without any errors.

Tech Stack used:
* **Python Backend**
* **NextJs Frontend**
* **OpenAI and Gemini Models**

Scope for Improvements and Future plan:
* Make the UI more realtime to show the model's reasoning and token streaming.
* Show the changes/new edits in the cell and ask approval for the user.
* Add support for file systems to include user csv's and other files.
* Add support for other models.

`

const AgenticNotebook = () => {


    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">Agentic Python Notebook</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            <Video src={'https://storage.googleapis.com/ank1015/ai_notebook.mp4'} />
        </div>

        <PanelContent>
            <Prose>
                <Markdown>
                    {content}
                </Markdown>
            </Prose>
        </PanelContent>

        <div className="h-20" />
        </>
    )
}

export default AgenticNotebook