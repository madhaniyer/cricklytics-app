import React, { useState, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import applicationsData from "./data/applications";
import integrationsData from "./data/integrations"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Application {
  SYSTEM_ID: string;
  SYSTEM_NAME: string;
  SYSTEM_GROUP_DESC: string;
  AUTHENTICATION: string;
  ANNUAL_SPEND: string;
  IMAGE_URL: string;
  documentStorage: string;
  DESCRIPTION: String;
}

interface Integration {
  SYSTEM_ID: string;
  DIRECTION: string;
  IS_PAYMENT_GATEWAY: boolean;
}

const AppDashboard: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCard, setSelectedCard] = useState<Application | null>(null);
  
  const getInboundIntegrations = (systemId: string) => {
    return integrationsData
      .filter(int => int.SYSTEM_ID === systemId && int.DIRECTION === "Inbound")
      .map(int => ({
        fromSystem: int.FROM_SYSTEM_DESCRIPTION,  // Adjust based on actual data structure
        toSystem:int.TO_SYSTEM_DESCRIPTION,
        integrationSummary: int.INTEGRATION_SUMMARY,  // Adjust based on actual data structure
      }));
  };
  
  const getOutboundIntegrations = (systemId: string) => {
    return integrationsData
      .filter(int => int.SYSTEM_ID === systemId && int.DIRECTION === "Outbound")
      .map(int => ({
        toSystem: int.TO_SYSTEM_DESCRIPTION,  // Adjust based on actual data structure
        fromSystem: int.FROM_SYSTEM_DESCRIPTION,
        integrationSummary: int.INTEGRATION_SUMMARY,  // Adjust based on actual data structure
      }));
  };
  
  const getIntegrationCounts = (systemId: string) => {
    const inbound = integrationsData.filter(
      (int) => int.SYSTEM_ID === systemId && int.DIRECTION === "Inbound"
    ).length;

    const outbound = integrationsData.filter(
      (int) => int.SYSTEM_ID === systemId && int.DIRECTION === "Outbound"
    ).length;

    const hasPaymentGateway = integrationsData.some(
      (int) => int.SYSTEM_ID === systemId && int.IS_PAYMENT_GATEWAY
    );

    return { inbound, outbound, hasPaymentGateway };
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-10">
        {/* <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mb-8 px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Toggle Dark Mode
        </button> */}

        {/* <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Application Dashboard
        </h1> */}

        {/* Search Bar */}
        <div className="relative mb-8">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-2.5 text-white-900"
          />
          <input
            type="text"
            placeholder="Search applications..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 
            bg-gradient-to-r from-indigo-600 to-purple-400 text-white rounded-md
            focus:outline-none focus:ring focus:ring-indigo-300 
            transition duration-200 ease-in-out shadow-lg w-full md:w-1/2 lg:w-1/3 hover:shadow-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
          applicationsData.filter((app) => {
              const lowerCaseQuery = searchQuery.toLowerCase();
              return (
                app.SYSTEM_NAME.toLowerCase().includes(lowerCaseQuery) ||
                app.ANNUAL_SPEND.toLowerCase().includes(lowerCaseQuery) ||
                app.AUTHENTICATION.toLowerCase().includes(lowerCaseQuery) ||
                app.DOCUMENT_STORAGE.toLowerCase().includes(lowerCaseQuery) ||
                app.SYSTEM_GROUP_DESC.toLowerCase().includes(lowerCaseQuery) 
              );
            })
            .map((app) => {
            const { inbound, outbound, hasPaymentGateway } =
              getIntegrationCounts(app.SYSTEM_ID);

            return (
              <DashboardCard
                key={app.SYSTEM_ID}
                title={app.SYSTEM_NAME}
                inboundCount={inbound}
                outboundCount={outbound}
                paymentGateway={hasPaymentGateway}
                authentication={app.AUTHENTICATION}
                annualSpend={app.ANNUAL_SPEND}
                documentStorage={app.DOCUMENT_STORAGE}
                description={app.DESCRIPTION}
                inboundIntegrations={getInboundIntegrations(app.SYSTEM_ID)} // Update to get inbound integration data
                outboundIntegrations={getOutboundIntegrations(app.SYSTEM_ID)} // Update to get outbound integration data
                onClick={() => setSelectedImage(app.IMAGE_URL)}
              />
            );
          })}
        </div>

        {selectedImage && (
          <div className="mt-8">
            <img
              src={selectedImage}
              alt="Application"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppDashboard;
