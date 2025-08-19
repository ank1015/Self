import type { Metadata } from "next";
import { Separator } from '@/app/page';
import { BackButton } from "@/components/back-button";
import { PanelContent } from "@/components/panel";
import { Prose } from "@/components/ui/typography";
import { Markdown } from "@/components/markdown";
import Image from "next/image";

const content = `
I was looking to build my own advanced coding multi agent system. This was the first step in that process. 

For a LLM to answer questions from a codebase it needs right context. But just a simple semantic RAG doesn't work that good.

Here are the features i implemented in this project?:
* **Incremental indexing**: We don't want to index the whole codebase when something in the codebase changes. For this, I implemented an incremental indexing strategy in which we watch files in which changes occur (using SHA-256 hashing) and only indexing them again.
* **Lexical Indexing**: This is the keyword related search in the codebase. Address the need of exact-word matches.
* **Semantic Indexing**: This is the meaning related search in the codebase. Done using embeddings model and stored in vector database.
* **Structural Indexing**: The first two indexes treats codebase as tokens or concepts. But since code has a "Syntax" and "Structure", we can take advantage of that too. We use AST's for this.
* **Graph Based Indexing**: (Still in progress) This index captures the dynamic part of the codebase, the relationships and data flows that connect disparate parts into a functioning whole. I am trying to use CPG's for this.

Based on the user query, we can give different weights to different indexed to create a good context for the LLM to answer and dig further on the query.  

`

export const metadata: Metadata = {
    title: "Deep Codebase Indexer",
    description: "An Indexer that watches your codebase for any changes and indexes it with various techniques like semantic, structural, lexical and graph based indexing to create context for LLM's.",
  };

const Karaoke = () => {

    return (
        <>
        <div className="screen-line-after px-4 flex items-center space-x-8">
            <BackButton />
            <h1 className="text-3xl font-semibold">Deep Codebase Indexer</h1>
        </div>

        <Separator />

        <div className="screen-line-before md:py-8 md:px-8 py-4 px-4">
            {/* <Video src={'https://storage.googleapis.com/ank1015/karaoke.mp4'} /> */}
            <Image src={'https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/codebas-indexer.png'} alt="poker-application-landing" height={200} width={200} sizes="100vw" className="w-full h-auto" />
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

export default Karaoke