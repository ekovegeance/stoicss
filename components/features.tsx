import {
  Diamond,
  Shapes,
  StickyNote,
  PanelTop,
  Layers,
  Loader,
} from "lucide-react";
import CopyPaste from "./copy-paste";
import Link from "next/link";

const features = [
  {
    icon: Diamond,
    feature: "UI",
    link: "/ui",
    command: "npx stoicss@latest add <component>",
  },
  {
    icon: Shapes,
    feature: "blocks",
    link: "/blocks",
    command: "npx stoicss@latest add -bl <component>",
  },
  {
    icon: Layers,
    feature: "stocks",
    link: "/stocks",
    command: "npx stoicss@latest add -st <component>",
  },
  {
    icon: Loader,
    feature: "skeletons",
    link: "/skeletons",
    command: "npx stoicss@latest add -sk <component>",
  },
  {
    icon: PanelTop,
    feature: "forms",
    link: "/forms",
    command: "npx stoicss@latest add -fo <component>",
  },
  {
    icon: StickyNote,
    feature: "pages",
    link: "/pages",
    command: "npx stoicss@latest add -pa <component>",
  },
];

export default function Features() {
  return (
    <div className=" flex items-center justify-center w-full  md:px-80">
      <div className="w-full mx-auto">
        <div className="grid md:grid-cols-2 rounded-lg overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {features.map(({ feature, link, command, icon: Icon }) => (
            <div key={feature} className="border p-6 -mt-px -ml-px">
              <Link href={link}>
                <div className="h-8 w-8 flex items-center justify-center rounded-full bg-primary-foreground">
                  <Icon />
                </div>
                <div className="mt-3 mb-2 flex items-start gap-2 text-xl font-bold tracking-tighter">
                  <span>{feature}</span>
                </div>
                {/* <p>{description}</p> */}
              </Link>
              <CopyPaste value={command} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
