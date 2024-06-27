/**
 * Friends Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebWebAPIExclusiveStartRequestSystemInt64 {
    'exclusiveStartKeyInfo'?: RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64;
    'cursorRecipe'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exclusiveStartKeyInfo",
            "baseName": "ExclusiveStartKeyInfo",
            "type": "RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64",
            "format": ""
        },
        {
            "name": "cursorRecipe",
            "baseName": "CursorRecipe",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebWebAPIExclusiveStartRequestSystemInt64.attributeTypeMap;
    }

    public constructor() {
    }
}

