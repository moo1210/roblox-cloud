/**
 * Inventory Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxInventoryApiModelsCollectibleUserAssetModel } from '../models/RobloxInventoryApiModelsCollectibleUserAssetModel';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel {
    'previousPageCursor'?: string;
    'nextPageCursor'?: string;
    'data'?: Array<RobloxInventoryApiModelsCollectibleUserAssetModel>;

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
            "type": "Array<RobloxInventoryApiModelsCollectibleUserAssetModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebWebAPIModelsApiPageResponseRobloxInventoryApiModelsCollectibleUserAssetModel.attributeTypeMap;
    }

    public constructor() {
    }
}

