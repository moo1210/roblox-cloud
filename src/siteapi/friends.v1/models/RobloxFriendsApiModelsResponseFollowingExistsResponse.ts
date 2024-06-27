/**
 * Friends Api v1
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
* Response contained in list for FollowingExists endpoint. Corresponds to a single userId.
*/
export class RobloxFriendsApiModelsResponseFollowingExistsResponse {
    /**
    * Whether or not a user is following userId in FriendsController.FollowingExists
    */
    'isFollowing'?: boolean;
    /**
    * Whether or not a user is followed by userId in FriendsController.FollowingExists
    */
    'isFollowed'?: boolean;
    /**
    * The userId being potentially followed
    */
    'userId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isFollowing",
            "baseName": "isFollowing",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFollowed",
            "baseName": "isFollowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxFriendsApiModelsResponseFollowingExistsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
