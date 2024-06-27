import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxEconomyApiModelsTransactionTotalsResponse } from '../models/RobloxEconomyApiModelsTransactionTotalsResponse';
import { RobloxEconomyApiModelsTransactionUsedTypesResponse } from '../models/RobloxEconomyApiModelsTransactionUsedTypesResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse';

/**
 * no description
 */
export class TransactionRecordsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Gets recent transaction total summaries for the Authenticated User.
     * @param userId 
     * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v2UsersUserIdTransactionTotalsGet(userId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("TransactionRecordsApi", "v2UsersUserIdTransactionTotalsGet", "userId");
        }


        // verify required parameter 'timeFrame' is not null or undefined
        if (timeFrame === null || timeFrame === undefined) {
            throw new RequiredError("TransactionRecordsApi", "v2UsersUserIdTransactionTotalsGet", "timeFrame");
        }


        // verify required parameter 'transactionType' is not null or undefined
        if (transactionType === null || transactionType === undefined) {
            throw new RequiredError("TransactionRecordsApi", "v2UsersUserIdTransactionTotalsGet", "transactionType");
        }





        // Path Params
        const localVarPath = '/v2/users/{userId}/transaction-totals'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (timeFrame !== undefined) {
            requestContext.setQueryParam("timeFrame", ObjectSerializer.serialize(timeFrame, "'Day' | 'Week' | 'Month' | 'Year'", ""));
        }

        // Query Params
        if (transactionType !== undefined) {
            requestContext.setQueryParam("transactionType", ObjectSerializer.serialize(transactionType, "'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the transaction types that a user has used at any point in their account\'s lifetime.
     * @param userId 
     */
    public async v2UsersUserIdTransactionTypesGet(userId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("TransactionRecordsApi", "v2UsersUserIdTransactionTypesGet", "userId");
        }


        // Path Params
        const localVarPath = '/v2/users/{userId}/transaction-types'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Fetches the transaction history for the authenticated user.
     * @param userId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public async v2UsersUserIdTransactionsGet(userId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("TransactionRecordsApi", "v2UsersUserIdTransactionsGet", "userId");
        }


        // verify required parameter 'transactionType' is not null or undefined
        if (transactionType === null || transactionType === undefined) {
            throw new RequiredError("TransactionRecordsApi", "v2UsersUserIdTransactionsGet", "transactionType");
        }





        // Path Params
        const localVarPath = '/v2/users/{userId}/transactions'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.getServer('https://economy.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (transactionType !== undefined) {
            requestContext.setQueryParam("transactionType", ObjectSerializer.serialize(transactionType, "'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment'", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }

        // Query Params
        if (sortOrder !== undefined) {
            requestContext.setQueryParam("sortOrder", ObjectSerializer.serialize(sortOrder, "'Asc' | 'Desc'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TransactionRecordsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UsersUserIdTransactionTotalsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UsersUserIdTransactionTotalsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxEconomyApiModelsTransactionTotalsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxEconomyApiModelsTransactionTotalsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiModelsTransactionTotalsResponse", ""
            ) as RobloxEconomyApiModelsTransactionTotalsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The user is invalid.  4: The time frame is not supported or is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxEconomyApiModelsTransactionTotalsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiModelsTransactionTotalsResponse", ""
            ) as RobloxEconomyApiModelsTransactionTotalsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UsersUserIdTransactionTypesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UsersUserIdTransactionTypesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxEconomyApiModelsTransactionUsedTypesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxEconomyApiModelsTransactionUsedTypesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiModelsTransactionUsedTypesResponse", ""
            ) as RobloxEconomyApiModelsTransactionUsedTypesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The user is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxEconomyApiModelsTransactionUsedTypesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxEconomyApiModelsTransactionUsedTypesResponse", ""
            ) as RobloxEconomyApiModelsTransactionUsedTypesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v2UsersUserIdTransactionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v2UsersUserIdTransactionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The user is invalid.  12: Invalid transaction type.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse", ""
            ) as RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
