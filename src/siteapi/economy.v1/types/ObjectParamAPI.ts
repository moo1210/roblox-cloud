import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxEconomyApiChartDataPointResponse } from '../models/RobloxEconomyApiChartDataPointResponse';
import { RobloxEconomyApiControllersV1CashoutInfoResponseModel } from '../models/RobloxEconomyApiControllersV1CashoutInfoResponseModel';
import { RobloxEconomyApiModelsAddFundsRequest } from '../models/RobloxEconomyApiModelsAddFundsRequest';
import { RobloxEconomyApiModelsAgentResponse } from '../models/RobloxEconomyApiModelsAgentResponse';
import { RobloxEconomyApiModelsCashOutAbilityResponseModel } from '../models/RobloxEconomyApiModelsCashOutAbilityResponseModel';
import { RobloxEconomyApiModelsLatestAddFundsResponse } from '../models/RobloxEconomyApiModelsLatestAddFundsResponse';
import { RobloxEconomyApiModelsSubmitRequestModel } from '../models/RobloxEconomyApiModelsSubmitRequestModel';
import { RobloxEconomyApiModelsSubmitResponseModel } from '../models/RobloxEconomyApiModelsSubmitResponseModel';
import { RobloxEconomyApiModelsTransactionResponse } from '../models/RobloxEconomyApiModelsTransactionResponse';
import { RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel } from '../models/RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel';
import { RobloxEconomyApiResaleDataResponse } from '../models/RobloxEconomyApiResaleDataResponse';
import { RobloxEconomyApiResaleRecordResponse } from '../models/RobloxEconomyApiResaleRecordResponse';
import { RobloxEconomyApiResaleTaxRateResponse } from '../models/RobloxEconomyApiResaleTaxRateResponse';
import { RobloxEconomyApiRevenueSummaryResponse } from '../models/RobloxEconomyApiRevenueSummaryResponse';
import { RobloxEconomyApiUserAssetsPatchRequest } from '../models/RobloxEconomyApiUserAssetsPatchRequest';
import { RobloxPagingStartIndexCursor } from '../models/RobloxPagingStartIndexCursor';
import { RobloxWebResponsesEconomyCurrencyResponse } from '../models/RobloxWebResponsesEconomyCurrencyResponse';
import { RobloxWebResponsesEconomyGenericCurrencyResponse } from '../models/RobloxWebResponsesEconomyGenericCurrencyResponse';
import { RobloxWebResponsesRelatedEntityTypeResponseRobloxAgentsAgentType } from '../models/RobloxWebResponsesRelatedEntityTypeResponseRobloxAgentsAgentType';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse';

import { ObservableCashOutApi } from "./ObservableAPI";
import { CashOutApiRequestFactory, CashOutApiResponseProcessor} from "../apis/CashOutApi";

export interface CashOutApiV1DeveloperExchangeCashoutAbilityGetRequest {
}

export interface CashOutApiV1DeveloperExchangeHelpGetRequest {
}

export interface CashOutApiV1DeveloperExchangeInfoGetRequest {
    /**
     * 
     * @type boolean
     * @memberof CashOutApiv1DeveloperExchangeInfoGet
     */
    fromDevExPage?: boolean
}

export interface CashOutApiV1DeveloperExchangeSubmitPostRequest {
    /**
     * 
     * @type RobloxEconomyApiModelsSubmitRequestModel
     * @memberof CashOutApiv1DeveloperExchangeSubmitPost
     */
    requestModel: RobloxEconomyApiModelsSubmitRequestModel
}

export class ObjectCashOutApi {
    private api: ObservableCashOutApi

