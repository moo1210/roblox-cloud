/**
 * Avatar Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxApiAvatarModelsAssetModelV2 } from '../models/RobloxApiAvatarModelsAssetModelV2';
import { HttpFile } from '../../../common/http/http';

/**
* A model for wear outfit responses
*/
export class RobloxApiAvatarModelsWearResponseModel {
    /**
    * The assets that could not be worn  Unlike invalidAssetIds, only contains assets that are wearable types
    */
    'invalidAssets'?: Array<RobloxApiAvatarModelsAssetModelV2>;
    /**
    * The asset ids that could not be worn
    */
    'invalidAssetIds'?: Array<number>;
    /**
    * Whether or not all the outfit contents were successfully worn
    */
    'success'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "invalidAssets",
            "baseName": "invalidAssets",
            "type": "Array<RobloxApiAvatarModelsAssetModelV2>",
            "format": ""
        },
        {
            "name": "invalidAssetIds",
            "baseName": "invalidAssetIds",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiAvatarModelsWearResponseModel.attributeTypeMap;
    }

    public constructor() {
    }
}

