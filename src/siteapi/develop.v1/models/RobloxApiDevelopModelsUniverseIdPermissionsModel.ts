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
* A model containing information about a universe permissions
*/
export class RobloxApiDevelopModelsUniverseIdPermissionsModel {
    /**
    * The universe Id these permissions reference
    */
    'universeId'?: number;
    /**
    * Determines whether or not consumer can manage the target universe
    */
    'canManage'?: boolean;
    /**
    * Determines whether or not consumer can cloud the target universe  This is only nullable/optional in the context of https://develop.roblox.com/docs#!/Universes/get_v1_universes_universeId_context_permissions endpoint which is consumed only internally. It should be computed and set for all other usages.
    */
    'canCloudEdit'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "universeId",
            "baseName": "universeId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "canManage",
            "baseName": "canManage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canCloudEdit",
            "baseName": "canCloudEdit",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiDevelopModelsUniverseIdPermissionsModel.attributeTypeMap;
    }

    public constructor() {
    }
}