    public constructor(configuration: Configuration, requestFactory?: CashOutApiRequestFactory, responseProcessor?: CashOutApiResponseProcessor) {
        this.api = new ObservableCashOutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets information regarding whether user can cash out, and any specific reasons why the user would not be able to cashout.
     * @param param the request object
     */
    public v1DeveloperExchangeCashoutAbilityGetWithHttpInfo(param: CashOutApiV1DeveloperExchangeCashoutAbilityGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsCashOutAbilityResponseModel>> {
        return this.api.v1DeveloperExchangeCashoutAbilityGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets information regarding whether user can cash out, and any specific reasons why the user would not be able to cashout.
     * @param param the request object
     */
    public v1DeveloperExchangeCashoutAbilityGet(param: CashOutApiV1DeveloperExchangeCashoutAbilityGetRequest = {}, options?: Configuration): Promise<RobloxEconomyApiModelsCashOutAbilityResponseModel> {
        return this.api.v1DeveloperExchangeCashoutAbilityGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1DeveloperExchangeHelpGetWithHttpInfo(param: CashOutApiV1DeveloperExchangeHelpGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1DeveloperExchangeHelpGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1DeveloperExchangeHelpGet(param: CashOutApiV1DeveloperExchangeHelpGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.v1DeveloperExchangeHelpGet( options).toPromise();
    }

    /**
     * Retrieves information needed to display in the cash out widget or page
     * @param param the request object
     */
    public v1DeveloperExchangeInfoGetWithHttpInfo(param: CashOutApiV1DeveloperExchangeInfoGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiControllersV1CashoutInfoResponseModel>> {
        return this.api.v1DeveloperExchangeInfoGetWithHttpInfo(param.fromDevExPage,  options).toPromise();
    }

    /**
     * Retrieves information needed to display in the cash out widget or page
     * @param param the request object
     */
    public v1DeveloperExchangeInfoGet(param: CashOutApiV1DeveloperExchangeInfoGetRequest = {}, options?: Configuration): Promise<RobloxEconomyApiControllersV1CashoutInfoResponseModel> {
        return this.api.v1DeveloperExchangeInfoGet(param.fromDevExPage,  options).toPromise();
    }

    /**
     * Submits a request to cash out.
     * @param param the request object
     */
    public v1DeveloperExchangeSubmitPostWithHttpInfo(param: CashOutApiV1DeveloperExchangeSubmitPostRequest, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsSubmitResponseModel>> {
        return this.api.v1DeveloperExchangeSubmitPostWithHttpInfo(param.requestModel,  options).toPromise();
    }

    /**
     * Submits a request to cash out.
     * @param param the request object
     */
    public v1DeveloperExchangeSubmitPost(param: CashOutApiV1DeveloperExchangeSubmitPostRequest, options?: Configuration): Promise<RobloxEconomyApiModelsSubmitResponseModel> {
        return this.api.v1DeveloperExchangeSubmitPost(param.requestModel,  options).toPromise();
    }

}

import { ObservableCurrencyApi } from "./ObservableAPI";
import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";

export interface CurrencyApiV1GroupsGroupIdAddfundsAllowedGetRequest {
    /**
     * 
     * @type number
     * @memberof CurrencyApiv1GroupsGroupIdAddfundsAllowedGet
     */
    groupId: number
}

export interface CurrencyApiV1GroupsGroupIdAddfundsLatestGetRequest {
    /**
     * 
     * @type number
     * @memberof CurrencyApiv1GroupsGroupIdAddfundsLatestGet
     */
    groupId: number
}

export interface CurrencyApiV1GroupsGroupIdAddfundsPostRequest {
    /**
     * 
     * @type number
     * @memberof CurrencyApiv1GroupsGroupIdAddfundsPost
     */
    groupId: number
    /**
     * 
     * @type RobloxEconomyApiModelsAddFundsRequest
     * @memberof CurrencyApiv1GroupsGroupIdAddfundsPost
     */
    request: RobloxEconomyApiModelsAddFundsRequest
}

export interface CurrencyApiV1GroupsGroupIdCurrencyGetRequest {
    /**
     * The group Id to get the currency for.
     * @type number
     * @memberof CurrencyApiv1GroupsGroupIdCurrencyGet
     */
    groupId: number
}

export interface CurrencyApiV1UsersUserIdCurrencyGetRequest {
    /**
     * The user Id to get the currency for.
     * @type number
     * @memberof CurrencyApiv1UsersUserIdCurrencyGet
     */
    userId: number
}

export class ObjectCurrencyApi {
    private api: ObservableCurrencyApi

    public constructor(configuration: Configuration, requestFactory?: CurrencyApiRequestFactory, responseProcessor?: CurrencyApiResponseProcessor) {
        this.api = new ObservableCurrencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public v1GroupsGroupIdAddfundsAllowedGetWithHttpInfo(param: CurrencyApiV1GroupsGroupIdAddfundsAllowedGetRequest, options?: Configuration): Promise<HttpInfo<boolean>> {
        return this.api.v1GroupsGroupIdAddfundsAllowedGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1GroupsGroupIdAddfundsAllowedGet(param: CurrencyApiV1GroupsGroupIdAddfundsAllowedGetRequest, options?: Configuration): Promise<boolean> {
        return this.api.v1GroupsGroupIdAddfundsAllowedGet(param.groupId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1GroupsGroupIdAddfundsLatestGetWithHttpInfo(param: CurrencyApiV1GroupsGroupIdAddfundsLatestGetRequest, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsLatestAddFundsResponse>> {
        return this.api.v1GroupsGroupIdAddfundsLatestGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1GroupsGroupIdAddfundsLatestGet(param: CurrencyApiV1GroupsGroupIdAddfundsLatestGetRequest, options?: Configuration): Promise<RobloxEconomyApiModelsLatestAddFundsResponse> {
        return this.api.v1GroupsGroupIdAddfundsLatestGet(param.groupId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1GroupsGroupIdAddfundsPostWithHttpInfo(param: CurrencyApiV1GroupsGroupIdAddfundsPostRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1GroupsGroupIdAddfundsPostWithHttpInfo(param.groupId, param.request,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public v1GroupsGroupIdAddfundsPost(param: CurrencyApiV1GroupsGroupIdAddfundsPostRequest, options?: Configuration): Promise<void> {
        return this.api.v1GroupsGroupIdAddfundsPost(param.groupId, param.request,  options).toPromise();
    }

    /**
     * Currency can only be retrieved for groups the authenticated user has permission to view group funds for.
     * Gets currency for the specified group.
     * @param param the request object
     */
    public v1GroupsGroupIdCurrencyGetWithHttpInfo(param: CurrencyApiV1GroupsGroupIdCurrencyGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebResponsesEconomyCurrencyResponse>> {
        return this.api.v1GroupsGroupIdCurrencyGetWithHttpInfo(param.groupId,  options).toPromise();
    }

    /**
     * Currency can only be retrieved for groups the authenticated user has permission to view group funds for.
     * Gets currency for the specified group.
     * @param param the request object
     */
    public v1GroupsGroupIdCurrencyGet(param: CurrencyApiV1GroupsGroupIdCurrencyGetRequest, options?: Configuration): Promise<RobloxWebResponsesEconomyCurrencyResponse> {
        return this.api.v1GroupsGroupIdCurrencyGet(param.groupId,  options).toPromise();
    }

    /**
     * Currency can only be retrieved for the authenticated user.
     * Gets currency for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdCurrencyGetWithHttpInfo(param: CurrencyApiV1UsersUserIdCurrencyGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebResponsesEconomyCurrencyResponse>> {
        return this.api.v1UsersUserIdCurrencyGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Currency can only be retrieved for the authenticated user.
     * Gets currency for the specified user.
     * @param param the request object
     */
    public v1UsersUserIdCurrencyGet(param: CurrencyApiV1UsersUserIdCurrencyGetRequest, options?: Configuration): Promise<RobloxWebResponsesEconomyCurrencyResponse> {
        return this.api.v1UsersUserIdCurrencyGet(param.userId,  options).toPromise();
    }

}

import { ObservableGroupPayoutsApi } from "./ObservableAPI";
import { GroupPayoutsApiRequestFactory, GroupPayoutsApiResponseProcessor} from "../apis/GroupPayoutsApi";

export interface GroupPayoutsApiV1GroupsGroupIdUsersPayoutEligibilityGetRequest {
    /**
     * 
     * @type number
     * @memberof GroupPayoutsApiv1GroupsGroupIdUsersPayoutEligibilityGet
     */
    groupId: number
    /**
     * 
     * @type Array&lt;number&gt;
     * @memberof GroupPayoutsApiv1GroupsGroupIdUsersPayoutEligibilityGet
     */
    userIds: Array<number>
}

export class ObjectGroupPayoutsApi {
    private api: ObservableGroupPayoutsApi

    public constructor(configuration: Configuration, requestFactory?: GroupPayoutsApiRequestFactory, responseProcessor?: GroupPayoutsApiResponseProcessor) {
        this.api = new ObservableGroupPayoutsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the group payout eligibility for a group of users.
     * @param param the request object
     */
    public v1GroupsGroupIdUsersPayoutEligibilityGetWithHttpInfo(param: GroupPayoutsApiV1GroupsGroupIdUsersPayoutEligibilityGetRequest, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel>> {
        return this.api.v1GroupsGroupIdUsersPayoutEligibilityGetWithHttpInfo(param.groupId, param.userIds,  options).toPromise();
    }

    /**
     * Gets the group payout eligibility for a group of users.
     * @param param the request object
     */
    public v1GroupsGroupIdUsersPayoutEligibilityGet(param: GroupPayoutsApiV1GroupsGroupIdUsersPayoutEligibilityGetRequest, options?: Configuration): Promise<RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel> {
        return this.api.v1GroupsGroupIdUsersPayoutEligibilityGet(param.groupId, param.userIds,  options).toPromise();
    }

}

import { ObservableResaleApi } from "./ObservableAPI";
import { ResaleApiRequestFactory, ResaleApiResponseProcessor} from "../apis/ResaleApi";

export interface ResaleApiV1AssetsAssetIdResaleDataGetRequest {
    /**
     * The asset id.
     * @type number
     * @memberof ResaleApiv1AssetsAssetIdResaleDataGet
     */
    assetId: number
}

export interface ResaleApiV1AssetsAssetIdResellableCopiesUserAssetIdPatchRequest {
    /**
     * 
     * @type number
     * @memberof ResaleApiv1AssetsAssetIdResellableCopiesUserAssetIdPatch
     */
    assetId: number
    /**
     * 
     * @type number
     * @memberof ResaleApiv1AssetsAssetIdResellableCopiesUserAssetIdPatch
     */
    userAssetId: number
    /**
     * 
     * @type RobloxEconomyApiUserAssetsPatchRequest
     * @memberof ResaleApiv1AssetsAssetIdResellableCopiesUserAssetIdPatch
     */
    request: RobloxEconomyApiUserAssetsPatchRequest
}

export interface ResaleApiV1AssetsAssetIdResellersGetRequest {
    /**
     * The asset id.
     * @type number
     * @memberof ResaleApiv1AssetsAssetIdResellersGet
     */
    assetId: number
    /**
     * The amount of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof ResaleApiv1AssetsAssetIdResellersGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof ResaleApiv1AssetsAssetIdResellersGet
     */
    cursor?: string
}

export interface ResaleApiV1AssetsAssetIdUsersUserIdResellableCopiesGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof ResaleApiv1AssetsAssetIdUsersUserIdResellableCopiesGet
     */
    userId: number
    /**
     * The asset id.
     * @type number
     * @memberof ResaleApiv1AssetsAssetIdUsersUserIdResellableCopiesGet
     */
    assetId: number
}

export interface ResaleApiV1ResaleTaxRateGetRequest {
}

export class ObjectResaleApi {
    private api: ObservableResaleApi

    public constructor(configuration: Configuration, requestFactory?: ResaleApiRequestFactory, responseProcessor?: ResaleApiResponseProcessor) {
        this.api = new ObservableResaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is only valid for resellable (limited) items.
     * Gets asset resale data.
     * @param param the request object
     */
    public v1AssetsAssetIdResaleDataGetWithHttpInfo(param: ResaleApiV1AssetsAssetIdResaleDataGetRequest, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiResaleDataResponse>> {
        return this.api.v1AssetsAssetIdResaleDataGetWithHttpInfo(param.assetId,  options).toPromise();
    }

    /**
     * This endpoint is only valid for resellable (limited) items.
     * Gets asset resale data.
     * @param param the request object
     */
    public v1AssetsAssetIdResaleDataGet(param: ResaleApiV1AssetsAssetIdResaleDataGetRequest, options?: Configuration): Promise<RobloxEconomyApiResaleDataResponse> {
        return this.api.v1AssetsAssetIdResaleDataGet(param.assetId,  options).toPromise();
    }

    /**
     * Sets copies of an asset owned by the authenticated user for sale
     * @param param the request object
     */
    public v1AssetsAssetIdResellableCopiesUserAssetIdPatchWithHttpInfo(param: ResaleApiV1AssetsAssetIdResellableCopiesUserAssetIdPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1AssetsAssetIdResellableCopiesUserAssetIdPatchWithHttpInfo(param.assetId, param.userAssetId, param.request,  options).toPromise();
    }

    /**
     * Sets copies of an asset owned by the authenticated user for sale
     * @param param the request object
     */
    public v1AssetsAssetIdResellableCopiesUserAssetIdPatch(param: ResaleApiV1AssetsAssetIdResellableCopiesUserAssetIdPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1AssetsAssetIdResellableCopiesUserAssetIdPatch(param.assetId, param.userAssetId, param.request,  options).toPromise();
    }

    /**
     * Gets available resale copies of an asset.
     * @param param the request object
     */
    public v1AssetsAssetIdResellersGetWithHttpInfo(param: ResaleApiV1AssetsAssetIdResellersGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse>> {
        return this.api.v1AssetsAssetIdResellersGetWithHttpInfo(param.assetId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Gets available resale copies of an asset.
     * @param param the request object
     */
    public v1AssetsAssetIdResellersGet(param: ResaleApiV1AssetsAssetIdResellersGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse> {
        return this.api.v1AssetsAssetIdResellersGet(param.assetId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Gets resellable copies of an asset owned by the authenticated user.
     * @param param the request object
     */
    public v1AssetsAssetIdUsersUserIdResellableCopiesGetWithHttpInfo(param: ResaleApiV1AssetsAssetIdUsersUserIdResellableCopiesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse>> {
        return this.api.v1AssetsAssetIdUsersUserIdResellableCopiesGetWithHttpInfo(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Gets resellable copies of an asset owned by the authenticated user.
     * @param param the request object
     */
    public v1AssetsAssetIdUsersUserIdResellableCopiesGet(param: ResaleApiV1AssetsAssetIdUsersUserIdResellableCopiesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse> {
        return this.api.v1AssetsAssetIdUsersUserIdResellableCopiesGet(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Gets asset resale related metadata.
     * @param param the request object
     */
    public v1ResaleTaxRateGetWithHttpInfo(param: ResaleApiV1ResaleTaxRateGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiResaleTaxRateResponse>> {
        return this.api.v1ResaleTaxRateGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets asset resale related metadata.
     * @param param the request object
     */
    public v1ResaleTaxRateGet(param: ResaleApiV1ResaleTaxRateGetRequest = {}, options?: Configuration): Promise<RobloxEconomyApiResaleTaxRateResponse> {
        return this.api.v1ResaleTaxRateGet( options).toPromise();
    }

}

import { ObservableRevenueSummaryApi } from "./ObservableAPI";
import { RevenueSummaryApiRequestFactory, RevenueSummaryApiResponseProcessor} from "../apis/RevenueSummaryApi";

export interface RevenueSummaryApiV1GroupsGroupIdRevenueSummaryTimeFrameGetRequest {
    /**
     * The group id to get Robux summary for.
     * @type number
     * @memberof RevenueSummaryApiv1GroupsGroupIdRevenueSummaryTimeFrameGet
     */
    groupId: number
    /**
     * The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     * @type &#39;Day&#39; | &#39;Week&#39; | &#39;Month&#39; | &#39;Year&#39;
     * @memberof RevenueSummaryApiv1GroupsGroupIdRevenueSummaryTimeFrameGet
     */
    timeFrame: 'Day' | 'Week' | 'Month' | 'Year'
}

export class ObjectRevenueSummaryApi {
    private api: ObservableRevenueSummaryApi

    public constructor(configuration: Configuration, requestFactory?: RevenueSummaryApiRequestFactory, responseProcessor?: RevenueSummaryApiResponseProcessor) {
        this.api = new ObservableRevenueSummaryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets recent Robux revenue summary for a group.
     * @param param the request object
     */
    public v1GroupsGroupIdRevenueSummaryTimeFrameGetWithHttpInfo(param: RevenueSummaryApiV1GroupsGroupIdRevenueSummaryTimeFrameGetRequest, options?: Configuration): Promise<HttpInfo<RobloxEconomyApiRevenueSummaryResponse>> {
        return this.api.v1GroupsGroupIdRevenueSummaryTimeFrameGetWithHttpInfo(param.groupId, param.timeFrame,  options).toPromise();
    }

    /**
     * Gets recent Robux revenue summary for a group.
     * @param param the request object
     */
    public v1GroupsGroupIdRevenueSummaryTimeFrameGet(param: RevenueSummaryApiV1GroupsGroupIdRevenueSummaryTimeFrameGetRequest, options?: Configuration): Promise<RobloxEconomyApiRevenueSummaryResponse> {
        return this.api.v1GroupsGroupIdRevenueSummaryTimeFrameGet(param.groupId, param.timeFrame,  options).toPromise();
    }

}

import { ObservableTransactionHistoryApi } from "./ObservableAPI";
import { TransactionHistoryApiRequestFactory, TransactionHistoryApiResponseProcessor} from "../apis/TransactionHistoryApi";

export interface TransactionHistoryApiV1GroupsGroupIdTransactionsGetRequest {
    /**
     * 
     * @type number
     * @memberof TransactionHistoryApiv1GroupsGroupIdTransactionsGet
     */
    groupId: number
    /**
     * 
     * @type &#39;Sale&#39; | &#39;Purchase&#39; | &#39;AffiliateSale&#39; | &#39;DevEx&#39; | &#39;GroupPayout&#39; | &#39;AdImpressionPayout&#39; | &#39;CurrencyPurchase&#39; | &#39;TradeRobux&#39; | &#39;PremiumStipend&#39; | &#39;PendingRobux&#39; | &#39;EngagementPayout&#39; | &#39;GroupEngagementPayout&#39; | &#39;AdSpend&#39; | &#39;Summary&#39; | &#39;IndividualToGroup&#39; | &#39;CSAdjustment&#39;
     * @memberof TransactionHistoryApiv1GroupsGroupIdTransactionsGet
     */
    transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment'
    /**
     * The amount of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof TransactionHistoryApiv1GroupsGroupIdTransactionsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof TransactionHistoryApiv1GroupsGroupIdTransactionsGet
     */
    cursor?: string
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
    public v1GroupsGroupIdTransactionsGetWithHttpInfo(param: TransactionHistoryApiV1GroupsGroupIdTransactionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse>> {
        return this.api.v1GroupsGroupIdTransactionsGetWithHttpInfo(param.groupId, param.transactionType, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Fetches the transaction history for a group.
     * @param param the request object
     */
    public v1GroupsGroupIdTransactionsGet(param: TransactionHistoryApiV1GroupsGroupIdTransactionsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse> {
        return this.api.v1GroupsGroupIdTransactionsGet(param.groupId, param.transactionType, param.limit, param.cursor,  options).toPromise();
    }

}
