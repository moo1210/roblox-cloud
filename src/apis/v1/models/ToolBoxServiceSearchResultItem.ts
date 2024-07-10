/**
 * Toolbox Service
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

export class ToolBoxServiceSearchResultItem {
    'id'?: number;
    'name'?: string | null;
    'searchResultSource'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "searchResultSource",
            "baseName": "searchResultSource",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ToolBoxServiceSearchResultItem.attributeTypeMap;
    }

    public constructor() {
    }
}

