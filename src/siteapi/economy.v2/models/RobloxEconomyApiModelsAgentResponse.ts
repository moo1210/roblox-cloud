/**
 * Economy Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

/**
* Represents an agent, which can be either a user or a group.
*/
export class RobloxEconomyApiModelsAgentResponse {
    'id'?: number;
    'type'?: RobloxEconomyApiModelsAgentResponseTypeEnum;
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RobloxEconomyApiModelsAgentResponseTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxEconomyApiModelsAgentResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxEconomyApiModelsAgentResponseTypeEnum {
    User = 'User',
    Group = 'Group'
}

