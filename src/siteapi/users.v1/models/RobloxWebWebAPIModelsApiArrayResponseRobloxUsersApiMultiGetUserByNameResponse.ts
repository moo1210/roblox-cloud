/**
 * Users Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxUsersApiMultiGetUserByNameResponse } from '../models/RobloxUsersApiMultiGetUserByNameResponse';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse {
    'data'?: Array<RobloxUsersApiMultiGetUserByNameResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<RobloxUsersApiMultiGetUserByNameResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
