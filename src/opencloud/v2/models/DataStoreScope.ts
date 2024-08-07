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
* Represents a subdivision of entries within a data store.   Scopes are optional, and their usage is discouraged. When scope is  omitted in the URI path, the default scope \"global\" is used.   When the scope is \"global\", the resource path omits scope. That is, the  `path` of an entry with `\"global\"` scope is of the form  `\"universes/1234/data-stores/5678/entries/my-entry\"`.   Use of the collection wildcard (`-`) as a scope name is discouraged;  listing entries in just that scope is not supported. See  ListDataStoreEntries for more information.
*/
export class DataStoreScope {
    /**
    * The resource path of the data store scope.  Format:  universes/{universe}/data-stores/{data_store}/scopes/{data_store_scope}
    */
    'path'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataStoreScope.attributeTypeMap;
    }

    public constructor() {
    }
}

