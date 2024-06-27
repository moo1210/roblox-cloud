/**
 * Develop Api v2
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

export class RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel {
    'assetID'?: number;
    'assetTypeID'?: number;
    'isPlayerChoice'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assetID",
            "baseName": "assetID",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "assetTypeID",
            "baseName": "assetTypeID",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isPlayerChoice",
            "baseName": "isPlayerChoice",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel.attributeTypeMap;
    }

    public constructor() {
    }
}

