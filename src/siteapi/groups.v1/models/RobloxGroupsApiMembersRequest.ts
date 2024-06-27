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

export class RobloxGroupsApiMembersRequest {
    /**
    * The user ids being either accepted or declined
    */
    'userIds'?: Array<number>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userIds",
            "baseName": "UserIds",
            "type": "Array<number>",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiMembersRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

