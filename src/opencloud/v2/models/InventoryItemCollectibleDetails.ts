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
* Specific fields that are applicable to a collectible.
*/
export class InventoryItemCollectibleDetails {
    /**
    * A unique ID of a Roblox item that is a collectible.
    */
    'itemId'?: string;
    /**
    * A unique ID of an individual copy of a collectible with ownership tied  to a group or user.
    */
    'instanceId'?: string;
    /**
    * The instance state of this specific Collectible Item Instance which  affects whether it can be resold or traded.  Possible values:    | Value | Description |   | --- | --- |   | COLLECTIBLE_ITEM_INSTANCE_STATE_UNSPECIFIED | Default CollectibleItemInstanceState |   | AVAILABLE | Collectible item is available for all actions |   | HOLD | Collectible item is on hold (can\'t be resold or traded) |
    */
    'instanceState'?: InventoryItemCollectibleDetailsInstanceStateEnum;
    /**
    * If the asset is a Limited, a user-visible number that shows this item is  the nth replica of the asset. Otherwise, this attribute will be omitted.
    */
    'serialNumber'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "itemId",
            "baseName": "itemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "instanceId",
            "baseName": "instanceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "instanceState",
            "baseName": "instanceState",
            "type": "InventoryItemCollectibleDetailsInstanceStateEnum",
            "format": "enum"
        },
        {
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return InventoryItemCollectibleDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum InventoryItemCollectibleDetailsInstanceStateEnum {
    CollectibleItemInstanceStateUnspecified = 'COLLECTIBLE_ITEM_INSTANCE_STATE_UNSPECIFIED',
    Available = 'AVAILABLE',
    Hold = 'HOLD'
}

