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

import { RobloxApiDevelopModelsUniverseModerationPolicyStatus } from '../models/RobloxApiDevelopModelsUniverseModerationPolicyStatus';
import { RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel } from '../models/RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel';
import { RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions } from '../models/RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';
import { HttpFile } from '../../../common/http/http';

/**
* Model for UniverseSettings controller responses
*/
export class RobloxApiDevelopModelsUniverseSettingsResponseV2 {
    /**
    * If the universe allows the use of private servers.
    */
    'allowPrivateServers'?: boolean;
    /**
    * The price to purchase a private server in robux.
    */
    'privateServerPrice'?: number;
    /**
    * The regions the universe has opted in for
    */
    'optInRegions'?: Array<RobloxApiDevelopModelsUniverseModerationPolicyStatus>;
    /**
    * Whether access to APIs for mesh and texture is enabled for this universe.
    */
    'isMeshTextureApiAccessAllowed'?: boolean;
    /**
    * The universe Id.
    */
    'id'?: number;
    /**
    * The universe name.
    */
    'name'?: string;
    /**
    * The universe description.
    */
    'description'?: string;
    /**
    * Which avatar types are allowed in the universe. [\'MorphToR6\' = 1, \'PlayerChoice\' = 2, \'MorphToR15\' = 3]
    */
    'universeAvatarType'?: RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseAvatarTypeEnum;
    /**
    * Whether custom animations are allowed in the universe. [\'Standard\' = 1, \'PlayerChoice\' = 2]
    */
    'universeAnimationType'?: RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseAnimationTypeEnum;
    /**
    * What type of collisions are used by the universe. [\'InnerBox\' = 1, \'OuterBox\' = 2]
    */
    'universeCollisionType'?: RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseCollisionTypeEnum;
    /**
    * What avatar joint positioning is allowed by the universe. [\'Standard\' = 1, \'ArtistIntent\' = 2]
    */
    'universeJointPositioningType'?: RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseJointPositioningTypeEnum;
    /**
    * Archive status of the universe
    */
    'isArchived'?: boolean;
    /**
    * Whether game access is limited to friends for user-owned games or group members for group-owned games.
    */
    'isFriendsOnly'?: boolean;
    /**
    * Game genre. [\'All\' = 0, \'Tutorial\' = 1, \'Scary\' = 2, \'TownAndCity\' = 3, \'War\' = 4, \'Funny\' = 5, \'Fantasy\' = 6, \'Adventure\' = 7, \'SciFi\' = 8, \'Pirate\' = 9, \'FPS\' = 10, \'RPG\' = 11, \'Sports\' = 12, \'Ninja\' = 13, \'WildWest\' = 14]
    */
    'genre'?: RobloxApiDevelopModelsUniverseSettingsResponseV2GenreEnum;
    /**
    * List of device types this game can be played on.
    */
    'playableDevices'?: Array<RobloxApiDevelopModelsUniverseSettingsResponseV2PlayableDevicesEnum>;
    /**
    * Whether the game is offered for sale.
    */
    'isForSale'?: boolean;
    /**
    * Price of the game, in Robux.
    */
    'price'?: number;
    /**
    * A collection of avatar asset settings allowed by the universe.
    */
    'universeAvatarAssetOverrides'?: Array<RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel>;
    'universeAvatarMinScales'?: RobloxWebResponsesAvatarScaleModel;
    'universeAvatarMaxScales'?: RobloxWebResponsesAvatarScaleModel;
    /**
    * Whether Studio can access data stores of this universe.
    */
    'studioAccessToApisAllowed'?: boolean;
    'permissions'?: RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions;

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
            "name": "optInRegions",
            "baseName": "optInRegions",
            "type": "Array<RobloxApiDevelopModelsUniverseModerationPolicyStatus>",
            "format": ""
        },
        {
            "name": "isMeshTextureApiAccessAllowed",
            "baseName": "isMeshTextureApiAccessAllowed",
            "type": "boolean",
            "format": ""
        },
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
            "name": "universeAvatarType",
            "baseName": "universeAvatarType",
            "type": "RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseAvatarTypeEnum",
            "format": "int32"
        },
        {
            "name": "universeAnimationType",
            "baseName": "universeAnimationType",
            "type": "RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseAnimationTypeEnum",
            "format": "int32"
        },
        {
            "name": "universeCollisionType",
            "baseName": "universeCollisionType",
            "type": "RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseCollisionTypeEnum",
            "format": "int32"
        },
        {
            "name": "universeJointPositioningType",
            "baseName": "universeJointPositioningType",
            "type": "RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseJointPositioningTypeEnum",
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
            "type": "RobloxApiDevelopModelsUniverseSettingsResponseV2GenreEnum",
            "format": "int32"
        },
        {
            "name": "playableDevices",
            "baseName": "playableDevices",
            "type": "Array<RobloxApiDevelopModelsUniverseSettingsResponseV2PlayableDevicesEnum>",
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
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiDevelopModelsUniverseSettingsResponseV2.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseAvatarTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
export enum RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseAnimationTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseCollisionTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxApiDevelopModelsUniverseSettingsResponseV2UniverseJointPositioningTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
export enum RobloxApiDevelopModelsUniverseSettingsResponseV2GenreEnum {
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
export enum RobloxApiDevelopModelsUniverseSettingsResponseV2PlayableDevicesEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5
}

