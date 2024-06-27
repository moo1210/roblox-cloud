/**
 * Catalog Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxCatalogApiSaleLocation } from '../models/RobloxCatalogApiSaleLocation';
import { HttpFile } from '../../../common/http/http';

export class RobloxCatalogApiCollectibleItemDetail {
    'collectibleItemId'?: string;
    'collectibleProductId'?: string;
    'price'?: number;
    'lowestPrice'?: number;
    'lowestResalePrice'?: number;
    'totalQuantity'?: number;
    'unitsAvailable'?: number;
    'saleLocation'?: RobloxCatalogApiSaleLocation;
    'hasResellers'?: boolean;
    /**
    *  [\'Invalid\' = 0, \'Draft\' = 1, \'OffSale\' = 2, \'OnSale\' = 3, \'PendingSale\' = 4]
    */
    'saleStatus'?: RobloxCatalogApiCollectibleItemDetailSaleStatusEnum;
    'quantityLimitPerUser'?: number;
    'offSaleDeadline'?: Date;
    /**
    * The type of collectible item, limited or non-limited for now. [\'Invalid\' = 0, \'Limited\' = 1, \'NonLimited\' = 2]
    */
    'collectibleItemType'?: RobloxCatalogApiCollectibleItemDetailCollectibleItemTypeEnum;
    'lowestAvailableResaleProductId'?: string;
    'lowestAvailableResaleItemInstanceId'?: string;
    /**
    *  [\'Invalid\' = 0, \'None\' = 1, \'Disabled\' = 2]
    */
    'resaleRestriction'?: RobloxCatalogApiCollectibleItemDetailResaleRestrictionEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "collectibleItemId",
            "baseName": "collectibleItemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "collectibleProductId",
            "baseName": "collectibleProductId",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lowestPrice",
            "baseName": "lowestPrice",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lowestResalePrice",
            "baseName": "lowestResalePrice",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "totalQuantity",
            "baseName": "totalQuantity",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unitsAvailable",
            "baseName": "unitsAvailable",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "saleLocation",
            "baseName": "saleLocation",
            "type": "RobloxCatalogApiSaleLocation",
            "format": ""
        },
        {
            "name": "hasResellers",
            "baseName": "hasResellers",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "saleStatus",
            "baseName": "saleStatus",
            "type": "RobloxCatalogApiCollectibleItemDetailSaleStatusEnum",
            "format": "int32"
        },
        {
            "name": "quantityLimitPerUser",
            "baseName": "quantityLimitPerUser",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "offSaleDeadline",
            "baseName": "offSaleDeadline",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "collectibleItemType",
            "baseName": "collectibleItemType",
            "type": "RobloxCatalogApiCollectibleItemDetailCollectibleItemTypeEnum",
            "format": "int32"
        },
        {
            "name": "lowestAvailableResaleProductId",
            "baseName": "lowestAvailableResaleProductId",
            "type": "string",
            "format": ""
        },
        {
            "name": "lowestAvailableResaleItemInstanceId",
            "baseName": "lowestAvailableResaleItemInstanceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "resaleRestriction",
            "baseName": "resaleRestriction",
            "type": "RobloxCatalogApiCollectibleItemDetailResaleRestrictionEnum",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxCatalogApiCollectibleItemDetail.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxCatalogApiCollectibleItemDetailSaleStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
export enum RobloxCatalogApiCollectibleItemDetailCollectibleItemTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxCatalogApiCollectibleItemDetailResaleRestrictionEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
