/**
 * Toolbox Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ToolBoxServiceDetailsItemAssetAsset } from '../models/ToolBoxServiceDetailsItemAssetAsset';
import { ToolBoxServiceDetailsItemAssetCreatorInner } from '../models/ToolBoxServiceDetailsItemAssetCreatorInner';
import { ToolBoxServiceDetailsItemAssetFiatProduct } from '../models/ToolBoxServiceDetailsItemAssetFiatProduct';
import { ToolBoxServiceDetailsItemAssetProduct } from '../models/ToolBoxServiceDetailsItemAssetProduct';
import { ToolBoxServiceDetailsItemAssetVoting } from '../models/ToolBoxServiceDetailsItemAssetVoting';
import { HttpFile } from '../../../common/http/http';

export class ToolBoxServiceDetailsItemAsset {
    'asset'?: ToolBoxServiceDetailsItemAssetAsset;
    'creator'?: Array<ToolBoxServiceDetailsItemAssetCreatorInner>;
    'voting'?: ToolBoxServiceDetailsItemAssetVoting;
    'product'?: ToolBoxServiceDetailsItemAssetProduct;
    'fiatProduct'?: ToolBoxServiceDetailsItemAssetFiatProduct;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "asset",
            "baseName": "asset",
            "type": "ToolBoxServiceDetailsItemAssetAsset",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "Array<ToolBoxServiceDetailsItemAssetCreatorInner>",
            "format": ""
        },
        {
            "name": "voting",
            "baseName": "voting",
            "type": "ToolBoxServiceDetailsItemAssetVoting",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "ToolBoxServiceDetailsItemAssetProduct",
            "format": ""
        },
        {
            "name": "fiatProduct",
            "baseName": "fiatProduct",
            "type": "ToolBoxServiceDetailsItemAssetFiatProduct",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ToolBoxServiceDetailsItemAsset.attributeTypeMap;
    }

    public constructor() {
    }
}

