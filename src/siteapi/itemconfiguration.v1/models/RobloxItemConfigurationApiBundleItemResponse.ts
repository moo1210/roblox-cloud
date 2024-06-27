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

export class RobloxItemConfigurationApiBundleItemResponse {
    'bundleInfo'?: any;
    'description'?: string;
    'hasBeenOnSale'?: boolean;
    'items'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bundleInfo",
            "baseName": "bundleInfo",
            "type": "any",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasBeenOnSale",
            "baseName": "hasBeenOnSale",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxItemConfigurationApiBundleItemResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
