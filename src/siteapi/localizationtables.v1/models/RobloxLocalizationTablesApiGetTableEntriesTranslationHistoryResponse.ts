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

import { RobloxLocalizationTablesApiEntryTranslationHistoryPaged } from '../models/RobloxLocalizationTablesApiEntryTranslationHistoryPaged';
import { RobloxLocalizationTablesApiFailedEntryTranslationHistoryPaged } from '../models/RobloxLocalizationTablesApiFailedEntryTranslationHistoryPaged';
import { HttpFile } from '../../../common/http/http';

/**
* A response model for GetTableEntriesTranslationHistory.
*/
export class RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse {
    /**
    * The entries\' tableId.
    */
    'tableId'?: string;
    /**
    * The locale of the translations.
    */
    'locale'?: string;
    /**
    * The entries with their identifier, translation history, and next cursor.
    */
    'entries'?: Array<RobloxLocalizationTablesApiEntryTranslationHistoryPaged>;
    /**
    * The failed entries.
    */
    'failedEntries'?: Array<RobloxLocalizationTablesApiFailedEntryTranslationHistoryPaged>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tableId",
            "baseName": "tableId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "entries",
            "baseName": "entries",
            "type": "Array<RobloxLocalizationTablesApiEntryTranslationHistoryPaged>",
            "format": ""
        },
        {
            "name": "failedEntries",
            "baseName": "failedEntries",
            "type": "Array<RobloxLocalizationTablesApiFailedEntryTranslationHistoryPaged>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

