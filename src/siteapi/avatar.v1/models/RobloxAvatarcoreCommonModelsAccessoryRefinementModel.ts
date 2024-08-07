/**
 * Avatar Api v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RobloxAvatarcoreCommonModelsAccessoryPositionModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryPositionModel';
import { RobloxAvatarcoreCommonModelsAccessoryRotationModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryRotationModel';
import { RobloxAvatarcoreCommonModelsAccessoryScaleModel } from '../models/RobloxAvatarcoreCommonModelsAccessoryScaleModel';
import { HttpFile } from '../../../common/http/http';

export class RobloxAvatarcoreCommonModelsAccessoryRefinementModel {
    'position'?: RobloxAvatarcoreCommonModelsAccessoryPositionModel;
    'rotation'?: RobloxAvatarcoreCommonModelsAccessoryRotationModel;
    'scale'?: RobloxAvatarcoreCommonModelsAccessoryScaleModel;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "position",
            "baseName": "position",
            "type": "RobloxAvatarcoreCommonModelsAccessoryPositionModel",
            "format": ""
        },
        {
            "name": "rotation",
            "baseName": "rotation",
            "type": "RobloxAvatarcoreCommonModelsAccessoryRotationModel",
            "format": ""
        },
        {
            "name": "scale",
            "baseName": "scale",
            "type": "RobloxAvatarcoreCommonModelsAccessoryScaleModel",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxAvatarcoreCommonModelsAccessoryRefinementModel.attributeTypeMap;
    }

    public constructor() {
    }
}

