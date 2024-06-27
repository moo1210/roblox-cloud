/**
 * Develop Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

/**
* Request model for an asset alias.
*/
export class RobloxApiDevelopModelsAliasRequest {
    /**
    * Alias name. Required when creating an alias, optional for an update.
    */
    'name'?: string;
    /**
    * Alias type. Required when creating an alias, optional for an update.
    */
    'type'?: RobloxApiDevelopModelsAliasRequestTypeEnum;
    /**
    * Alias target. Required when creating an alias, optional for an update.
    */
    'targetId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RobloxApiDevelopModelsAliasRequestTypeEnum",
            "format": "int32"
        },
        {
            "name": "targetId",
            "baseName": "targetId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiDevelopModelsAliasRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxApiDevelopModelsAliasRequestTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
