import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExclamationTriangle, faCalendarCheck, faRocket, faClipboard, faCogs, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import dependencyData from "./data/dependency";

interface Dependency {
  SYSTEM_ID: string;
  SYSTEM_NAME: string;
  DESCRIPTION: string;
  DEPENDENT_SYSTEM_ID: string;
  DEPENDENT_SYSTEM_NAME: string;
  DEPENDENCY_END_DATE: string;
  GO_LIVE_DATE: string;
  DEPENDENCY_DESCRIPTION: string;
  MITIGATION: string;
  FOLLOWUP_ACTIONS: string;
  IMAGE_URL: string;
  RESOURCE_CONSTRAINTS: string;
}

const DependencyViewer: React.FC = () => {
  const [selectedDependency, setSelectedDependency] = useState<Dependency | null>(dependencyData[0]);
  const [darkMode, setDarkMode] = useState(false);

  const getDependencyCards = (systemName: string) => {
    return dependencyData.filter((item) => item.SYSTEM_NAME === systemName);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col md:flex-row p-6 dark:bg-gray-900">
        {/* Left menu */}
        <div className="md:w-1/4 w-full bg-gray-200 dark:bg-gray-900 rounded-lg p-4 shadow-lg">
          <h2 className="text-lg font-semibold mb-8 text-gray-800 dark:text-white flex items-center space-x-2">
            <FontAwesomeIcon icon={faRocket} className="text-blue-600 dark:text-yellow-400 text-2xl" />
            <span>InFlight Projects</span>
          </h2>
          <ul className="space-y-4">
            {Array.from(new Set(dependencyData.map((dependency) => dependency.SYSTEM_NAME))).map((systemName) => (
              <li
                key={systemName}
                className="p-3 rounded-lg cursor-pointer bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 transform transition-all hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedDependency(getDependencyCards(systemName)[0])}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faArrowRight} className="mr-2 text-blue-500" />
                  <span>{systemName}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right content area */}
        <div className="md:w-3/4 w-full mt-4 md:mt-0 md:ml-4 bg-gray-200 dark:bg-gray-800 rounded-lg p-6 shadow-lg dark:text-gray-200">
          {selectedDependency ? (
            <div>
              {/* System Name */}
              <h3
                className="text-2xl font-bold mb-4 text-transparent bg-clip-text
                           bg-gradient-to-r from-blue-700 via-purple-500 to-purple-400
                           bg-gradient-to-r dark:from-blue-500 dark:via-blue-200 dark:to-purple-200
                           flex items-center space-x-3 
                           leading-tight transition-all duration-300"
              >
                <FontAwesomeIcon 
                  icon={faCogs} 
                  className="text-blue-600 dark:text-yellow-400 text-3xl"
                />
                <span>{selectedDependency.SYSTEM_NAME}</span>
              </h3>

              {/* Description */}
              <p
                className="text-base bg-gradient-to-r from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 px-4 py-3 rounded-lg 
                           text-gray-700 dark:text-gray-300 shadow-lg leading-relaxed tracking-wide border-l-4 border-purple-400"
              >
                {selectedDependency.DESCRIPTION}
              </p>

              {/* Resource Constraint */}
              <div className="bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-400 text-blue-800 dark:text-blue-200 p-4 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-6">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-400 dark:text-blue-200 mr-2 text-xl " />
                  <span className="text-lg font-semibold">Constraint</span>
                </div>
                <p className="text-sm mt-2">{selectedDependency.RESOURCE_CONSTRAINTS}</p>
              </div>

              {/* Dependency cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {getDependencyCards(selectedDependency.SYSTEM_NAME).map((dependency) => (
                  <div
                    key={dependency.DEPENDENT_SYSTEM_ID}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex items-center justify-start mb-4">
                      <FontAwesomeIcon icon={faCogs} className="text-blue-500 dark:text-yellow-400 pr-2" />
                      <span className="text-xl sm:text-2xl text-base font-semibold text-indigo-600 dark:text-indigo-400">
                        {dependency.DEPENDENT_SYSTEM_NAME}
                      </span>
                    </div>
                    {/* Dependency details */}
                    <div className="mb-4">
                      {/* Dependency Description */}
                      <div className="mb-4">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-200">Dependency</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{dependency.DEPENDENCY_DESCRIPTION}</p>
                      </div>

                      {/* Dependency End Date */}
                      <div className="mb-4">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faCalendarCheck} className="text-blue-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-200">Key Date</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{dependency.DEPENDENCY_END_DATE}</p>
                      </div>

                      {/* Mitigation */}
                      <div className="mb-4">
                        <div className="flex items-center">
                          <FontAwesomeIcon icon={faClipboard} className="text-blue-500 dark:text-yellow-400 mr-2" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-gray-200">Mitigation</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{dependency.MITIGATION}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Select a system to view dependencies</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DependencyViewer;
