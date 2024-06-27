/**
 * Groups Api v1
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
* Response model for Group Payout Restriction
*/
export class RobloxGroupsApiGroupPayoutRestrictionResponse {
    /**
    * Whether the group can use recurring payout feature.
    */
    'canUseRecurringPayout'?: boolean;
    /**
    * Whether the group can use one-time payout feature.
    */
    'canUseOneTimePayout'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "canUseRecurringPayout",
            "baseName": "canUseRecurringPayout",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canUseOneTimePayout",
            "baseName": "canUseOneTimePayout",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiGroupPayoutRestrictionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

