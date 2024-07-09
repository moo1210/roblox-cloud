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

import { Interval } from '../models/Interval';
import { UniverseEventCategory } from '../models/UniverseEventCategory';
import { HttpFile } from '../../../common/http/http';

/**
* Represents a universe-specific event.
*/
export class UniverseEvent {
    /**
    * The resource path of the universe event.  Format: universes/{universe}/events/{universe_event}
    */
    'path'?: string;
    /**
    * The title of the event.
    */
    'title'?: string;
    /**
    * The description of the event.
    */
    'description'?: string;
    'interval'?: Interval;
    /**
    * Whether the event is published.   When events are not published, they are only visible to users with the  appropriate permissions.
    */
    'published'?: boolean;
    /**
    * The state of the event.  Possible values:    | Value | Description |   | --- | --- |   | STATE_UNSPECIFIED | The state of the event is unknown. |   | SCHEDULED | The event is scheduled. |   | ACTIVE | The event is currently active. |   | FINISHED | The event is finished. |
    */
    'state'?: UniverseEventStateEnum;
    /**
    * The categories of the event.   Categories should be ordered by importance/relevance; the first category is  considered the primary category.   Currently, an event may have at most two categories, though this may change  in the future.
    */
    'categories'?: Array<UniverseEventCategory>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "Interval",
            "format": ""
        },
        {
            "name": "published",
            "baseName": "published",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "UniverseEventStateEnum",
            "format": "enum"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<UniverseEventCategory>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UniverseEvent.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum UniverseEventStateEnum {
    StateUnspecified = 'STATE_UNSPECIFIED',
    Scheduled = 'SCHEDULED',
    Active = 'ACTIVE',
    Finished = 'FINISHED'
}

