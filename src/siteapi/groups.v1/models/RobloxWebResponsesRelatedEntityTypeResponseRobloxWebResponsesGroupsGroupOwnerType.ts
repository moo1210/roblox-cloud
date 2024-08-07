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

import { HttpFile } from '../../../common/http/http';

export class RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerType {
    'id'?: number;
    /**
    *  [\'User\' = 0]
    */
    'type'?: RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerTypeTypeEnum;
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerTypeTypeEnum",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerType.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxWebResponsesRelatedEntityTypeResponseRobloxWebResponsesGroupsGroupOwnerTypeTypeEnum {
    NUMBER_0 = 0
}

