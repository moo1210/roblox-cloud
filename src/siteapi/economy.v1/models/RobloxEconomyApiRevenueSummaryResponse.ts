/**
 * Economy Api v1
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
* Robux revenue summary response.
*/
export class RobloxEconomyApiRevenueSummaryResponse {
    /**
    * Number of Robux from recurring stipends.
    */
    'recurringRobuxStipend'?: number;
    /**
    * Robux from sale of goods.
    */
    'itemSaleRobux'?: number;
    /**
    * Robux purchased.
    */
    'purchasedRobux'?: number;
    /**
    * Robux obtained via trade.
    */
    'tradeSystemRobux'?: number;
    /**
    * Number of Robux in pending.
    */
    'pendingRobux'?: number;
    /**
    * Robux via group payouts.
    */
    'groupPayoutRobux'?: number;
    /**
    * Robux via group payouts.
    */
    'individualToGroupRobux'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recurringRobuxStipend",
            "baseName": "recurringRobuxStipend",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "itemSaleRobux",
            "baseName": "itemSaleRobux",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "purchasedRobux",
            "baseName": "purchasedRobux",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "tradeSystemRobux",
            "baseName": "tradeSystemRobux",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pendingRobux",
            "baseName": "pendingRobux",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "groupPayoutRobux",
            "baseName": "groupPayoutRobux",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "individualToGroupRobux",
            "baseName": "individualToGroupRobux",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxEconomyApiRevenueSummaryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
