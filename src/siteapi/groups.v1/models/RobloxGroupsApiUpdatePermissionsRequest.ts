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

import { RobloxGroupsApiUpdatePermissionsRequestPermissions } from '../models/RobloxGroupsApiUpdatePermissionsRequestPermissions';
import { HttpFile } from '../../../common/http/http';

/**
* A request model for updating a group\'s roleset\'s permissions.
*/
export class RobloxGroupsApiUpdatePermissionsRequest {
    'permissions'?: RobloxGroupsApiUpdatePermissionsRequestPermissions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "RobloxGroupsApiUpdatePermissionsRequestPermissions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiUpdatePermissionsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

