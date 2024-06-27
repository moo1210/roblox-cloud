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

import { RobloxPagingExclusiveStartKeyCursorSystemString } from '../models/RobloxPagingExclusiveStartKeyCursorSystemString';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { HttpFile } from '../../../common/http/http';

export class SystemValueTupleRobloxWebWebAPIExclusiveStartRequestSystemInt64RobloxPagingExclusiveStartKeyCursorSystemString {
    'item1'?: RobloxWebWebAPIExclusiveStartRequestSystemInt64;
    'item2'?: RobloxPagingExclusiveStartKeyCursorSystemString;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "item1",
            "baseName": "Item1",
            "type": "RobloxWebWebAPIExclusiveStartRequestSystemInt64",
            "format": ""
        },
        {
            "name": "item2",
            "baseName": "Item2",
            "type": "RobloxPagingExclusiveStartKeyCursorSystemString",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SystemValueTupleRobloxWebWebAPIExclusiveStartRequestSystemInt64RobloxPagingExclusiveStartKeyCursorSystemString.attributeTypeMap;
    }

    public constructor() {
    }
}

