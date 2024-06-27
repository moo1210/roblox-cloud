/**
 * Groups Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebWebAPIExclusiveStartRequestSystemInt32 {
    'exclusiveStartKeyInfo'?: RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32;
    'cursorRecipe'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exclusiveStartKeyInfo",
            "baseName": "ExclusiveStartKeyInfo",
            "type": "RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32",
            "format": ""
        },
        {
            "name": "cursorRecipe",
            "baseName": "CursorRecipe",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebWebAPIExclusiveStartRequestSystemInt32.attributeTypeMap;
    }

    public constructor() {
    }
}

