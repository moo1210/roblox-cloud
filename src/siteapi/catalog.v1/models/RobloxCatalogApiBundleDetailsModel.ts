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

import { RobloxCatalogApiBundleCreatorModel } from '../models/RobloxCatalogApiBundleCreatorModel';
import { RobloxCatalogApiBundleItemDetailModel } from '../models/RobloxCatalogApiBundleItemDetailModel';
import { RobloxCatalogApiBundleProductModel } from '../models/RobloxCatalogApiBundleProductModel';
import { RobloxCatalogApiCollectibleItemDetail } from '../models/RobloxCatalogApiCollectibleItemDetail';
import { HttpFile } from '../../../common/http/http';

export class RobloxCatalogApiBundleDetailsModel {
    'id'?: number;
    'name'?: string;
    'description'?: string;
    'bundleType'?: string;
    'items'?: Array<RobloxCatalogApiBundleItemDetailModel>;
    'creator'?: RobloxCatalogApiBundleCreatorModel;
    'product'?: RobloxCatalogApiBundleProductModel;
    'itemRestrictions'?: Array<RobloxCatalogApiBundleDetailsModelItemRestrictionsEnum>;
    'collectibleItemDetail'?: RobloxCatalogApiCollectibleItemDetail;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "bundleType",
            "baseName": "bundleType",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<RobloxCatalogApiBundleItemDetailModel>",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "RobloxCatalogApiBundleCreatorModel",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "RobloxCatalogApiBundleProductModel",
            "format": ""
        },
        {
            "name": "itemRestrictions",
            "baseName": "itemRestrictions",
            "type": "Array<RobloxCatalogApiBundleDetailsModelItemRestrictionsEnum>",
            "format": "int32"
        },
        {
            "name": "collectibleItemDetail",
            "baseName": "collectibleItemDetail",
            "type": "RobloxCatalogApiCollectibleItemDetail",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxCatalogApiBundleDetailsModel.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxCatalogApiBundleDetailsModelItemRestrictionsEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9
}

