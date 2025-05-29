"use client";
import { Shapes, StickyNote, PanelTop, Layers, Loader } from "lucide-react";
import CopyPaste from "@/components/copy-paste";
import StarRating from "@/templates/stocks/star-rating";

const features = [
  {
    example: StarRating,
    name: "Star Rating",
    
    command: "npx stoicss@latest add -st star-rating",
  },
  {
    example: Shapes,
    name: "blocks",
    command: "npx stoicss@latest add -bl <component>",
  },
  {
    example: Layers,
    name: "stocks",
    command: "npx stoicss@latest add -st <component>",
  },
  {
    example: Loader,
    name: "skeletons",
    command: "npx stoicss@latest add -sk <component>",
  },
  {
    example: PanelTop,
    name: "forms",
    command: "npx stoicss@latest add -fo <component>",
  },
  {
    example: StickyNote,
    name: "pages",
    command: "npx stoicss@latest add -pa <component>",
  },
];

export default function StocksPage() {
  return (
    <div className=" flex items-center justify-center w-full p-6">
      <div className="w-full mx-auto">
        <div className="grid md:grid-cols-3 rounded-lg overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {features.map(({ name, command, example: Example }) => (
            <div key={name} className="border p-6 -mt-px -ml-px">
              <div className="mt-3 mb-2 flex text-center gap-2 font-bold tracking-tighter">
                <span>{name}</span>
              </div>
              <div className="flex items-center justify-center">
                <Example />
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
