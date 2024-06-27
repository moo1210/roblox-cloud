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
* Represents queue item name.
*/
export class MemoryStoreQueueItem {
    /**
    * The resource path of the MemoryStoreQueueItem.  Format:  universes/{universe}/memoryStore/scopes/{memory_store_scope}/queues/{memory_store_queue}/items/{memory_store_queue_item}
    */
    'path'?: string;
    /**
    * Represents a dynamically typed value which can be either null, a number, a string, a boolean, a recursive struct value, or a list of values.
    */
    'value'?: any | null;
    /**
    * The priority of the queue item
    */
    'priority'?: number;
    /**
    * The expiration time of the item
    */
    'expireTime'?: Date;
    /**
    * Input only. The TTL for the item.
    */
    'ttl'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "expireTime",
            "baseName": "expireTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "string",
            "format": "duration"
        }    ];

    static getAttributeTypeMap() {
        return MemoryStoreQueueItem.attributeTypeMap;
    }

    public constructor() {
    }
}
