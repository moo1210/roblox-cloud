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
* A request model for creating a group wall post
*/
export class RobloxGroupsApiCreateWallPostRequest {
    /**
    * The wall post body
    */
    'body'?: string;
    'captchaId'?: string;
    'captchaToken'?: string;
    'captchaProvider'?: string;
    'challengeId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "captchaId",
            "baseName": "captchaId",
            "type": "string",
            "format": ""
        },
        {
            "name": "captchaToken",
            "baseName": "captchaToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "captchaProvider",
            "baseName": "captchaProvider",
            "type": "string",
            "format": ""
        },
        {
            "name": "challengeId",
            "baseName": "challengeId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiCreateWallPostRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
