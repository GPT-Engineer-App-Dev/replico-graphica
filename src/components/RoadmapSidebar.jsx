import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const RoadmapSidebar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 w-64 h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Select Roadmap</h2>
      <div className="flex mb-4">
        <Button variant="default" className="mr-2 bg-blue-500 hover:bg-blue-600">Algorithms</Button>
        <Button variant="outline">Courses</Button>
      </div>
      <div className="mb-4">
        <p className="text-center mb-2">(0 / 150)</p>
        <Progress value={0} max={150} className="w-full" />
      </div>
      {/* You can add more content here */}
    </div>
  );
};

export default RoadmapSidebar;
