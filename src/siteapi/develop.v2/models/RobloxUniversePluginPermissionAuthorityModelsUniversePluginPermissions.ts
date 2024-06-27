/**
 * Develop Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

export class RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions {
    'isThirdPartyTeleportAllowed'?: boolean;
    'isThirdPartyAssetAllowed'?: boolean;
    'isThirdPartyPurchaseAllowed'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isThirdPartyTeleportAllowed",
            "baseName": "IsThirdPartyTeleportAllowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isThirdPartyAssetAllowed",
            "baseName": "IsThirdPartyAssetAllowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isThirdPartyPurchaseAllowed",
            "baseName": "IsThirdPartyPurchaseAllowed",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions.attributeTypeMap;
    }

    public constructor() {
    }
}
