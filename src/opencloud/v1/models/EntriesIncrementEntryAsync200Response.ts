/**
 * Standard Data Stores
 * This page includes reference documentation for working with standard data stores. For more information on using the API, see [Handling API Requests for Data Stores](../../../cloud/open-cloud/data-store-api-handling.md) and the [Usage Guide](../../../cloud/open-cloud/usage-data-stores.md).
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

export class EntriesIncrementEntryAsync200Response {
    /**
    * The time at which the entry was created.
    */
    'robloxEntryCreatedTime'?: Date;
    /**
    * The time at which this particular version was created.
    */
    'lastModified'?: Date;
    /**
    * The version of the returned entry.
    */
    'robloxEntryVersion'?: HttpFile;
    /**
    * Attributes associated with the returned entry. Serialized JSON map object.
    */
    'robloxEntryAttributes'?: HttpFile;
    /**
    * Comma-separated list of Roblox user IDs tagged with the entry.
    */
    'robloxEntryUserids'?: Array<number>;
    /**
    * The base-64 encoded MD5 checksum of the content. See [Content-MD5](../../../cloud/open-cloud/data-store-api-handling.md#content-md5).
    */
    'contentMd5'?: HttpFile;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "robloxEntryCreatedTime",
            "baseName": "roblox-entry-created-time",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lastModified",
            "baseName": "last-modified",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "robloxEntryVersion",
            "baseName": "roblox-entry-version",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "robloxEntryAttributes",
            "baseName": "roblox-entry-attributes",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "robloxEntryUserids",
            "baseName": "roblox-entry-userids",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "contentMd5",
            "baseName": "content-md5",
            "type": "HttpFile",
            "format": "binary"
        }    ];

    static getAttributeTypeMap() {
        return EntriesIncrementEntryAsync200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

