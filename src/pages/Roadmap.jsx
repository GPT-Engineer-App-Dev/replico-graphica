import React from 'react';

const Node = ({ title, x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <rect
      width="160"
      height="40"
      rx="20"
      ry="20"
      fill="#4F46E5"
      className="transition-all duration-300 ease-in-out hover:filter hover:brightness-110"
    />
    <text
      x="80"
      y="25"
      textAnchor="middle"
      fill="white"
      className="text-sm font-semibold"
    >
      {title}
    </text>
  </g>
);

const Connection = ({ start, end, curve }) => (
  <path
    d={`M${start.x},${start.y} ${curve ? `Q${curve.x},${curve.y}` : ''} ${end.x},${end.y}`}
    fill="none"
    stroke="white"
    strokeWidth="2"
  />
);

const Roadmap = () => {
  const nodes = [
    { id: 'arraysHashing', title: 'Arrays & Hashing', x: 400, y: 50 },
    { id: 'twoPointers', title: 'Two Pointers', x: 250, y: 150 },
    { id: 'stack', title: 'Stack', x: 550, y: 150 },
    { id: 'binarySearch', title: 'Binary Search', x: 100, y: 250 },
    { id: 'slidingWindow', title: 'Sliding Window', x: 300, y: 250 },
    { id: 'linkedList', title: 'Linked List', x: 500, y: 250 },
    { id: 'trees', title: 'Trees', x: 400, y: 350 },
    { id: 'tries', title: 'Tries', x: 100, y: 450 },
    { id: 'backtracking', title: 'Backtracking', x: 700, y: 450 },
    { id: 'heapPriorityQueue', title: 'Heap / Priority Queue', x: 300, y: 550 },
    { id: 'graphs', title: 'Graphs', x: 550, y: 550 },
    { id: 'oneDp', title: '1-D DP', x: 800, y: 550 },
    { id: 'intervals', title: 'Intervals', x: 100, y: 650 },
    { id: 'greedy', title: 'Greedy', x: 300, y: 650 },
    { id: 'advancedGraphs', title: 'Advanced Graphs', x: 500, y: 650 },
    { id: 'twoDp', title: '2-D DP', x: 700, y: 650 },
    { id: 'bitManipulation', title: 'Bit Manipulation', x: 900, y: 650 },
    { id: 'mathGeometry', title: 'Math & Geometry', x: 700, y: 750 },
  ];

  const connections = [
    { start: 'arraysHashing', end: 'twoPointers' },
    { start: 'arraysHashing', end: 'stack' },
    { start: 'twoPointers', end: 'binarySearch' },
    { start: 'twoPointers', end: 'slidingWindow' },
    { start: 'twoPointers', end: 'linkedList' },
    { start: 'binarySearch', end: 'trees', curve: { x: 250, y: 300 } },
    { start: 'slidingWindow', end: 'trees' },
    { start: 'linkedList', end: 'trees', curve: { x: 550, y: 300 } },
    { start: 'trees', end: 'tries' },
    { start: 'trees', end: 'backtracking' },
    { start: 'trees', end: 'heapPriorityQueue', curve: { x: 350, y: 450 } },
    { start: 'backtracking', end: 'graphs' },
    { start: 'backtracking', end: 'oneDp' },
    { start: 'heapPriorityQueue', end: 'intervals' },
    { start: 'heapPriorityQueue', end: 'greedy' },
    { start: 'graphs', end: 'advancedGraphs' },
    { start: 'graphs', end: 'twoDp', curve: { x: 650, y: 600 } },
    { start: 'oneDp', end: 'bitManipulation' },
    { start: 'twoDp', end: 'mathGeometry' },
    { start: 'bitManipulation', end: 'mathGeometry' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-4">
      <svg width="1000" height="800" className="bg-gray-800 rounded-lg shadow-lg">
        {connections.map((conn, index) => {
          const start = nodes.find(n => n.id === conn.start);
          const end = nodes.find(n => n.id === conn.end);
          return (
            <Connection
              key={index}
              start={{ x: start.x + 80, y: start.y + 20 }}
              end={{ x: end.x + 80, y: end.y + 20 }}
              curve={conn.curve}
            />
          );
        })}
        {nodes.map(node => (
          <Node key={node.id} title={node.title} x={node.x} y={node.y} />
        ))}
      </svg>
    </div>
  );
};

export default Roadmap;
