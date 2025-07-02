'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Robot maze simulator component
function RobotMazeSimulator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const robotImageRef = useRef<HTMLImageElement>(null);
  const [robot, setRobot] = useState({ x: 1, y: 1, direction: 0 }); // 0=right, 1=down, 2=left, 3=up
  const [commands, setCommands] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [robotImageLoaded, setRobotImageLoaded] = useState(false);

  // Simple maze (1 = wall, 0 = path, 2 = goal)
  const [maze] = useState([
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]);

  const cellSize = 50;

  // Load robot image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setRobotImageLoaded(true);
    };
    img.onerror = () => {
      console.log('Robot image failed to load, using fallback');
      setRobotImageLoaded(false);
    };
    // Try to load robot image from public folder
    img.src = '/robot-car.svg';
    robotImageRef.current = img;
  }, []);

  // Draw the maze and robot
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw maze
    for (let y = 0; y < maze.length; y++) {
      for (let x = 0; x < maze[y].length; x++) {
        if (maze[y][x] === 1) {
          ctx.fillStyle = '#374151'; // Wall
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        } else if (maze[y][x] === 2) {
          ctx.fillStyle = '#10B981'; // Goal
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
          ctx.fillStyle = '#065F46';
          ctx.font = '20px Arial';
          ctx.fillText('🎯', x * cellSize + 10, y * cellSize + 28);
        } else {
          ctx.fillStyle = '#F3F4F6'; // Path
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
        
        // Grid lines
        ctx.strokeStyle = '#D1D5DB';
        ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }

    // Draw robot
    const robotX = robot.x * cellSize + cellSize / 2;
    const robotY = robot.y * cellSize + cellSize / 2;
    
    if (robotImageLoaded && robotImageRef.current) {
      // Save context for rotation
      ctx.save();
      
      // Move to robot center and rotate
      ctx.translate(robotX, robotY);
      ctx.rotate((robot.direction * Math.PI) / 2);
      
      // Draw robot image centered
      const robotSize = cellSize - 10;
      ctx.drawImage(
        robotImageRef.current,
        -robotSize / 2,
        -robotSize / 2,
        robotSize,
        robotSize
      );
      
      // Restore context
      ctx.restore();
    } else {
      // Fallback: Draw simple colored robot
      ctx.fillStyle = '#3B82F6';
      ctx.fillRect(robot.x * cellSize + 5, robot.y * cellSize + 5, cellSize - 10, cellSize - 10);
      
      // Draw robot direction arrow
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '16px Arial';
      const arrows = ['→', '↓', '←', '↑'];
      ctx.fillText(arrows[robot.direction], robot.x * cellSize + 15, robot.y * cellSize + 25);
    }

  }, [robot, maze, robotImageLoaded]);

  // Command functions
  const moveForward = () => {
    const directions = [
      { x: 1, y: 0 }, // right
      { x: 0, y: 1 }, // down
      { x: -1, y: 0 }, // left
      { x: 0, y: -1 }  // up
    ];
    
    const dir = directions[robot.direction];
    const newX = robot.x + dir.x;
    const newY = robot.y + dir.y;
    
    // Check if move is valid (within bounds and not into wall)
    if (newX >= 0 && newX < maze[0].length && 
        newY >= 0 && newY < maze.length && 
        maze[newY][newX] !== 1) {
      setRobot(prev => ({ ...prev, x: newX, y: newY }));
      
      // Check if reached goal
      if (maze[newY][newX] === 2) {
        setScore(prev => prev + 100);
        alert('🎉 Goal reached! Well done!');
      }
    }
  };

  const turnLeft = () => {
    setRobot(prev => ({ ...prev, direction: (prev.direction + 3) % 4 }));
  };

  const turnRight = () => {
    setRobot(prev => ({ ...prev, direction: (prev.direction + 1) % 4 }));
  };

  const addCommand = (command: string) => {
    setCommands(prev => [...prev, command]);
  };

  const clearCommands = () => {
    setCommands([]);
  };

  const resetRobot = () => {
    setRobot({ x: 1, y: 1, direction: 0 });
  };

  const runProgram = async () => {
    setIsRunning(true);
    
    // Reset robot and wait a moment for state to update
    setRobot({ x: 1, y: 1, direction: 0 });
    await new Promise(resolve => setTimeout(resolve, 200)); // Wait for reset
    
    for (let i = 0; i < commands.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500)); // Delay for animation
      
      switch (commands[i]) {
        case 'moveForward':
          moveForward();
          break;
        case 'turnLeft':
          turnLeft();
          break;
        case 'turnRight':
          turnRight();
          break;
      }
    }
    
    setIsRunning(false);
  };

  return (
    <div className="bg-indigo-300 rounded-xl p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Robot Maze Challenge</h3>
      <p className="text-gray-600 mb-6">Program your robot to reach the goal! Use the command blocks below.</p>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Maze Canvas */}
        <div className="space-y-4">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="border-2 border-gray-300 rounded-lg"
          />
          <div className="flex gap-2 items-center">
            <button
              onClick={resetRobot}
              className="px-4 py-2 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hover:from-orange-300 hover:via-orange-400 hover:to-orange-500 text-white font-bold rounded-none border-4 border-orange-300 shadow-lg transform transition-all duration-100 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
              style={{
                fontFamily: 'monospace',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                boxShadow: '0 4px 0 #ea580c, 0 6px 6px rgba(0,0,0,0.3)',
              }}
            >
              🔄 RESET
            </button>
            <div className="ml-auto px-4 py-2 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-none border-4 border-yellow-300 shadow-lg"
              style={{
                fontFamily: 'monospace',
                textShadow: '1px 1px 0px rgba(255,255,255,0.5)',
                boxShadow: '0 4px 0 #ca8a04, 0 6px 6px rgba(0,0,0,0.3)',
              }}
            >
              SCORE: {score}
            </div>
          </div>
        </div>

        {/* Programming Interface */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">Command Blocks</h4>
          
          {/* Available Commands */}
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => addCommand('moveForward')}
              className="p-4 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 hover:from-blue-300 hover:via-blue-400 hover:to-blue-500 text-white font-bold text-lg rounded-none border-4 border-blue-300 shadow-lg transform transition-all duration-100 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 disabled:border-gray-300"
              disabled={isRunning}
              style={{
                fontFamily: 'monospace',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                boxShadow: '0 4px 0 #2563eb, 0 6px 6px rgba(0,0,0,0.3)',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">🚀</span>
                <span>MOVE FORWARD</span>
              </span>
            </button>
            <button
              onClick={() => addCommand('turnLeft')}
              className="p-4 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 hover:from-emerald-300 hover:via-emerald-400 hover:to-emerald-500 text-white font-bold text-lg rounded-none border-4 border-emerald-300 shadow-lg transform transition-all duration-100 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 disabled:border-gray-300"
              disabled={isRunning}
              style={{
                fontFamily: 'monospace',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                boxShadow: '0 4px 0 #059669, 0 6px 6px rgba(0,0,0,0.3)',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">↰</span>
                <span>TURN LEFT</span>
              </span>
            </button>
            <button
              onClick={() => addCommand('turnRight')}
              className="p-4 bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 hover:from-purple-300 hover:via-purple-400 hover:to-purple-500 text-white font-bold text-lg rounded-none border-4 border-purple-300 shadow-lg transform transition-all duration-100 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 disabled:border-gray-300"
              disabled={isRunning}
              style={{
                fontFamily: 'monospace',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                boxShadow: '0 4px 0 #7c3aed, 0 6px 6px rgba(0,0,0,0.3)',
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">↱</span>
                <span>TURN RIGHT</span>
              </span>
            </button>
          </div>

          {/* Command Sequence */}
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-gray-800 font-mono uppercase tracking-wider">Your Program:</h4>
            <div 
              className="min-h-[120px] p-4 bg-black border-4 border-gray-400 shadow-lg"
              style={{
                boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              {commands.length === 0 ? (
                <p className="text-green-400 font-mono text-sm animate-pulse">
                  &gt; WAITING FOR COMMANDS...
                  <span className="animate-pulse">_</span>
                </p>
              ) : (
                <div className="space-y-2">
                  {commands.map((command, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-green-400 font-mono text-sm">
                        {String(index + 1).padStart(2, '0')}:
                      </span>
                      <span className="text-white font-mono text-sm bg-gray-800 px-2 py-1 border border-gray-600">
                        {command === 'moveForward' ? '🚀 MOVE_FORWARD()' : 
                         command === 'turnLeft' ? '↰ TURN_LEFT()' : '↱ TURN_RIGHT()'}
                      </span>
                    </div>
                  ))}
                  <div className="text-green-400 font-mono text-sm mt-2">
                    &gt; READY TO EXECUTE_
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex gap-2">
            <button
              onClick={runProgram}
              disabled={isRunning || commands.length === 0}
              className="flex-1 px-6 py-4 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 text-white font-bold text-lg rounded-none border-4 border-green-300 shadow-lg transform transition-all duration-100 hover:from-green-300 hover:via-green-400 hover:to-green-500 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 disabled:border-gray-300 disabled:scale-100 disabled:shadow-md"
              style={{
                fontFamily: 'monospace',
                textShadow: '2px 2px 0px rgba(226, 195, 15, 0.96)',
                boxShadow: '0 6px 0 #ca8a04, 0 8px 8px rgba(0,0,0,0.3)',
              }}
            >
              {isRunning ? (
                <span className="animate-pulse">🔄 RUNNING...</span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <span className="text-2xl">▶</span>
                  <span>RUN PROGRAM</span>
                </span>
              )}
            </button>
            <button
              onClick={clearCommands}
              disabled={isRunning}
              className="px-4 py-4 bg-gradient-to-b from-red-400 via-red-500 to-red-600 text-white font-bold rounded-none border-4 border-red-300 shadow-lg transform transition-all duration-100 hover:from-red-300 hover:via-red-400 hover:to-red-500 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 disabled:border-gray-300 disabled:scale-100 disabled:shadow-md"
              style={{
                fontFamily: 'monospace',
                textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
                boxShadow: '0 6px 0 #dc2626, 0 8px 8px rgba(0,0,0,0.3)',
              }}
            >
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LogicPuzzles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-950 via-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Logic Puzzles & Robot Challenges
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Learn programming logic by solving fun robot maze challenges! Perfect for ages 10-13.
          </p>
          <Link 
            href="/find-your-story"
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full font-semibold transition-colors"
          >
            ← Back to Games
          </Link>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RobotMazeSimulator />
        
 

        {/* Future Games Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">More Puzzles Coming Soon!</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg opacity-75">
              <div className="w-16 h-16 bg-yellow-500 rounded-full mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Sensor Challenges</h3>
              <p className="text-gray-600 text-sm text-center">Use virtual sensors to detect walls and navigate complex mazes!</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg opacity-75">
              <div className="w-16 h-16 bg-red-500 rounded-full mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🏃</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Speed Challenges</h3>
              <p className="text-gray-600 text-sm text-center">Race against time to solve mazes with the fewest commands!</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg opacity-75">
              <div className="w-16 h-16 bg-green-500 rounded-full mb-4 flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">Loop Puzzles</h3>
              <p className="text-gray-600 text-sm text-center">Learn about loops and functions to write more efficient code!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 