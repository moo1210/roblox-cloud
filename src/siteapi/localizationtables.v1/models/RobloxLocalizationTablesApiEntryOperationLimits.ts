/**
 * LocalizationTables Api v1
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

export class RobloxLocalizationTablesApiEntryOperationLimits {
    /**
    * Maximum character limit for entry context
    */
    'maxContextLength'?: number;
    /**
    * Maximum character limit for entry key
    */
    'maxKeyLength'?: number;
    /**
    * Maximum character limit for entry source text
    */
    'maxSourceLength'?: number;
    /**
    * Maximum character limit for entry example
    */
    'maxExampleLength'?: number;
    /**
    * Maximum character limit for game location path
    */
    'maxGameLocationPathLength'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxContextLength",
            "baseName": "maxContextLength",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maxKeyLength",
            "baseName": "maxKeyLength",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maxSourceLength",
            "baseName": "maxSourceLength",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maxExampleLength",
            "baseName": "maxExampleLength",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maxGameLocationPathLength",
            "baseName": "maxGameLocationPathLength",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxLocalizationTablesApiEntryOperationLimits.attributeTypeMap;
    }

    public constructor() {
    }
}
