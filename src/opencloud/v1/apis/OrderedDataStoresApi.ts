import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { CreateEntryRequest } from '../models/CreateEntryRequest';
import { Entry } from '../models/Entry';
import { IncrementEntryRequest } from '../models/IncrementEntryRequest';
import { ListEntriesResponse } from '../models/ListEntriesResponse';
import { UpdateEntryRequest } from '../models/UpdateEntryRequest';

/**
 * no description
 */
export class OrderedDataStoresApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new entry with the content value provided.
     * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/open-cloud/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/creations).
     * @param orderedDataStore The name of the ordered data store.
     * @param scope The name of the data store scope. See [Scopes](../../../cloud/open-cloud/data-store-api-handling.md#scopes).
     * @param id The name of the entry.
     * @param createEntryRequest 
     */
    public async orderedDataStoresCreateEntry(universeId: string, orderedDataStore: string, scope: string, id: string, createEntryRequest: CreateEntryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresCreateEntry", "universeId");
        }


        // verify required parameter 'orderedDataStore' is not null or undefined
        if (orderedDataStore === null || orderedDataStore === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresCreateEntry", "orderedDataStore");
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresCreateEntry", "scope");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresCreateEntry", "id");
        }


        // verify required parameter 'createEntryRequest' is not null or undefined
        if (createEntryRequest === null || createEntryRequest === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresCreateEntry", "createEntryRequest");
        }


        // Path Params
        const localVarPath = '/v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)))
            .replace('{' + 'orderedDataStore' + '}', encodeURIComponent(String(orderedDataStore)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/ordered-data-stores').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createEntryRequest, "CreateEntryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes the specified entry.
     * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/open-cloud/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/creations).
     * @param orderedDataStore The name of the ordered data store.
     * @param scope The name of the data store scope. See [Scopes](../../../cloud/open-cloud/data-store-api-handling.md#scopes).
     * @param entry The entry ID.
     */
    public async orderedDataStoresDeleteEntry(universeId: string, orderedDataStore: string, scope: string, entry: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresDeleteEntry", "universeId");
        }


        // verify required parameter 'orderedDataStore' is not null or undefined
        if (orderedDataStore === null || orderedDataStore === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresDeleteEntry", "orderedDataStore");
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresDeleteEntry", "scope");
        }


        // verify required parameter 'entry' is not null or undefined
        if (entry === null || entry === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresDeleteEntry", "entry");
        }


        // Path Params
        const localVarPath = '/v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries/{entry}'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)))
            .replace('{' + 'orderedDataStore' + '}', encodeURIComponent(String(orderedDataStore)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'entry' + '}', encodeURIComponent(String(entry)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/ordered-data-stores').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets and returns the specified entry.
     * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/open-cloud/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/creations).
     * @param orderedDataStore The name of the ordered data store.
     * @param scope The name of the data store scope. See [Scopes](../../../cloud/open-cloud/data-store-api-handling.md#scopes).
     * @param entry The entry ID.
     */
    public async orderedDataStoresGetEntry(universeId: string, orderedDataStore: string, scope: string, entry: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresGetEntry", "universeId");
        }


        // verify required parameter 'orderedDataStore' is not null or undefined
        if (orderedDataStore === null || orderedDataStore === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresGetEntry", "orderedDataStore");
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresGetEntry", "scope");
        }


        // verify required parameter 'entry' is not null or undefined
        if (entry === null || entry === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresGetEntry", "entry");
        }


        // Path Params
        const localVarPath = '/v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries/{entry}'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)))
            .replace('{' + 'orderedDataStore' + '}', encodeURIComponent(String(orderedDataStore)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'entry' + '}', encodeURIComponent(String(entry)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/ordered-data-stores').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Increments the value of the key by the provided amount and returns the updated entry.  Known issue: Entry values can increment past the valid range and this may persist in the backend. Returned values will clamp to the valid range.
     * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/open-cloud/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/creations).
     * @param orderedDataStore The name of the ordered data store.
     * @param scope The name of the data store scope. See [Scopes](../../../cloud/open-cloud/data-store-api-handling.md#scopes).
     * @param entry The entry ID.
     * @param incrementEntryRequest 
     */
    public async orderedDataStoresIncrementEntry(universeId: string, orderedDataStore: string, scope: string, entry: string, incrementEntryRequest: IncrementEntryRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresIncrementEntry", "universeId");
        }


        // verify required parameter 'orderedDataStore' is not null or undefined
        if (orderedDataStore === null || orderedDataStore === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresIncrementEntry", "orderedDataStore");
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresIncrementEntry", "scope");
        }


        // verify required parameter 'entry' is not null or undefined
        if (entry === null || entry === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresIncrementEntry", "entry");
        }


        // verify required parameter 'incrementEntryRequest' is not null or undefined
        if (incrementEntryRequest === null || incrementEntryRequest === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresIncrementEntry", "incrementEntryRequest");
        }


        // Path Params
        const localVarPath = '/v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries/{entry}:increment'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)))
            .replace('{' + 'orderedDataStore' + '}', encodeURIComponent(String(orderedDataStore)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'entry' + '}', encodeURIComponent(String(entry)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/ordered-data-stores').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(incrementEntryRequest, "IncrementEntryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a list of entries from an ordered data store.
     * @param universeId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/open-cloud/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/creations).
     * @param orderedDataStore The name of the target ordered data store.
     * @param scope The name of the data store scope. See [Scopes](../../../cloud/open-cloud/data-store-api-handling.md#scopes).
     * @param maxPageSize The maximum number of entries to return. The service may return fewer than this value. The default value is &#x60;10&#x60;. The maximum value is &#x60;100&#x60;, and any input above 100 is coerced to &#x60;100&#x60;.
     * @param pageToken A page token received from a previous &#x60;List&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;List&#x60; must match the call providing the page token.
     * @param orderBy The enumeration direction. The order by default is ascending. Input a &#x60;desc&#x60; suffix for descending.
     * @param filter The range of qualifying values of entries to return. See [Filters](../../../cloud/open-cloud/data-store-api-handling.md#filters).
     */
    public async orderedDataStoresListEntries(universeId: string, orderedDataStore: string, scope: string, maxPageSize?: number, pageToken?: string, orderBy?: string, filter?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresListEntries", "universeId");
        }


        // verify required parameter 'orderedDataStore' is not null or undefined
        if (orderedDataStore === null || orderedDataStore === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresListEntries", "orderedDataStore");
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresListEntries", "scope");
        }






        // Path Params
        const localVarPath = '/v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)))
            .replace('{' + 'orderedDataStore' + '}', encodeURIComponent(String(orderedDataStore)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/ordered-data-stores').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxPageSize !== undefined) {
            requestContext.setQueryParam("max_page_size", ObjectSerializer.serialize(maxPageSize, "number", "int32"));
        }

        // Query Params
        if (pageToken !== undefined) {
            requestContext.setQueryParam("page_token", ObjectSerializer.serialize(pageToken, "string", ""));
        }

        // Query Params
        if (orderBy !== undefined) {
            requestContext.setQueryParam("order_by", ObjectSerializer.serialize(orderBy, "string", ""));
        }

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates an entry value and returns the updated entry.
     * @param universeIdId The identifier of the experience with ordered data stores that you want to access. See [Universe ID](../../../cloud/open-cloud/data-store-api-handling.md#universe-id) on how to copy it on [Creator Dashboard](https://create.roblox.com/creations).
     * @param orderedDataStore The name of the ordered data store.
     * @param scope The name of the data store scope. See [Scopes](../../../cloud/open-cloud/data-store-api-handling.md#scopes).
     * @param entry The entry ID.
     * @param updateEntryRequest 
     * @param allowMissing The flag to allow the creation of an entry if the entry doesn\&#39;t exist. See [Allow Missing Flags](../../../cloud/open-cloud/data-store-api-handling.md#allow-missing-flags).
     */
    public async orderedDataStoresUpdateEntry(universeIdId: string, orderedDataStore: string, scope: string, entry: string, updateEntryRequest: UpdateEntryRequest, allowMissing?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeIdId' is not null or undefined
        if (universeIdId === null || universeIdId === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresUpdateEntry", "universeIdId");
        }


        // verify required parameter 'orderedDataStore' is not null or undefined
        if (orderedDataStore === null || orderedDataStore === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresUpdateEntry", "orderedDataStore");
        }


        // verify required parameter 'scope' is not null or undefined
        if (scope === null || scope === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresUpdateEntry", "scope");
        }


        // verify required parameter 'entry' is not null or undefined
        if (entry === null || entry === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresUpdateEntry", "entry");
        }


        // verify required parameter 'updateEntryRequest' is not null or undefined
        if (updateEntryRequest === null || updateEntryRequest === undefined) {
            throw new RequiredError("OrderedDataStoresApi", "orderedDataStoresUpdateEntry", "updateEntryRequest");
        }



        // Path Params
        const localVarPath = '/v1/universes/{universeId}/orderedDataStores/{orderedDataStore}/scopes/{scope}/entries/{entry}'
            .replace('{' + 'universeIdId' + '}', encodeURIComponent(String(universeIdId)))
            .replace('{' + 'orderedDataStore' + '}', encodeURIComponent(String(orderedDataStore)))
            .replace('{' + 'scope' + '}', encodeURIComponent(String(scope)))
            .replace('{' + 'entry' + '}', encodeURIComponent(String(entry)));

        // Make Request Context
        const requestContext = _config.getServer('https://apis.roblox.com/ordered-data-stores').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (allowMissing !== undefined) {
            requestContext.setQueryParam("allow_missing", ObjectSerializer.serialize(allowMissing, "boolean", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateEntryRequest, "UpdateEntryRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class OrderedDataStoresApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderedDataStoresCreateEntry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderedDataStoresCreateEntryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Entry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Entry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entry", ""
            ) as Entry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request: invalid orderedDataStore, scope or entry name or encoding.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden: studio access to APIs is not allowed, incorrect API key or scope.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Entry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entry", ""
            ) as Entry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderedDataStoresDeleteEntry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderedDataStoresDeleteEntryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request: invalid orderedDataStore, scope or entry name or encoding.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden: Studio access to APIs is not allowed, incorrect API key or scope.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests.", undefined, response.headers);
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
     * @params response Response returned by the server for a request to orderedDataStoresGetEntry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderedDataStoresGetEntryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Entry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Entry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entry", ""
            ) as Entry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request: invalid orderedDataStore, scope or entry name or encoding.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden: studio access to APIs is not allowed, incorrect API key or scope.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Entry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entry", ""
            ) as Entry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderedDataStoresIncrementEntry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderedDataStoresIncrementEntryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Entry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Entry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entry", ""
            ) as Entry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request: invalid orderedDataStore, scope or entry name or encoding.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden: studio access to APIs is not allowed, incorrect API key or scope.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Entry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entry", ""
            ) as Entry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderedDataStoresListEntries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderedDataStoresListEntriesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ListEntriesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListEntriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntriesResponse", ""
            ) as ListEntriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request: invalid orderedDataStore, scope or entry name or encoding.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden: studio access to APIs is not allowed, incorrect API key or scope.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListEntriesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListEntriesResponse", ""
            ) as ListEntriesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to orderedDataStoresUpdateEntry
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async orderedDataStoresUpdateEntryWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Entry >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Entry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entry", ""
            ) as Entry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request: invalid orderedDataStore, scope or entry name or encoding.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Forbidden: studio access to APIs is not allowed, incorrect API key or scope.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found.", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Aborted.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Entry = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Entry", ""
            ) as Entry;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
