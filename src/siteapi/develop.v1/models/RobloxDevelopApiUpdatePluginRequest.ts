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
* A request model for updating a plugin.
*/
export class RobloxDevelopApiUpdatePluginRequest {
    /**
    * The new plugin name.
    */
    'name'?: string;
    /**
    * The new plugin description.
    */
    'description'?: string;
    /**
    * Whether or not comments should be enabled.
    */
    'commentsEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "commentsEnabled",
            "baseName": "commentsEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxDevelopApiUpdatePluginRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

