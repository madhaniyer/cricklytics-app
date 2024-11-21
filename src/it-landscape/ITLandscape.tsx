import React, { useState, useEffect, useRef } from "react";
import { ReactSVGPanZoom, TOOL_NONE } from "react-svg-pan-zoom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faTree, faSeedling } from '@fortawesome/free-solid-svg-icons';

interface ITLandscapeProps {
  svgUrl?: string; // Accept an SVG URL as a prop, make it optional
}

const ITLandscape: React.FC<ITLandscapeProps> = ({
  svgUrl = "./doc-it-images/doc_it_landscape.svg",
}) => {
  const ViewerRef = useRef<any>(null);
  const [value, setValue] = useState(null); // SVG viewer state
  const [tool, setTool] = useState(TOOL_NONE); // Current tool (e.g., pan, none)
  const [frameSize, setFrameSize] = useState({ width: 800, height: 600 }); // Frame size

  // Update frame size on window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = Math.min(window.innerWidth - 40, 1200); // Max width capped
      const height = (width / 4) * 3; // Maintain 4:3 aspect ratio
      setFrameSize({ width, height });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`min-h-screen p-6 bg-gradient-to-r from-green-400 via-green-600 to-green-800 dark:from-green-700 dark:via-green-800 dark:to-green-900 transition-all duration-300`}
      style={{
        backgroundImage: "url('https://www.example.com/leaf-pattern.png')", // Conservation-themed leaf pattern
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header with refined and professional colors */}
      <div className="text-center ml-8 mb-4 p-4 rounded-lg shadow-2xl border-4 border-green-600 bg-gradient-to-r from-green-100 via-green-200 to-green-300 dark:from-green-800 dark:via-green-900 dark:to-green-700 animate__animated animate__fadeIn">
        <p className="text-3xl font-semibold leading-tight text-gray-800 dark:text-gray-100 mb-4 flex justify-center items-center space-x-4">
          <FontAwesomeIcon 
            icon={faLeaf} 
            className="text-green-500 text-4xl hover:scale-110 transition-all duration-300 fa-beat" // Apply animation here
          />
          <FontAwesomeIcon 
            icon={faTree} 
            className="text-amber-500 text-4xl hover:scale-110 transition-all duration-300 fa-beat" // Apply animation here
          />
          <FontAwesomeIcon 
            icon={faSeedling} 
            className="text-lime-400 text-4xl hover:scale-110 transition-all duration-300 fa-beat" // Apply animation here
          />
          <span>Interactive IT Landscape</span>
        </p>
        <p className="text-xl text-opacity-80 text-gray-600 dark:text-gray-300">
          Navigate, zoom, and explore your IT architecture in real-time.
        </p>
      </div>

      {/* SVG Viewer Section with Purple Border */}
      <div
        className="bg-gray-200 dark:bg-gray-200 rounded-xl shadow-2xl mx-auto overflow-hidden transition-all duration-300 mb-8 border-purple-600 dark:border-purple-700"
        style={{
          width: frameSize.width,
          height: frameSize.height + 60, // Adjusting height to fit toolbox
        }}
      >
        <ReactSVGPanZoom
          ref={ViewerRef}
          width={frameSize.width}
          height={frameSize.height}
          value={value} // Manage value state
          onChangeValue={setValue} // Update value state
          tool={tool} // Manage tool state
          onChangeTool={setTool} // Update tool state
          detectAutoPan={false}
          background="transparent"
          SVGBackground="#f8f9fa" // Light background for the SVG, even in dark mode
          style={{ borderRadius: "1rem" }}
        >
          <svg
            width={frameSize.width}
            height={frameSize.height}
            viewBox={`0 0 ${frameSize.width} ${frameSize.height}`}
            preserveAspectRatio="xMidYMid meet"
            className="rounded-xl"
          >
            <image href={svgUrl} width="100%" height="100%" />
          </svg>
        </ReactSVGPanZoom>
      </div>
    </div>
  );
};

export default ITLandscape;
