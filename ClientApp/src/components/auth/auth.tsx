import React from 'react';
import * as microsoftTeams from "@microsoft/teams-js";
import { TeamsProvider } from '@microsoft/mgt';


const Auth: React.FC = () => {
    TeamsProvider.microsoftTeamsLib = microsoftTeams;
    TeamsProvider.handleAuth();
    return (<div></div>)
}

export default Auth;