/**
 * Cloud API
 * Open Cloud 2.0
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../../../common/http/http';

/**
* A ModuleScript is a type of Lua source container that runs once and must return exactly one value.
*/
export class RobloxEngineModuleScript {
    /**
    * The code to be executed.
    */
    'source'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "source",
            "baseName": "Source",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxEngineModuleScript.attributeTypeMap;
    }

    public constructor() {
    }
}

