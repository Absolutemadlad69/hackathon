// JIRA Integration Service
export const JiraIntegration = {
  syncTicket: async (ticketId) => {
    console.log(`Syncing ticket ${ticketId} from Jira`);
  },
  createIssue: async (payload) => {
    console.log('Creating Jira issue');
  }
};
