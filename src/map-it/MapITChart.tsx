import React, { useState, CSSProperties } from "react";

// Sample project data with sequences
type Sequence = {
  id: number;
  projectName: string;
  sequence: number;
  startDate: string;
  endDate: string;
  description: string;
};

const projectData: Sequence[] = [
  { id: 1, projectName: "Biodiversity Data Mobilisation", sequence: 1, startDate: "2024-12-01", endDate: "2025-01-13", description: "Living Atlas POC & Managed Services Deploy in AWS" },
  { id: 1, projectName: "Biodiversity Data Mobilisation", sequence: 2, startDate: "2025-01-13", endDate: "2025-03-31", description: "Tier 1 Bio data in Snowflake, GBIF Transformation" },
  { id: 1, projectName: "Biodiversity Data Mobilisation", sequence: 3, startDate: "2025-04-01", endDate: "2025-06-30", description: "GBIF Darwin Core Format in Living Atlas" },
  { id: 1, projectName: "Biodiversity Data Mobilisation", sequence: 4, startDate: "2025-07-01", endDate: "2025-09-30", description: "Tier 2 Bio data in Snowflake, GBIF Transformation" },
  { id: 1, projectName: "Biodiversity Data Mobilisation", sequence: 5, startDate: "2025-10-01", endDate: "2025-12-31", description: "Deploy data pipelines, operationalise & handover" },
  { id: 2, projectName: "Marine Conservation Project", sequence: 1, startDate: "2024-11-01", endDate: "2024-12-15", description: "Initial Research and Planning" },
  { id: 2, projectName: "Marine Conservation Project", sequence: 2, startDate: "2024-12-16", endDate: "2025-03-15", description: "Data Collection and Analysis" },
  { id: 2, projectName: "Marine Conservation Project", sequence: 3, startDate: "2025-04-01", endDate: "2025-06-30", description: "Conservation Strategy Development" },
  { id: 2, projectName: "Marine Conservation Project", sequence: 4, startDate: "2025-07-01", endDate: "2025-09-30", description: "Implementation Phase" },
  { id: 2, projectName: "Marine Conservation Project", sequence: 5, startDate: "2025-10-01", endDate: "2025-12-31", description: "Final Reporting and Handover" }
];

// Timeline constants
const TIMELINE_START = new Date("2024-12-01").getTime();
const TIMELINE_END = new Date("2025-12-31").getTime();
const TIMELINE_WIDTH = 1800; // Width of the timeline (adjustable)

// Function to calculate style for each sequence bar
const calculateBarStyle = (start: string, end: string): CSSProperties => {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();

  const offsetLeft = ((startDate - TIMELINE_START) / (TIMELINE_END - TIMELINE_START)) * TIMELINE_WIDTH;
  const width = ((endDate - startDate) / (TIMELINE_END - TIMELINE_START)) * TIMELINE_WIDTH;

  return {
    left: `${offsetLeft}px`,
    width: `${width}px`,
    backgroundColor: `hsl(${(Math.random() * 360)}, 70%, 60%)`, // Random color for each sequence
    position: "absolute",
    top: "0",
    height: "30px",
    borderRadius: "4px",
  };
};

const ProjectTimeline = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Generate month indicators dynamically
  const generateMonthIndicators = () => {
    const months = [];
    const current = new Date(TIMELINE_START);

    while (current.getTime() <= TIMELINE_END) {
      months.push(current.toLocaleString("default", { month: "short", year: "numeric" }));
      current.setMonth(current.getMonth() + 1);
    }

    return months;
  };

  return (
    <div className="bg-gray-100 p-6 dark:bg-gray-900 dark:text-white">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Project Gantt Chart</h1>
      </div>
      <div className="flex">
        {/* Left Sidebar: Project Cards */}
        <div className="w-1/4 space-y-4">
          {projectData
            .map((seq) => seq.projectName)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((projectName, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
                <h3 className="text-xl font-semibold">{projectName}</h3>
              </div>
            ))}
        </div>

        {/* Right Section: Timeline */}
        <div className="flex-1 ml-8">
          <div className="relative overflow-x-auto mt-10">
            <div className="absolute top-0 left-0 right-0 flex justify-between text-sm text-gray-600">
              {/* Month Indicators */}
              {generateMonthIndicators().map((month, index) => (
                <div key={index} style={{ left: `${(index / generateMonthIndicators().length) * TIMELINE_WIDTH}px` }} className="absolute top-0 text-center">
                  <span className="block">{month}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-10">
              {/* Sequence Bars */}
              {projectData.map((seq) => (
                <div key={seq.sequence} className="relative text-xs text-white font-bold rounded-md p-2 shadow-md">
                  <div
                    className="absolute top-0 w-full"
                    style={{
                      ...calculateBarStyle(seq.startDate, seq.endDate),
                    }}
                  >
                    <span className="absolute text-xs font-medium text-white p-1 left-0 top-0">{seq.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
