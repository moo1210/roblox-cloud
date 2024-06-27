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

import { RobloxGroupsApiGroupMembershipDetailResponse } from '../models/RobloxGroupsApiGroupMembershipDetailResponse';
import { RobloxGroupsApiModelsResponseUserModel } from '../models/RobloxGroupsApiModelsResponseUserModel';
import { HttpFile } from '../../../common/http/http';

/**
* A users group membership response model
*/
export class RobloxGroupsApiUserGroupMembershipResponse {
    'user'?: RobloxGroupsApiModelsResponseUserModel;
    /**
    * The list of group memberships
    */
    'groups'?: Array<RobloxGroupsApiGroupMembershipDetailResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "RobloxGroupsApiModelsResponseUserModel",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<RobloxGroupsApiGroupMembershipDetailResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiUserGroupMembershipResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
