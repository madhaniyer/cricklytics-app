import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faCreditCard,
  faLock,
  faFile,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

interface Integration {
  fromSystem?: string;
  toSystem?: string;
  integrationSummary: string;
}

interface DashboardCardProps {
  title: string;
  inboundCount: number;
  outboundCount: number;
  paymentGateway: boolean;
  authentication: string;
  annualSpend: string;
  documentStorage: string;
  inboundIntegrations: Integration[];
  outboundIntegrations: Integration[];
  onClick: () => void;
}

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
  onClick,
}) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Start scrolling when the integrations are displayed and have enough rows
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      // Only start scrolling if the content exceeds the container height
      if (scrollHeight > clientHeight) {
        let totalScrolled = 0;
        const scrollStep = 0.5; // Adjust scroll speed here
        const scrollInterval = setInterval(() => {
          if (totalScrolled >= scrollHeight) {
            clearInterval(scrollInterval); // Stop after one cycle
            return;
          }
          container.scrollTop += scrollStep; // Scroll down
          totalScrolled += scrollStep; // Keep track of total scrolled
        }, 30); // Adjust interval speed here

        return () => clearInterval(scrollInterval); // Clean up on unmount
      }
    }
  }, [hoveredSection]);

  return (
    <div
      className={`bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl 
        transform hover:-translate-y-2 transition-all duration-400 cursor-pointer`}
      onClick={onClick}
    >
      {/* Title Section */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>

      {/* Info Section */}
      <div className="space-y-4">
        {[
          {
            icon: faArrowUp,
            label: "Inbound",
            value: inboundCount,
            color: "text-blue-500",
            integrations: inboundIntegrations,
          },
          {
            icon: faArrowDown,
            label: "Outbound",
            value: outboundCount,
            color: "text-purple-500",
            integrations: outboundIntegrations,
          },
          {
            icon: faCreditCard,
            label: "Payment Gateway",
            value: paymentGateway ? "Yes" : "No",
            color: paymentGateway ? "text-green-500" : "text-red-500",
          },
          {
            icon: faLock,
            label: "Authentication",
            value: authentication,
            color: "text-indigo-500",
          },
          {
            icon: faFile,
            label: "Document Storage",
            value: documentStorage,
            color: "text-gray-500",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredSection(item.label)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`${item.color} w-5 h-5 mr-4`}
            />
            <span className="flex-1 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
              {item.label}
            </span>
            <span className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
              {item.value}
            </span>

            {/* Hover Dialog */}
            {hoveredSection === item.label && item.integrations && (
              <div
                className="absolute top-1 left-1/2 w-80 max-w-xs sm:max-w-md p-4 
                          bg-gradient-to-r from-indigo-600 to-purple-400 text-white shadow-2xl rounded-lg 
                          transition-all duration-300 transform -translate-x-1/2 z-50"
              >
                <h3 className="text-sm font-semibold mb-3">
                  {item.label} Integrations
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
                            From
                          </th>
                          <th className="p-2 text-xs font-medium text-gray-800 dark:text-gray-300">
                            To
                          </th>
                          <th className="p-2 text-xs font-medium text-gray-800 dark:text-gray-300">
                            Summary
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
                              {int.fromSystem || "-"}
                            </td>
                            <td className="p-2 text-xs text-gray-900 dark:text-gray-300">
                              {int.toSystem || "-"}
                            </td>
                            <td className="p-2 text-xs text-gray-900 dark:text-gray-300">
                              {int.integrationSummary}
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
            icon={faDollarSign}
            className="text-indigo-600 dark:text-indigo-400 w-6 h-6 mr-2"
          />
          <p className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {annualSpend.toLocaleString()}
          </p>
        </div>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          (Annual Spend)
        </span>
      </div>
    </div>
  );
};

export default DashboardCard;
