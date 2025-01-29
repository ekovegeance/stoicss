import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10  ">
      <div className=" w-full p-6 md:p-10 ">
        <div className="text-center h-full flex flex-col justify-center items-center">
        {/* <Image className="w-20 h-20" src="images/stoicss.svg" alt="stoicss logo" width={20} height={20} />   */}
        <h1 className="font-bold md:text-5xl text-2xl">stoicss/ui</h1>
        <p className="text-zinc-600 md:text-xl">A minimal UI for React</p>
        <div className="flex flex-row gap-4 my-4">
          <Button className="rounded-full">Components</Button>
          <Button variant="secondary" className="rounded-full">Blocks</Button>
        </div>
        </div>
        
      </div>
    </div>
  );
}
