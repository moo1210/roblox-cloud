import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { EntriesGetEntryAsync200Response } from '../models/EntriesGetEntryAsync200Response';
import { EntriesGetEntryVersionAsync200Response } from '../models/EntriesGetEntryVersionAsync200Response';
import { EntriesIncrementEntryAsync200Response } from '../models/EntriesIncrementEntryAsync200Response';
import { EntriesListKeysAsync200Response } from '../models/EntriesListKeysAsync200Response';
import { EntryVersion } from '../models/EntryVersion';

/**
 * no description
 */
export class EntriesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Marks the entry as deleted by creating a tombstone version. Entries are deleted permanently after 30 days.
     * Delete entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     */
    public async entriesDeleteEntryAsync(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("EntriesApi", "entriesDeleteEntryAsync", "universeId");
        }





        // Path Params
        const localVarPath = '/v1/universes/{universeId}/standard-datastores/datastore/entries/entry'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/datastores').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (datastoreName !== undefined) {
            requestContext.setQueryParam("datastoreName", ObjectSerializer.serialize(datastoreName, "string", ""));
        }

        // Query Params
        if (entryKey !== undefined) {
            requestContext.setQueryParam("entryKey", ObjectSerializer.serialize(entryKey, "string", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the value and metadata associated with an entry.
     * Get entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     */
    public async entriesGetEntryAsync(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("EntriesApi", "entriesGetEntryAsync", "universeId");
        }





        // Path Params
        const localVarPath = '/v1/universes/{universeId}/standard-datastores/datastore/entries/entry'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/datastores').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (datastoreName !== undefined) {
            requestContext.setQueryParam("datastoreName", ObjectSerializer.serialize(datastoreName, "string", ""));
        }

        // Query Params
        if (entryKey !== undefined) {
            requestContext.setQueryParam("entryKey", ObjectSerializer.serialize(entryKey, "string", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the value and metadata of a specific version of an entry.
     * Get entry version.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param versionId The version to inspect.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     */
    public async entriesGetEntryVersionAsync(universeId: number, datastoreName?: string, entryKey?: string, versionId?: string, scope?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("EntriesApi", "entriesGetEntryVersionAsync", "universeId");
        }






        // Path Params
        const localVarPath = '/v1/universes/{universeId}/standard-datastores/datastore/entries/entry/versions/version'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/datastores').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (datastoreName !== undefined) {
            requestContext.setQueryParam("datastoreName", ObjectSerializer.serialize(datastoreName, "string", ""));
        }

        // Query Params
        if (entryKey !== undefined) {
            requestContext.setQueryParam("entryKey", ObjectSerializer.serialize(entryKey, "string", ""));
        }

        // Query Params
        if (versionId !== undefined) {
            requestContext.setQueryParam("versionId", ObjectSerializer.serialize(versionId, "string", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Increments the value for an entry by a given amount, or create a new entry with that amount.
     * Increment entry
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param incrementBy The amount by which the entry should be incremented, or the starting value if it doesn\&#39;t exist.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @param robloxEntryAttributes Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
     * @param robloxEntryUserids A comma-separated list of Roblox user IDs that the entry is tagged with. If not provided, existing user IDs are cleared.
     */
    public async entriesIncrementEntryAsync(universeId: number, datastoreName?: string, entryKey?: string, incrementBy?: number, scope?: string, robloxEntryAttributes?: string, robloxEntryUserids?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("EntriesApi", "entriesIncrementEntryAsync", "universeId");
        }








        // Path Params
        const localVarPath = '/v1/universes/{universeId}/standard-datastores/datastore/entries/entry/increment'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/datastores').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (datastoreName !== undefined) {
            requestContext.setQueryParam("datastoreName", ObjectSerializer.serialize(datastoreName, "string", ""));
        }

        // Query Params
        if (entryKey !== undefined) {
            requestContext.setQueryParam("entryKey", ObjectSerializer.serialize(entryKey, "string", ""));
        }

        // Query Params
        if (incrementBy !== undefined) {
            requestContext.setQueryParam("incrementBy", ObjectSerializer.serialize(incrementBy, "number", "int64"));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("roblox-entry-attributes", ObjectSerializer.serialize(robloxEntryAttributes, "string", ""));

        // Header Params
        requestContext.setHeaderParam("roblox-entry-userids", ObjectSerializer.serialize(robloxEntryUserids, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of versions for an entry.
     * List entry versions
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @param cursor Provide to request the next set of data (see [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors)).
     * @param startTime Provide to not include versions earlier than this timestamp.
     * @param endTime Provide to not include versions later than this timestamp.
     * @param sortOrder Either &#x60;Ascending&#x60; (earlier versions first) or &#x60;Descending&#x60; (later versions first).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     */
    public async entriesListEntryVersionsAsync(universeId: number, datastoreName?: string, entryKey?: string, scope?: string, cursor?: Date, startTime?: Date, endTime?: string, sortOrder?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("EntriesApi", "entriesListEntryVersionsAsync", "universeId");
        }










        // Path Params
        const localVarPath = '/v1/universes/{universeId}/standard-datastores/datastore/entries/entry/versions'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/datastores').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (datastoreName !== undefined) {
            requestContext.setQueryParam("datastoreName", ObjectSerializer.serialize(datastoreName, "string", ""));
        }

        // Query Params
        if (entryKey !== undefined) {
            requestContext.setQueryParam("entryKey", ObjectSerializer.serialize(entryKey, "string", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "Date", "date-time"));
        }

        // Query Params
        if (startTime !== undefined) {
            requestContext.setQueryParam("startTime", ObjectSerializer.serialize(startTime, "Date", "date-time"));
        }

        // Query Params
        if (endTime !== undefined) {
            requestContext.setQueryParam("endTime", ObjectSerializer.serialize(endTime, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of entry keys within a data store.
     * List entries
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @param allScopes Set to true to return keys from all scopes.
     * @param prefix Provide to return only keys with this prefix.
     * @param cursor Provide to request the next set of data. See [Cursors](../../../cloud/open-cloud/data-store-api-handling.md#cursors).
     * @param limit The maximum number of items to return. Each call only reads one partition, so it can return fewer than the given value when running out of objectives on one partition.
     */
    public async entriesListKeysAsync(universeId: number, datastoreName?: string, scope?: string, allScopes?: boolean, prefix?: string, cursor?: string, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("EntriesApi", "entriesListKeysAsync", "universeId");
        }








        // Path Params
        const localVarPath = '/v1/universes/{universeId}/standard-datastores/datastore/entries'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/datastores').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (datastoreName !== undefined) {
            requestContext.setQueryParam("datastoreName", ObjectSerializer.serialize(datastoreName, "string", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }

        // Query Params
        if (allScopes !== undefined) {
            requestContext.setQueryParam("allScopes", ObjectSerializer.serialize(allScopes, "boolean", ""));
        }

        // Query Params
        if (prefix !== undefined) {
            requestContext.setQueryParam("prefix", ObjectSerializer.serialize(prefix, "string", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Sets the value, metadata and user IDs associated with an entry.
     * Set entry.
     * @param universeId The identifier of the experience with data stores that you want to access. You can [copy your experience\&#39;s Universe ID](../../../cloud/open-cloud/usage-data-stores.md#getting-the-universe-id) on the **Creator Dashboard**.
     * @param datastoreName The name of the data store.
     * @param entryKey The key identifying the entry.
     * @param matchVersion Provide to update only if the current version matches this.
     * @param exclusiveCreate Create the entry only if it does not exist.
     * @param scope The value is &#x60;global&#x60; by default. See [Scopes](../../../cloud-services/datastores.md#scopes).
     * @param robloxEntryAttributes Attributes to be associated with new version of the entry. Serialized by JSON map objects. If not provided, existing attributes are cleared.
     * @param robloxEntryUserids Comma-separated list of Roblox user IDs tagged with the entry. If not provided, existing user IDs are cleared.
     * @param contentMd5 The base-64 encoded MD5 checksum of the content. See [Content-MD5](../../../cloud/open-cloud/data-store-api-handling.md#content-md5).
     * @param body 
     */
    public async entriesSetEntryAsync(universeId: number, datastoreName?: string, entryKey?: string, matchVersion?: string, exclusiveCreate?: boolean, scope?: string, robloxEntryAttributes?: string, robloxEntryUserids?: string, contentMd5?: string, body?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("EntriesApi", "entriesSetEntryAsync", "universeId");
        }











        // Path Params
        const localVarPath = '/v1/universes/{universeId}/standard-datastores/datastore/entries/entry'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/datastores').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (datastoreName !== undefined) {
            requestContext.setQueryParam("datastoreName", ObjectSerializer.serialize(datastoreName, "string", ""));
        }

        // Query Params
        if (entryKey !== undefined) {
            requestContext.setQueryParam("entryKey", ObjectSerializer.serialize(entryKey, "string", ""));
        }

        // Query Params
        if (matchVersion !== undefined) {
            requestContext.setQueryParam("matchVersion", ObjectSerializer.serialize(matchVersion, "string", ""));
        }

        // Query Params
        if (exclusiveCreate !== undefined) {
            requestContext.setQueryParam("exclusiveCreate", ObjectSerializer.serialize(exclusiveCreate, "boolean", ""));
        }

        // Query Params
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("roblox-entry-attributes", ObjectSerializer.serialize(robloxEntryAttributes, "string", ""));

        // Header Params
        requestContext.setHeaderParam("roblox-entry-userids", ObjectSerializer.serialize(robloxEntryUserids, "string", ""));

        // Header Params
        requestContext.setHeaderParam("content-md5", ObjectSerializer.serialize(contentMd5, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "string", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["roblox-api-key"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class EntriesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to entriesDeleteEntryAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async entriesDeleteEntryAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to entriesGetEntryAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async entriesGetEntryAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void | EntriesGetEntryAsync200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EntriesGetEntryAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntriesGetEntryAsync200Response", ""
            ) as EntriesGetEntryAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | EntriesGetEntryAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | EntriesGetEntryAsync200Response", ""
            ) as void | EntriesGetEntryAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to entriesGetEntryVersionAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async entriesGetEntryVersionAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EntriesGetEntryVersionAsync200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EntriesGetEntryVersionAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntriesGetEntryVersionAsync200Response", ""
            ) as EntriesGetEntryVersionAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EntriesGetEntryVersionAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntriesGetEntryVersionAsync200Response", ""
            ) as EntriesGetEntryVersionAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to entriesIncrementEntryAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async entriesIncrementEntryAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void | EntriesIncrementEntryAsync200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EntriesIncrementEntryAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntriesIncrementEntryAsync200Response", ""
            ) as EntriesIncrementEntryAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | EntriesIncrementEntryAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | EntriesIncrementEntryAsync200Response", ""
            ) as void | EntriesIncrementEntryAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to entriesListEntryVersionsAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async entriesListEntryVersionsAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EntryVersion >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EntryVersion = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntryVersion", ""
            ) as EntryVersion;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Invalid request / Invalid file content.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Publish not allowed on place.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The experience or data store was not found.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EntryVersion = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntryVersion", ""
            ) as EntryVersion;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to entriesListKeysAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async entriesListKeysAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EntriesListKeysAsync200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EntriesListKeysAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntriesListKeysAsync200Response", ""
            ) as EntriesListKeysAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EntriesListKeysAsync200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntriesListKeysAsync200Response", ""
            ) as EntriesListKeysAsync200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to entriesSetEntryAsync
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async entriesSetEntryAsyncWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EntryVersion >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EntryVersion = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntryVersion", ""
            ) as EntryVersion;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EntryVersion = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EntryVersion", ""
            ) as EntryVersion;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
