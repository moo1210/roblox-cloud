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
* Request model for getting users by usernames.
*/
export class RobloxUsersApiMultiGetByUsernameRequest {
    /**
    * The usernames.
    */
    'usernames'?: Array<string>;
    /**
    * Whether the response should exclude banned users
    */
    'excludeBannedUsers'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "usernames",
            "baseName": "usernames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "excludeBannedUsers",
            "baseName": "excludeBannedUsers",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxUsersApiMultiGetByUsernameRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

