/**
 * Thumbnails Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxWebResponsesThumbnailsThumbnailResponse } from '../models/RobloxWebResponsesThumbnailsThumbnailResponse';
import { RobloxWebWebAPIModelsApiErrorModel } from '../models/RobloxWebWebAPIModelsApiErrorModel';
import { HttpFile } from '../../../common/http/http';

/**
* A response model for thumbnails which belong to a specific universe ID
*/
export class RobloxThumbnailsApiModelsUniverseThumbnailsResponse {
    /**
    * Integer universe ID
    */
    'universeId'?: number;
    'error'?: RobloxWebWebAPIModelsApiErrorModel;
    /**
    * An array of ThumbnailResponse objects
    */
    'thumbnails'?: Array<RobloxWebResponsesThumbnailsThumbnailResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "universeId",
            "baseName": "universeId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "RobloxWebWebAPIModelsApiErrorModel",
            "format": ""
        },
        {
            "name": "thumbnails",
            "baseName": "thumbnails",
            "type": "Array<RobloxWebResponsesThumbnailsThumbnailResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxThumbnailsApiModelsUniverseThumbnailsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

