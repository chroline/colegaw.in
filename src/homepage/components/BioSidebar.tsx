import Image from "next/image";

import education from "~/data/education.json";
import workExperience from "~/data/work.json";

import { BubbleLogo } from "~/common/components/BubbleLogo";
import { InfoBox } from "~/common/components/InfoBox";
import { Briefcase, GraduationCap } from "~/common/components/icons";

export function BioSidebar() {
  return (
    <div className="flex flex-col space-y-6 items-end w-full max-w-full sm:max-w-lg lg:max-w-md">
      <InfoBox icon={<Briefcase />} title="Work Experience">
        <div className="flex flex-col space-y-4 w-full">
          {Object.entries(workExperience).map(([key, val]) => (
            <div key={key} className="flex items-center space-x-3 w-full">
              <BubbleLogo src={`/img/work/${key}.png`} alt={`${val.name} logo`} />
              <div className="flex flex-col space-y-0 w-full items-start">
                <p className="text-sm font-medium">{val.name}</p>
                <div className="flex justify-between w-full">
                  <p className="text-xs opacity-70">{val.title}</p>
                  <p className="text-xs opacity-60">{val.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfoBox>
      <InfoBox icon={<GraduationCap />} title="Education">
        <div className="flex flex-col space-y-4 w-full">
          {Object.entries(education).map(([key, val]) => (
            <div key={key} className="flex items-start space-x-3 w-full">
              <div className="relative w-[calc(theme(space.3)+theme(space.7))] h-[calc(theme(space.3)+theme(space.7))] m-[1px] rounded-full overflow-hidden flex-shrink-0">
                <Image src={`/img/education/${key}.png`} alt={`${val.name} logo`} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="flex flex-col space-y-1 w-full items-start">
                <p className="text-sm font-medium">{val.name}</p>
                <div className="flex flex-col space-y-0 w-full">
                  {val.description.split("\n").map((text, i) => (
                    <p
                      key={i}
                      className={`text-xs opacity-70 ${val.description.split("\n").length === i + 1 ? "italic" : ""}`}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </InfoBox>
    </div>
  );
}
