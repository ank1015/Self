import { Banner } from "@/components/banner";
import { Brand } from "@/components/brand";
import { TypographyH1 } from "@/components/typography/h1";
import { About, Blog, Work } from "@/features/profile/componente/about";
import { Overview } from "@/features/profile/componente/overview";
import { ProfileCover } from "@/features/profile/componente/profile-cover";
import { ProfileHeader } from "@/features/profile/componente/profile-header";
import { cn } from "@/lib/utils";
import { LinkIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="mx-auto md:max-w-3xl">
        <Banner
        />
        <ProfileCover />
        <ProfileHeader />
        <Separator />

        <Overview />
        <Separator />

        <About />
        <Separator />

        {/* <Work />
        <Separator />

        <Blog /> */}

        {/* <Brand /> */}
      </div>
    </>
  );
}


export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
