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

import { Instance } from '../models/Instance';
import { HttpFile } from '../../../common/http/http';

/**
* Returns children instances
*/
export class ListInstanceChildrenResponse {
    /**
    * A list of children instances.
    */
    'instances'?: Array<Instance>;
    /**
    * A token, which can be sent as `page_token` to retrieve the next page.  If this field is omitted, there are no subsequent pages.
    */
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "instances",
            "baseName": "instances",
            "type": "Array<Instance>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "nextPageToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListInstanceChildrenResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

