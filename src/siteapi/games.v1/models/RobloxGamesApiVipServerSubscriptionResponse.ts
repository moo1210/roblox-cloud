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
* Response model for VIP server subscription.
*/
export class RobloxGamesApiVipServerSubscriptionResponse {
    /**
    * Active
    */
    'active'?: boolean;
    /**
    * Expired
    */
    'expired'?: boolean;
    /**
    * Expiration date
    */
    'expirationDate'?: Date;
    /**
    * Price
    */
    'price'?: number;
    /**
    * Can renew a subscription
    */
    'canRenew'?: boolean;
    /**
    * Subscription cancelled due to insufficient funds
    */
    'hasInsufficientFunds'?: boolean;
    /**
    * Subscription has a recurring profile
    */
    'hasRecurringProfile'?: boolean;
    /**
    * Subscriptions price has changed
    */
    'hasPriceChanged'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "canRenew",
            "baseName": "canRenew",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasInsufficientFunds",
            "baseName": "hasInsufficientFunds",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasRecurringProfile",
            "baseName": "hasRecurringProfile",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasPriceChanged",
            "baseName": "hasPriceChanged",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxGamesApiVipServerSubscriptionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

