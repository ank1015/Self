"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, SquareCode, GraduationCap, GitCompare, Table, Book, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function slugifyId(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
  {
    icon: SquareCode,
    title: "Agentic Python Notebook",
    subtitle: "Aug 2025",
    description:
      "Cursor for Python Notebooks. This is an agentic notebook that implements, executes, and improves on its mistakes in notebook cells.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/ai-notebook2.png",
    button: {
      url: "/work/agentic-python-notebook",
      text: "Watch Demo",
    },
  },
  {
    icon: GraduationCap,
    title: "Agentic Deep Researcher",
    subtitle: "July - Aug 2025",
    description:
      "A Deep Researcher agent that changes it's research path as it gains new information. Scored 2nd on deep research bench above openai deep researcher.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/deep-research.png",
      button: {
        url: "/work/agentic-deep-researcher",
        text: "Know more",
      },
  },
  {
    icon: GitCompare,
    title: "Deep Codebase Indexer",
    subtitle: "July 2025",
    description:
      "An Indexer that watches your codebase for any changes and indexes it with various techniques like semantic, structural, lexical and graph based indexing to create context for LLM's.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/codebas-indexer.png",
      button: {
        url: "/work/codebase-indexer",
        text: "Know more",
      },
  },
  {
    icon: Table,
    title: "Agentic Spreadsheet",
    subtitle: "Jun - July 2025",
    description:
      "Cursor for spreadsheets. An AI agent embedded in a spreadsheet that analyzes the data, answer questions and perform actions in the spreadsheet.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/ai-spreadsheet.png",
    button: {
      url: "/work/ai-spreadsheets",
      text: "Watch Demo",
    },
  },
  {
    icon: GraduationCap,
    title: "AI Tutor",
    subtitle: "Jun 2025",
    description:
      "An AI tutor that explains you concepts in a live conversational class and also manages its own whiteboard to write notes on while teaching.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/ai-tutor.png",
    button: {
      url: "/work/ai-tutor",
      text: "Watch Demo",
    },
  },
  {
    icon: Book,
    title: "Explainable RAG",
    subtitle: "May 2025",
    description:
      "A RAG system that not only answers your queries from your documents but also highlights the parts of pdf's used to answer that query to establish trust.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/explainable-rag.png",
    button: {
      url: "/work/explainable-rag",
      text: "Watch Demo",
    },
  },
  {
    icon: Music,
    title: "Vibe Music Karaoke",
    subtitle: "April 2025",
    description:
      "Vibe Coded karaoke app that decomposes a sony into its vocals and various instrumental components to mix and play with it. Inspired by a twitter post.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/karaoke.png",
    button: {
      url: "/work/karaoke",
      text: "Watch Demo",
    },
  },
];

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function AiProjects({
  entries = defaultEntries,
}: TimeLine_01Props) {
  const [showAll, setShowAll] = useState(false);

  // Restore persisted preference on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aiProjectsShowAll");
      if (stored !== null) {
        setShowAll(stored === "true");
      }
    } catch {}
  }, []);

  // Persist preference whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("aiProjectsShowAll", showAll ? "true" : "false");
    } catch {}
  }, [showAll]);

  const visibleEntries = showAll ? entries : entries.slice(0, 5);

  // Enable hash-based deep linking to specific cards
  useAiProjectsHashBehavior(entries, showAll, setShowAll);

  return (
    <>
        <div className="screen-line-after px-4" id="ai">
            <h1 className="text-lg font-semibold">AI</h1>
        </div>
      <section className="pb-16 pt-8">

        <div className="container">

          <div className="mx-auto mt-0 max-w-3xl space-y-16 md:space-y-16 px-4">
            {visibleEntries.map((entry, index) => {
              const isActive = true;
              const slug = slugifyId(entry.title);

              return (
                <div
                  key={index}
                  id={slug}
                  className="relative flex flex-col gap-4 md:flex-row md:gap-8 pb-8 screen-line-after"
                >
                  {/* Sticky meta column */}
                  <div className="top-4 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        "bg-muted text-muted-foreground"
                      }`}>
                        <entry.icon className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {entry.title}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {entry.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Invisible sentinel near the card title to measure proximity to viewport center */}
                  <div
                    aria-hidden
                    className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                  />

                  {/* Content column */}
                  <article
                    className={
                      "flex flex-col rounded-2xl border p-3 transition-all duration-300 group" +
                      (
                      "border-gray-200 dark:border-gray-800  dark:bg-black")
                    }
                  >
                    {entry.image && (
                      <Image
                        src={entry.image}
                        alt={`${entry.title} visual`}
                        className="mb-4 w-full h-72 rounded-lg object-cover group-hover:scale-120 transition-transform duration-500 ease-out"
                        loading={'eager'}
                        width={1000}
                        height={1000}
                        priority={index < 2}
                      />
                    )}
                    <div className="space-y-4">
                      {/* Header with improved typography */}
                      <div className="space-y-2">
                        <h2
                          className={
                            "text-md font-medium leading-tight tracking-tight md:text-lg transition-colors duration-200 " +
                            (isActive ? "text-foreground" : "text-foreground/70")
                          }
                        >
                          {entry.title}
                        </h2>
                        
                        {/* Improved description with better spacing */}
                        <p
                          className={
                            "text-xs leading-relaxed md:text-sm transition-all duration-300 " +
                            (isActive 
                              ? "text-muted-foreground line-clamp-none" 
                              : "text-muted-foreground/80 line-clamp-2")
                          }
                        >
                          {entry.description}
                        </p>
                      </div>

                      {/* Enhanced expandable content */}
                      <div
                        aria-hidden={!isActive}
                        className={
                          "grid transition-all duration-500 ease-out " +
                          (isActive 
                            ? "grid-rows-[1fr] opacity-100" 
                            : "grid-rows-[0fr] opacity-0")
                        }
                      >
                        <div className="overflow-hidden">
                          <div className="space-y-4 pt-2">
                            {/* {entry.items && entry.items.length > 0 && (
                              <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black p-4">
                                <ul className="space-y-2">
                                  {entry.items.map((item, itemIndex) => (
                                    <li 
                                      key={itemIndex} 
                                      className="flex items-start gap-2 text-sm text-muted-foreground"
                                    >
                                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                      <span className="leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )} */}

                            {entry.button && (
                              <div className="flex justify-end">
                                <Button 
                                  variant="default" 
                                  size="sm"
                                  className="group hover:bg-primary hover:text-primary-foreground font-normal transition-all duration-200" 
                                  asChild
                                >
                                  <a href={entry.button.url} rel="noreferrer">
                                    {entry.button.text} 
                                    <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
            {!showAll && entries.length > 5 && (
              <div className="flex justify-center">
                <Button 
                  size="sm"
                  className="font-normal"
                  onClick={() => setShowAll(true)}
                >
                  Show more
                </Button>
              </div>
            )}
            {showAll && entries.length > 5 && (
              <div className="flex justify-center">
                <Button 
                  size="sm"
                  className="font-normal"
                  onClick={() => setShowAll(false)}
                >
                  Show less
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// Handle deep-linking to specific AI project cards via URL hash.
// Expands the list if needed and scrolls the target into view.
// Runs on mount and on hash changes.
export function useAiProjectsHashBehavior(entries: TimeLine_01Entry[], showAll: boolean, setShowAll: (v: boolean) => void) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const tryScrollToHash = () => {
      const hash = window.location.hash?.slice(1);
      if (!hash) return;

      const targetIndex = entries.findIndex((e) => slugifyId(e.title) === hash);
      if (targetIndex === -1) return;

      const doScroll = () => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      if (!showAll && targetIndex >= 5) {
        setShowAll(true);
        // Defer scroll until after the expanded items render
        setTimeout(doScroll, 50);
      } else {
        // Ensure we scroll after current frame
        requestAnimationFrame(doScroll);
      }
    };

    // Initial attempt on mount
    tryScrollToHash();
    // Listen for in-page hash changes
    window.addEventListener("hashchange", tryScrollToHash);
    return () => window.removeEventListener("hashchange", tryScrollToHash);
  }, [entries, showAll, setShowAll]);
}
