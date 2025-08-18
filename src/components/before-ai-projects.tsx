"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package, Calendar, Sparkles, Zap, SquareCode, GraduationCap, GitCompare, Table, Book, Music, Spade, DollarSign, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/app/page";

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
    icon: Spade,
    title: "Poker Application",
    subtitle: "CTO • Jun 2024 - March 2025",
    description:
      `A "Chess.com for poker". We built a poker application to not just play but also learn & socialize with features like puzzles, rant-rooms, tournaments and more. `,
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/nerdee-poker.png",
    button: {
      url: "/work/poker-application",
      text: "Know more",
    },
  },
  {
    icon: DollarSign,
    title: "Crypto Payment Application",
    subtitle: "Co-Founder • July 2023 - May 2024",
    description:
      "A consumer crypto based payments platform built to bring the blockchain technology to the masses and making international payments easier.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/flex.png",
      button: {
        url: "/work/crypto-payments",
        text: "Know more",
      },
  },
  {
    icon: Bitcoin,
    title: "Blockchain Developer",
    subtitle: "July 2021 - July 2023",
    description:
      "My journey as a blockchain full-stack developer. During this period, i worked in some startups and won multiple online and offline hackathon's.",
    image:
      "https://gwmbheqzltuakdzsddzc.supabase.co/storage/v1/object/public/self%20assets/Blockchain%20developer.png",
      button: {
        url: "/work/blockchain-developer",
        text: "Know more",
      },
  },
];

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function BeforeAiProjects({
  title = "Ruixen UI Release Notes",
  description = "Stay up to date with the latest components, features, and performance enhancements in Ruixen UI — built to help you design and ship faster.",
  entries = defaultEntries,
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
        <div className="screen-line-after screen-line-before px-4">
            <h1 className="text-lg font-semibold">Before AI</h1>
        </div>
      <section className="pb-32 pt-8">

        <div className="container">

          <div className="mx-auto mt-0 max-w-3xl space-y-16 md:space-y-16 px-4">
            {entries.map((entry, index) => {
              const isActive = true;

              return (
                <div
                  key={index}
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
                      "flex flex-col rounded-2xl border p-3 transition-all duration-300 " +
                      (
                      "border-gray-200 dark:border-gray-800  dark:bg-black")
                    }
                  >
                    {entry.image && (
                      <img
                        src={entry.image}
                        alt={`${entry.title} visual`}
                        className="mb-4 w-full h-72 rounded-lg object-cover"
                        loading="lazy"
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
          </div>
        </div>
      </section>
    </>
  );
}
