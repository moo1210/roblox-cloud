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
import { HttpFile } from '../../../common/http/http';

/**
* A model to represent owned bundles.
*/
export class RobloxCatalogApiOwnedBundleModel {
    'id'?: number;
    'name'?: string;
    'bundleType'?: string;
    'creator'?: RobloxCatalogApiBundleCreatorModel;

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
            "name": "bundleType",
            "baseName": "bundleType",
            "type": "string",
            "format": ""
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "RobloxCatalogApiBundleCreatorModel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxCatalogApiOwnedBundleModel.attributeTypeMap;
    }

    public constructor() {
    }
}

