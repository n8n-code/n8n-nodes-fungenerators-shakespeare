import type { INodeProperties } from 'n8n-workflow';

export const generationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					]
				}
			},
			"options": [
				{
					"name": "GET Shakespeare Generate Insult",
					"value": "GET Shakespeare Generate Insult",
					"action": "GET Shakespeare Generate Insult",
					"description": "Generate random Shakespeare style insults.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shakespeare/generate/insult"
						}
					}
				},
				{
					"name": "GET Shakespeare Generate Lorem Ipsum",
					"value": "GET Shakespeare Generate Lorem Ipsum",
					"action": "GET Shakespeare Generate Lorem Ipsum",
					"description": "Generate Shakespeare lorem ipsum.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shakespeare/generate/lorem-ipsum"
						}
					}
				},
				{
					"name": "GET Shakespeare Generate Name",
					"value": "GET Shakespeare Generate Name",
					"action": "GET Shakespeare Generate Name",
					"description": "Generate random Shakespearen names.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shakespeare/generate/name"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /shakespeare/generate/insult",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Insult"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "No of insults to generate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Insult"
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
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Insult"
					]
				}
			}
		},
		{
			"displayName": "GET /shakespeare/generate/lorem-ipsum",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Lorem Ipsum"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Type of element to generate `paragraphs/sentences/words`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Lorem Ipsum"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "No of elements to generate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Lorem Ipsum"
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
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Lorem Ipsum"
					]
				}
			}
		},
		{
			"displayName": "GET /shakespeare/generate/name",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Name"
					]
				}
			}
		},
		{
			"displayName": "Variation",
			"name": "variation",
			"description": "Variation to generate `male/female`.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "variation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Name"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "No of names to generate",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Name"
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
						"Generation"
					],
					"operation": [
						"GET Shakespeare Generate Name"
					]
				}
			}
		},
];
