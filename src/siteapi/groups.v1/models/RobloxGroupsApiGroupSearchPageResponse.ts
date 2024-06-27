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

import { RobloxGroupsApiGroupSearchResponseItem } from '../models/RobloxGroupsApiGroupSearchResponseItem';
import { HttpFile } from '../../../common/http/http';

/**
* ApiPageResponse for catalog search
*/
export class RobloxGroupsApiGroupSearchPageResponse {
    /**
    * Keyword used for search query
    */
    'keyword'?: string;
    'previousPageCursor'?: string;
    'nextPageCursor'?: string;
    'data'?: Array<RobloxGroupsApiGroupSearchResponseItem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "keyword",
            "baseName": "keyword",
            "type": "string",
            "format": ""
        },
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
            "type": "Array<RobloxGroupsApiGroupSearchResponseItem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiGroupSearchPageResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
