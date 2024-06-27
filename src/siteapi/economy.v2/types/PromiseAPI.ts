import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

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
import { ObservableAssetApi } from './ObservableAPI';

import { AssetApiRequestFactory, AssetApiResponseProcessor} from "../apis/AssetApi";
export class PromiseAssetApi {
    private api: ObservableAssetApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetApiRequestFactory,
        responseProcessor?: AssetApiResponseProcessor
    ) {
        this.api = new ObservableAssetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the product and asset details given its id.
     * @param assetId The id of the asset.
     */
    public v2AssetsAssetIdDetailsGetWithHttpInfo(assetId: number, _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsItemDetailResponse>> {
        const result = this.api.v2AssetsAssetIdDetailsGetWithHttpInfo(assetId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the product and asset details given its id.
     * @param assetId The id of the asset.
     */
    public v2AssetsAssetIdDetailsGet(assetId: number, _options?: Configuration): Promise<RobloxEconomyApiModelsItemDetailResponse> {
        const result = this.api.v2AssetsAssetIdDetailsGet(assetId, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionHistoryApi } from './ObservableAPI';

import { TransactionHistoryApiRequestFactory, TransactionHistoryApiResponseProcessor} from "../apis/TransactionHistoryApi";
export class PromiseTransactionHistoryApi {
    private api: ObservableTransactionHistoryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionHistoryApiRequestFactory,
        responseProcessor?: TransactionHistoryApiResponseProcessor
    ) {
        this.api = new ObservableTransactionHistoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetches the transaction history for a group.
     * @param groupId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdTransactionsGetWithHttpInfo(groupId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse>> {
        const result = this.api.v2GroupsGroupIdTransactionsGetWithHttpInfo(groupId, transactionType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Fetches the transaction history for a group.
     * @param groupId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2GroupsGroupIdTransactionsGet(groupId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse> {
        const result = this.api.v2GroupsGroupIdTransactionsGet(groupId, transactionType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionRecordsApi } from './ObservableAPI';

import { TransactionRecordsApiRequestFactory, TransactionRecordsApiResponseProcessor} from "../apis/TransactionRecordsApi";
export class PromiseTransactionRecordsApi {
    private api: ObservableTransactionRecordsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionRecordsApiRequestFactory,
        responseProcessor?: TransactionRecordsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionRecordsApi(configuration, requestFactory, responseProcessor);
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
    public v2UsersUserIdTransactionTotalsGetWithHttpInfo(userId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsTransactionTotalsResponse>> {
        const result = this.api.v2UsersUserIdTransactionTotalsGetWithHttpInfo(userId, timeFrame, transactionType, limit, cursor, sortOrder, _options);
        return result.toPromise();
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
    public v2UsersUserIdTransactionTotalsGet(userId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxEconomyApiModelsTransactionTotalsResponse> {
        const result = this.api.v2UsersUserIdTransactionTotalsGet(userId, timeFrame, transactionType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets the transaction types that a user has used at any point in their account\'s lifetime.
     * @param userId 
     */
    public v2UsersUserIdTransactionTypesGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsTransactionUsedTypesResponse>> {
        const result = this.api.v2UsersUserIdTransactionTypesGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets the transaction types that a user has used at any point in their account\'s lifetime.
     * @param userId 
     */
    public v2UsersUserIdTransactionTypesGet(userId: number, _options?: Configuration): Promise<RobloxEconomyApiModelsTransactionUsedTypesResponse> {
        const result = this.api.v2UsersUserIdTransactionTypesGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Fetches the transaction history for the authenticated user.
     * @param userId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdTransactionsGetWithHttpInfo(userId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse>> {
        const result = this.api.v2UsersUserIdTransactionsGetWithHttpInfo(userId, transactionType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Fetches the transaction history for the authenticated user.
     * @param userId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v2UsersUserIdTransactionsGet(userId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse> {
        const result = this.api.v2UsersUserIdTransactionsGet(userId, transactionType, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



