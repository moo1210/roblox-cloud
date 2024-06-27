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
import { ObservableCashOutApi } from './ObservableAPI';

import { CashOutApiRequestFactory, CashOutApiResponseProcessor} from "../apis/CashOutApi";
export class PromiseCashOutApi {
    private api: ObservableCashOutApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CashOutApiRequestFactory,
        responseProcessor?: CashOutApiResponseProcessor
    ) {
        this.api = new ObservableCashOutApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets information regarding whether user can cash out, and any specific reasons why the user would not be able to cashout.
     */
    public v1DeveloperExchangeCashoutAbilityGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsCashOutAbilityResponseModel>> {
        const result = this.api.v1DeveloperExchangeCashoutAbilityGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets information regarding whether user can cash out, and any specific reasons why the user would not be able to cashout.
     */
    public v1DeveloperExchangeCashoutAbilityGet(_options?: Configuration): Promise<RobloxEconomyApiModelsCashOutAbilityResponseModel> {
        const result = this.api.v1DeveloperExchangeCashoutAbilityGet(_options);
        return result.toPromise();
    }

    /**
     */
    public v1DeveloperExchangeHelpGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1DeveloperExchangeHelpGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public v1DeveloperExchangeHelpGet(_options?: Configuration): Promise<any> {
        const result = this.api.v1DeveloperExchangeHelpGet(_options);
        return result.toPromise();
    }

    /**
     * Retrieves information needed to display in the cash out widget or page
     * @param fromDevExPage 
     */
    public v1DeveloperExchangeInfoGetWithHttpInfo(fromDevExPage?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiControllersV1CashoutInfoResponseModel>> {
        const result = this.api.v1DeveloperExchangeInfoGetWithHttpInfo(fromDevExPage, _options);
        return result.toPromise();
    }

    /**
     * Retrieves information needed to display in the cash out widget or page
     * @param fromDevExPage 
     */
    public v1DeveloperExchangeInfoGet(fromDevExPage?: boolean, _options?: Configuration): Promise<RobloxEconomyApiControllersV1CashoutInfoResponseModel> {
        const result = this.api.v1DeveloperExchangeInfoGet(fromDevExPage, _options);
        return result.toPromise();
    }

    /**
     * Submits a request to cash out.
     * @param requestModel 
     */
    public v1DeveloperExchangeSubmitPostWithHttpInfo(requestModel: RobloxEconomyApiModelsSubmitRequestModel, _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsSubmitResponseModel>> {
        const result = this.api.v1DeveloperExchangeSubmitPostWithHttpInfo(requestModel, _options);
        return result.toPromise();
    }

    /**
     * Submits a request to cash out.
     * @param requestModel 
     */
    public v1DeveloperExchangeSubmitPost(requestModel: RobloxEconomyApiModelsSubmitRequestModel, _options?: Configuration): Promise<RobloxEconomyApiModelsSubmitResponseModel> {
        const result = this.api.v1DeveloperExchangeSubmitPost(requestModel, _options);
        return result.toPromise();
    }


}



import { ObservableCurrencyApi } from './ObservableAPI';

import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";
export class PromiseCurrencyApi {
    private api: ObservableCurrencyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CurrencyApiRequestFactory,
        responseProcessor?: CurrencyApiResponseProcessor
    ) {
        this.api = new ObservableCurrencyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param groupId 
     */
    public v1GroupsGroupIdAddfundsAllowedGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<boolean>> {
        const result = this.api.v1GroupsGroupIdAddfundsAllowedGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * @param groupId 
     */
    public v1GroupsGroupIdAddfundsAllowedGet(groupId: number, _options?: Configuration): Promise<boolean> {
        const result = this.api.v1GroupsGroupIdAddfundsAllowedGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * @param groupId 
     */
    public v1GroupsGroupIdAddfundsLatestGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsLatestAddFundsResponse>> {
        const result = this.api.v1GroupsGroupIdAddfundsLatestGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * @param groupId 
     */
    public v1GroupsGroupIdAddfundsLatestGet(groupId: number, _options?: Configuration): Promise<RobloxEconomyApiModelsLatestAddFundsResponse> {
        const result = this.api.v1GroupsGroupIdAddfundsLatestGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * @param groupId 
     * @param request 
     */
    public v1GroupsGroupIdAddfundsPostWithHttpInfo(groupId: number, request: RobloxEconomyApiModelsAddFundsRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1GroupsGroupIdAddfundsPostWithHttpInfo(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * @param groupId 
     * @param request 
     */
    public v1GroupsGroupIdAddfundsPost(groupId: number, request: RobloxEconomyApiModelsAddFundsRequest, _options?: Configuration): Promise<void> {
        const result = this.api.v1GroupsGroupIdAddfundsPost(groupId, request, _options);
        return result.toPromise();
    }

    /**
     * Currency can only be retrieved for groups the authenticated user has permission to view group funds for.
     * Gets currency for the specified group.
     * @param groupId The group Id to get the currency for.
     */
    public v1GroupsGroupIdCurrencyGetWithHttpInfo(groupId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesEconomyCurrencyResponse>> {
        const result = this.api.v1GroupsGroupIdCurrencyGetWithHttpInfo(groupId, _options);
        return result.toPromise();
    }

    /**
     * Currency can only be retrieved for groups the authenticated user has permission to view group funds for.
     * Gets currency for the specified group.
     * @param groupId The group Id to get the currency for.
     */
    public v1GroupsGroupIdCurrencyGet(groupId: number, _options?: Configuration): Promise<RobloxWebResponsesEconomyCurrencyResponse> {
        const result = this.api.v1GroupsGroupIdCurrencyGet(groupId, _options);
        return result.toPromise();
    }

    /**
     * Currency can only be retrieved for the authenticated user.
     * Gets currency for the specified user.
     * @param userId The user Id to get the currency for.
     */
    public v1UsersUserIdCurrencyGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebResponsesEconomyCurrencyResponse>> {
        const result = this.api.v1UsersUserIdCurrencyGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Currency can only be retrieved for the authenticated user.
     * Gets currency for the specified user.
     * @param userId The user Id to get the currency for.
     */
    public v1UsersUserIdCurrencyGet(userId: number, _options?: Configuration): Promise<RobloxWebResponsesEconomyCurrencyResponse> {
        const result = this.api.v1UsersUserIdCurrencyGet(userId, _options);
        return result.toPromise();
    }


}



import { ObservableGroupPayoutsApi } from './ObservableAPI';

import { GroupPayoutsApiRequestFactory, GroupPayoutsApiResponseProcessor} from "../apis/GroupPayoutsApi";
export class PromiseGroupPayoutsApi {
    private api: ObservableGroupPayoutsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupPayoutsApiRequestFactory,
        responseProcessor?: GroupPayoutsApiResponseProcessor
    ) {
        this.api = new ObservableGroupPayoutsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the group payout eligibility for a group of users.
     * @param groupId 
     * @param userIds 
     */
    public v1GroupsGroupIdUsersPayoutEligibilityGetWithHttpInfo(groupId: number, userIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel>> {
        const result = this.api.v1GroupsGroupIdUsersPayoutEligibilityGetWithHttpInfo(groupId, userIds, _options);
        return result.toPromise();
    }

    /**
     * Gets the group payout eligibility for a group of users.
     * @param groupId 
     * @param userIds 
     */
    public v1GroupsGroupIdUsersPayoutEligibilityGet(groupId: number, userIds: Array<number>, _options?: Configuration): Promise<RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel> {
        const result = this.api.v1GroupsGroupIdUsersPayoutEligibilityGet(groupId, userIds, _options);
        return result.toPromise();
    }


}



import { ObservableResaleApi } from './ObservableAPI';

import { ResaleApiRequestFactory, ResaleApiResponseProcessor} from "../apis/ResaleApi";
export class PromiseResaleApi {
    private api: ObservableResaleApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ResaleApiRequestFactory,
        responseProcessor?: ResaleApiResponseProcessor
    ) {
        this.api = new ObservableResaleApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is only valid for resellable (limited) items.
     * Gets asset resale data.
     * @param assetId The asset id.
     */
    public v1AssetsAssetIdResaleDataGetWithHttpInfo(assetId: number, _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiResaleDataResponse>> {
        const result = this.api.v1AssetsAssetIdResaleDataGetWithHttpInfo(assetId, _options);
        return result.toPromise();
    }

    /**
     * This endpoint is only valid for resellable (limited) items.
     * Gets asset resale data.
     * @param assetId The asset id.
     */
    public v1AssetsAssetIdResaleDataGet(assetId: number, _options?: Configuration): Promise<RobloxEconomyApiResaleDataResponse> {
        const result = this.api.v1AssetsAssetIdResaleDataGet(assetId, _options);
        return result.toPromise();
    }

    /**
     * Sets copies of an asset owned by the authenticated user for sale
     * @param assetId 
     * @param userAssetId 
     * @param request 
     */
    public v1AssetsAssetIdResellableCopiesUserAssetIdPatchWithHttpInfo(assetId: number, userAssetId: number, request: RobloxEconomyApiUserAssetsPatchRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1AssetsAssetIdResellableCopiesUserAssetIdPatchWithHttpInfo(assetId, userAssetId, request, _options);
        return result.toPromise();
    }

    /**
     * Sets copies of an asset owned by the authenticated user for sale
     * @param assetId 
     * @param userAssetId 
     * @param request 
     */
    public v1AssetsAssetIdResellableCopiesUserAssetIdPatch(assetId: number, userAssetId: number, request: RobloxEconomyApiUserAssetsPatchRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1AssetsAssetIdResellableCopiesUserAssetIdPatch(assetId, userAssetId, request, _options);
        return result.toPromise();
    }

    /**
     * Gets available resale copies of an asset.
     * @param assetId The asset id.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1AssetsAssetIdResellersGetWithHttpInfo(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse>> {
        const result = this.api.v1AssetsAssetIdResellersGetWithHttpInfo(assetId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Gets available resale copies of an asset.
     * @param assetId The asset id.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1AssetsAssetIdResellersGet(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse> {
        const result = this.api.v1AssetsAssetIdResellersGet(assetId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Gets resellable copies of an asset owned by the authenticated user.
     * @param userId The user id.
     * @param assetId The asset id.
     */
    public v1AssetsAssetIdUsersUserIdResellableCopiesGetWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse>> {
        const result = this.api.v1AssetsAssetIdUsersUserIdResellableCopiesGetWithHttpInfo(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Gets resellable copies of an asset owned by the authenticated user.
     * @param userId The user id.
     * @param assetId The asset id.
     */
    public v1AssetsAssetIdUsersUserIdResellableCopiesGet(userId: number, assetId: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse> {
        const result = this.api.v1AssetsAssetIdUsersUserIdResellableCopiesGet(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Gets asset resale related metadata.
     */
    public v1ResaleTaxRateGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxEconomyApiResaleTaxRateResponse>> {
        const result = this.api.v1ResaleTaxRateGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets asset resale related metadata.
     */
    public v1ResaleTaxRateGet(_options?: Configuration): Promise<RobloxEconomyApiResaleTaxRateResponse> {
        const result = this.api.v1ResaleTaxRateGet(_options);
        return result.toPromise();
    }


}



import { ObservableRevenueSummaryApi } from './ObservableAPI';

import { RevenueSummaryApiRequestFactory, RevenueSummaryApiResponseProcessor} from "../apis/RevenueSummaryApi";
export class PromiseRevenueSummaryApi {
    private api: ObservableRevenueSummaryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RevenueSummaryApiRequestFactory,
        responseProcessor?: RevenueSummaryApiResponseProcessor
    ) {
        this.api = new ObservableRevenueSummaryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets recent Robux revenue summary for a group.
     * @param groupId The group id to get Robux summary for.
     * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     */
    public v1GroupsGroupIdRevenueSummaryTimeFrameGetWithHttpInfo(groupId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', _options?: Configuration): Promise<HttpInfo<RobloxEconomyApiRevenueSummaryResponse>> {
        const result = this.api.v1GroupsGroupIdRevenueSummaryTimeFrameGetWithHttpInfo(groupId, timeFrame, _options);
        return result.toPromise();
    }

    /**
     * Gets recent Robux revenue summary for a group.
     * @param groupId The group id to get Robux summary for.
     * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     */
    public v1GroupsGroupIdRevenueSummaryTimeFrameGet(groupId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', _options?: Configuration): Promise<RobloxEconomyApiRevenueSummaryResponse> {
        const result = this.api.v1GroupsGroupIdRevenueSummaryTimeFrameGet(groupId, timeFrame, _options);
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
     */
    public v1GroupsGroupIdTransactionsGetWithHttpInfo(groupId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse>> {
        const result = this.api.v1GroupsGroupIdTransactionsGetWithHttpInfo(groupId, transactionType, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Fetches the transaction history for a group.
     * @param groupId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1GroupsGroupIdTransactionsGet(groupId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse> {
        const result = this.api.v1GroupsGroupIdTransactionsGet(groupId, transactionType, limit, cursor, _options);
        return result.toPromise();
    }


}



