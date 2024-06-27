import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { DataStore } from '../models/DataStore';
import { DatastoresListDatastoresAsync200Response } from '../models/DatastoresListDatastoresAsync200Response';
import { EntriesGetEntryAsync200Response } from '../models/EntriesGetEntryAsync200Response';
import { EntriesGetEntryVersionAsync200Response } from '../models/EntriesGetEntryVersionAsync200Response';
import { EntriesIncrementEntryAsync200Response } from '../models/EntriesIncrementEntryAsync200Response';
import { EntriesListKeysAsync200Response } from '../models/EntriesListKeysAsync200Response';
import { EntryVersion } from '../models/EntryVersion';

import { ObservableDatastoresApi } from "./ObservableAPI";
import { DatastoresApiRequestFactory, DatastoresApiResponseProcessor} from "../apis/DatastoresApi";

export interface DatastoresApiDatastoresListDatastoresAsyncRequest {
    /**
     * The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @type number
     * @memberof DatastoresApidatastoresListDatastoresAsync
     */
    universeId: number
    /**
     * Provide to request the next set of data. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
     * @type string
     * @memberof DatastoresApidatastoresListDatastoresAsync
     */
    cursor?: string
    /**
     * The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     * @type number
     * @memberof DatastoresApidatastoresListDatastoresAsync
     */
    limit?: number
    /**
     * Provide to return only data stores with this prefix. 
     * @type string
     * @memberof DatastoresApidatastoresListDatastoresAsync
     */
    prefix?: string
}

export class ObjectDatastoresApi {
    private api: ObservableDatastoresApi

