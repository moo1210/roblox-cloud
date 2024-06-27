/**
 * Avatar Api v2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

export class RobloxWebResponsesAvatarScaleModel {
    'height'?: number;
    'width'?: number;
    'head'?: number;
    'depth'?: number;
    'proportion'?: number;
    'bodyType'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "double"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "double"
        },
        {
            "name": "head",
            "baseName": "head",
            "type": "number",
            "format": "double"
        },
        {
            "name": "depth",
            "baseName": "depth",
            "type": "number",
            "format": "double"
        },
        {
            "name": "proportion",
            "baseName": "proportion",
            "type": "number",
            "format": "double"
        },
        {
            "name": "bodyType",
            "baseName": "bodyType",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return RobloxWebResponsesAvatarScaleModel.attributeTypeMap;
    }

    public constructor() {
    }
}
