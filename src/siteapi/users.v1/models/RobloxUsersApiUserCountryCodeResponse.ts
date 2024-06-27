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
* A user country code response model.
*/
export class RobloxUsersApiUserCountryCodeResponse {
    /**
    * The country code of the user.
    */
    'countryCode'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxUsersApiUserCountryCodeResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

