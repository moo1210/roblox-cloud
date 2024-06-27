/**
 * Locale Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
* Model for Language
*/
export class RobloxLocaleApiLanguage {
    /**
    * id of language
    */
    'id'?: number;
    /**
    * name of language
    */
    'name'?: string;
    /**
    * native name of language
    */
    'nativeName'?: string;
    /**
    * language code of language
    */
    'languageCode'?: string;
    /**
    * whether or not the language is read right-to-left
    */
    'isRightToLeft'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nativeName",
            "baseName": "nativeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "languageCode",
            "baseName": "languageCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "isRightToLeft",
            "baseName": "isRightToLeft",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxLocaleApiLanguage.attributeTypeMap;
    }

    public constructor() {
    }
}
