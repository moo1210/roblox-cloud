/**
 * Assets API
 * You can send and receive the following request and response payloads to create assets on Roblox. For information on the usage of the API, see the [Usage Guide](../../../cloud/open-cloud/usage-assets.md).
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
* Contains an arbitrary serialized message along with a `@type` that describes the type of the serialized message.
*/
export class Any {
    /**
    * The type of the serialized message.
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "@type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Any.attributeTypeMap;
    }

    public constructor() {
    }
}
