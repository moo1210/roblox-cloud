/**
 * ItemConfiguration Api v1
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
* Request model to add a tag to an item
*/
export class RobloxItemConfigurationApiCreateItemTagRequest {
    /**
    * Gets or sets the item Id
    */
    'itemId'?: string;
    /**
    * Gets or sets the tag Id
    */
    'tagId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagId",
            "baseName": "tagId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxItemConfigurationApiCreateItemTagRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

