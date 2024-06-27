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

import { RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel } from '../models/RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel';
import { RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions } from '../models/RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';
import { HttpFile } from '../../../common/http/http';

/**
* Model for UniverseSettings patch requests
*/
export class RobloxApiDevelopModelsUniverseSettingsRequestV2 {
    /**
    * If the universe allows the use of private servers.
    */
    'allowPrivateServers'?: boolean;
    /**
    * The price to purchase a private server in robux.
    */
    'privateServerPrice'?: number;
    /**
    * The name of the universe.
    */
    'name'?: string;
    /**
    * The description of the universe.
    */
    'description'?: string;
    /**
    * Which avatar types are allowed in the universe.
    */
    'universeAvatarType'?: RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseAvatarTypeEnum;
    /**
    * Whether custom animations are allowed in the universe.
    */
    'universeAnimationType'?: RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseAnimationTypeEnum;
    /**
    * What type of collisions are used by the universe.
    */
    'universeCollisionType'?: RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseCollisionTypeEnum;
    /**
    * What avatar joint positioning type is allowed by the universe.
    */
    'universeJointPositioningType'?: RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseJointPositioningTypeEnum;
    /**
    * Archive status of the universe.
    */
    'isArchived'?: boolean;
    /**
    * Whether game access is limited to friends for user-owned games or group members for group-owned games.
    */
    'isFriendsOnly'?: boolean;
    /**
    * Game genre.
    */
    'genre'?: RobloxApiDevelopModelsUniverseSettingsRequestV2GenreEnum;
    /**
    * List of device types this game can be played on.
    */
    'playableDevices'?: Array<RobloxApiDevelopModelsUniverseSettingsRequestV2PlayableDevicesEnum>;
    /**
    * Whether the game is offered for sale.
    */
    'isForSale'?: boolean;
    /**
    * Price of the game, in Robux.
    */
    'price'?: number;
    /**
    * A list of avatar asset overrides.
    */
    'universeAvatarAssetOverrides'?: Array<RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel>;
    'universeAvatarMinScales'?: RobloxWebResponsesAvatarScaleModel;
    'universeAvatarMaxScales'?: RobloxWebResponsesAvatarScaleModel;
    /**
    * Whether Studio can access data stores of this universe.
    */
    'studioAccessToApisAllowed'?: boolean;
    'permissions'?: RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions;
    /**
    * A list of opt in region.
    */
    'optInRegions'?: Array<RobloxApiDevelopModelsUniverseSettingsRequestV2OptInRegionsEnum>;
    /**
    * A list of opt out region.
    */
    'optOutRegions'?: Array<RobloxApiDevelopModelsUniverseSettingsRequestV2OptOutRegionsEnum>;
    /**
    * Sets whether access to APIs for mesh and texture is enabled for this universe.
    */
    'isMeshTextureApiAccessAllowed'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowPrivateServers",
            "baseName": "allowPrivateServers",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "privateServerPrice",
            "baseName": "privateServerPrice",
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
            "name": "universeAvatarType",
            "baseName": "universeAvatarType",
            "type": "RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseAvatarTypeEnum",
            "format": "int32"
        },
        {
            "name": "universeAnimationType",
            "baseName": "universeAnimationType",
            "type": "RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseAnimationTypeEnum",
            "format": "int32"
        },
        {
            "name": "universeCollisionType",
            "baseName": "universeCollisionType",
            "type": "RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseCollisionTypeEnum",
            "format": "int32"
        },
        {
            "name": "universeJointPositioningType",
            "baseName": "universeJointPositioningType",
            "type": "RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseJointPositioningTypeEnum",
            "format": "int32"
        },
        {
            "name": "isArchived",
            "baseName": "isArchived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFriendsOnly",
            "baseName": "isFriendsOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "genre",
            "baseName": "genre",
            "type": "RobloxApiDevelopModelsUniverseSettingsRequestV2GenreEnum",
            "format": "int32"
        },
        {
            "name": "playableDevices",
            "baseName": "playableDevices",
            "type": "Array<RobloxApiDevelopModelsUniverseSettingsRequestV2PlayableDevicesEnum>",
            "format": "int32"
        },
        {
            "name": "isForSale",
            "baseName": "isForSale",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "universeAvatarAssetOverrides",
            "baseName": "universeAvatarAssetOverrides",
            "type": "Array<RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel>",
            "format": ""
        },
        {
            "name": "universeAvatarMinScales",
            "baseName": "universeAvatarMinScales",
            "type": "RobloxWebResponsesAvatarScaleModel",
            "format": ""
        },
        {
            "name": "universeAvatarMaxScales",
            "baseName": "universeAvatarMaxScales",
            "type": "RobloxWebResponsesAvatarScaleModel",
            "format": ""
        },
        {
            "name": "studioAccessToApisAllowed",
            "baseName": "studioAccessToApisAllowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions",
            "format": ""
        },
        {
            "name": "optInRegions",
            "baseName": "optInRegions",
            "type": "Array<RobloxApiDevelopModelsUniverseSettingsRequestV2OptInRegionsEnum>",
            "format": "int32"
        },
        {
            "name": "optOutRegions",
            "baseName": "optOutRegions",
            "type": "Array<RobloxApiDevelopModelsUniverseSettingsRequestV2OptOutRegionsEnum>",
            "format": "int32"
        },
        {
            "name": "isMeshTextureApiAccessAllowed",
            "baseName": "isMeshTextureApiAccessAllowed",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiDevelopModelsUniverseSettingsRequestV2.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseAvatarTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
export enum RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseAnimationTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseCollisionTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxApiDevelopModelsUniverseSettingsRequestV2UniverseJointPositioningTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxApiDevelopModelsUniverseSettingsRequestV2GenreEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_10 = 10,
    NUMBER_11 = 11,
    NUMBER_12 = 12,
    NUMBER_13 = 13,
    NUMBER_14 = 14
}
export enum RobloxApiDevelopModelsUniverseSettingsRequestV2PlayableDevicesEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}
export enum RobloxApiDevelopModelsUniverseSettingsRequestV2OptInRegionsEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export enum RobloxApiDevelopModelsUniverseSettingsRequestV2OptOutRegionsEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}

