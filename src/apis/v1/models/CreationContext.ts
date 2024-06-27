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

import { Creator } from '../models/Creator';
import { HttpFile } from '../../../common/http/http';

/**
* The context of creation that is not part of the asset content, such as metadata and creator information.
*/
export class CreationContext {
    'creator'?: Creator;
    /**
    * Expected asset upload fee in Robux. When the actual price is more than expected, the operation fails with a 400 error.
    */
    'expectedPrice'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "creator",
            "baseName": "creator",
            "type": "Creator",
            "format": ""
        },
        {
            "name": "expectedPrice",
            "baseName": "expectedPrice",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return CreationContext.attributeTypeMap;
    }

    public constructor() {
    }
}
