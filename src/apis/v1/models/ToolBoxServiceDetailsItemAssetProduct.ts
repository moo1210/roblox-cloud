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

import { HttpFile } from '../../../common/http/http';

export class ToolBoxServiceDetailsItemAssetProduct {
    'productId'?: number;
    'price'?: number;
    'isForSaleOrIsPublicDomain'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productId",
            "baseName": "productId",
            "type": "number",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "isForSaleOrIsPublicDomain",
            "baseName": "isForSaleOrIsPublicDomain",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ToolBoxServiceDetailsItemAssetProduct.attributeTypeMap;
    }

    public constructor() {
    }
}
