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

import { RobloxLocalizationTablesApiEntryIdentifierWithTranslation } from '../models/RobloxLocalizationTablesApiEntryIdentifierWithTranslation';
import { HttpFile } from '../../../common/http/http';

export class RobloxLocalizationTablesApiEntryTranslationFeedback {
    'identifier'?: RobloxLocalizationTablesApiEntryIdentifierWithTranslation;
    /**
    * The number of unique reporters that send feedback to the given entry identifier.
    */
    'feedbackCount'?: number;
    /**
    * A set of player translation suggestion in text for the given entry identifier.
    */
    'playerSuggestionText'?: Array<string>;
    /**
    * A set of translation feedback reasons for the given entry identifier.
    */
    'reasons'?: Array<RobloxLocalizationTablesApiEntryTranslationFeedbackReasonsEnum>;
    /**
    * Roblox translation suggestion in text for the given entry identifier.
    */
    'robloxSuggestionText'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "RobloxLocalizationTablesApiEntryIdentifierWithTranslation",
            "format": ""
        },
        {
            "name": "feedbackCount",
            "baseName": "feedbackCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "playerSuggestionText",
            "baseName": "playerSuggestionText",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "reasons",
            "baseName": "reasons",
            "type": "Array<RobloxLocalizationTablesApiEntryTranslationFeedbackReasonsEnum>",
            "format": ""
        },
        {
            "name": "robloxSuggestionText",
            "baseName": "robloxSuggestionText",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxLocalizationTablesApiEntryTranslationFeedback.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxLocalizationTablesApiEntryTranslationFeedbackReasonsEnum {
    None = 'None',
    Untranslated = 'Untranslated',
    Inaccurate = 'Inaccurate',
    SpellingOrGrammar = 'SpellingOrGrammar',
    Inappropriate = 'Inappropriate'
}
