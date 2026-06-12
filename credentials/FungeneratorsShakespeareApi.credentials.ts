import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class FungeneratorsShakespeareApi implements ICredentialType {
        name = 'N8nDevFungeneratorsShakespeareApi';

        displayName = 'Fungenerators Shakespeare API';

        icon: Icon = { light: 'file:../nodes/FungeneratorsShakespeare/fungenerators-shakespeare.svg', dark: 'file:../nodes/FungeneratorsShakespeare/fungenerators-shakespeare.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'http://api.fungenerators.com',
                        required: true,
                        placeholder: 'http://api.fungenerators.com',
                        description: 'The base URL of your Fungenerators Shakespeare API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-Fungenerators-Api-Secret': '={{$credentials.apiKey}}',
                        },
                },
        };


}
