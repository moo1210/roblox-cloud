/**
 * Assets Permissions API
 * Manages permissions between subjects (Universes/Groups/Users) & assets (between a variety of types)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AssetBatchCheckPermissionsResponse } from '../models/AssetBatchCheckPermissionsResponse';
import { HttpFile } from '../../../common/http/http';

export class AssetPermissionsCheckBatchAssetPermissions200Response {
    'results'?: Array<AssetBatchCheckPermissionsResponse>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<AssetBatchCheckPermissionsResponse>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssetPermissionsCheckBatchAssetPermissions200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

