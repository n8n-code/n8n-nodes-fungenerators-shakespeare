import type { INodeProperties } from 'n8n-workflow';

export const translationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Translation"
					]
				}
			},
			"options": [
				{
					"name": "GET Shakespeare Translate",
					"value": "GET Shakespeare Translate",
					"action": "GET Shakespeare Translate",
					"description": "Translate from English to Shakespeare English.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shakespeare/translate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shakespeare/translate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Translation"
					],
					"operation": [
						"GET Shakespeare Translate"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "text",
			"required": true,
			"description": "Text to translate to Shakespeare English.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Translation"
					],
					"operation": [
						"GET Shakespeare Translate"
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
						"Translation"
					],
					"operation": [
						"GET Shakespeare Translate"
					]
				}
			}
		},
];
