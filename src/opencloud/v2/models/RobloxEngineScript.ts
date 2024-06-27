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
* A Script is a Lua code container that can access server-side objects, properties, and events, such as to award badges to players using BadgeService, while LocalScripts on the client cannot.
*/
export class RobloxEngineScript {
    /**
    * Determines whether the BaseScript will run or not.
    */
    'enabled'?: boolean;
    /**
    * Determines the context in which the script will run.  Possible values:    | Value | Description |   | --- | --- |   | Legacy | Runs in legacy script containers dependent on the type of script used, such as LocalScript or Script. |   | Server | Runs on the server. |   | Client | Runs on the client. |   | Plugin | Runs as a descendant of Plugin instances. |
    */
    'runContext'?: RobloxEngineScriptRunContextEnum;
    /**
    * The code to be executed.
    */
    'source'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enabled",
            "baseName": "Enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runContext",
            "baseName": "RunContext",
            "type": "RobloxEngineScriptRunContextEnum",
            "format": "enum"
        },
        {
            "name": "source",
            "baseName": "Source",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RobloxEngineScript.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum RobloxEngineScriptRunContextEnum {
    Legacy = 'Legacy',
    Server = 'Server',
    Client = 'Client',
    Plugin = 'Plugin'
}
