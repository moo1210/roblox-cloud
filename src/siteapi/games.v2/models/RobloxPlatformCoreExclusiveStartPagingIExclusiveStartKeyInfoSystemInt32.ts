/**
 * Games Api v2
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

export class RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32 {
    /**
    *  [\'Asc\' = 1, \'Desc\' = 2]
    */
    'sortOrder'?: RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32SortOrderEnum;
    /**
    *  [\'Forward\' = 1, \'Backward\' = 2]
    */
    'pagingDirection'?: RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32PagingDirectionEnum;
    'count'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "sortOrder",
            "baseName": "SortOrder",
            "type": "RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32SortOrderEnum",
            "format": "int32"
        },
        {
            "name": "pagingDirection",
            "baseName": "PagingDirection",
            "type": "RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32PagingDirectionEnum",
            "format": "int32"
        },
        {
            "name": "count",
            "baseName": "Count",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32SortOrderEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt32PagingDirectionEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}

