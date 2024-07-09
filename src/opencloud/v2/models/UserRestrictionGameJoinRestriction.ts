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

import { HttpFile } from '../../../common/http/http';

/**
* A restriction means the affected user will not be able to join the parent  universe or place, and will be kicked if currently joined.
*/
export class UserRestrictionGameJoinRestriction {
    /**
    * By default, this is false since a user\'s access to an experience  is not restricted to begin with.   If this is set to true at the experience level, this becomes true  automatically at the place level for all places in the experience.
    */
    'active'?: boolean;
    /**
    * The start time of the restriction.
    */
    'startTime'?: Date;
    /**
    * The duration of the restriction.   If not specified, the restriction is permanent. If specified, the range  must be from 1 second to 315,576,000,000 seconds, inclusive. Durations  with sub-second precision are not permitted.
    */
    'duration'?: string;
    /**
    * The reason the restriction was created.   This field *is not* displayed to the user. 1,000 character maximum.
    */
    'privateReason'?: string;
    /**
    * The user-facing reason the restriction was created.   This field *is* displayed to the user. 400 character maximum.
    */
    'displayReason'?: string;
    /**
    * When true, the restriction will not be be propagated to alt accounts.   Defaults to false.
    */
    'excludeAltAccounts'?: boolean;
    /**
    * This is true when the restriction doesn\'t directly apply to the parent  resource, but to some other ancestor resource.   For example, if a user restriction exists on universes/123, then any  places within that universe from which the user was not explicitly  restricted will have an inherited restriction and this field will be  `true`.
    */
    'inherited'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": "duration"
        },
        {
            "name": "privateReason",
            "baseName": "privateReason",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayReason",
            "baseName": "displayReason",
            "type": "string",
            "format": ""
        },
        {
            "name": "excludeAltAccounts",
            "baseName": "excludeAltAccounts",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "inherited",
            "baseName": "inherited",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserRestrictionGameJoinRestriction.attributeTypeMap;
    }

    public constructor() {
    }
}

