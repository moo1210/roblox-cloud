/**
 * Users Api v1
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
* A response model specific to multi-get user.
*/
export class RobloxUsersApiVerifiedBadgeUserResponse {
    /**
    * The user\'s verified badge status.
    */
    'hasVerifiedBadge'?: boolean;
    /**
    * The user Id.
    */
    'id'?: number;
    /**
    * The user name.
    */
    'name'?: string;
    /**
    * The user DisplayName.
    */
    'displayName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hasVerifiedBadge",
            "baseName": "hasVerifiedBadge",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
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
        return RobloxUsersApiVerifiedBadgeUserResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

