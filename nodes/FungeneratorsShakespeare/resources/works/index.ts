import type { INodeProperties } from 'n8n-workflow';

export const worksDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Works"
					]
				}
			},
			"options": [
				{
					"name": "GET Shakespeare Quote",
					"value": "GET Shakespeare Quote",
					"action": "GET Shakespeare Quote",
					"description": "Get a random Shakespeare quote.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shakespeare/quote"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shakespeare/quote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Works"
					],
					"operation": [
						"GET Shakespeare Quote"
					]
				}
			}
		},
		{
			"displayName": "X Fungenerators API Secret (Header)",
			"name": "security_x_fungenerators_api_secret",
			"type": "string",
			"default": "",
			"description": "API key for X-Fungenerators-Api-Secret (header: X-Fungenerators-Api-Secret)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-Fungenerators-Api-Secret": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Works"
					],
					"operation": [
						"GET Shakespeare Quote"
					]
				}
			}
		},
];
