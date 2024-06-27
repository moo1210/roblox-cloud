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
* A user roles response model.
*/
export class RobloxUsersApiUserRolesResponse {
    /**
    * The roles of the user.
    */
    'roles'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxUsersApiUserRolesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

