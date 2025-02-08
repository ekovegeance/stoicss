import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Hero />
      <Features />
    </div>
  );
}
