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

import { RobloxLocaleApiSupportedLocaleLocus } from '../models/RobloxLocaleApiSupportedLocaleLocus';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus {
    'data'?: Array<RobloxLocaleApiSupportedLocaleLocus>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<RobloxLocaleApiSupportedLocaleLocus>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebWebAPIModelsApiArrayResponseRobloxLocaleApiSupportedLocaleLocus.attributeTypeMap;
    }

    public constructor() {
    }
}
