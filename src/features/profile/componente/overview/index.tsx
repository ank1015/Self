import { GlobeIcon, MapPinIcon, MarsIcon, VenusIcon } from "lucide-react";

import { USER } from "@/data/user";
import { urlToName } from "@/utils/url";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
            <JobItem
              title={'Full stack AI Developer and Researcher'}
              company={''}
              website={''}
            />

        <EmailItem email={USER.email} />

        <IntroItem
          icon={GlobeIcon}
          content={urlToName(USER.website)}
          href={USER.website}
        />
      </PanelContent>
    </Panel>
  );
}
