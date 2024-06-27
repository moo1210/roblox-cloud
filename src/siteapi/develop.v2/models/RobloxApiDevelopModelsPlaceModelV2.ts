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

/**
* A model containing information about a place
*/
export class RobloxApiDevelopModelsPlaceModelV2 {
    /**
    * The max number of players for the place.
    */
    'maxPlayerCount'?: number;
    /**
    * The social slot type for the place. Determines how users are placed into servers.   Examples:        Automatic,       Empty,       Custom
    */
    'socialSlotType'?: string;
    /**
    * The number of social slots for the place when the slot type is custom.
    */
    'customSocialSlotsCount'?: number;
    /**
    * Determines if copying of the place is allowed.
    */
    'allowCopying'?: boolean;
    /**
    * The current saved version number of the place.
    */
    'currentSavedVersion'?: number;
    /**
    * Whether all genres allowed in the place.
    */
    'isAllGenresAllowed'?: boolean;
    /**
    * Types of Roblox gear that are allowed to exist in the place.  Valid values are from amp::AssetCategory
    */
    'allowedGearTypes'?: Array<RobloxApiDevelopModelsPlaceModelV2AllowedGearTypesEnum>;
    /**
    * The maximum allowed number of players for the place that the user can set, based on user roleset.
    */
    'maxPlayersAllowed'?: number;
    /**
    * Returns the place id.
    */
    'id'?: number;
    /**
    * Returns the id of the place\'s universe, or null - if the place is not part of a universe.
    */
    'universeId'?: number;
    /**
    * Returns the place name.
    */
    'name'?: string;
    /**
    * Returns the place description.
    */
    'description'?: string;
    /**
    * Returns whether this place is the root place.
    */
    'isRootPlace'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxPlayerCount",
            "baseName": "maxPlayerCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "socialSlotType",
            "baseName": "socialSlotType",
            "type": "string",
            "format": ""
        },
        {
            "name": "customSocialSlotsCount",
            "baseName": "customSocialSlotsCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "allowCopying",
            "baseName": "allowCopying",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "currentSavedVersion",
            "baseName": "currentSavedVersion",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "isAllGenresAllowed",
            "baseName": "isAllGenresAllowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowedGearTypes",
            "baseName": "allowedGearTypes",
            "type": "Array<RobloxApiDevelopModelsPlaceModelV2AllowedGearTypesEnum>",
            "format": "int32"
        },
        {
            "name": "maxPlayersAllowed",
            "baseName": "maxPlayersAllowed",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "universeId",
            "baseName": "universeId",
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
            "name": "isRootPlace",
            "baseName": "isRootPlace",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiDevelopModelsPlaceModelV2.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxApiDevelopModelsPlaceModelV2AllowedGearTypesEnum {
    NUMBER_0 = 0,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_10 = 10,
    NUMBER_11 = 11,
    NUMBER_12 = 12,
    NUMBER_13 = 13,
    NUMBER_14 = 14,
    NUMBER_21 = 21,
    NUMBER_22 = 22
}
