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
* Receipt listing post-execution information.
*/
export class AvatarMarketplaceOrderReceipt {
    /**
    * Total number of items successfully purchased so far.
    */
    'purchasedItemsCount'?: number;
    /**
    * Total robux spent on items successfully purchased.
    */
    'totalSpentRobux'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "purchasedItemsCount",
            "baseName": "purchasedItemsCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalSpentRobux",
            "baseName": "totalSpentRobux",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return AvatarMarketplaceOrderReceipt.attributeTypeMap;
    }

    public constructor() {
    }
}

