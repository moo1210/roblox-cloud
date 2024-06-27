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

import { RobloxLocalizationTablesApiPatchEntry } from '../models/RobloxLocalizationTablesApiPatchEntry';
import { HttpFile } from '../../../common/http/http';

export class RobloxLocalizationTablesApiUpdateTableContentsRequest {
    'name'?: string;
    'entries'?: Array<RobloxLocalizationTablesApiPatchEntry>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "entries",
            "baseName": "entries",
            "type": "Array<RobloxLocalizationTablesApiPatchEntry>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxLocalizationTablesApiUpdateTableContentsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
