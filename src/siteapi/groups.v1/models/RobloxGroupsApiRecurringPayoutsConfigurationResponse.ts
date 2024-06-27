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
* A response model for recurring payout configuration
*/
export class RobloxGroupsApiRecurringPayoutsConfigurationResponse {
    /**
    * The maximum number of recurring payout partners
    */
    'maxPayoutPartners'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxPayoutPartners",
            "baseName": "maxPayoutPartners",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxGroupsApiRecurringPayoutsConfigurationResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
