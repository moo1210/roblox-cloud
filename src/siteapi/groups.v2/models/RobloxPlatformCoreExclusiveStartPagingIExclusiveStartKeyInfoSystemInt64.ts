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

export class RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 {
    /**
    *  [\'Asc\' = 1, \'Desc\' = 2]
    */
    'sortOrder'?: RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64SortOrderEnum;
    /**
    *  [\'Forward\' = 1, \'Backward\' = 2]
    */
    'pagingDirection'?: RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64PagingDirectionEnum;
    'count'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sortOrder",
            "baseName": "SortOrder",
            "type": "RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64SortOrderEnum",
            "format": "int32"
        },
        {
            "name": "pagingDirection",
            "baseName": "PagingDirection",
            "type": "RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64PagingDirectionEnum",
            "format": "int32"
        },
        {
            "name": "count",
            "baseName": "Count",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64SortOrderEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64PagingDirectionEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}

