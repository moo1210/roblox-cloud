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
* Response model for getting the game media item
*/
export class RobloxGamesApiModelsResponseGameMediaItem {
    /**
    * The media item id.
    */
    'id'?: number;
    /**
    * The media item type id
    */
    'assetTypeId'?: number;
    /**
    * The media item type, Image or YouTubeVideo
    */
    'assetType'?: string;
    /**
    * The media item image id
    */
    'imageId'?: number;
    /**
    * The media item video hash
    */
    'videoHash'?: string;
    /**
    * The video title for video items.
    */
    'videoTitle'?: string;
    /**
    * The media item is approved or not
    */
    'approved'?: boolean;
    /**
    * The media item\'s alt text
    */
    'altText'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "assetTypeId",
            "baseName": "assetTypeId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "assetType",
            "baseName": "assetType",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageId",
            "baseName": "imageId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "videoHash",
            "baseName": "videoHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoTitle",
            "baseName": "videoTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "approved",
            "baseName": "approved",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "altText",
            "baseName": "altText",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiModelsResponseGameMediaItem.attributeTypeMap;
    }

    public constructor() {
    }
}
