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

import { RobloxUsersApiUserSearchResponse } from '../models/RobloxUsersApiUserSearchResponse';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse {
    'previousPageCursor'?: string;
    'nextPageCursor'?: string;
    'data'?: Array<RobloxUsersApiUserSearchResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "previousPageCursor",
            "baseName": "previousPageCursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextPageCursor",
            "baseName": "nextPageCursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<RobloxUsersApiUserSearchResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
