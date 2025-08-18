/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from "next/dynamic";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SiteHeaderWrapper } from "./site-header-wrapper";
import { SiteHeaderMark } from "./site-header-mark";

import { DesktopNav } from "./desktop-nav";
import { MAIN_NAV } from "@/config/site";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

const BrandContextMenu = dynamic(() =>
    import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
  );

const CommandMenu = dynamic(() =>
    import("@/components/command-menu").then((mod) => mod.CommandMenu)
  );

export function SiteHeader() {

  const posts: any[] = []

  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky inset-0 top-0 z-50 max-w-screen overflow-x-hidden bg-background px-2 pt-2",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]/80",
        "not-dark:data-[affix=true]:**:data-header-container:after:bg-border",
        "transition-shadow duration-300"
      )}
    >
      <div
        className="screen-line-before screen-line-after mx-auto flex h-12 items-center justify-between gap-2 border-x border-edge px-2 after:z-1 after:transition-[background-color] sm:gap-4 md:max-w-3xl"
        data-header-container
      >
        <BrandContextMenu>
          <Link href="/" aria-label="Home" className="[&_svg]:h-8">
            <Image src={'/logo.png'} alt='logo' width={35} height={35} />
          </Link>
        </BrandContextMenu>

        <div className="h-full flex-1 border-x border-edge sm:-ml-2" />

        <DesktopNav items={MAIN_NAV} />

        <div className="flex items-center gap-2">
          <CommandMenu posts={posts} />
          {/* <NavItemGitHub /> */}
          <MobileNav className="sm:hidden" items={MAIN_NAV} />
        </div>
      </div>
    </SiteHeaderWrapper>
  );
}
