# <YOUR_APP_NAME>

Built with [Wasp](https://wasp-lang.dev), based on the [Open Saas](https://opensaas.sh) template.

## Development

### Running locally
 - Make sure you have the `.env.client` and `.env.server` files with correct dev values in the root of the project.
 - Run the database with `wasp start db` and leave it running.
 - Run `wasp start` and leave it running.
 - [OPTIONAL]: If this is the first time starting the app, or you've just made changes to your entities/prisma schema, also run `wasp db migrate-dev`.


To integrate Azure AD SSO into your OpenSaaS project using the WASP framework, you need to leverage the OpenID Connect (OIDC) protocol supported by Azure AD. The OpenSaaS template and WASP’s extensibility make it relatively straightforward, and you won’t need to overhaul the baseline.

Here’s a step-by-step breakdown:

1. Update Azure AD Configuration
Register your application in Azure AD:

Go to the Azure Portal and navigate to Azure Active Directory > App Registrations.
Create a New Registration:
Name: e.g., "DOC IT Landscape"
Supported Account Types: Choose based on whether the app is for single-tenant or multi-tenant use.
Redirect URI: For local development: http://localhost:3000/auth/callback.
Save the application.
Set up authentication settings:

Under Authentication, add the redirect URI (both local and production).
Enable ID tokens (for OpenID Connect).
Configure logout by adding http://localhost:3000 (or production URL) to the Front-channel Logout URL.
Create a client secret:

Under Certificates & Secrets, create a new secret.
Save the client secret, Application (client) ID, and Directory (tenant) ID.
2. Modify main.wasp
Add a new Azure AD authentication method to your main.wasp file. Replace or extend the auth configuration.

wasp
Copy code
auth: {
  userEntity: User,
  methods: {
    azureAd: {
      userSignupFields: import { getAzureAdUserFields } from "@src/auth/userSignupFields",
      configFn: import { getAzureAdAuthConfig } from "@src/auth/azureAdAuthConfig",
    }
  },
  onAuthSucceededRedirectTo: "/app-dashboard",
  onAuthFailedRedirectTo: "/",
}
3. Set Up Azure AD Config in Your Codebase
3.1 Create Azure AD Configuration Helper
Add a new file at @src/auth/azureAdAuthConfig.js:

javascript
Copy code
export const getAzureAdAuthConfig = () => ({
  clientId: process.env.AZURE_AD_CLIENT_ID,
  clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
  tenantId: process.env.AZURE_AD_TENANT_ID,
  redirectUri: `${process.env.BASE_URL}/auth/callback`, // Adjust BASE_URL for local vs prod
  authority: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}`,
  scope: "openid profile email",
});
3.2 Handle User Mapping
Create @src/auth/userSignupFields.js:

javascript
Copy code
export const getAzureAdUserFields = (authData) => ({
  email: authData.email,
  name: authData.name,
});
4. Set Up Environment Variables
Add the following variables to .env.server (do not commit secrets):

env
Copy code
AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret
AZURE_AD_TENANT_ID=your-tenant-id
BASE_URL=http://localhost:3000 # For development; adjust for production
5. Update Callback Handling
Modify your backend to handle the /auth/callback route for Azure AD login. WASP will automatically use the configFn and map users to your database.

6. Test Locally
Restart your WASP app:
bash
Copy code
wasp start
Visit your application and attempt login with Azure AD. Check for correct user mapping and redirect behavior.
7. Deploy Changes
Configure your production Azure AD app with the correct Redirect URI and BASE_URL.
Deploy your app and ensure environment variables are set on the server.
Additional Notes:
User Roles and Permissions: Map roles from Azure AD to your app if needed by extending the userSignupFields logic.
Token Handling: WASP handles JWTs for you, but Azure AD tokens can also be validated explicitly in custom backend actions if required.
Error Handling: Implement fallback or error logging for Azure AD login failures using onAuthFailedRedirectTo.
By following these steps, you can seamlessly integrate Azure AD SSO into your OpenSaaS project while maintaining the WASP framework baseline. Let me know if you'd like further clarifications!






You said:
give me the full code
ChatGPT said:
ChatGPT
Here is the full implementation for integrating Azure AD SSO into your OpenSaaS app with the WASP framework. The implementation includes updates to your main.wasp file, the necessary helper functions, and configuration settings.

1. main.wasp Update
Replace or augment your existing auth configuration in main.wasp:

wasp
Copy code
auth: {
  userEntity: User,
  methods: {
    azureAd: {
      userSignupFields: import { getAzureAdUserFields } from "@src/auth/userSignupFields",
      configFn: import { getAzureAdAuthConfig } from "@src/auth/azureAdAuthConfig",
    }
  },
  onAuthSucceededRedirectTo: "/app-dashboard",
  onAuthFailedRedirectTo: "/",
}
2. Azure AD Configuration Helper (azureAdAuthConfig.js)
Create a new file at @src/auth/azureAdAuthConfig.js to define the Azure AD OAuth configuration.

javascript
Copy code
export const getAzureAdAuthConfig = () => ({
  clientId: process.env.AZURE_AD_CLIENT_ID,
 





