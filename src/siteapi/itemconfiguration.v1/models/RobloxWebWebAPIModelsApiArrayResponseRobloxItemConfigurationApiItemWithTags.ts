/**
 * ItemConfiguration Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxItemConfigurationApiItemWithTags } from '../models/RobloxItemConfigurationApiItemWithTags';
import { HttpFile } from '../../../common/http/http';

export class RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags {
    'data'?: Array<RobloxItemConfigurationApiItemWithTags>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<RobloxItemConfigurationApiItemWithTags>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags.attributeTypeMap;
    }

    public constructor() {
    }
}

