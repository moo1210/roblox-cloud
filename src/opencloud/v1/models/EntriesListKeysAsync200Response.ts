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

export class EntriesListKeysAsync200Response {
    /**
    * An array of entry keys within the target data store.
    */
    'keys'?: Array<string>;
    /**
    * Indicates that there is more data available in the requested result set. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
    */
    'nextPageCursor'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "keys",
            "baseName": "keys",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "nextPageCursor",
            "baseName": "nextPageCursor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EntriesListKeysAsync200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

