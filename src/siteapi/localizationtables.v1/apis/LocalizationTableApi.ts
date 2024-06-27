import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxLocalizationTablesApiCreateTableRequest } from '../models/RobloxLocalizationTablesApiCreateTableRequest';
import { RobloxLocalizationTablesApiCreateTableResponse } from '../models/RobloxLocalizationTablesApiCreateTableResponse';
import { RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse } from '../models/RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse';
import { RobloxLocalizationTablesApiGetLimitsResponse } from '../models/RobloxLocalizationTablesApiGetLimitsResponse';
import { RobloxLocalizationTablesApiGetTableEntriesPagedResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesPagedResponse';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest';
import { RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse } from '../models/RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse';
import { RobloxLocalizationTablesApiGetTableEntryCountResponse } from '../models/RobloxLocalizationTablesApiGetTableEntryCountResponse';
import { RobloxLocalizationTablesApiGetTableResponse } from '../models/RobloxLocalizationTablesApiGetTableResponse';
import { RobloxLocalizationTablesApiLocalizationTablesMetadataResponse } from '../models/RobloxLocalizationTablesApiLocalizationTablesMetadataResponse';
import { RobloxLocalizationTablesApiUpdateTableContentsRequest } from '../models/RobloxLocalizationTablesApiUpdateTableContentsRequest';
import { RobloxLocalizationTablesApiUpdateTableContentsResponse } from '../models/RobloxLocalizationTablesApiUpdateTableContentsResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage';

/**
 * no description
 */
export class LocalizationTableApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets the supported language codes that can be used by localization tables.
     */
    public async v1LocalizationTableAvailableLanguagesGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/localization-table/available-languages';

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get limits for translation table entries operations
     */
    public async v1LocalizationTableLimitsGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/localization-table/limits';

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get metadata for localization UI
     */
    public async v1LocalizationTableMetadataGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/v1/localization-table/metadata';

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get table information by the assetId of the table.
     * @param assetId The asset id associated with the table.
     */
    public async v1LocalizationTableTablesAssetIdGet(assetId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'assetId' is not null or undefined
        if (assetId === null || assetId === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesAssetIdGet", "assetId");
        }


        // Path Params
        const localVarPath = '/v1/localization-table/tables/{assetId}'
            .replace('{' + 'assetId' + '}', encodeURIComponent(String(assetId)));

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a Localization Table with the given data.
     * @param request 
     */
    public async v1LocalizationTableTablesPost(request: RobloxLocalizationTablesApiCreateTableRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesPost", "request");
        }


        // Path Params
        const localVarPath = '/v1/localization-table/tables';

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxLocalizationTablesApiCreateTableRequest", ""),
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
     * Gets a batch of entries for a table.
     * @param tableId 
     * @param cursor If null, there are no more entries in the table and you\&#39;ve reached the last page.
     * @param gameId 
     */
    public async v1LocalizationTableTablesTableIdEntriesGet(tableId: string, cursor?: string, gameId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableId' is not null or undefined
        if (tableId === null || tableId === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdEntriesGet", "tableId");
        }




        // Path Params
        const localVarPath = '/v1/localization-table/tables/{tableId}/entries'
            .replace('{' + 'tableId' + '}', encodeURIComponent(String(tableId)));

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (gameId !== undefined) {
            requestContext.setQueryParam("gameId", ObjectSerializer.serialize(gameId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the translation feedback for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry translation feedback lookup.
     * @param gameId The game id.
     */
    public async v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest, gameId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableId' is not null or undefined
        if (tableId === null || tableId === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost", "tableId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost", "request");
        }



        // Path Params
        const localVarPath = '/v1/localization-table/tables/{tableId}/entries/translation-feedback'
            .replace('{' + 'tableId' + '}', encodeURIComponent(String(tableId)));

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (gameId !== undefined) {
            requestContext.setQueryParam("gameId", ObjectSerializer.serialize(gameId, "number", "int64"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackRequest", ""),
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
     * Gets the translation history for each entry passed in.
     * @param tableId The entries\&#39; tableId.
     * @param request A request body containing all relevant data for entry history lookup.
     * @param gameId The game id.
     */
    public async v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost(tableId: string, request: RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest, gameId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableId' is not null or undefined
        if (tableId === null || tableId === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost", "tableId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost", "request");
        }



        // Path Params
        const localVarPath = '/v1/localization-table/tables/{tableId}/entries/translation-history'
            .replace('{' + 'tableId' + '}', encodeURIComponent(String(tableId)));

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (gameId !== undefined) {
            requestContext.setQueryParam("gameId", ObjectSerializer.serialize(gameId, "number", "int64"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryRequest", ""),
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
     * Gets the number of entries in the specified table
     * @param tableId The table id
     * @param gameId The game id
     */
    public async v1LocalizationTableTablesTableIdEntryCountGet(tableId: string, gameId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableId' is not null or undefined
        if (tableId === null || tableId === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdEntryCountGet", "tableId");
        }



        // Path Params
        const localVarPath = '/v1/localization-table/tables/{tableId}/entry-count'
            .replace('{' + 'tableId' + '}', encodeURIComponent(String(tableId)));

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (gameId !== undefined) {
            requestContext.setQueryParam("gameId", ObjectSerializer.serialize(gameId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get table information by the id of the table.
     * @param tableId 
     */
    public async v1LocalizationTableTablesTableIdGet(tableId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableId' is not null or undefined
        if (tableId === null || tableId === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdGet", "tableId");
        }


        // Path Params
        const localVarPath = '/v1/localization-table/tables/{tableId}'
            .replace('{' + 'tableId' + '}', encodeURIComponent(String(tableId)));

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the language translation counts for the specified table.  The languages to retrieve must be provided.
     * @param tableId The table id
     * @param locales The locales corresponding to the language translation counts to retrieve. This will return 0 for the translation count of locales that do not exist for the given table.
     * @param gameId The game id
     */
    public async v1LocalizationTableTablesTableIdLanguageTranslationCountsGet(tableId: string, locales: Array<string>, gameId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableId' is not null or undefined
        if (tableId === null || tableId === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdLanguageTranslationCountsGet", "tableId");
        }


        // verify required parameter 'locales' is not null or undefined
        if (locales === null || locales === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdLanguageTranslationCountsGet", "locales");
        }



        // Path Params
        const localVarPath = '/v1/localization-table/tables/{tableId}/language-translation-counts'
            .replace('{' + 'tableId' + '}', encodeURIComponent(String(tableId)));

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locales !== undefined) {
            requestContext.setQueryParam("locales", ObjectSerializer.serialize(locales, "Array<string>", ""));
        }

        // Query Params
        if (gameId !== undefined) {
            requestContext.setQueryParam("gameId", ObjectSerializer.serialize(gameId, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Updates the tables contents based on what is provided.
     * @param tableId The table guid for the table to update.
     * @param request The metadata object is optional.
     * @param gameId The game id.
     */
    public async v1LocalizationTableTablesTableIdPatch(tableId: string, request: RobloxLocalizationTablesApiUpdateTableContentsRequest, gameId?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableId' is not null or undefined
        if (tableId === null || tableId === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdPatch", "tableId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("LocalizationTableApi", "v1LocalizationTableTablesTableIdPatch", "request");
        }



        // Path Params
        const localVarPath = '/v1/localization-table/tables/{tableId}'
            .replace('{' + 'tableId' + '}', encodeURIComponent(String(tableId)));

        // Make Request Context
        const requestContext = _config.getServer('https://localizationtables.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (gameId !== undefined) {
            requestContext.setQueryParam("gameId", ObjectSerializer.serialize(gameId, "number", "int64"));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxLocalizationTablesApiUpdateTableContentsRequest", ""),
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

export class LocalizationTableApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableAvailableLanguagesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableAvailableLanguagesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxLocalizationTablesApiLanguage;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableLimitsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableLimitsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiGetLimitsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiGetLimitsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetLimitsResponse", ""
            ) as RobloxLocalizationTablesApiGetLimitsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiGetLimitsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetLimitsResponse", ""
            ) as RobloxLocalizationTablesApiGetLimitsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableMetadataGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableMetadataGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiLocalizationTablesMetadataResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiLocalizationTablesMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiLocalizationTablesMetadataResponse", ""
            ) as RobloxLocalizationTablesApiLocalizationTablesMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiLocalizationTablesMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiLocalizationTablesMetadataResponse", ""
            ) as RobloxLocalizationTablesApiLocalizationTablesMetadataResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesAssetIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesAssetIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiGetTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableResponse", ""
            ) as RobloxLocalizationTablesApiGetTableResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "12: Invalid asset id.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: You do not have permission to get this table.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiGetTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableResponse", ""
            ) as RobloxLocalizationTablesApiGetTableResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiCreateTableResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiCreateTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiCreateTableResponse", ""
            ) as RobloxLocalizationTablesApiCreateTableResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You do not have permission to get this table.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiCreateTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiCreateTableResponse", ""
            ) as RobloxLocalizationTablesApiCreateTableResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesTableIdEntriesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesTableIdEntriesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesPagedResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiGetTableEntriesPagedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableEntriesPagedResponse", ""
            ) as RobloxLocalizationTablesApiGetTableEntriesPagedResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid table id.  14: Invalid game id", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: You do not have permission to get this table.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiGetTableEntriesPagedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableEntriesPagedResponse", ""
            ) as RobloxLocalizationTablesApiGetTableEntriesPagedResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesTableIdEntriesTranslationFeedbackPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse", ""
            ) as RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid table id.  13: Request body can\&#39;t be null  14: Invalid game id  16: Entries can\&#39;t be null or empty  35: The entries provided are invalid  37: Invalid locale code.  38: Invalid entry identifier.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You do not have permission to get this table.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "24: Too many attempts.Please try again later.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "17: Feature is disabled", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse", ""
            ) as RobloxLocalizationTablesApiGetTableEntriesTranslationFeedbackResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesTableIdEntriesTranslationHistoryPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesTableIdEntriesTranslationHistoryPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse", ""
            ) as RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid table id.  13: Request body can\&#39;t be null  14: Invalid game id  16: Entries can\&#39;t be null or empty  35: The entries provided are invalid  37: Invalid locale code.  38: Invalid entry identifier.  39: Count should be at least 1.  45: Invalid exclusive start id.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  2: You do not have permission to get this table.", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "24: Too many attempts.Please try again later.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "17: Feature is disabled", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse", ""
            ) as RobloxLocalizationTablesApiGetTableEntriesTranslationHistoryResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesTableIdEntryCountGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesTableIdEntryCountGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableEntryCountResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiGetTableEntryCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableEntryCountResponse", ""
            ) as RobloxLocalizationTablesApiGetTableEntryCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid table id.  14: Invalid game id", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: You do not have permission to get this table.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiGetTableEntryCountResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableEntryCountResponse", ""
            ) as RobloxLocalizationTablesApiGetTableEntryCountResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesTableIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesTableIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiGetTableResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiGetTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableResponse", ""
            ) as RobloxLocalizationTablesApiGetTableResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid table id.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: You do not have permission to get this table.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiGetTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetTableResponse", ""
            ) as RobloxLocalizationTablesApiGetTableResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesTableIdLanguageTranslationCountsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesTableIdLanguageTranslationCountsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse", ""
            ) as RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid table id.  46: Locales can\&#39;t be null or empty", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: You do not have permission to get this table.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse", ""
            ) as RobloxLocalizationTablesApiGetLanguageTranslationCountsForTableResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1LocalizationTableTablesTableIdPatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1LocalizationTableTablesTableIdPatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxLocalizationTablesApiUpdateTableContentsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxLocalizationTablesApiUpdateTableContentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiUpdateTableContentsResponse", ""
            ) as RobloxLocalizationTablesApiUpdateTableContentsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "3: Invalid table id.  4: Table does not exist.  10: Maximum entries exceeded. Please keep the number of entries per request below the maximum.  13: Request body can\&#39;t be null  14: Invalid game id", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Token Validation Failed  6: You do not have permission to create this table.", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "17: Feature is disabled", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxLocalizationTablesApiUpdateTableContentsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxLocalizationTablesApiUpdateTableContentsResponse", ""
            ) as RobloxLocalizationTablesApiUpdateTableContentsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
