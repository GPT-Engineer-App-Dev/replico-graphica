import React from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap,
  useNodesState,
  useEdgesState,
  getBezierPath
} from 'reactflow';
import 'reactflow/dist/style.css';
import RoadmapSidebar from '@/components/RoadmapSidebar';

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      style={{...style, strokeWidth: 2, stroke: 'white'}}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
};

const Roadmap = () => {
  const edgeType = {
    custom: CustomEdge,
  };

  const edgeOptions = {
    type: 'custom',
    markerEnd: 'url(#arrowhead)',
    style: { strokeWidth: 2, stroke: 'white' },
  };
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
    { id: 'e1-2', source: 'arraysHashing', target: 'twoPointers', ...edgeOptions },
    { id: 'e1-3', source: 'arraysHashing', target: 'stack', ...edgeOptions },
    { id: 'e2-4', source: 'twoPointers', target: 'binarySearch', ...edgeOptions },
    { id: 'e2-5', source: 'twoPointers', target: 'slidingWindow', ...edgeOptions },
    { id: 'e2-6', source: 'twoPointers', target: 'linkedList', ...edgeOptions },
    { id: 'e4-7', source: 'binarySearch', target: 'trees', ...edgeOptions },
    { id: 'e5-7', source: 'slidingWindow', target: 'trees', ...edgeOptions },
    { id: 'e6-7', source: 'linkedList', target: 'trees', ...edgeOptions },
    { id: 'e7-8', source: 'trees', target: 'tries', ...edgeOptions },
    { id: 'e7-9', source: 'trees', target: 'backtracking', ...edgeOptions },
    { id: 'e7-10', source: 'trees', target: 'heapPriorityQueue', ...edgeOptions },
    { id: 'e9-11', source: 'backtracking', target: 'graphs', ...edgeOptions },
    { id: 'e9-12', source: 'backtracking', target: 'oneDp', ...edgeOptions },
    { id: 'e10-13', source: 'heapPriorityQueue', target: 'intervals', ...edgeOptions },
    { id: 'e10-14', source: 'heapPriorityQueue', target: 'greedy', ...edgeOptions },
    { id: 'e11-15', source: 'graphs', target: 'advancedGraphs', ...edgeOptions },
    { id: 'e11-16', source: 'graphs', target: 'twoDp', ...edgeOptions },
    { id: 'e12-17', source: 'oneDp', target: 'bitManipulation', ...edgeOptions },
    { id: 'e16-18', source: 'twoDp', target: 'mathGeometry', ...edgeOptions },
    { id: 'e17-18', source: 'bitManipulation', target: 'mathGeometry', ...edgeOptions },
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
          edgeTypes={edgeType}
          fitView
          attributionPosition="bottom-left"
        >
          <Background color="#888" gap={16} />
          <Controls />
          <MiniMap />
          <svg style={{ position: 'absolute', top: 0, left: 0 }}>
            <defs>
              <marker
                id="arrowhead"
                viewBox="-10 -10 20 20"
                refX="0"
                refY="0"
                markerWidth="20"
                markerHeight="20"
                orient="auto"
              >
                <polyline
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  fill="white"
                  points="-6.75,-6.75 0,0 -6.75,6.75"
                />
              </marker>
            </defs>
          </svg>
        </ReactFlow>
      </div>
      <RoadmapSidebar />
    </div>
  );
};

export default Roadmap;
