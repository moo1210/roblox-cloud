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

import { ObservableAssetApi } from "./ObservableAPI";
import { AssetApiRequestFactory, AssetApiResponseProcessor} from "../apis/AssetApi";

export interface AssetApiV2AssetsAssetIdDetailsGetRequest {
    /**
     * The id of the asset.
     * @type number
     * @memberof AssetApiv2AssetsAssetIdDetailsGet
     */
    assetId: number
}

export class ObjectAssetApi {
    private api: ObservableAssetApi

    public constructor(configuration: Configuration, requestFactory?: AssetApiRequestFactory, responseProcessor?: AssetApiResponseProcessor) {
        this.api = new ObservableAssetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the product and asset details given its id.
     * @param param the request object
     */
    public v2AssetsAssetIdDetailsGetWithHttpInfo(param: AssetApiV2AssetsAssetIdDetailsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsItemDetailResponse>> {
        return this.api.v2AssetsAssetIdDetailsGetWithHttpInfo(param.assetId,  options).toPromise();
    }

    /**
     * Retrieves the product and asset details given its id.
     * @param param the request object
     */
    public v2AssetsAssetIdDetailsGet(param: AssetApiV2AssetsAssetIdDetailsGetRequest, options?: Configuration): Promise<RobloxEconomyApiModelsItemDetailResponse> {
        return this.api.v2AssetsAssetIdDetailsGet(param.assetId,  options).toPromise();
    }

}

import { ObservableTransactionHistoryApi } from "./ObservableAPI";
import { TransactionHistoryApiRequestFactory, TransactionHistoryApiResponseProcessor} from "../apis/TransactionHistoryApi";

export interface TransactionHistoryApiV2GroupsGroupIdTransactionsGetRequest {
    /**
     * 
     * @type number
     * @memberof TransactionHistoryApiv2GroupsGroupIdTransactionsGet
     */
    groupId: number
    /**
     * 
     * @type &#39;Sale&#39; | &#39;Purchase&#39; | &#39;AffiliateSale&#39; | &#39;DevEx&#39; | &#39;GroupPayout&#39; | &#39;AdImpressionPayout&#39; | &#39;CurrencyPurchase&#39; | &#39;TradeRobux&#39; | &#39;PremiumStipend&#39; | &#39;PendingRobux&#39; | &#39;EngagementPayout&#39; | &#39;GroupEngagementPayout&#39; | &#39;AdSpend&#39; | &#39;Summary&#39; | &#39;IndividualToGroup&#39; | &#39;CSAdjustment&#39;
     * @memberof TransactionHistoryApiv2GroupsGroupIdTransactionsGet
     */
    transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment'
    /**
     * The amount of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof TransactionHistoryApiv2GroupsGroupIdTransactionsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof TransactionHistoryApiv2GroupsGroupIdTransactionsGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof TransactionHistoryApiv2GroupsGroupIdTransactionsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectTransactionHistoryApi {
    private api: ObservableTransactionHistoryApi

    public constructor(configuration: Configuration, requestFactory?: TransactionHistoryApiRequestFactory, responseProcessor?: TransactionHistoryApiResponseProcessor) {
        this.api = new ObservableTransactionHistoryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetches the transaction history for a group.
     * @param param the request object
     */
    public v2GroupsGroupIdTransactionsGetWithHttpInfo(param: TransactionHistoryApiV2GroupsGroupIdTransactionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse>> {
        return this.api.v2GroupsGroupIdTransactionsGetWithHttpInfo(param.groupId, param.transactionType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Fetches the transaction history for a group.
     * @param param the request object
     */
    public v2GroupsGroupIdTransactionsGet(param: TransactionHistoryApiV2GroupsGroupIdTransactionsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse> {
        return this.api.v2GroupsGroupIdTransactionsGet(param.groupId, param.transactionType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}

import { ObservableTransactionRecordsApi } from "./ObservableAPI";
import { TransactionRecordsApiRequestFactory, TransactionRecordsApiResponseProcessor} from "../apis/TransactionRecordsApi";

export interface TransactionRecordsApiV2UsersUserIdTransactionTotalsGetRequest {
    /**
     * 
     * @type number
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionTotalsGet
     */
    userId: number
    /**
     * The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     * @type &#39;Day&#39; | &#39;Week&#39; | &#39;Month&#39; | &#39;Year&#39;
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionTotalsGet
     */
    timeFrame: 'Day' | 'Week' | 'Month' | 'Year'
    /**
     * 
     * @type &#39;Sale&#39; | &#39;Purchase&#39; | &#39;AffiliateSale&#39; | &#39;DevEx&#39; | &#39;GroupPayout&#39; | &#39;AdImpressionPayout&#39; | &#39;CurrencyPurchase&#39; | &#39;TradeRobux&#39; | &#39;PremiumStipend&#39; | &#39;PendingRobux&#39; | &#39;EngagementPayout&#39; | &#39;GroupEngagementPayout&#39; | &#39;AdSpend&#39; | &#39;Summary&#39; | &#39;IndividualToGroup&#39; | &#39;CSAdjustment&#39;
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionTotalsGet
     */
    transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment'
    /**
     * The amount of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionTotalsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionTotalsGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionTotalsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface TransactionRecordsApiV2UsersUserIdTransactionTypesGetRequest {
    /**
     * 
     * @type number
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionTypesGet
     */
    userId: number
}

export interface TransactionRecordsApiV2UsersUserIdTransactionsGetRequest {
    /**
     * 
     * @type number
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionsGet
     */
    userId: number
    /**
     * 
     * @type &#39;Sale&#39; | &#39;Purchase&#39; | &#39;AffiliateSale&#39; | &#39;DevEx&#39; | &#39;GroupPayout&#39; | &#39;AdImpressionPayout&#39; | &#39;CurrencyPurchase&#39; | &#39;TradeRobux&#39; | &#39;PremiumStipend&#39; | &#39;PendingRobux&#39; | &#39;EngagementPayout&#39; | &#39;GroupEngagementPayout&#39; | &#39;AdSpend&#39; | &#39;Summary&#39; | &#39;IndividualToGroup&#39; | &#39;CSAdjustment&#39;
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionsGet
     */
    transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment'
    /**
     * The amount of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionsGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof TransactionRecordsApiv2UsersUserIdTransactionsGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectTransactionRecordsApi {
    private api: ObservableTransactionRecordsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionRecordsApiRequestFactory, responseProcessor?: TransactionRecordsApiResponseProcessor) {
        this.api = new ObservableTransactionRecordsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets recent transaction total summaries for the Authenticated User.
     * @param param the request object
     */
    public v2UsersUserIdTransactionTotalsGetWithHttpInfo(param: TransactionRecordsApiV2UsersUserIdTransactionTotalsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsTransactionTotalsResponse>> {
        return this.api.v2UsersUserIdTransactionTotalsGetWithHttpInfo(param.userId, param.timeFrame, param.transactionType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets recent transaction total summaries for the Authenticated User.
     * @param param the request object
     */
    public v2UsersUserIdTransactionTotalsGet(param: TransactionRecordsApiV2UsersUserIdTransactionTotalsGetRequest, options?: Configuration): Promise<RobloxEconomyApiModelsTransactionTotalsResponse> {
        return this.api.v2UsersUserIdTransactionTotalsGet(param.userId, param.timeFrame, param.transactionType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets the transaction types that a user has used at any point in their account\'s lifetime.
     * @param param the request object
     */
    public v2UsersUserIdTransactionTypesGetWithHttpInfo(param: TransactionRecordsApiV2UsersUserIdTransactionTypesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsTransactionUsedTypesResponse>> {
        return this.api.v2UsersUserIdTransactionTypesGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Gets the transaction types that a user has used at any point in their account\'s lifetime.
     * @param param the request object
     */
    public v2UsersUserIdTransactionTypesGet(param: TransactionRecordsApiV2UsersUserIdTransactionTypesGetRequest, options?: Configuration): Promise<RobloxEconomyApiModelsTransactionUsedTypesResponse> {
        return this.api.v2UsersUserIdTransactionTypesGet(param.userId,  options).toPromise();
    }

    /**
     * Fetches the transaction history for the authenticated user.
     * @param param the request object
     */
    public v2UsersUserIdTransactionsGetWithHttpInfo(param: TransactionRecordsApiV2UsersUserIdTransactionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse>> {
        return this.api.v2UsersUserIdTransactionsGetWithHttpInfo(param.userId, param.transactionType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Fetches the transaction history for the authenticated user.
     * @param param the request object
     */
    public v2UsersUserIdTransactionsGet(param: TransactionRecordsApiV2UsersUserIdTransactionsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionRecordResponse> {
        return this.api.v2UsersUserIdTransactionsGet(param.userId, param.transactionType, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}
