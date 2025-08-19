import type { Metadata } from "next";
import { Separator } from '@/app/page';
import Video from 'next-video';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";

const content = `
A RAG system that answers questions from your documents. Along with the answer, it also highlights the parts of the document, it used to answer the question, the re-ranking of the parts and the reasoning of the final response.

This makes it better to trust the AI and it's reasoning specially for domains like law, finance, etc.

`

export const metadata: Metadata = {
    title: "Explainable RAG",
    description: "A RAG system that not only answers your queries from your documents but also highlights the parts of pdf's used to answer that query to establish trust.",
  };

const ExplainableRag = () => {

    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">Explainable RAG</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            <Video src={'https://storage.googleapis.com/ank1015/explainable-rag.mp4'} />
        </div>

        <PanelContent>
            <Prose>
                <Markdown>
                    {content}
                </Markdown>
            </Prose>
        </PanelContent>

        <div className="h-16" />

        </>
    )
}

export default ExplainableRag