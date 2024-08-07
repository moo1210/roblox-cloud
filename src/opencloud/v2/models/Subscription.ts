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

import { SubscriptionExpirationDetails } from '../models/SubscriptionExpirationDetails';
import { HttpFile } from '../../../common/http/http';

/**
* Represents a user\'s subscription to a subscription product.
*/
export class Subscription {
    /**
    * The resource path of the subscription.   The subscription ID is the same as the user ID of the user who subscribed.  Format:  universes/{universe}/subscription-products/{subscription_product}/subscriptions/{subscription}
    */
    'path'?: string;
    /**
    * The timestamp when the subscription was created.
    */
    'createTime'?: Date;
    /**
    * The timestamp when the subscription was last updated.
    */
    'updateTime'?: Date;
    /**
    * Whether the subscription is active.   This is equivalent  to whether `state` is equal to SUBSCRIBED_WILL_RENEW,  SUBSCRIBED_WILL_NOT_RENEW, or SUBSCRIBED_RENEWAL_PAYMENT_PENDING.
    */
    'active'?: boolean;
    /**
    * Whether the subscription will renew.   This is equivalent to whether `state` is equal to SUBSCRIBED_WILL_RENEW or  SUBSCRIBED_RENEWAL_PAYMENT_PENDING.
    */
    'willRenew'?: boolean;
    /**
    * The timestamp when the subscription was last billed.
    */
    'lastBillingTime'?: Date;
    /**
    * The timestamp when the subscription will next be automatically renewed.
    */
    'nextRenewTime'?: Date;
    /**
    * The timestamp when the subscription will, or did, expire.
    */
    'expireTime'?: Date;
    /**
    * The state of the subscription.  Possible values:    | Value | Description |   | --- | --- |   | STATE_UNSPECIFIED | The subscription state is unspecified. |   | SUBSCRIBED_WILL_RENEW | The subscription is active and will be automatically renewed at `next_renew_time`. |   | SUBSCRIBED_WILL_NOT_RENEW | The subscription is active but will not be automatically renewed. |   | SUBSCRIBED_RENEWAL_PAYMENT_PENDING | The subscription is active and within the renewal grace period pending payment confirmation. |   | EXPIRED | The subscription has expired. See `expiration_details` for more information. |
    */
    'state'?: SubscriptionStateEnum;
    'expirationDetails'?: SubscriptionExpirationDetails;
    /**
    * The platform on which the subscription was purchased.  Possible values:    | Value | Description |   | --- | --- |   | PURCHASE_PLATFORM_UNSPECIFIED | The purchase platform is unspecified. |   | DESKTOP | The subscription was purchased on the Roblox website. |   | MOBILE | The subscription was purchased on the Roblox mobile app. |
    */
    'purchasePlatform'?: SubscriptionPurchasePlatformEnum;
    /**
    * The payment provider used to purchase the subscription.  Possible values:    | Value | Description |   | --- | --- |   | PAYMENT_PROVIDER_UNSPECIFIED | The payment provider is unspecified. |   | STRIPE | The subscription was purchased using Stripe. |   | APPLE | The subscription was purchased using Apple. |   | GOOGLE | The subscription was purchased using Google. |   | ROBLOX_CREDIT | The subscription was purchased using Roblox Credit. |
    */
    'paymentProvider'?: SubscriptionPaymentProviderEnum;
    /**
    * The user who subscribed to the subscription.
    */
    'user'?: string;

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
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "willRenew",
            "baseName": "willRenew",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lastBillingTime",
            "baseName": "lastBillingTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "nextRenewTime",
            "baseName": "nextRenewTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "expireTime",
            "baseName": "expireTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SubscriptionStateEnum",
            "format": "enum"
        },
        {
            "name": "expirationDetails",
            "baseName": "expirationDetails",
            "type": "SubscriptionExpirationDetails",
            "format": ""
        },
        {
            "name": "purchasePlatform",
            "baseName": "purchasePlatform",
            "type": "SubscriptionPurchasePlatformEnum",
            "format": "enum"
        },
        {
            "name": "paymentProvider",
            "baseName": "paymentProvider",
            "type": "SubscriptionPaymentProviderEnum",
            "format": "enum"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Subscription.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SubscriptionStateEnum {
    StateUnspecified = 'STATE_UNSPECIFIED',
    SubscribedWillRenew = 'SUBSCRIBED_WILL_RENEW',
    SubscribedWillNotRenew = 'SUBSCRIBED_WILL_NOT_RENEW',
    SubscribedRenewalPaymentPending = 'SUBSCRIBED_RENEWAL_PAYMENT_PENDING',
    Expired = 'EXPIRED'
}
export enum SubscriptionPurchasePlatformEnum {
    PurchasePlatformUnspecified = 'PURCHASE_PLATFORM_UNSPECIFIED',
    Desktop = 'DESKTOP',
    Mobile = 'MOBILE'
}
export enum SubscriptionPaymentProviderEnum {
    PaymentProviderUnspecified = 'PAYMENT_PROVIDER_UNSPECIFIED',
    Stripe = 'STRIPE',
    Apple = 'APPLE',
    Google = 'GOOGLE',
    RobloxCredit = 'ROBLOX_CREDIT'
}

