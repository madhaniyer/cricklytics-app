import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExclamationCircle, faCalendarCheck, faRocket,faClipboard, faCogs, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface Dependency {
  SYSTEM_ID: string;
  SYSTEM_NAME: string;
  DESCRIPTION: string;
  DEPENDENT_SYSTEM_ID: string;
  DEPENDENT_SYSTEM_NAME: string;
  DEPENDENT_SYSTEM_DESCRIPTION: string;
  DEPENDENCY_END_DATE: string;
  DEPENDENCY_DESCRIPTION: string;
  MITIGATION: string;
  REMARKS: string;
  IMAGE_URL: string;
}

// Sample data
const mockData: Dependency[] = [
  {
      "SYSTEM_ID": "1035",
      "SYSTEM_NAME": "Hunting Permits -  New",
      "DESCRIPTION": "A brand new platform for hunting permits offering portal capability for the end user using Azure B2C for for Rakiura/Stewart Island Restricted Hunting Permits. Back-office app is a model-driven app and access is governed by Entra ID  and assigned roles via Power Platform admin center.",
      "DEPENDENT_SYSTEM_ID": "1076",
      "DEPENDENT_SYSTEM_NAME": "POS  & Payment Gateway",
      "DEPENDENT_SYSTEM_DESCRIPTION": "There is a need for a common payment gateway will enable physical, digital, online, and offline payments. There is significant opportunity to streamlin payment operations to reduce manual process​.Improving payment integrations will allow DOC to charge card processing fees.",
      "DEPENDENCY_END_DATE": "TBC",
      "DEPENDENCY_DESCRIPTION": "Delays with Westpac Payment Gateway build due to resourcing issues at Westpac's end.",
      "MITIGATION": "Go live with use cases not requiring payments. ",
      "REMARKS": "George to give some clarity on payment gateway completion dates",
      "IMAGE_URL": ""
  },
  {
      "SYSTEM_ID": "1037",
      "SYSTEM_NAME": "Permissions - New",
      "DESCRIPTION": "New app with ServiceNow portal for the customer and back office workflows for efficient processing of the applications. Augumented with some productive integration to boost efficiency.",
      "DEPENDENT_SYSTEM_ID": "1076",
      "DEPENDENT_SYSTEM_NAME": "POS  & Payment Gateway",
      "DEPENDENT_SYSTEM_DESCRIPTION": "There is a need for a common payment gateway will enable physical, digital, online, and offline payments. There is significant opportunity to streamlin payment operations to reduce manual process​.Improving payment integrations will allow DOC to charge card processing fees.",
      "DEPENDENCY_END_DATE": "TBC",
      "DEPENDENCY_DESCRIPTION": "Delays with Westpac Payment Gateway build due to resourcing issues at Westpac's end.",
      "MITIGATION": "None - Consider delaying Permissions release date.",
      "REMARKS": "George to give some clarity on payment gateway completion dates",
      "IMAGE_URL": ""
  },
  {
      "SYSTEM_ID": "1077",
      "SYSTEM_NAME": "Fishing License",
      "DESCRIPTION": "Fishing license application, processing and fulfilment app.",
      "DEPENDENT_SYSTEM_ID": "1076",
      "DEPENDENT_SYSTEM_NAME": "POS  & Payment Gateway",
      "DEPENDENT_SYSTEM_DESCRIPTION": "There is a need for a common payment gateway will enable physical, digital, online, and offline payments. There is significant opportunity to streamlin payment operations to reduce manual process​.Improving payment integrations will allow DOC to charge card processing fees.",
      "DEPENDENCY_END_DATE": "TBC",
      "DEPENDENCY_DESCRIPTION": "Delays with Westpac Payment Gateway build due to resourcing issues at Westpac's end.",
      "MITIGATION": "Go live with use cases not requiring payments.",
      "REMARKS": "George to give some clarity on payment gateway completion dates",
      "IMAGE_URL": ""
  },
  {
      "SYSTEM_ID": "1003",
      "SYSTEM_NAME": "SAP",
      "DESCRIPTION": "ERP for Finance, Asset Management and Procurement.",
      "DEPENDENT_SYSTEM_ID": "1076",
      "DEPENDENT_SYSTEM_NAME": "POS  & Payment Gateway",
      "DEPENDENT_SYSTEM_DESCRIPTION": "There is a need for a common payment gateway will enable physical, digital, online, and offline payments. There is significant opportunity to streamlin payment operations to reduce manual process​.Improving payment integrations will allow DOC to charge card processing fees.",
      "DEPENDENCY_END_DATE": "TBC",
      "DEPENDENCY_DESCRIPTION": "Project is  dependent on SAP for sales reconciliation / bank deposit reconciliation. Must be integrated  with clearing app before release.",
      "MITIGATION": "None - Consider delaying Payment Gateway release date.",
      "REMARKS": "George / Mike Hopkins to plan and confirm the end dates.",
      "IMAGE_URL": ""
  },
  {
      "SYSTEM_ID": "1075",
      "SYSTEM_NAME": "Biodiversity Data Mobilisation",
      "DESCRIPTION": "The current scope as we know is to spin up a “Living Atlas” (Open source) to host the Tier 1 Biodiversity data by transforming it into GBIF Darwin Core format (Internal facing app). The scope could also expand into publishing certain data into GBIF Global framework.",
      "DEPENDENT_SYSTEM_ID": "2001",
      "DEPENDENT_SYSTEM_NAME": "ESRI",
      "DEPENDENT_SYSTEM_DESCRIPTION": "GIS Enterprise capaility",
      "DEPENDENCY_END_DATE": "NA",
      "DEPENDENCY_DESCRIPTION": "Implementing Living Atlas has dependency on the ESRI upgrade project.",
      "MITIGATION": "A phased approach to release and synchronisation with ESRI upgrade is recommended.",
      "REMARKS": "Burcu and Manu to discuss key dates and feedback into dependency register. Burcu to confirm scope.",
      "IMAGE_URL": ""
  },
  {
      "SYSTEM_ID": "1035",
      "SYSTEM_NAME": "Hunting Permits -  New",
      "DESCRIPTION": "A brand new platform for hunting permits offering portal capability for the end user using Azure B2C for for Rakiura/Stewart Island Restricted Hunting Permits. Back-office app is a model-driven app and access is governed by Entra ID  and assigned roles via Power Platform admin center.",
      "DEPENDENT_SYSTEM_ID": "1077",
      "DEPENDENT_SYSTEM_NAME": "Project B",
      "DEPENDENT_SYSTEM_DESCRIPTION": "Enterprise GIS Application",
      "DEPENDENCY_END_DATE": "TBC",
      "DEPENDENCY_DESCRIPTION": "Delays with Westpac Payment Gateway build due to resourcing issues at Westpac's end.",
      "MITIGATION": "Go live with use cases not requiring payments. ",
      "REMARKS": "George to give some clarity on payment gateway completion dates",
      "IMAGE_URL": ""
  },
  {
      "SYSTEM_ID": "1037",
      "SYSTEM_NAME": "Permissions - New",
      "DESCRIPTION": "New app with ServiceNow portal for the customer and back office workflows for efficient processing of the applications. Augumented with some productive integration to boost efficiency.",
      "DEPENDENT_SYSTEM_ID": "1077",
      "DEPENDENT_SYSTEM_NAME": "Project B",
      "DEPENDENT_SYSTEM_DESCRIPTION": "There is a need for a common payment gateway will enable physical, digital, online, and offline payments. There is significant opportunity to streamlin payment operations to reduce manual process​.Improving payment integrations will allow DOC to charge card processing fees.",
      "DEPENDENCY_END_DATE": "TBC",
      "DEPENDENCY_DESCRIPTION": "Delays with Westpac Payment Gateway build due to resourcing issues at Westpac's end.",
      "MITIGATION": "None - Consider delaying Permissions release date.",
      "REMARKS": "George to give some clarity on payment gateway completion dates",
      "IMAGE_URL": ""
  },
  {
      "SYSTEM_ID": "1077",
      "SYSTEM_NAME": "Fishing License",
      "DESCRIPTION": "Fishing license application, processing and fulfilment app.",
      "DEPENDENT_SYSTEM_ID": "1077",
      "DEPENDENT_SYSTEM_NAME": "Project B",
      "DEPENDENT_SYSTEM_DESCRIPTION": "There is a need for a common payment gateway will enable physical, digital, online, and offline payments. There is significant opportunity to streamlin payment operations to reduce manual process​.Improving payment integrations will allow DOC to charge card processing fees.",
      "DEPENDENCY_END_DATE": "TBC",
      "DEPENDENCY_DESCRIPTION": "Delays with Westpac Payment Gateway build due to resourcing issues at Westpac's end.",
      "MITIGATION": "Go live with use cases not requiring payments.",
      "REMARKS": "George to give some clarity on payment gateway completion dates",
      "IMAGE_URL": ""
  },
  {
      "SYSTEM_ID": "1003",
      "SYSTEM_NAME": "SAP",
      "DESCRIPTION": "ERP for Finance, Asset Management and Procurement.",
      "DEPENDENT_SYSTEM_ID": "1077",
      "DEPENDENT_SYSTEM_NAME": "Project B",
      "DEPENDENT_SYSTEM_DESCRIPTION": "There is a need for a common payment gateway will enable physical, digital, online, and offline payments. There is significant opportunity to streamlin payment operations to reduce manual process​.Improving payment integrations will allow DOC to charge card processing fees.",
      "DEPENDENCY_END_DATE": "TBC",
      "DEPENDENCY_DESCRIPTION": "Project is  dependent on SAP for sales reconciliation / bank deposit reconciliation. Must be integrated  with clearing app before release.",
      "MITIGATION": "None - Consider delaying Payment Gateway release date.",
      "REMARKS": "George / Mike Hopkins to plan and confirm the end dates.",
      "IMAGE_URL": ""
  }
];

