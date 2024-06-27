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
* A request model for updating a group\'s settings.
*/
export class RobloxGroupsApiUpdateGroupSettingsRequest {
    /**
    * Whether public entry is allowed.
    */
    'isApprovalRequired'?: boolean;
    /**
    * Whether enemy club declarations are allowed.
    */
    'areEnemiesAllowed'?: boolean;
    /**
    * Whether funds are publicly visible.
    */
    'areGroupFundsVisible'?: boolean;
    /**
    * Whether games are publicly visible.
    */
    'areGroupGamesVisible'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isApprovalRequired",
            "baseName": "isApprovalRequired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "areEnemiesAllowed",
            "baseName": "areEnemiesAllowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "areGroupFundsVisible",
            "baseName": "areGroupFundsVisible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "areGroupGamesVisible",
            "baseName": "areGroupGamesVisible",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiUpdateGroupSettingsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

