import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4">NeetCode</h1>
        <p className="text-2xl mb-6">A better way to prepare for coding interviews.</p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Get Pro
        </Button>
      </div>
      <div className="flex-1">
        <img src="/placeholder.svg" alt="Roadmap" className="w-full h-[400px] object-cover" />
      </div>
    </div>
  );
};

export default Index;
