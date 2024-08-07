/**
 * Groups Api v1
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
* A response model for role configuration
*/
export class RobloxGroupsApiRoleConfigurationResponse {
    /**
    * The maximum length of a role name
    */
    'nameMaxLength'?: number;
    /**
    * The maximum length of a role description
    */
    'descriptionMaxLength'?: number;
    /**
    * The maximum number of roles in a group
    */
    'limit'?: number;
    /**
    * The cost of purchasing a role
    */
    'cost'?: number;
    /**
    * The minimum rank a role can have
    */
    'minRank'?: number;
    /**
    * The maximum rank a role can have
    */
    'maxRank'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nameMaxLength",
            "baseName": "nameMaxLength",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "descriptionMaxLength",
            "baseName": "descriptionMaxLength",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "minRank",
            "baseName": "minRank",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maxRank",
            "baseName": "maxRank",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiRoleConfigurationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

