/**
 * Games Api v1
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

/**
* Thumbnail response model.
*/
export class RobloxGamesApiModelsResponseThumbnail {
    /**
    * Final
    */
    '_final'?: boolean;
    /**
    * Url
    */
    'url'?: string;
    /**
    * CdnUrl
    */
    'cdnUrl'?: string;
    /**
    * RetryToken
    */
    'retryToken'?: string;
    /**
    * UniverseId
    */
    'universeId'?: number;
    /**
    * PlaceId
    */
    'placeId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_final",
            "baseName": "final",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "cdnUrl",
            "baseName": "cdnUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "retryToken",
            "baseName": "retryToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "universeId",
            "baseName": "universeId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "placeId",
            "baseName": "placeId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiModelsResponseThumbnail.attributeTypeMap;
    }

    public constructor() {
    }
}
