/* eslint-disable @next/next/no-img-element */
import {
    Cursor,
    CursorFollow,
    CursorProvider,
  } from '@/components/animate-ui/components/cursor';  
import Link from 'next/link';
import type { Metadata } from "next";
import { Separator } from '@/app/page';

const articles = [
    {
        image: '/blog2.png',
        heading: 'Workflows and Agents',
        description: 'Wide Research marks a milestone in our exploration of the scaling laws of AI agents, but it\'s just the beginning.',
        imageDescription: 'Agentic Systems',
        link: '/blog/workflows-and-agents'
    },
    {
        image: '/blog3.png',
        heading: 'Workflows vs Agents',
        description: `This post shares the local optima we arrived at through our own "SGD". If you're building your own AI agent, I hope these principles help you converge faster.`,
        imageDescription: 'Agentic Systems',
        link: '/blog/workflows-vs-agents'
    },
    {
        image: '/blog1.png',
        heading: `Goals & LLM's`,
        description: 'This post breaks down Agentic Systems from first principles to build up a foundation for Workflows and Agents.',
        imageDescription: 'Agentic Systems',
        link: '/blog/goals-and-llms'
    },
]

export const metadata: Metadata = {
    title: "Blog",
    description: "A collection of articles on AI, Agentic Systems, ideas and opinions.",
  };

const BlogPage = () => {
    return (
        <>
        <div className="screen-line-after px-4">
            <h1 className="text-3xl font-semibold">Blog</h1>
        </div>

        <div className="screen-line-after p-4">
            <p className="font-mono text-sm text-balance text-muted-foreground">
                {metadata.description}
            </p>
        </div>
        <Separator />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 px-4 pb-8 pt-4 ">
                 {articles.map((article, index) => (
                    <Link href={article.link} key={index} className="cursor-pointer">
                        <div className="overflow-hidden">
                            {/* Image */}
                            <div className="aspect-[16/10] overflow-hidden rounded-[10px] flex flex-col justify-center items-center relative group">
                                <img 
                                    src={article.image} 
                                    alt={article.heading}
                                    className="w-full h-full object-cover group-hover:scale-130 transition-transform duration-500 ease-out absolute"
                                />
                                <div className='bg-[#EBF2FD] rounded-[5px] z-20 py-2 px-2 text-center'>
                                    <span className='font-satoshi font-bold text-[12px]'>{article.imageDescription}</span>
                                </div>
                            </div>                            
                            <div className="px-2 py-3 ">
                                <h2 className="text-lg font-bold font-satoshi text-[#34322E] mb-1 line-clamp-2">
                                    {article.heading}
                                </h2>
                                <p className="text-[#858481] font-medium font-satoshi text-[12px] line-clamp-2">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                        <CursorProvider>
                            <Cursor>
                            <svg
                                className="size-6 text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 40 40"
                            >
                                <path
                                    fill="currentColor"
                                    d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                                />
                            </svg>
                            </Cursor>
                            <CursorFollow>
                                <div className="bg-blue-500 text-white px-2 py-1 rounded-lg text-[10px] shadow-lg">
                                    Read Article
                                </div>
                            </CursorFollow>
                        </CursorProvider>
                    </Link>
                ))}
            </div>
            <div className="h-4" />
        </>
    )
}

export default BlogPage