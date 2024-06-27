/**
 * Groups Api v2
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
* A model representing data about an Roblox.Platform.Membership.IUser
*/
export class RobloxGroupsApiModelsResponseUserModel {
    /**
    * The user\'s builders club membership type
    */
    'buildersClubMembershipType'?: RobloxGroupsApiModelsResponseUserModelBuildersClubMembershipTypeEnum;
    /**
    * The user\'s verified badge status.
    */
    'hasVerifiedBadge'?: boolean;
    'userId'?: number;
    'username'?: string;
    'displayName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "buildersClubMembershipType",
            "baseName": "buildersClubMembershipType",
            "type": "RobloxGroupsApiModelsResponseUserModelBuildersClubMembershipTypeEnum",
            "format": "int32"
        },
        {
            "name": "hasVerifiedBadge",
            "baseName": "hasVerifiedBadge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiModelsResponseUserModel.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxGroupsApiModelsResponseUserModelBuildersClubMembershipTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
