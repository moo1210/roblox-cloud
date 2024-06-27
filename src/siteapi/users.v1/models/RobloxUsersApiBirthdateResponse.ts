/**
 * Users Api v1
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
* The birthdate response
*/
export class RobloxUsersApiBirthdateResponse {
    /**
    * The birth month
    */
    'birthMonth'?: number;
    /**
    * The birth day
    */
    'birthDay'?: number;
    /**
    * The birth year
    */
    'birthYear'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "birthMonth",
            "baseName": "birthMonth",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "birthDay",
            "baseName": "birthDay",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "birthYear",
            "baseName": "birthYear",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return RobloxUsersApiBirthdateResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

