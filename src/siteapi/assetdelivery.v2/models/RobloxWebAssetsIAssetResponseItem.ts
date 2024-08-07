/**
 * Asset Delivery Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxWebAssetsAssetContentRepresentationSpecifier } from '../models/RobloxWebAssetsAssetContentRepresentationSpecifier';
import { RobloxWebAssetsIAssetItemError } from '../models/RobloxWebAssetsIAssetItemError';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebAssetsIAssetResponseItem {
    'location'?: string;
    'errors'?: Array<RobloxWebAssetsIAssetItemError>;
    'requestId'?: string;
    'isHashDynamic'?: boolean;
    /**
    * Whether the content\'s copyright is protected.
    */
    'isCopyrightProtected'?: boolean;
    /**
    * Whether or not the asset has been archived.
    */
    'isArchived'?: boolean;
    'contentRepresentationSpecifier'?: RobloxWebAssetsAssetContentRepresentationSpecifier;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "location",
            "baseName": "Location",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "Errors",
            "type": "Array<RobloxWebAssetsIAssetItemError>",
            "format": ""
        },
        {
            "name": "requestId",
            "baseName": "RequestId",
            "type": "string",
            "format": ""
        },
        {
            "name": "isHashDynamic",
            "baseName": "IsHashDynamic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isCopyrightProtected",
            "baseName": "IsCopyrightProtected",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isArchived",
            "baseName": "IsArchived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "contentRepresentationSpecifier",
            "baseName": "ContentRepresentationSpecifier",
            "type": "RobloxWebAssetsAssetContentRepresentationSpecifier",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebAssetsIAssetResponseItem.attributeTypeMap;
    }

    public constructor() {
    }
}

