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

import { HttpFile } from '../../../common/http/http';

export class AssetBatchPermissionItemResponse {
    'successAssetIds'?: Array<number>;
    'errors'?: Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "successAssetIds",
            "baseName": "successAssetIds",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<any>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AssetBatchPermissionItemResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

