import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generationDescription } from './resources/generation';
import { worksDescription } from './resources/works';
import { translationDescription } from './resources/translation';

export class FungeneratorsShakespeare implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Fungenerators Shakespeare',
                name: 'N8nDevFungeneratorsShakespeare',
                icon: { light: 'file:./fungenerators-shakespeare.svg', dark: 'file:./fungenerators-shakespeare.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Shakespeare API: quotes, names, insults, lorem ipsum, English translation.',
                defaults: { name: 'Fungenerators Shakespeare' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevFungeneratorsShakespeareApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Generation",
					"value": "Generation",
					"description": "Generate random quotes, names, insults, lorem ipsum etc"
				},
				{
					"name": "Works",
					"value": "Works",
					"description": "Get Shakespeare Works via API"
				},
				{
					"name": "Translation",
					"value": "Translation",
					"description": "Translate to Shakespeare English"
				}
			],
			"default": ""
		},
		...generationDescription,
		...worksDescription,
		...translationDescription
                ],
        };
}