const DependencyViewer: React.FC = () => {
  const [selectedDependency, setSelectedDependency] = useState<Dependency | null>(mockData[0]);
  const [darkMode, setDarkMode] = useState(false);

  const getDependencyCards = (systemName: string) => {
    return mockData.filter((item) => item.SYSTEM_NAME === systemName);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex flex-col md:flex-row p-6 dark:bg-gray-900">
        {/* Left menu */}
        <div className="md:w-1/4 w-full bg-gray-200 dark:bg-gray-900 rounded-lg p-4 shadow-lg">
          <h2 className="text-lg font-semibold mb-8 text-gray-800 dark:text-white flex items-center space-x-2">
            <FontAwesomeIcon icon={faRocket} className="text-blue-500 text-2xl" />
            <span>InFlight Projects</span>
          </h2>
          <ul className="space-y-4">
            {Array.from(new Set(mockData.map((dependency) => dependency.SYSTEM_NAME))).map((systemName) => (
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
              <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">{selectedDependency.SYSTEM_NAME}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{selectedDependency.DESCRIPTION}</p>

              {/* Dependency cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {getDependencyCards(selectedDependency.SYSTEM_NAME).map((dependency) => (
                  <div
                    key={dependency.DEPENDENT_SYSTEM_ID}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <FontAwesomeIcon icon={faCogs} className="mr-3 text-blue-500"  />
                      <span className="text-base font-semibold text-gray-900 dark:text-white flex justify-left w-full">
                        {dependency.DEPENDENT_SYSTEM_NAME}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-3">
                        <FontAwesomeIcon icon={faInfoCircle} className="mr-3 text-blue-500" />
                        {dependency.DEPENDENCY_DESCRIPTION}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-3">
                        <FontAwesomeIcon icon={faCalendarCheck} className="mr-3 text-blue-500" />
                        {dependency.DEPENDENCY_END_DATE}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        <FontAwesomeIcon icon={faClipboard} className="mr-3 text-blue-500" />
                        {dependency.MITIGATION}
                      </p>
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
