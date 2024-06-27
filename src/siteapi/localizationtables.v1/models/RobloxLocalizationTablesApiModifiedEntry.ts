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
import { RobloxLocalizationTablesApiTranslation } from '../models/RobloxLocalizationTablesApiTranslation';
import { HttpFile } from '../../../common/http/http';

export class RobloxLocalizationTablesApiModifiedEntry {
    'identifier'?: RobloxLocalizationTablesApiEntryIdentifier;
    'translations'?: Array<RobloxLocalizationTablesApiTranslation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "RobloxLocalizationTablesApiEntryIdentifier",
            "format": ""
        },
        {
            "name": "translations",
            "baseName": "translations",
            "type": "Array<RobloxLocalizationTablesApiTranslation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxLocalizationTablesApiModifiedEntry.attributeTypeMap;
    }

    public constructor() {
    }
}

