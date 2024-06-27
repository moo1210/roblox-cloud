/**
 * Develop Api v1
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
* Team create settings request
*/
export class RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest {
    /**
    * Whether or not the universe should be enabled for team create
    */
    'isEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isEnabled",
            "baseName": "isEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
