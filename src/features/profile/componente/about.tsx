import { Markdown } from "@/components/markdown";
import { Prose } from "@/components/ui/typography";
import { USER } from "@/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{USER.about}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  );
}

export const Work = () => {
  return (
    <Panel id="work">
      <PanelHeader>
        <PanelTitle>Work</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{USER.work}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  )
}

export const Blog = () => {
  return (
    <Panel id="work">
      <PanelHeader>
        <PanelTitle>Blog</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose>
          <Markdown>{USER.blog}</Markdown>
        </Prose>
      </PanelContent>
    </Panel>
  )
}