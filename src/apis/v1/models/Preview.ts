/**
 * Assets API
 * Requires user authentication, not open cloud asset API; Not fully implemented
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
* An asset preview.
*/
export class Preview {
    /**
    * The preview asset path.
    */
    'asset'?: string;
    /**
    * Alt text for the preview asset.
    */
    'altText'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "asset",
            "baseName": "asset",
            "type": "string",
            "format": ""
        },
        {
            "name": "altText",
            "baseName": "altText",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Preview.attributeTypeMap;
    }

    public constructor() {
    }
}