    public constructor(configuration: Configuration, requestFactory?: DatastoresApiRequestFactory, responseProcessor?: DatastoresApiResponseProcessor) {
        this.api = new ObservableDatastoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of an experience\'s data stores.
     * List data stores in an experience
     * @param param the request object
     */
    public datastoresListDatastoresAsyncWithHttpInfo(param: DatastoresApiDatastoresListDatastoresAsyncRequest, options?: Configuration): Promise<HttpInfo<DatastoresListDatastoresAsync200Response>> {
        return this.api.datastoresListDatastoresAsyncWithHttpInfo(param.universeId, param.cursor, param.limit, param.prefix,  options).toPromise();
    }

    /**
     * Returns a list of an experience\'s data stores.
     * List data stores in an experience
     * @param param the request object
     */
    public datastoresListDatastoresAsync(param: DatastoresApiDatastoresListDatastoresAsyncRequest, options?: Configuration): Promise<DatastoresListDatastoresAsync200Response> {
        return this.api.datastoresListDatastoresAsync(param.universeId, param.cursor, param.limit, param.prefix,  options).toPromise();
    }

}

import { ObservableEntriesApi } from "./ObservableAPI";
import { EntriesApiRequestFactory, EntriesApiResponseProcessor} from "../apis/EntriesApi";

export interface EntriesApiEntriesDeleteEntryAsyncRequest {
    /**
     * The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @type number
     * @memberof EntriesApientriesDeleteEntryAsync
     */
    universeId: number
    /**
     * The name of the data store.
     * @type string
     * @memberof EntriesApientriesDeleteEntryAsync
     */
    datastoreName?: string
    /**
     * The key identifying the entry.
     * @type string
     * @memberof EntriesApientriesDeleteEntryAsync
     */
    entryKey?: string
    /**
     * The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @type string
     * @memberof EntriesApientriesDeleteEntryAsync
     */
    scope?: string
}

export interface EntriesApiEntriesGetEntryAsyncRequest {
    /**
     * The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @type number
     * @memberof EntriesApientriesGetEntryAsync
     */
    universeId: number
    /**
     * The name of the data store.
     * @type string
     * @memberof EntriesApientriesGetEntryAsync
     */
    datastoreName?: string
    /**
     * The key identifying the entry.
     * @type string
     * @memberof EntriesApientriesGetEntryAsync
     */
    entryKey?: string
    /**
     * The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @type string
     * @memberof EntriesApientriesGetEntryAsync
     */
    scope?: string
}

export interface EntriesApiEntriesGetEntryVersionAsyncRequest {
    /**
     * The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @type number
     * @memberof EntriesApientriesGetEntryVersionAsync
     */
    universeId: number
    /**
     * The name of the data store.
     * @type string
     * @memberof EntriesApientriesGetEntryVersionAsync
     */
    datastoreName?: string
    /**
     * The key identifying the entry.
     * @type string
     * @memberof EntriesApientriesGetEntryVersionAsync
     */
    entryKey?: string
    /**
     * The version to inspect.
     * @type string
     * @memberof EntriesApientriesGetEntryVersionAsync
     */
    versionId?: string
    /**
     * The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @type string
     * @memberof EntriesApientriesGetEntryVersionAsync
     */
    scope?: string
}

export interface EntriesApiEntriesIncrementEntryAsyncRequest {
    /**
     * The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @type number
     * @memberof EntriesApientriesIncrementEntryAsync
     */
    universeId: number
    /**
     * The name of the data store.
     * @type string
     * @memberof EntriesApientriesIncrementEntryAsync
     */
    datastoreName?: string
    /**
     * The key identifying the entry.
     * @type string
     * @memberof EntriesApientriesIncrementEntryAsync
     */
    entryKey?: string
    /**
     * The amount by which the entry should be incremented, or the starting value if it doesn\&#39;t exist.
     * @type number
     * @memberof EntriesApientriesIncrementEntryAsync
     */
    incrementBy?: number
    /**
     * The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @type string
     * @memberof EntriesApientriesIncrementEntryAsync
     */
    scope?: string
    /**
     * Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
     * @type string
     * @memberof EntriesApientriesIncrementEntryAsync
     */
    robloxEntryAttributes?: string
    /**
     * A comma-separated list of Roblox user IDs that the entry is tagged with. If not provided, existing user IDs are cleared.
     * @type string
     * @memberof EntriesApientriesIncrementEntryAsync
     */
    robloxEntryUserids?: string
}

export interface EntriesApiEntriesListEntryVersionsAsyncRequest {
    /**
     * The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @type number
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    universeId: number
    /**
     * The name of the data store.
     * @type string
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    datastoreName?: string
    /**
     * The key identifying the entry.
     * @type string
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    entryKey?: string
    /**
     * The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @type string
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    scope?: string
    /**
     * Provide to request the next set of data (see [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors)).
     * @type Date
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    cursor?: Date
    /**
     * Provide to not include versions earlier than this timestamp.
     * @type Date
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    startTime?: Date
    /**
     * Provide to not include versions later than this timestamp.
     * @type string
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    endTime?: string
    /**
     * Either &#x60;Ascending&#x60; (earlier versions first) or &#x60;Descending&#x60; (later versions first).
     * @type string
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    sortOrder?: string
    /**
     * The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     * @type number
     * @memberof EntriesApientriesListEntryVersionsAsync
     */
    limit?: number
}

export interface EntriesApiEntriesListKeysAsyncRequest {
    /**
     * The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @type number
     * @memberof EntriesApientriesListKeysAsync
     */
    universeId: number
    /**
     * The name of the data store.
     * @type string
     * @memberof EntriesApientriesListKeysAsync
     */
    datastoreName?: string
    /**
     * The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @type string
     * @memberof EntriesApientriesListKeysAsync
     */
    scope?: string
    /**
     * Set to true to return keys from all scopes.
     * @type boolean
     * @memberof EntriesApientriesListKeysAsync
     */
    allScopes?: boolean
    /**
     * Provide to return only keys with this prefix.
     * @type string
     * @memberof EntriesApientriesListKeysAsync
     */
    prefix?: string
    /**
     * Provide to request the next set of data. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
     * @type string
     * @memberof EntriesApientriesListKeysAsync
     */
    cursor?: string
    /**
     * The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     * @type number
     * @memberof EntriesApientriesListKeysAsync
     */
    limit?: number
}

export interface EntriesApiEntriesSetEntryAsyncRequest {
    /**
     * The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @type number
     * @memberof EntriesApientriesSetEntryAsync
     */
    universeId: number
    /**
     * The name of the data store.
     * @type string
     * @memberof EntriesApientriesSetEntryAsync
     */
    datastoreName?: string
    /**
     * The key identifying the entry.
     * @type string
     * @memberof EntriesApientriesSetEntryAsync
     */
    entryKey?: string
    /**
     * Provide to update only if the current version matches this.
     * @type string
     * @memberof EntriesApientriesSetEntryAsync
     */
    matchVersion?: string
    /**
     * Create the entry only if it does not exist.
     * @type boolean
     * @memberof EntriesApientriesSetEntryAsync
     */
    exclusiveCreate?: boolean
    /**
     * The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @type string
     * @memberof EntriesApientriesSetEntryAsync
     */
    scope?: string
    /**
     * Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
     * @type string
     * @memberof EntriesApientriesSetEntryAsync
     */
    robloxEntryAttributes?: string
    /**
     * Comma-separated list of Roblox user IDs tagged with the entry. If not provided, existing user IDs are cleared.
     * @type string
     * @memberof EntriesApientriesSetEntryAsync
     */
    robloxEntryUserids?: string
    /**
     * The base-64 encoded MD5 checksum of the content. See [Content-MD5](../../../cloud/open-cloud/data-store-api-handling.md#content-md5).
     * @type string
     * @memberof EntriesApientriesSetEntryAsync
     */
    contentMd5?: string
    /**
     * 
     * @type string
     * @memberof EntriesApientriesSetEntryAsync
     */
    body?: string
}

export class ObjectEntriesApi {
    private api: ObservableEntriesApi

