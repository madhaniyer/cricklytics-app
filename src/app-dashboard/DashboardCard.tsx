import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faCreditCard,
  faLock,
  faFile,
  faDollarSign,
  faInfoCircle, // Importing the info icon for the description section
} from "@fortawesome/free-solid-svg-icons";

// Interface to define the structure of an Integration object
interface Integration {
  fromSystem?: string; // Optional source system of the integration
  toSystem?: string; // Optional target system of the integration
  integrationSummary: string; // Summary of the integration
}

// Props interface for the DashboardCard component
interface DashboardCardProps {
  title: string; // Title of the dashboard card
  inboundCount: number; // Count of inbound integrations
  outboundCount: number; // Count of outbound integrations
  paymentGateway: boolean; // Indicates if a payment gateway is available
  authentication: string; // Type of authentication used
  annualSpend: string; // Annual spending amount
  documentStorage: string; // Information about document storage
  inboundIntegrations: Integration[]; // Array of inbound integration objects
  outboundIntegrations: Integration[]; // Array of outbound integration objects
  description: string; // Description of the dashboard card
  onClick: () => void; // Function to handle click events on the card
}

// Functional component representing a dashboard card
const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  inboundCount,
  outboundCount,
  paymentGateway,
  authentication,
  annualSpend,
  documentStorage,
  inboundIntegrations,
  outboundIntegrations,
  description, // Added description prop
  onClick,
}) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null); // State to track which section is hovered
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Ref to control the scrolling of the integration list

  // Effect to handle automatic scrolling of integration lists if they exceed the visible area
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollHeight = container.scrollHeight; // Total height of the content
      const clientHeight = container.clientHeight; // Height of the visible area

      // Start scrolling if content exceeds container height
      if (scrollHeight > clientHeight) {
        let totalScrolled = 0;
        const scrollStep = 0.5; // Adjust scroll speed here
        const scrollInterval = setInterval(() => {
          if (totalScrolled >= scrollHeight) {
            clearInterval(scrollInterval); // Stop scrolling after one cycle
            return;
          }
          container.scrollTop += scrollStep; // Scroll down
          totalScrolled += scrollStep; // Track total scrolled distance
        }, 30); // Adjust interval speed here

        return () => clearInterval(scrollInterval); // Clean up on unmount
      }
    }
  }, [hoveredSection]);

  return (
    <div
      className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl 
        transform hover:-translate-y-2 transition-all duration-400 cursor-pointer"
      onClick={onClick} // Trigger onClick function when card is clicked
    >
      {/* Title Section */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
        {title} {/* Display the title of the card */}
      </h2>

      {/* Info Section */}
      <div className="space-y-4">
        {[
          {
            icon: faArrowUp, // Icon for inbound count
            label: "Inbound", // Label for inbound count
            value: inboundCount, // Value for inbound count
            color: "text-blue-500", // Color for inbound count
            integrations: inboundIntegrations, // Inbound integrations array
          },
          {
            icon: faArrowDown, // Icon for outbound count
            label: "Outbound", // Label for outbound count
            value: outboundCount, // Value for outbound count
            color: "text-purple-500", // Color for outbound count
            integrations: outboundIntegrations, // Outbound integrations array
          },
          {
            icon: faCreditCard, // Icon for payment gateway status
            label: "Payment Gateway", // Label for payment gateway status
            value: paymentGateway ? "Yes" : "No", // Display "Yes" or "No"
            color: paymentGateway ? "text-green-500" : "text-red-500", // Conditional color based on status
          },
          {
            icon: faLock, // Icon for authentication type
            label: "Authentication", // Label for authentication type
            value: authentication, // Value for authentication type
            color: "text-indigo-500", // Color for authentication
          },
          {
            icon: faFile, // Icon for document storage info
            label: "Document Storage", // Label for document storage info
            value: documentStorage, // Value for document storage info
            color: "text-gray-500", // Color for document storage
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredSection(item.label)} // Set hovered section on mouse enter
            onMouseLeave={() => setHoveredSection(null)} // Reset hovered section on mouse leave
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`${item.color} w-5 h-5 mr-4`} // Display the icon with appropriate color
            />
            <span className="flex-1 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              {item.label} {/* Display the label */}
            </span>
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
              {item.value} {/* Display the value */}
            </span>

            {/* Hover Dialog for showing integrations */}
            {hoveredSection === item.label && item.integrations && (
              <div
                className="absolute top-1 left-1/2 w-80 max-w-xs sm:max-w-md p-4 
                          bg-gradient-to-r from-indigo-600 to-purple-400 text-white shadow-2xl rounded-lg 
                          transition-all duration-300 transform -translate-x-1/2 z-50"
              >
                <h3 className="text-sm font-semibold mb-3">
                  {item.label} Integrations {/* Title for integrations section */}
                </h3>

                <div className="overflow-hidden">
                  <div
                    ref={scrollContainerRef}
                    className="overflow-y-auto max-h-48 border border-gray-200 rounded-md bg-white dark:bg-gray-800"
                  >
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-300 dark:bg-gray-600">
                          <th className="p-2 text-xs font-medium text-gray-800 dark:text-gray-300">
                            From {/* Column header for 'From' */}
                          </th>
                          <th className="p-2 text-xs font-medium text-gray-800 dark:text-gray-300">
                            To {/* Column header for 'To' */}
                          </th>
                          <th className="p-2 text-xs font-medium text-gray-800 dark:text-gray-300">
                            Summary {/* Column header for 'Summary' */}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.integrations.map((int, idx) => (
                          <tr
                            key={idx}
                            className="odd:bg-gray-50 even:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                          >
                            <td className="p-2 text-xs text-gray-900 dark:text-gray-300">
                              {int.fromSystem || "-"} {/* Display source system or "-" if not available */}
                            </td>
                            <td className="p-2 text-xs text-gray-900 dark:text-gray-300">
                              {int.toSystem || "-"} {/* Display target system or "-" if not available */}
                            </td>
                            <td className="p-2 text-xs text-gray-900 dark:text-gray-300">
                              {int.integrationSummary} {/* Display integration summary */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Annual Spend Section */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <FontAwesomeIcon
            icon={faDollarSign} // Icon for annual spend
            className="text-indigo-600 dark:text-indigo-400 w-6 h-6 mr-2"
          />
          <p className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {annualSpend.toLocaleString()} {/* Display annual spend formatted with commas */}
          </p>
        </div>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Annual Spend {/* Label for annual spend */}
        </span>
      </div>

      {/* Fixed-Size Scrollable Description Section */}
      <div
        className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-inner 
                    overflow-y-auto h-24 flex space-x-3"
      >
        {/* Yellow Foreground Info Icon */}
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="text-blue-900 dark:text-yellow-400 w-6 h-6 flex-shrink-0"
        />

        {/* Description Text */}
        <div className="overflow-y-auto h-full w-full">
          <p className="text-sm text-gray-700 dark:text-gray-300 text-justify">
            {description} {/* Display the description */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard; // Exporting the DashboardCard component
