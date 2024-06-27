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
* Request model for FollowingExists endpoint
*/
export class RobloxFriendsApiFollowingExistsRequestModel {
    /**
    * The userIds which the user may or may not be following.
    */
    'targetUserIds'?: Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "targetUserIds",
            "baseName": "targetUserIds",
            "type": "Array<number>",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxFriendsApiFollowingExistsRequestModel.attributeTypeMap;
    }

    public constructor() {
    }
}