    public constructor(configuration: Configuration, requestFactory?: EntriesApiRequestFactory, responseProcessor?: EntriesApiResponseProcessor) {
        this.api = new ObservableEntriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Marks the entry as deleted by creating a tombstone version. Entries are deleted permanently after 30 days.
     * Delete entry.
     * @param param the request object
     */
    public entriesDeleteEntryAsyncWithHttpInfo(param: EntriesApiEntriesDeleteEntryAsyncRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.entriesDeleteEntryAsyncWithHttpInfo(param.universeId, param.datastoreName, param.entryKey, param.scope,  options).toPromise();
    }

    /**
     * Marks the entry as deleted by creating a tombstone version. Entries are deleted permanently after 30 days.
     * Delete entry.
     * @param param the request object
     */
    public entriesDeleteEntryAsync(param: EntriesApiEntriesDeleteEntryAsyncRequest, options?: Configuration): Promise<void> {
        return this.api.entriesDeleteEntryAsync(param.universeId, param.datastoreName, param.entryKey, param.scope,  options).toPromise();
    }

    /**
     * Returns the value and metadata associated with an entry.
     * Get entry.
     * @param param the request object
     */
    public entriesGetEntryAsyncWithHttpInfo(param: EntriesApiEntriesGetEntryAsyncRequest, options?: Configuration): Promise<HttpInfo<void | EntriesGetEntryAsync200Response>> {
        return this.api.entriesGetEntryAsyncWithHttpInfo(param.universeId, param.datastoreName, param.entryKey, param.scope,  options).toPromise();
    }

    /**
     * Returns the value and metadata associated with an entry.
     * Get entry.
     * @param param the request object
     */
    public entriesGetEntryAsync(param: EntriesApiEntriesGetEntryAsyncRequest, options?: Configuration): Promise<void | EntriesGetEntryAsync200Response> {
        return this.api.entriesGetEntryAsync(param.universeId, param.datastoreName, param.entryKey, param.scope,  options).toPromise();
    }

    /**
     * Returns the value and metadata of a specific version of an entry.
     * Get entry version.
     * @param param the request object
     */
    public entriesGetEntryVersionAsyncWithHttpInfo(param: EntriesApiEntriesGetEntryVersionAsyncRequest, options?: Configuration): Promise<HttpInfo<EntriesGetEntryVersionAsync200Response>> {
        return this.api.entriesGetEntryVersionAsyncWithHttpInfo(param.universeId, param.datastoreName, param.entryKey, param.versionId, param.scope,  options).toPromise();
    }

    /**
     * Returns the value and metadata of a specific version of an entry.
     * Get entry version.
     * @param param the request object
     */
    public entriesGetEntryVersionAsync(param: EntriesApiEntriesGetEntryVersionAsyncRequest, options?: Configuration): Promise<EntriesGetEntryVersionAsync200Response> {
        return this.api.entriesGetEntryVersionAsync(param.universeId, param.datastoreName, param.entryKey, param.versionId, param.scope,  options).toPromise();
    }

    /**
     * Increments the value for an entry by a given amount, or create a new entry with that amount.
     * Increment entry
     * @param param the request object
     */
    public entriesIncrementEntryAsyncWithHttpInfo(param: EntriesApiEntriesIncrementEntryAsyncRequest, options?: Configuration): Promise<HttpInfo<void | EntriesIncrementEntryAsync200Response>> {
        return this.api.entriesIncrementEntryAsyncWithHttpInfo(param.universeId, param.datastoreName, param.entryKey, param.incrementBy, param.scope, param.robloxEntryAttributes, param.robloxEntryUserids,  options).toPromise();
    }

    /**
     * Increments the value for an entry by a given amount, or create a new entry with that amount.
     * Increment entry
     * @param param the request object
     */
    public entriesIncrementEntryAsync(param: EntriesApiEntriesIncrementEntryAsyncRequest, options?: Configuration): Promise<void | EntriesIncrementEntryAsync200Response> {
        return this.api.entriesIncrementEntryAsync(param.universeId, param.datastoreName, param.entryKey, param.incrementBy, param.scope, param.robloxEntryAttributes, param.robloxEntryUserids,  options).toPromise();
    }

    /**
     * Returns a list of versions for an entry.
     * List entry versions
     * @param param the request object
     */
    public entriesListEntryVersionsAsyncWithHttpInfo(param: EntriesApiEntriesListEntryVersionsAsyncRequest, options?: Configuration): Promise<HttpInfo<EntryVersion>> {
        return this.api.entriesListEntryVersionsAsyncWithHttpInfo(param.universeId, param.datastoreName, param.entryKey, param.scope, param.cursor, param.startTime, param.endTime, param.sortOrder, param.limit,  options).toPromise();
    }

    /**
     * Returns a list of versions for an entry.
     * List entry versions
     * @param param the request object
     */
    public entriesListEntryVersionsAsync(param: EntriesApiEntriesListEntryVersionsAsyncRequest, options?: Configuration): Promise<EntryVersion> {
        return this.api.entriesListEntryVersionsAsync(param.universeId, param.datastoreName, param.entryKey, param.scope, param.cursor, param.startTime, param.endTime, param.sortOrder, param.limit,  options).toPromise();
    }

    /**
     * Returns a list of entry keys within a data store.
     * List entries
     * @param param the request object
     */
    public entriesListKeysAsyncWithHttpInfo(param: EntriesApiEntriesListKeysAsyncRequest, options?: Configuration): Promise<HttpInfo<EntriesListKeysAsync200Response>> {
        return this.api.entriesListKeysAsyncWithHttpInfo(param.universeId, param.datastoreName, param.scope, param.allScopes, param.prefix, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Returns a list of entry keys within a data store.
     * List entries
     * @param param the request object
     */
    public entriesListKeysAsync(param: EntriesApiEntriesListKeysAsyncRequest, options?: Configuration): Promise<EntriesListKeysAsync200Response> {
        return this.api.entriesListKeysAsync(param.universeId, param.datastoreName, param.scope, param.allScopes, param.prefix, param.cursor, param.limit,  options).toPromise();
    }

    /**
     * Sets the value, metadata and user IDs associated with an entry.
     * Set entry.
     * @param param the request object
     */
    public entriesSetEntryAsyncWithHttpInfo(param: EntriesApiEntriesSetEntryAsyncRequest, options?: Configuration): Promise<HttpInfo<EntryVersion>> {
        return this.api.entriesSetEntryAsyncWithHttpInfo(param.universeId, param.datastoreName, param.entryKey, param.matchVersion, param.exclusiveCreate, param.scope, param.robloxEntryAttributes, param.robloxEntryUserids, param.contentMd5, param.body,  options).toPromise();
    }

    /**
     * Sets the value, metadata and user IDs associated with an entry.
     * Set entry.
     * @param param the request object
     */
    public entriesSetEntryAsync(param: EntriesApiEntriesSetEntryAsyncRequest, options?: Configuration): Promise<EntryVersion> {
        return this.api.entriesSetEntryAsync(param.universeId, param.datastoreName, param.entryKey, param.matchVersion, param.exclusiveCreate, param.scope, param.robloxEntryAttributes, param.robloxEntryUserids, param.contentMd5, param.body,  options).toPromise();
    }

}
