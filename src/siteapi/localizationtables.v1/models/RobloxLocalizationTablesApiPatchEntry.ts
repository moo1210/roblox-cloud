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

import { RobloxLocalizationTablesApiEntryIdentifier } from '../models/RobloxLocalizationTablesApiEntryIdentifier';
import { RobloxLocalizationTablesApiEntryMetadata } from '../models/RobloxLocalizationTablesApiEntryMetadata';
import { RobloxLocalizationTablesApiPatchTranslation } from '../models/RobloxLocalizationTablesApiPatchTranslation';
import { HttpFile } from '../../../common/http/http';

export class RobloxLocalizationTablesApiPatchEntry {
    'identifier'?: RobloxLocalizationTablesApiEntryIdentifier;
    'metadata'?: RobloxLocalizationTablesApiEntryMetadata;
    'translations'?: Array<RobloxLocalizationTablesApiPatchTranslation>;
    '_delete'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "RobloxLocalizationTablesApiEntryIdentifier",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "RobloxLocalizationTablesApiEntryMetadata",
            "format": ""
        },
        {
            "name": "translations",
            "baseName": "translations",
            "type": "Array<RobloxLocalizationTablesApiPatchTranslation>",
            "format": ""
        },
        {
            "name": "_delete",
            "baseName": "delete",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxLocalizationTablesApiPatchEntry.attributeTypeMap;
    }

    public constructor() {
    }
}

