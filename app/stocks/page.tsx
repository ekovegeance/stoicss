"use client";
import { Shapes, StickyNote, PanelTop, Layers, Loader } from "lucide-react";
import CopyPaste from "@/components/copy-paste";
import StarRating from "@/templates/stocks/star-rating";

const features = [
  {
    icon: StarRating,
    feature: "Star Rating",
    link: "/ui",
    command: "npx stoicss@latest add -st star-rating",
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

export default function StocksPage() {
  return (
    <div className=" flex items-center justify-center w-full p-6">
      <div className="w-full mx-auto">
        <div className="grid md:grid-cols-3 rounded-lg overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {features.map(({ feature, command, icon: Icon }) => (
            <div key={feature} className="border p-6 -mt-px -ml-px">
              <div className="mt-3 mb-2 flex text-center gap-2 font-bold tracking-tighter">
                <span>{feature}</span>
              </div>
              <div className="flex items-center justify-center">
                <Icon />
              </div>
              {/* <p>{description}</p> */}
              <div className="mt-12">
                <CopyPaste value={command} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
