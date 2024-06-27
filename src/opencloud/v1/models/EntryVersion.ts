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

/**
* The entry version object returned by the `List Entry Versions` method.
*/
export class EntryVersion {
    /**
    * The version name of the qualifying entry.
    */
    'version'?: HttpFile;
    /**
    * Indicates whether the entry has been deleted.
    */
    'deleted'?: boolean;
    /**
    * The length of the content.
    */
    'contentLength'?: number;
    /**
    * The timestamp of when the version was created in the ISO time format.
    */
    'createdTime'?: Date;
    /**
    * The timestamp of when the data store was created in the ISO time format.
    */
    'objectCreatedTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "version",
            "baseName": "version",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "contentLength",
            "baseName": "contentLength",
            "type": "number",
            "format": ""
        },
        {
            "name": "createdTime",
            "baseName": "createdTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "objectCreatedTime",
            "baseName": "objectCreatedTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return EntryVersion.attributeTypeMap;
    }

    public constructor() {
    }
}

