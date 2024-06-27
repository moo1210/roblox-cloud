/**
 * Cloud API
 * Open Cloud 2.0
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UniverseSocialLink } from '../models/UniverseSocialLink';
import { HttpFile } from '../../../common/http/http';

/**
* A universe represents a Roblox experience.
*/
export class Universe {
    /**
    * The resource path of the universe.   Format: universes/{universe}
    */
    'path'?: string;
    /**
    * The timestamp at which the universe was created.
    */
    'createTime'?: Date;
    /**
    * The timestamp at which the universe was updated.
    */
    'updateTime'?: Date;
    /**
    * The name of the universe.   This field can be updated by updating the root place\'s name.
    */
    'displayName'?: string;
    /**
    * The description of the universe.   This field can be updated by updating the root place\'s description.
    */
    'description'?: string;
    /**
    * The universe is user-owned.
    */
    'user'?: string;
    /**
    * The universe is group-owned.
    */
    'group'?: string;
    /**
    * Whether or not the universe is publicly accessible.  Possible values:    | Value | Description |   | --- | --- |   | VISIBILITY_UNSPECIFIED | Updates using this value will throw an error on the backend. |   | PUBLIC | The universe is public. |   | PRIVATE | The universe is private. If a universe\'s visibility is set to PRIVATE, all active players will immediately be removed from all running servers. |
    */
    'visibility'?: UniverseVisibilityEnum;
    'facebookSocialLink'?: UniverseSocialLink;
    'twitterSocialLink'?: UniverseSocialLink;
    'youtubeSocialLink'?: UniverseSocialLink;
    'twitchSocialLink'?: UniverseSocialLink;
    'discordSocialLink'?: UniverseSocialLink;
    'robloxGroupSocialLink'?: UniverseSocialLink;
    'guildedSocialLink'?: UniverseSocialLink;
    /**
    * Whether or not voice chat is enabled for users in the Experience.   Updating this value will not affect active servers.
    */
    'voiceChatEnabled'?: boolean;
    /**
    * The age rating of this universe.  Possible values:    | Value | Description |   | --- | --- |   | AGE_RATING_UNSPECIFIED | The age rating is not set. |   | AGE_RATING_ALL | Supported for all users. |   | AGE_RATING_9_PLUS | Supported for users aged 9 and up. |   | AGE_RATING_13_PLUS | Supported for users aged 13 and up. |   | AGE_RATING_17_PLUS | Supported for users aged 17 and up. |
    */
    'ageRating'?: UniverseAgeRatingEnum;
    /**
    * Represents the price in Robux of private servers.   If unset, private servers are not supported for this universe.   Can only be disabled when using a field mask.   Setting to null will disable all active private servers.   Changing the price will cancel all private server subscriptions.
    */
    'privateServerPriceRobux'?: number;
    /**
    * Whether or not players can join the Experience via Desktop.
    */
    'desktopEnabled'?: boolean;
    /**
    * Whether or not players can join the Experience via Mobile.
    */
    'mobileEnabled'?: boolean;
    /**
    * Whether or not players can join the Experience via Tablet.
    */
    'tabletEnabled'?: boolean;
    /**
    * Whether or not players can join the Experience via Console.
    */
    'consoleEnabled'?: boolean;
    /**
    * Whether or not players can join the Experience via VR.
    */
    'vrEnabled'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "createTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updateTime",
            "baseName": "updateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
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
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "UniverseVisibilityEnum",
            "format": "enum"
        },
        {
            "name": "facebookSocialLink",
            "baseName": "facebookSocialLink",
            "type": "UniverseSocialLink",
            "format": ""
        },
        {
            "name": "twitterSocialLink",
            "baseName": "twitterSocialLink",
            "type": "UniverseSocialLink",
            "format": ""
        },
        {
            "name": "youtubeSocialLink",
            "baseName": "youtubeSocialLink",
            "type": "UniverseSocialLink",
            "format": ""
        },
        {
            "name": "twitchSocialLink",
            "baseName": "twitchSocialLink",
            "type": "UniverseSocialLink",
            "format": ""
        },
        {
            "name": "discordSocialLink",
            "baseName": "discordSocialLink",
            "type": "UniverseSocialLink",
            "format": ""
        },
        {
            "name": "robloxGroupSocialLink",
            "baseName": "robloxGroupSocialLink",
            "type": "UniverseSocialLink",
            "format": ""
        },
        {
            "name": "guildedSocialLink",
            "baseName": "guildedSocialLink",
            "type": "UniverseSocialLink",
            "format": ""
        },
        {
            "name": "voiceChatEnabled",
            "baseName": "voiceChatEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "ageRating",
            "baseName": "ageRating",
            "type": "UniverseAgeRatingEnum",
            "format": "enum"
        },
        {
            "name": "privateServerPriceRobux",
            "baseName": "privateServerPriceRobux",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "desktopEnabled",
            "baseName": "desktopEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mobileEnabled",
            "baseName": "mobileEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tabletEnabled",
            "baseName": "tabletEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "consoleEnabled",
            "baseName": "consoleEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "vrEnabled",
            "baseName": "vrEnabled",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Universe.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum UniverseVisibilityEnum {
    VisibilityUnspecified = 'VISIBILITY_UNSPECIFIED',
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}
export enum UniverseAgeRatingEnum {
    Unspecified = 'AGE_RATING_UNSPECIFIED',
    All = 'AGE_RATING_ALL',
    _9Plus = 'AGE_RATING_9_PLUS',
    _13Plus = 'AGE_RATING_13_PLUS',
    _17Plus = 'AGE_RATING_17_PLUS'
}

