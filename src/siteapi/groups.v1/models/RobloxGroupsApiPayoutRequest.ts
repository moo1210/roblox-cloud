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

import { RobloxGroupsApiPayoutRecipientRequest } from '../models/RobloxGroupsApiPayoutRecipientRequest';
import { HttpFile } from '../../../common/http/http';

/**
* Multi-payout request information.
*/
export class RobloxGroupsApiPayoutRequest {
    /**
    * The Roblox.Groups.Api.PayoutType. [\'FixedAmount\' = 1, \'Percentage\' = 2]
    */
    'payoutType'?: RobloxGroupsApiPayoutRequestPayoutTypeEnum;
    /**
    * The recipients of the payouts.
    */
    'recipients'?: Array<RobloxGroupsApiPayoutRecipientRequest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "payoutType",
            "baseName": "PayoutType",
            "type": "RobloxGroupsApiPayoutRequestPayoutTypeEnum",
            "format": "int32"
        },
        {
            "name": "recipients",
            "baseName": "Recipients",
            "type": "Array<RobloxGroupsApiPayoutRecipientRequest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiPayoutRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxGroupsApiPayoutRequestPayoutTypeEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2
}

