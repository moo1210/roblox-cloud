/**
 * Presence Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

/**
* 
*/
export class RobloxPresenceApiModelsResponseUserPresence {
    /**
    * User presence Type [\'Offline\' = 0, \'Online\' = 1, \'InGame\' = 2, \'InStudio\' = 3, \'Invisible\' = 4]
    */
    'userPresenceType'?: RobloxPresenceApiModelsResponseUserPresenceUserPresenceTypeEnum;
    /**
    * user\'s last location
    */
    'lastLocation'?: string;
    /**
    * place Id
    */
    'placeId'?: number;
    /**
    * Root place Id
    */
    'rootPlaceId'?: number;
    /**
    * game Id
    */
    'gameId'?: string;
    /**
    * universe Id
    */
    'universeId'?: number;
    /**
    * user Id
    */
    'userId'?: number;
    /**
    * last seen. Roblox.Time.UtcInstant
    */
    'lastOnline'?: Date;
    /**
    * Time until invisible mode expires.
    */
    'invisibleModeExpiry'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "userPresenceType",
            "baseName": "userPresenceType",
            "type": "RobloxPresenceApiModelsResponseUserPresenceUserPresenceTypeEnum",
            "format": "int32"
        },
        {
            "name": "lastLocation",
            "baseName": "lastLocation",
            "type": "string",
            "format": ""
        },
        {
            "name": "placeId",
            "baseName": "placeId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "rootPlaceId",
            "baseName": "rootPlaceId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "gameId",
            "baseName": "gameId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "universeId",
            "baseName": "universeId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "lastOnline",
            "baseName": "lastOnline",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "invisibleModeExpiry",
            "baseName": "invisibleModeExpiry",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return RobloxPresenceApiModelsResponseUserPresence.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxPresenceApiModelsResponseUserPresenceUserPresenceTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}

