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
* A response model specific to multi-get user by name.
*/
export class RobloxUsersApiMultiGetUserByNameResponse {
    /**
    * The username the user was requested with.
    */
    'requestedUsername'?: string;
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
            "name": "requestedUsername",
            "baseName": "requestedUsername",
            "type": "string",
            "format": ""
        },
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
        return RobloxUsersApiMultiGetUserByNameResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
