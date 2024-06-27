/**
 * Games Api v1
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
* Game filter response model.
*/
export class RobloxGamesApiModelsResponseGameFilter {
    /**
    * Token
    */
    'token'?: string;
    /**
    * Filter name
    */
    'name'?: string;
    /**
    * TokenExpiryInSeconds
    */
    'tokenExpiryInSeconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenExpiryInSeconds",
            "baseName": "tokenExpiryInSeconds",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiModelsResponseGameFilter.attributeTypeMap;
    }

    public constructor() {
    }
}
