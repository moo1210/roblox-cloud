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

import { HttpFile } from '../../../common/http/http';

/**
* A model container BrickColor ids for each body part.
*/
export class RobloxApiAvatarModelsBodyColorsModel {
    /**
    * The BrickColor id for head color
    */
    'headColorId'?: number;
    /**
    * The BrickColor id for torso color
    */
    'torsoColorId'?: number;
    /**
    * The BrickColor id for right arm color
    */
    'rightArmColorId'?: number;
    /**
    * The BrickColor id for left arm color
    */
    'leftArmColorId'?: number;
    /**
    * The BrickColor id for right leg color
    */
    'rightLegColorId'?: number;
    /**
    * The BrickColor id for left leg color
    */
    'leftLegColorId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "headColorId",
            "baseName": "headColorId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "torsoColorId",
            "baseName": "torsoColorId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "rightArmColorId",
            "baseName": "rightArmColorId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "leftArmColorId",
            "baseName": "leftArmColorId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "rightLegColorId",
            "baseName": "rightLegColorId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "leftLegColorId",
            "baseName": "leftLegColorId",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxApiAvatarModelsBodyColorsModel.attributeTypeMap;
    }

    public constructor() {
    }
}

