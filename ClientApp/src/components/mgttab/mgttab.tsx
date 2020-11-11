import React from "react";
import { Providers, TeamsProvider } from '@microsoft/mgt';
import * as microsoftTeams from "@microsoft/teams-js";

// Set up Teams Provider for ms graph
TeamsProvider.microsoftTeamsLib = microsoftTeams;
Providers.globalProvider = new TeamsProvider({
    clientId: '*-*-*-*-*',
    authPopupUrl: 'https://*.eu.ngrok.io/auth'
})

// Define custom mgt elements as intrinsic JSX elements to avoid tsx errors
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'mgt-login': any;
        }
    }
}

const MgtTab: React.FC = () => {
    return (
        <div>
            <mgt-login></mgt-login>
            <h1>Test from content</h1>
        </div>
    )
}

export default MgtTab;