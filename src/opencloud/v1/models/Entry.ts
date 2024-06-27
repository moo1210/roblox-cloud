/**
 * Ordered Data Stores (Beta)
 * This page includes reference documentation for working with ordered data stores. For more information on using the API, see [Handling API Requests for Data Stores](../../../cloud/open-cloud/data-store-api-handling.md) and the [Usage Guide](../../../cloud/open-cloud/usage-data-stores.md).
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
* Represents an entry.
*/
export class Entry {
    /**
    * The resource path of the request.
    */
    'path'?: string;
    /**
    * The name of the entry
    */
    'id'?: string;
    /**
    * The value of the entry.
    */
    'value'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return Entry.attributeTypeMap;
    }

    public constructor() {
    }
}
