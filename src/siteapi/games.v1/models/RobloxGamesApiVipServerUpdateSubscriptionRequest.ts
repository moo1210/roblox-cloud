/**
 * Games Api v1
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
* Request model to update subscriptions for a VIP server.
*/
export class RobloxGamesApiVipServerUpdateSubscriptionRequest {
    /**
    * Active
    */
    'active'?: boolean;
    /**
    * Price
    */
    'price'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiVipServerUpdateSubscriptionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

