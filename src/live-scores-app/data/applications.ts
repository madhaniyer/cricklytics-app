const applicationsData = [
    {
        "SYSTEM_ID": "1019",
        "SYSTEM_NAME": "Booking Services",
        "DESCRIPTION": "Internet facting portal for booking huts, camps and great walks",
        "SYSTEM_GROUP_ID": "7",
        "SYSTEM_GROUP_DESC": "Booking Service",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Native",
        "VENDOR": "",
        "SYSTEM_STATUS": "",
        "SYSTEM_TYPE": "",
        "BUSINESS_UNIT": "",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Cameron Hayland",
        "ANNUAL_SPEND": "225,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1016",
        "SYSTEM_NAME": "DocFlow",
        "DESCRIPTION": "Workflow platform that supports Citizen and DocFlow CLE",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "DocFlow",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Automatic",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Objective",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Jonathan Bull",
        "ANNUAL_SPEND": "227,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1017",
        "SYSTEM_NAME": "Jobs for Nature",
        "DESCRIPTION": "SaaS product used for grants management",
        "SYSTEM_GROUP_ID": "5",
        "SYSTEM_GROUP_DESC": "J4N",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Real Me / Azure AD",
        "VENDOR": "Enquire",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Jobs for Nature",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Peter Cooper",
        "ANNUAL_SPEND": "165,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1018",
        "SYSTEM_NAME": "Keyplan - Mgmt. Planning",
        "DESCRIPTION": "Tool used for Statutory management consultation.",
        "SYSTEM_GROUP_ID": "6",
        "SYSTEM_GROUP_DESC": "Objective Keyplan",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Objective",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Statutory Planning",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Raynamarie Chan",
        "ANNUAL_SPEND": "110,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1003",
        "SYSTEM_NAME": "SAP S4HANA",
        "DESCRIPTION": "ERP for Finance, Asset Management and Procurement.",
        "SYSTEM_GROUP_ID": "1",
        "SYSTEM_GROUP_DESC": "SAP",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "Internal CMS",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Accenture",
        "SYSTEM_STATUS": "ACTIVE",
        "SYSTEM_TYPE": "PaaS",
        "BUSINESS_UNIT": "Information Systems and Services",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Mike Hopkins",
        "ANNUAL_SPEND": "150,000",
        "IMAGE_URL": "./doc-it-images/SAP.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1004",
        "SYSTEM_NAME": "SAP BW4HANA",
        "DESCRIPTION": "SAP Data Warehouse & Reporting",
        "SYSTEM_GROUP_ID": "1",
        "SYSTEM_GROUP_DESC": "SAP",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "Internal CMS",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Accenture",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "PaaS",
        "BUSINESS_UNIT": "Information Systems and Services",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Mike Hopkins",
        "ANNUAL_SPEND": "150,000",
        "IMAGE_URL": "./doc-it-images/SAP.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1005",
        "SYSTEM_NAME": "SAP SAC",
        "DESCRIPTION": "Tool for performing analytics and reporting.",
        "SYSTEM_GROUP_ID": "1",
        "SYSTEM_GROUP_DESC": "SAP",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "Internal CMS",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Accenture",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Information Systems and Services",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Mike Hopkins",
        "ANNUAL_SPEND": "250,000",
        "IMAGE_URL": "./doc-it-images/SAP.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1006",
        "SYSTEM_NAME": "SAP ARIBA",
        "DESCRIPTION": "Catalogue of vendors and procurement options",
        "SYSTEM_GROUP_ID": "1",
        "SYSTEM_GROUP_DESC": "SAP",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "Internal CMS",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Accenture",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Information Systems and Services",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Mike Hopkins",
        "ANNUAL_SPEND": "220,000",
        "IMAGE_URL": "./doc-it-images/SAP.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1007",
        "SYSTEM_NAME": "SAP BTP/CPI",
        "DESCRIPTION": "Integration Middleware",
        "SYSTEM_GROUP_ID": "1",
        "SYSTEM_GROUP_DESC": "SAP",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "Internal CMS",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "",
        "VENDOR": "Accenture",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Information Systems and Services",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Mike Hopkins",
        "ANNUAL_SPEND": "40,000",
        "IMAGE_URL": "./doc-it-images/SAP.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1008",
        "SYSTEM_NAME": "AboutUS",
        "DESCRIPTION": "Employee Self Service Portal",
        "SYSTEM_GROUP_ID": "2",
        "SYSTEM_GROUP_DESC": "HRIS",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Fusion5",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "People & Culture",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Steven Li",
        "ANNUAL_SPEND": "0",
        "IMAGE_URL": "./doc-it-images/HRIS.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1010",
        "SYSTEM_NAME": "Jadestar",
        "DESCRIPTION": "HR and Payroll Team application",
        "SYSTEM_GROUP_ID": "2",
        "SYSTEM_GROUP_DESC": "HRIS",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Fusion5",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "COTS",
        "BUSINESS_UNIT": "People & Culture",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Vasili Rekatsinas",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "./doc-it-images/HRIS.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1011",
        "SYSTEM_NAME": "Springboard",
        "DESCRIPTION": "3rd Party Employee Recruitment tool for the hiring of staff",
        "SYSTEM_GROUP_ID": "2",
        "SYSTEM_GROUP_DESC": "HRIS",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "People Scout",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "People & Culture",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Vasili Rekatsinas",
        "ANNUAL_SPEND": "150,000",
        "IMAGE_URL": "./doc-it-images/HRIS.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1012",
        "SYSTEM_NAME": "TimeFiler",
        "DESCRIPTION": "Time Recording and Leave management application",
        "SYSTEM_GROUP_ID": "2",
        "SYSTEM_GROUP_DESC": "HRIS",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Fusion5",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "People & Culture",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Vasili Rekatsinas",
        "ANNUAL_SPEND": "150,000",
        "IMAGE_URL": "./doc-it-images/HRIS.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1013",
        "SYSTEM_NAME": "DOCLearn",
        "DESCRIPTION": "Learning Management System",
        "SYSTEM_GROUP_ID": "2",
        "SYSTEM_GROUP_DESC": "HRIS",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Fusion5",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "People & Culture",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Nicky Vella",
        "ANNUAL_SPEND": "150,000",
        "IMAGE_URL": "./doc-it-images/HRIS.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1015",
        "SYSTEM_NAME": "Blueworx",
        "DESCRIPTION": "MyPM - Mobile Self Service for Rangers to record work",
        "SYSTEM_GROUP_ID": "1",
        "SYSTEM_GROUP_DESC": "SAP",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "Internal CMS",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Accenture",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Information Systems and Services",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Mike Hopkins",
        "ANNUAL_SPEND": "192,000",
        "IMAGE_URL": "./doc-it-images/SAP.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1020",
        "SYSTEM_NAME": "CSC App",
        "DESCRIPTION": "App used by the Customer Service Center (CSC) to record interactions with the customer",
        "SYSTEM_GROUP_ID": "17",
        "SYSTEM_GROUP_DESC": "CSC",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Microsoft",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "MS Dynamics",
        "BUSINESS_UNIT": "Customer Service",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "George Hickmott",
        "ANNUAL_SPEND": "40,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "1021",
        "SYSTEM_NAME": "Counter Data Activity System",
        "DESCRIPTION": "Counter data is downloaded via bluettoth and synced back into SAP S/4 HANA using the DOC Counter App on Blueworx.",
        "SYSTEM_GROUP_ID": "1",
        "SYSTEM_GROUP_DESC": "CDAS",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Accenture",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Mobility",
        "BUSINESS_UNIT": "V&H Monitoring & Reporting",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Jason Mackiewicz",
        "ANNUAL_SPEND": "60,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "1022",
        "SYSTEM_NAME": "Risk Manager",
        "DESCRIPTION": "Risk Manager application for health & safety",
        "SYSTEM_GROUP_ID": "13",
        "SYSTEM_GROUP_DESC": "Risk Manager",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID / Basic ",
        "VENDOR": "IMPAC",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Health & Safety",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Pam McDonald",
        "ANNUAL_SPEND": "40,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "1024",
        "SYSTEM_NAME": "DOC Intranet",
        "DESCRIPTION": "",
        "SYSTEM_GROUP_ID": "14",
        "SYSTEM_GROUP_DESC": "DOC Intranet",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "",
        "AUTHENTICATION": "",
        "VENDOR": "",
        "SYSTEM_STATUS": "",
        "SYSTEM_TYPE": "",
        "BUSINESS_UNIT": "",
        "SYSTEM_OWNER": "",
        "CHAMPION": "",
        "ANNUAL_SPEND": "100,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "1025",
        "SYSTEM_NAME": "Assyst",
        "DESCRIPTION": "Legacy service request application",
        "SYSTEM_GROUP_ID": "15",
        "SYSTEM_GROUP_DESC": "Assyst",
        "CLOUD_PROVIDER": "On-premise",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Automatic",
        "IS_CORE_TOOL": "",
        "AUTHENTICATION": "",
        "VENDOR": "",
        "SYSTEM_STATUS": "",
        "SYSTEM_TYPE": "",
        "BUSINESS_UNIT": "",
        "SYSTEM_OWNER": "",
        "CHAMPION": "",
        "ANNUAL_SPEND": "30,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "1026",
        "SYSTEM_NAME": "CommonDB",
        "DESCRIPTION": "Utility database for staging and holding legacy key information",
        "SYSTEM_GROUP_ID": "16",
        "SYSTEM_GROUP_DESC": "CommonDB",
        "CLOUD_PROVIDER": "On-premise",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "",
        "AUTHENTICATION": "",
        "VENDOR": "",
        "SYSTEM_STATUS": "",
        "SYSTEM_TYPE": "",
        "BUSINESS_UNIT": "",
        "SYSTEM_OWNER": "",
        "CHAMPION": "",
        "ANNUAL_SPEND": "10,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "1027",
        "SYSTEM_NAME": "CLE Mobile",
        "DESCRIPTION": "Mobility solution for supervisors to record & issue infringements.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Automatic",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Objective",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Mobility",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Peter Cooper",
        "ANNUAL_SPEND": "40,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1028",
        "SYSTEM_NAME": "MyCLE",
        "DESCRIPTION": "Myobility solution for rangers to notify infringements via Blueeworx/Neptune.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Automatic",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Accenture",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Mobility",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Ben Goggins",
        "ANNUAL_SPEND": "15,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1029",
        "SYSTEM_NAME": "NaPALIS",
        "DESCRIPTION": "NaPALIS is a web-based application currently being used by DOC and LINZ to record and manage land they have responsibility for",
        "SYSTEM_GROUP_ID": "18",
        "SYSTEM_GROUP_DESC": "PPL",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Automatic",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Land Tracker",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Regulatory Systems",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Les Jones",
        "ANNUAL_SPEND": "70,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": ""
    },
    {
        "SYSTEM_ID": "1030",
        "SYSTEM_NAME": "FlexiPurchase",
        "DESCRIPTION": "Application for expense management.",
        "SYSTEM_GROUP_ID": "1",
        "SYSTEM_GROUP_DESC": "SAP",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "FlexiPurchase",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Finance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Chris Rekatsinas",
        "ANNUAL_SPEND": "60,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1031",
        "SYSTEM_NAME": "CITES",
        "DESCRIPTION": "Bespoke solution to support operationalising Trad-In Endagered Species Act 1989. It requires imports and exports of specimens of species covered by the convention to be authorised through a permitting system.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "On-Premise",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Automatic",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "NTLM",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Web App",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Jack Farley",
        "ANNUAL_SPEND": "30,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1032",
        "SYSTEM_NAME": "Hunting Permits - Internet Form",
        "DESCRIPTION": "Some districts enable hunters to apply via webform which in turn emails the details to a staff member who manually enters the details into docs internal MS access database.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "On-Premise",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Anonymous",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Web App",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Liam Kazimierzak",
        "ANNUAL_SPEND": "10,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1033",
        "SYSTEM_NAME": "Hunting Permits - CHCCO",
        "DESCRIPTION": "MS Access based small game Hunting Permits DB. Published on Citrix desktops.  ",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "On-Premise",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Basic",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Access DB",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Liam Kazimierzak",
        "ANNUAL_SPEND": "10,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1034",
        "SYSTEM_NAME": "Hunting Permits - Misc",
        "DESCRIPTION": "MS Excel is also used by some districts to manage bookings for a restricted hunting area before a hunting permit is issued using  either MS Access, Carbon book or MS Word template.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "On-Premise",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Basic",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "MS Office",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Liam Kazimierzak",
        "ANNUAL_SPEND": "10,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1039",
        "SYSTEM_NAME": "Hunting Permits - Admin",
        "DESCRIPTION": "Database interface tool for managing the Hunting Permits online application.Search for current permits, permit holders, permit holder information & list current active permits by Hunting Area",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "On-Premise",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "TBA",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Liam Kazimierzak",
        "ANNUAL_SPEND": "20,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1035",
        "SYSTEM_NAME": "Hunting Permits -  New",
        "DESCRIPTION": "A brand new platform for hunting permits offering portal capability for the end user using Azure B2C for for Rakiura/Stewart Island Restricted Hunting Permits. Back-office app is a model-driven app and access is governed by Entra ID  and assigned roles via Power Platform center.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "Sharepoint",
        "DOCUMENT_STORAGE_METHOD": "Automatic",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Az-B2C/Entra ID",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "In Flight",
        "SYSTEM_TYPE": "MS Dynamics",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Liam Kazimierzak",
        "ANNUAL_SPEND": "70,000",
        "IMAGE_URL": "./doc-it-images/HUNT.png",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1036",
        "SYSTEM_NAME": "Permissions - Old",
        "DESCRIPTION": "Internal facing application for dealing with permission application, workflows around it and billing.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "On-Premise",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Web App",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Finn Brightwell",
        "ANNUAL_SPEND": "100,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1037",
        "SYSTEM_NAME": "Permissions - New",
        "DESCRIPTION": "New app with ServiceNow portal for the customer and back office workflows for efficient processing of the applications. Augumented with some productive integration to boost efficiency.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "Sharepoint",
        "DOCUMENT_STORAGE_METHOD": "Automatic",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "Az-B2C/Entra ID",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "In Flight",
        "SYSTEM_TYPE": "ServiceNow",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Liam Kazimierzak",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "1038",
        "SYSTEM_NAME": "Permission Mapping Tool",
        "DESCRIPTION": "One system for maintaining and viewing permissions spatial data and it serves the Old Permissions app. Will  provide a series of specific spatial layers the meet the various requirements of the Permissions process.",
        "SYSTEM_GROUP_ID": "4",
        "SYSTEM_GROUP_DESC": "Compliance & Regulatory",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "FALSE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Internal",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Web App",
        "BUSINESS_UNIT": "Regulatory Compliance",
        "SYSTEM_OWNER": "Manu King",
        "CHAMPION": "James Kinny",
        "ANNUAL_SPEND": "100,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Complete"
    },
    {
        "SYSTEM_ID": "2000",
        "SYSTEM_NAME": "Snowflake",
        "DESCRIPTION": "Enterprise Data Warehouse",
        "SYSTEM_GROUP_ID": "10",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Snowflake",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Data Insights & Information",
        "SYSTEM_OWNER": "Nadia Webster",
        "CHAMPION": "Shaun Nicholson",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "2001",
        "SYSTEM_NAME": "ESRI",
        "DESCRIPTION": "Enterprise GIS Application",
        "SYSTEM_GROUP_ID": "11",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "ESRI",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Geospatial Services",
        "SYSTEM_OWNER": "Manu King",
        "CHAMPION": "James Kinny",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "2002",
        "SYSTEM_NAME": "MS Active Directory",
        "DESCRIPTION": "Domain Services & Authentication",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "On-premise",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "ADFS",
        "VENDOR": "Microsoft",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "Domain Contoller",
        "BUSINESS_UNIT": "Technology Operations",
        "SYSTEM_OWNER": "Aaron Evans",
        "CHAMPION": "Cameron Dawson",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "2003",
        "SYSTEM_NAME": "Entra ID",
        "DESCRIPTION": "Cloud based domain service, Authentication & Authorisation",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Microsoft",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Technology Operations",
        "SYSTEM_OWNER": "Aaron Evans",
        "CHAMPION": "Cameron Dawson",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "2004",
        "SYSTEM_NAME": "DocCM",
        "DESCRIPTION": "Enterprise document management system",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "Vendor Hosted",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Team IM",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Information Services",
        "SYSTEM_OWNER": "Nadia Webster",
        "CHAMPION": "Judit Farquhar-Nadasi",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "Not Started"
    },
    {
        "SYSTEM_ID": "2005",
        "SYSTEM_NAME": "ARIS",
        "DESCRIPTION": "Business Process Management",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "AWS",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Sofware AG",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Information Systems and Services",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Jonathan Bull",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "2006",
        "SYSTEM_NAME": "MS Teams",
        "DESCRIPTION": "Team for collaboration, calling and lots more..",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Microsoft",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Technology Operations",
        "SYSTEM_OWNER": "Aaron Evans",
        "CHAMPION": "Cameron Dawson",
        "ANNUAL_SPEND": "0",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "2007",
        "SYSTEM_NAME": "ServiceNow",
        "DESCRIPTION": "Enterprise Serice Request and Workflow Platform",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "ServiceNow",
        "DOCUMENT_STORAGE": "DocCM",
        "DOCUMENT_STORAGE_METHOD": "Manual",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "ServiceNow",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Technology Operations",
        "SYSTEM_OWNER": "Aaron Evans",
        "CHAMPION": "Stefanie Sentheim",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "2008",
        "SYSTEM_NAME": "MS Outlook",
        "DESCRIPTION": "Enterprise Email Capability",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Microsoft",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Technology Operations",
        "SYSTEM_OWNER": "Aaron Evans",
        "CHAMPION": "Cameron Dawson",
        "ANNUAL_SPEND": "0",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "2009",
        "SYSTEM_NAME": "MS Power Platform",
        "DESCRIPTION": "Low Code / No Code platform.",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Entra ID",
        "VENDOR": "Microsoft",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Technology Solutions",
        "SYSTEM_OWNER": "Mark Ingram",
        "CHAMPION": "Kenji Yamada",
        "ANNUAL_SPEND": "200,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    },
    {
        "SYSTEM_ID": "2010",
        "SYSTEM_NAME": "Azure B2C",
        "DESCRIPTION": "Business to Customer Identity and Access Management Platform",
        "SYSTEM_GROUP_ID": "12",
        "SYSTEM_GROUP_DESC": "Enterprise Capability",
        "CLOUD_PROVIDER": "Azure",
        "DOCUMENT_STORAGE": "NA",
        "DOCUMENT_STORAGE_METHOD": "NA",
        "IS_CORE_TOOL": "TRUE",
        "AUTHENTICATION": "Az-B2C",
        "VENDOR": "Microsoft",
        "SYSTEM_STATUS": "Active",
        "SYSTEM_TYPE": "SaaS",
        "BUSINESS_UNIT": "Technology Solutions",
        "SYSTEM_OWNER": "Aaron Evans",
        "CHAMPION": "Cameron Dawson",
        "ANNUAL_SPEND": "50,000",
        "IMAGE_URL": "",
        "UPDATED_DATE": "",
        "CREATED_DATE": "",
        "REVIEW_STATUS": "COMPLETE"
    }
];

export default  applicationsData ;