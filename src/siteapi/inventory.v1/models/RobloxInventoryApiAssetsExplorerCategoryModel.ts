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

import { RobloxInventoryApiAssetsExplorerCategoryItemModel } from '../models/RobloxInventoryApiAssetsExplorerCategoryItemModel';
import { HttpFile } from '../../../common/http/http';

export class RobloxInventoryApiAssetsExplorerCategoryModel {
    'name'?: string;
    'displayName'?: string;
    'categoryType'?: string;
    'items'?: Array<RobloxInventoryApiAssetsExplorerCategoryItemModel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        },
        {
            "name": "categoryType",
            "baseName": "categoryType",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<RobloxInventoryApiAssetsExplorerCategoryItemModel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxInventoryApiAssetsExplorerCategoryModel.attributeTypeMap;
    }

    public constructor() {
    }
}
