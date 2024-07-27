import React from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  useNodesState,
  useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import RoadmapSidebar from '@/components/RoadmapSidebar';

const Roadmap = () => {
  const initialNodes = [
    { id: 'arraysHashing', position: { x: 400, y: 50 }, data: { label: 'Arrays & Hashing' } },
    { id: 'twoPointers', position: { x: 250, y: 150 }, data: { label: 'Two Pointers' } },
    { id: 'stack', position: { x: 550, y: 150 }, data: { label: 'Stack' } },
    { id: 'binarySearch', position: { x: 100, y: 250 }, data: { label: 'Binary Search' } },
    { id: 'slidingWindow', position: { x: 300, y: 250 }, data: { label: 'Sliding Window' } },
    { id: 'linkedList', position: { x: 500, y: 250 }, data: { label: 'Linked List' } },
    { id: 'trees', position: { x: 400, y: 350 }, data: { label: 'Trees' } },
    { id: 'tries', position: { x: 100, y: 450 }, data: { label: 'Tries' } },
    { id: 'backtracking', position: { x: 700, y: 450 }, data: { label: 'Backtracking' } },
    { id: 'heapPriorityQueue', position: { x: 300, y: 550 }, data: { label: 'Heap / Priority Queue' } },
    { id: 'graphs', position: { x: 550, y: 550 }, data: { label: 'Graphs' } },
    { id: 'oneDp', position: { x: 800, y: 550 }, data: { label: '1-D DP' } },
    { id: 'intervals', position: { x: 100, y: 650 }, data: { label: 'Intervals' } },
    { id: 'greedy', position: { x: 300, y: 650 }, data: { label: 'Greedy' } },
    { id: 'advancedGraphs', position: { x: 500, y: 650 }, data: { label: 'Advanced Graphs' } },
    { id: 'twoDp', position: { x: 700, y: 650 }, data: { label: '2-D DP' } },
    { id: 'bitManipulation', position: { x: 900, y: 650 }, data: { label: 'Bit Manipulation' } },
    { id: 'mathGeometry', position: { x: 700, y: 750 }, data: { label: 'Math & Geometry' } },
  ];

  const initialEdges = [
    { id: 'e1-2', source: 'arraysHashing', target: 'twoPointers', type: 'bezier' },
    { id: 'e1-3', source: 'arraysHashing', target: 'stack', type: 'bezier' },
    { id: 'e2-4', source: 'twoPointers', target: 'binarySearch', type: 'bezier' },
    { id: 'e2-5', source: 'twoPointers', target: 'slidingWindow', type: 'bezier' },
    { id: 'e2-6', source: 'twoPointers', target: 'linkedList', type: 'bezier' },
    { id: 'e4-7', source: 'binarySearch', target: 'trees', type: 'bezier' },
    { id: 'e5-7', source: 'slidingWindow', target: 'trees', type: 'bezier' },
    { id: 'e6-7', source: 'linkedList', target: 'trees', type: 'bezier' },
    { id: 'e7-8', source: 'trees', target: 'tries', type: 'bezier' },
    { id: 'e7-9', source: 'trees', target: 'backtracking', type: 'bezier' },
    { id: 'e7-10', source: 'trees', target: 'heapPriorityQueue', type: 'bezier' },
    { id: 'e9-11', source: 'backtracking', target: 'graphs', type: 'bezier' },
    { id: 'e9-12', source: 'backtracking', target: 'oneDp', type: 'bezier' },
    { id: 'e10-13', source: 'heapPriorityQueue', target: 'intervals', type: 'bezier' },
    { id: 'e10-14', source: 'heapPriorityQueue', target: 'greedy', type: 'bezier' },
    { id: 'e11-15', source: 'graphs', target: 'advancedGraphs', type: 'bezier' },
    { id: 'e11-16', source: 'graphs', target: 'twoDp', type: 'bezier' },
    { id: 'e12-17', source: 'oneDp', target: 'bitManipulation', type: 'bezier' },
    { id: 'e16-18', source: 'twoDp', target: 'mathGeometry', type: 'bezier' },
    { id: 'e17-18', source: 'bitManipulation', target: 'mathGeometry', type: 'bezier' },
  ];

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="bg-gray-900 w-full h-screen flex">
      <div className="flex-grow">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          attributionPosition="bottom-left"
        >
          <Background color="#888" gap={16} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
      <RoadmapSidebar />
    </div>
  );
};

export default Roadmap;
