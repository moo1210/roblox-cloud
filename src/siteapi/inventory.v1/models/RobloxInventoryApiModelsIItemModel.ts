/**
 * Inventory Api v1
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
* Model representing an inventory item
*/
export class RobloxInventoryApiModelsIItemModel {
    /**
    * The ID of the item
    */
    'id'?: number;
    /**
    * The name of the item
    */
    'name'?: string;
    /**
    * The type of the item [\'Asset\' = 0, \'GamePass\' = 1, \'Badge\' = 2, \'Bundle\' = 3]
    */
    'type'?: RobloxInventoryApiModelsIItemModelTypeEnum;
    /**
    * The instance id of the item if applicable
    */
    'instanceId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "RobloxInventoryApiModelsIItemModelTypeEnum",
            "format": "int32"
        },
        {
            "name": "instanceId",
            "baseName": "InstanceId",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return RobloxInventoryApiModelsIItemModel.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxInventoryApiModelsIItemModelTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
