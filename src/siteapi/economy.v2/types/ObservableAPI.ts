import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxEconomyApiModelsAgentResponse } from '../models/RobloxEconomyApiModelsAgentResponse';
import { RobloxEconomyApiModelsCreatorDetails } from '../models/RobloxEconomyApiModelsCreatorDetails';
import { RobloxEconomyApiModelsItemDetailResponse } from '../models/RobloxEconomyApiModelsItemDetailResponse';
import { RobloxEconomyApiModelsTransactionRecordResponse } from '../models/RobloxEconomyApiModelsTransactionRecordResponse';
import { RobloxEconomyApiModelsTransactionResponse } from '../models/RobloxEconomyApiModelsTransactionResponse';
import { RobloxEconomyApiModelsTransactionTotalsResponse } from '../models/RobloxEconomyApiModelsTransactionTotalsResponse';
import { RobloxEconomyApiModelsTransactionUsedTypesResponse } from '../models/RobloxEconomyApiModelsTransactionUsedTypesResponse';
import { RobloxPagingExclusiveStartKeyCursorSystemInt64 } from '../models/RobloxPagingExclusiveStartKeyCursorSystemInt64';
import { RobloxWebResponsesEconomyGenericCurrencyResponse } from '../models/RobloxWebResponsesEconomyGenericCurrencyResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse';

import { AssetApiRequestFactory, AssetApiResponseProcessor} from "../apis/AssetApi";
export class ObservableAssetApi {
    private requestFactory: AssetApiRequestFactory;
    private responseProcessor: AssetApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetApiRequestFactory,
        responseProcessor?: AssetApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetApiResponseProcessor();
    }

    /**
     * Retrieves the product and asset details given its id.
     * @param assetId The id of the asset.
     */
    public v2AssetsAssetIdDetailsGetWithHttpInfo(assetId: number, _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiModelsItemDetailResponse>> {
        const requestContextPromise = this.requestFactory.v2AssetsAssetIdDetailsGet(assetId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetsAssetIdDetailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the product and asset details given its id.
     * @param assetId The id of the asset.
     */
    public v2AssetsAssetIdDetailsGet(assetId: number, _options?: Configuration): Observable<RobloxEconomyApiModelsItemDetailResponse> {
        return this.v2AssetsAssetIdDetailsGetWithHttpInfo(assetId, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiModelsItemDetailResponse>) => apiResponse.data));
    }

}

import { TransactionHistoryApiRequestFactory, TransactionHistoryApiResponseProcessor} from "../apis/TransactionHistoryApi";
export class ObservableTransactionHistoryApi {
    private requestFactory: TransactionHistoryApiRequestFactory;
    private responseProcessor: TransactionHistoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionHistoryApiRequestFactory,
        responseProcessor?: TransactionHistoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionHistoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionHistoryApiResponseProcessor();
    }

    /**
     * Fetches the transaction history for a group.
     * @param groupId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdTransactionsGetWithHttpInfo(groupId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse>> {
        const requestContextPromise = this.requestFactory.v2GroupsGroupIdTransactionsGet(groupId, transactionType, limit, cursor, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2GroupsGroupIdTransactionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetches the transaction history for a group.
     * @param groupId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdTransactionsGet(groupId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse> {
        return this.v2GroupsGroupIdTransactionsGetWithHttpInfo(groupId, transactionType, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse>) => apiResponse.data));
    }

}

import { TransactionRecordsApiRequestFactory, TransactionRecordsApiResponseProcessor} from "../apis/TransactionRecordsApi";
export class ObservableTransactionRecordsApi {
    private requestFactory: TransactionRecordsApiRequestFactory;
    private responseProcessor: TransactionRecordsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionRecordsApiRequestFactory,
        responseProcessor?: TransactionRecordsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionRecordsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionRecordsApiResponseProcessor();
    }

    /**
     * Gets recent transaction total summaries for the Authenticated User.
     * @param userId 
     * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdTransactionTotalsGetWithHttpInfo(userId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiModelsTransactionTotalsResponse>> {
        const requestContextPromise = this.requestFactory.v2UsersUserIdTransactionTotalsGet(userId, timeFrame, transactionType, limit, cursor, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UsersUserIdTransactionTotalsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets recent transaction total summaries for the Authenticated User.
     * @param userId 
     * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdTransactionTotalsGet(userId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxEconomyApiModelsTransactionTotalsResponse> {
        return this.v2UsersUserIdTransactionTotalsGetWithHttpInfo(userId, timeFrame, transactionType, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiModelsTransactionTotalsResponse>) => apiResponse.data));
    }

    /**
     * Gets the transaction types that a user has used at any point in their account\'s lifetime.
     * @param userId 
     */
    public v2UsersUserIdTransactionTypesGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiModelsTransactionUsedTypesResponse>> {
        const requestContextPromise = this.requestFactory.v2UsersUserIdTransactionTypesGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UsersUserIdTransactionTypesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the transaction types that a user has used at any point in their account\'s lifetime.
     * @param userId 
     */
    public v2UsersUserIdTransactionTypesGet(userId: number, _options?: Configuration): Observable<RobloxEconomyApiModelsTransactionUsedTypesResponse> {
        return this.v2UsersUserIdTransactionTypesGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiModelsTransactionUsedTypesResponse>) => apiResponse.data));
    }

    /**
     * Fetches the transaction history for the authenticated user.
     * @param userId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdTransactionsGetWithHttpInfo(userId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse>> {
        const requestContextPromise = this.requestFactory.v2UsersUserIdTransactionsGet(userId, transactionType, limit, cursor, sortOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UsersUserIdTransactionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetches the transaction history for the authenticated user.
     * @param userId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdTransactionsGet(userId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse> {
        return this.v2UsersUserIdTransactionsGetWithHttpInfo(userId, transactionType, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse>) => apiResponse.data));
    }

}
