import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { DataStore } from '../models/DataStore';
import { DatastoresListDatastoresAsync200Response } from '../models/DatastoresListDatastoresAsync200Response';
import { EntriesGetEntryAsync200Response } from '../models/EntriesGetEntryAsync200Response';
import { EntriesGetEntryVersionAsync200Response } from '../models/EntriesGetEntryVersionAsync200Response';
import { EntriesIncrementEntryAsync200Response } from '../models/EntriesIncrementEntryAsync200Response';
import { EntriesListKeysAsync200Response } from '../models/EntriesListKeysAsync200Response';
import { EntryVersion } from '../models/EntryVersion';
import { ObservableDatastoresApi } from './ObservableAPI';

import { DatastoresApiRequestFactory, DatastoresApiResponseProcessor} from "../apis/DatastoresApi";
export class PromiseDatastoresApi {
    private api: ObservableDatastoresApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatastoresApiRequestFactory,
        responseProcessor?: DatastoresApiResponseProcessor
    ) {
        this.api = new ObservableDatastoresApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns a list of an experience\'s data stores.
     * List data stores in an experience
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param cursor Provide to request the next set of data. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     * @param prefix Provide to return only data stores with this prefix. 
     */
    public datastoresListDatastoresAsyncWithHttpInfo(universeId: number, cursor?: string, limit?: number, prefix?: string, _options?: Configuration): Promise<HttpInfo<DatastoresListDatastoresAsync200Response>> {
        const result = this.api.datastoresListDatastoresAsyncWithHttpInfo(universeId, cursor, limit, prefix, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of an experience\'s data stores.
     * List data stores in an experience
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param cursor Provide to request the next set of data. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     * @param prefix Provide to return only data stores with this prefix. 
     */
    public datastoresListDatastoresAsync(universeId: number, cursor?: string, limit?: number, prefix?: string, _options?: Configuration): Promise<DatastoresListDatastoresAsync200Response> {
        const result = this.api.datastoresListDatastoresAsync(universeId, cursor, limit, prefix, _options);
        return result.toPromise();
    }


}



import { ObservableEntriesApi } from './ObservableAPI';

import { EntriesApiRequestFactory, EntriesApiResponseProcessor} from "../apis/EntriesApi";
export class PromiseEntriesApi {
    private api: ObservableEntriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EntriesApiRequestFactory,
        responseProcessor?: EntriesApiResponseProcessor
    ) {
        this.api = new ObservableEntriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Marks the entry as deleted by creating a tombstone version. Entries are deleted permanently after 30 days.
     * Delete entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     */
    public entriesDeleteEntryAsyncWithHttpInfo(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.entriesDeleteEntryAsyncWithHttpInfo(universeId, datastoreName, entryKey, scope, _options);
        return result.toPromise();
    }

    /**
     * Marks the entry as deleted by creating a tombstone version. Entries are deleted permanently after 30 days.
     * Delete entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     */
    public entriesDeleteEntryAsync(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, _options?: Configuration): Promise<void> {
        const result = this.api.entriesDeleteEntryAsync(universeId, datastoreName, entryKey, scope, _options);
        return result.toPromise();
    }

    /**
     * Returns the value and metadata associated with an entry.
     * Get entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     */
    public entriesGetEntryAsyncWithHttpInfo(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, _options?: Configuration): Promise<HttpInfo<void | EntriesGetEntryAsync200Response>> {
        const result = this.api.entriesGetEntryAsyncWithHttpInfo(universeId, datastoreName, entryKey, scope, _options);
        return result.toPromise();
    }

    /**
     * Returns the value and metadata associated with an entry.
     * Get entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     */
    public entriesGetEntryAsync(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, _options?: Configuration): Promise<void | EntriesGetEntryAsync200Response> {
        const result = this.api.entriesGetEntryAsync(universeId, datastoreName, entryKey, scope, _options);
        return result.toPromise();
    }

    /**
     * Returns the value and metadata of a specific version of an entry.
     * Get entry version.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param versionId The version to inspect.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     */
    public entriesGetEntryVersionAsyncWithHttpInfo(universeId: number, datastoreName?: string, entryKey?: string, versionId?: string, scope?: string, _options?: Configuration): Promise<HttpInfo<EntriesGetEntryVersionAsync200Response>> {
        const result = this.api.entriesGetEntryVersionAsyncWithHttpInfo(universeId, datastoreName, entryKey, versionId, scope, _options);
        return result.toPromise();
    }

    /**
     * Returns the value and metadata of a specific version of an entry.
     * Get entry version.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param versionId The version to inspect.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     */
    public entriesGetEntryVersionAsync(universeId: number, datastoreName?: string, entryKey?: string, versionId?: string, scope?: string, _options?: Configuration): Promise<EntriesGetEntryVersionAsync200Response> {
        const result = this.api.entriesGetEntryVersionAsync(universeId, datastoreName, entryKey, versionId, scope, _options);
        return result.toPromise();
    }

    /**
     * Increments the value for an entry by a given amount, or create a new entry with that amount.
     * Increment entry
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param incrementBy The amount by which the entry should be incremented, or the starting value if it doesn\&#39;t exist.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     * @param robloxEntryAttributes Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
     * @param robloxEntryUserids A comma-separated list of Roblox user IDs that the entry is tagged with. If not provided, existing user IDs are cleared.
     */
    public entriesIncrementEntryAsyncWithHttpInfo(universeId: number, datastoreName?: string, entryKey?: string, incrementBy?: number, scope?: string, robloxEntryAttributes?: string, robloxEntryUserids?: string, _options?: Configuration): Promise<HttpInfo<void | EntriesIncrementEntryAsync200Response>> {
        const result = this.api.entriesIncrementEntryAsyncWithHttpInfo(universeId, datastoreName, entryKey, incrementBy, scope, robloxEntryAttributes, robloxEntryUserids, _options);
        return result.toPromise();
    }

    /**
     * Increments the value for an entry by a given amount, or create a new entry with that amount.
     * Increment entry
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param incrementBy The amount by which the entry should be incremented, or the starting value if it doesn\&#39;t exist.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     * @param robloxEntryAttributes Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
     * @param robloxEntryUserids A comma-separated list of Roblox user IDs that the entry is tagged with. If not provided, existing user IDs are cleared.
     */
    public entriesIncrementEntryAsync(universeId: number, datastoreName?: string, entryKey?: string, incrementBy?: number, scope?: string, robloxEntryAttributes?: string, robloxEntryUserids?: string, _options?: Configuration): Promise<void | EntriesIncrementEntryAsync200Response> {
        const result = this.api.entriesIncrementEntryAsync(universeId, datastoreName, entryKey, incrementBy, scope, robloxEntryAttributes, robloxEntryUserids, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of versions for an entry.
     * List entry versions
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     * @param cursor Provide to request the next set of data (see [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors)).
     * @param startTime Provide to not include versions earlier than this timestamp.
     * @param endTime Provide to not include versions later than this timestamp.
     * @param sortOrder Either &#x60;Ascending&#x60; (earlier versions first) or &#x60;Descending&#x60; (later versions first).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     */
    public entriesListEntryVersionsAsyncWithHttpInfo(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, cursor?: Date, startTime?: Date, endTime?: string, sortOrder?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<EntryVersion>> {
        const result = this.api.entriesListEntryVersionsAsyncWithHttpInfo(universeId, datastoreName, entryKey, scope, cursor, startTime, endTime, sortOrder, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of versions for an entry.
     * List entry versions
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     * @param cursor Provide to request the next set of data (see [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors)).
     * @param startTime Provide to not include versions earlier than this timestamp.
     * @param endTime Provide to not include versions later than this timestamp.
     * @param sortOrder Either &#x60;Ascending&#x60; (earlier versions first) or &#x60;Descending&#x60; (later versions first).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     */
    public entriesListEntryVersionsAsync(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, cursor?: Date, startTime?: Date, endTime?: string, sortOrder?: string, limit?: number, _options?: Configuration): Promise<EntryVersion> {
        const result = this.api.entriesListEntryVersionsAsync(universeId, datastoreName, entryKey, scope, cursor, startTime, endTime, sortOrder, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of entry keys within a data store.
     * List entries
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     * @param allScopes Set to true to return keys from all scopes.
     * @param prefix Provide to return only keys with this prefix.
     * @param cursor Provide to request the next set of data. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     */
    public entriesListKeysAsyncWithHttpInfo(universeId: number, datastoreName?: string, scope?: string, allScopes?: boolean, prefix?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<EntriesListKeysAsync200Response>> {
        const result = this.api.entriesListKeysAsyncWithHttpInfo(universeId, datastoreName, scope, allScopes, prefix, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of entry keys within a data store.
     * List entries
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     * @param allScopes Set to true to return keys from all scopes.
     * @param prefix Provide to return only keys with this prefix.
     * @param cursor Provide to request the next set of data. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     */
    public entriesListKeysAsync(universeId: number, datastoreName?: string, scope?: string, allScopes?: boolean, prefix?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<EntriesListKeysAsync200Response> {
        const result = this.api.entriesListKeysAsync(universeId, datastoreName, scope, allScopes, prefix, cursor, limit, _options);
        return result.toPromise();
    }

    /**
     * Sets the value, metadata and user IDs associated with an entry.
     * Set entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param matchVersion Provide to update only if the current version matches this.
     * @param exclusiveCreate Create the entry only if it does not exist.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     * @param robloxEntryAttributes Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
     * @param robloxEntryUserids Comma-separated list of Roblox user IDs tagged with the entry. If not provided, existing user IDs are cleared.
     * @param contentMd5 The base-64 encoded MD5 checksum of the content. See [Content-MD5](../../../cloud/open-cloud/data-store-api-handling.md#content-md5).
     * @param body 
     */
    public entriesSetEntryAsyncWithHttpInfo(universeId: number, datastoreName?: string, entryKey?: string, matchVersion?: string, exclusiveCreate?: boolean, scope?: string, robloxEntryAttributes?: string, robloxEntryUserids?: string, contentMd5?: string, body?: string, _options?: Configuration): Promise<HttpInfo<EntryVersion>> {
        const result = this.api.entriesSetEntryAsyncWithHttpInfo(universeId, datastoreName, entryKey, matchVersion, exclusiveCreate, scope, robloxEntryAttributes, robloxEntryUserids, contentMd5, body, _options);
        return result.toPromise();
    }

    /**
     * Sets the value, metadata and user IDs associated with an entry.
     * Set entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param matchVersion Provide to update only if the current version matches this.
     * @param exclusiveCreate Create the entry only if it does not exist.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/data-stores/index.md#scopes).
     * @param robloxEntryAttributes Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
     * @param robloxEntryUserids Comma-separated list of Roblox user IDs tagged with the entry. If not provided, existing user IDs are cleared.
     * @param contentMd5 The base-64 encoded MD5 checksum of the content. See [Content-MD5](../../../cloud/open-cloud/data-store-api-handling.md#content-md5).
     * @param body 
     */
    public entriesSetEntryAsync(universeId: number, datastoreName?: string, entryKey?: string, matchVersion?: string, exclusiveCreate?: boolean, scope?: string, robloxEntryAttributes?: string, robloxEntryUserids?: string, contentMd5?: string, body?: string, _options?: Configuration): Promise<EntryVersion> {
        const result = this.api.entriesSetEntryAsync(universeId, datastoreName, entryKey, matchVersion, exclusiveCreate, scope, robloxEntryAttributes, robloxEntryUserids, contentMd5, body, _options);
        return result.toPromise();
    }


}



