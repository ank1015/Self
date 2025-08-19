import type { Metadata } from "next";
import { Separator } from '@/app/page';
import Video from 'next-video';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";

const content = `
A web-based spreadsheet with an AI agent. The agent can answer questions about the data in the spreadsheet and take actions on it.

The main features of this product are:
* **Indexing**: The system first indexes the sheet whenever new data is added. This is different from regular text and code indexing. The spreadsheet data is already in tabular form, which gives it more meaning than just regular text. We can take advantage of that to create an index through which an LLM can efficiently find data from the spreadsheet without reading the whole sheet. It is similar to how a human would do it.
* **The Agent**: The agent has access to various tools like a Python interpreter and spreadsheet action tools. The agent can gain insights by running Python scripts over the spreadsheet data and perform actions like updating the data using the spreadsheet tools.
 
Tech Stack used:
* **Python Backed**
* **NextJs Frontend**
* **OpenAI and Gemini Models**

`


export const metadata: Metadata = {
    title: "AI Spreadsheets",
    description: "Cursor for spreadsheets. An AI agent embedded in a spreadsheet that analyzes the data, answer questions and perform actions in the spreadsheet.",
  };

const ExplainableRag = () => {

    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">AI Spreadsheets</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            <Video src={'https://storage.googleapis.com/ank1015/cnMLVQDHqynMa8y8%20(1).mp4'} />
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

export default ExplainableRag