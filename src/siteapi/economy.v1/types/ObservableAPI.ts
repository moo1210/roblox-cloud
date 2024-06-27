import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
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

import { CashOutApiRequestFactory, CashOutApiResponseProcessor} from "../apis/CashOutApi";
export class ObservableCashOutApi {
    private requestFactory: CashOutApiRequestFactory;
    private responseProcessor: CashOutApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CashOutApiRequestFactory,
        responseProcessor?: CashOutApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CashOutApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CashOutApiResponseProcessor();
    }

    /**
     * Gets information regarding whether user can cash out, and any specific reasons why the user would not be able to cashout.
     */
    public v1DeveloperExchangeCashoutAbilityGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxEconomyApiModelsCashOutAbilityResponseModel>> {
        const requestContextPromise = this.requestFactory.v1DeveloperExchangeCashoutAbilityGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeveloperExchangeCashoutAbilityGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets information regarding whether user can cash out, and any specific reasons why the user would not be able to cashout.
     */
    public v1DeveloperExchangeCashoutAbilityGet(_options?: Configuration): Observable<RobloxEconomyApiModelsCashOutAbilityResponseModel> {
        return this.v1DeveloperExchangeCashoutAbilityGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiModelsCashOutAbilityResponseModel>) => apiResponse.data));
    }

    /**
     */
    public v1DeveloperExchangeHelpGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1DeveloperExchangeHelpGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeveloperExchangeHelpGetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public v1DeveloperExchangeHelpGet(_options?: Configuration): Observable<any> {
        return this.v1DeveloperExchangeHelpGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Retrieves information needed to display in the cash out widget or page
     * @param fromDevExPage 
     */
    public v1DeveloperExchangeInfoGetWithHttpInfo(fromDevExPage?: boolean, _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiControllersV1CashoutInfoResponseModel>> {
        const requestContextPromise = this.requestFactory.v1DeveloperExchangeInfoGet(fromDevExPage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeveloperExchangeInfoGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves information needed to display in the cash out widget or page
     * @param fromDevExPage 
     */
    public v1DeveloperExchangeInfoGet(fromDevExPage?: boolean, _options?: Configuration): Observable<RobloxEconomyApiControllersV1CashoutInfoResponseModel> {
        return this.v1DeveloperExchangeInfoGetWithHttpInfo(fromDevExPage, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiControllersV1CashoutInfoResponseModel>) => apiResponse.data));
    }

    /**
     * Submits a request to cash out.
     * @param requestModel 
     */
    public v1DeveloperExchangeSubmitPostWithHttpInfo(requestModel: RobloxEconomyApiModelsSubmitRequestModel, _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiModelsSubmitResponseModel>> {
        const requestContextPromise = this.requestFactory.v1DeveloperExchangeSubmitPost(requestModel, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DeveloperExchangeSubmitPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Submits a request to cash out.
     * @param requestModel 
     */
    public v1DeveloperExchangeSubmitPost(requestModel: RobloxEconomyApiModelsSubmitRequestModel, _options?: Configuration): Observable<RobloxEconomyApiModelsSubmitResponseModel> {
        return this.v1DeveloperExchangeSubmitPostWithHttpInfo(requestModel, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiModelsSubmitResponseModel>) => apiResponse.data));
    }

}

import { CurrencyApiRequestFactory, CurrencyApiResponseProcessor} from "../apis/CurrencyApi";
export class ObservableCurrencyApi {
    private requestFactory: CurrencyApiRequestFactory;
    private responseProcessor: CurrencyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CurrencyApiRequestFactory,
        responseProcessor?: CurrencyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CurrencyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CurrencyApiResponseProcessor();
    }

    /**
     * @param groupId 
     */
    public v1GroupsGroupIdAddfundsAllowedGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<boolean>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdAddfundsAllowedGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdAddfundsAllowedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param groupId 
     */
    public v1GroupsGroupIdAddfundsAllowedGet(groupId: number, _options?: Configuration): Observable<boolean> {
        return this.v1GroupsGroupIdAddfundsAllowedGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<boolean>) => apiResponse.data));
    }

    /**
     * @param groupId 
     */
    public v1GroupsGroupIdAddfundsLatestGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiModelsLatestAddFundsResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdAddfundsLatestGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdAddfundsLatestGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param groupId 
     */
    public v1GroupsGroupIdAddfundsLatestGet(groupId: number, _options?: Configuration): Observable<RobloxEconomyApiModelsLatestAddFundsResponse> {
        return this.v1GroupsGroupIdAddfundsLatestGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiModelsLatestAddFundsResponse>) => apiResponse.data));
    }

    /**
     * @param groupId 
     * @param request 
     */
    public v1GroupsGroupIdAddfundsPostWithHttpInfo(groupId: number, request: RobloxEconomyApiModelsAddFundsRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdAddfundsPost(groupId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdAddfundsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param groupId 
     * @param request 
     */
    public v1GroupsGroupIdAddfundsPost(groupId: number, request: RobloxEconomyApiModelsAddFundsRequest, _options?: Configuration): Observable<void> {
        return this.v1GroupsGroupIdAddfundsPostWithHttpInfo(groupId, request, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Currency can only be retrieved for groups the authenticated user has permission to view group funds for.
     * Gets currency for the specified group.
     * @param groupId The group Id to get the currency for.
     */
    public v1GroupsGroupIdCurrencyGetWithHttpInfo(groupId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebResponsesEconomyCurrencyResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdCurrencyGet(groupId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdCurrencyGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Currency can only be retrieved for groups the authenticated user has permission to view group funds for.
     * Gets currency for the specified group.
     * @param groupId The group Id to get the currency for.
     */
    public v1GroupsGroupIdCurrencyGet(groupId: number, _options?: Configuration): Observable<RobloxWebResponsesEconomyCurrencyResponse> {
        return this.v1GroupsGroupIdCurrencyGetWithHttpInfo(groupId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebResponsesEconomyCurrencyResponse>) => apiResponse.data));
    }

    /**
     * Currency can only be retrieved for the authenticated user.
     * Gets currency for the specified user.
     * @param userId The user Id to get the currency for.
     */
    public v1UsersUserIdCurrencyGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebResponsesEconomyCurrencyResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdCurrencyGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdCurrencyGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Currency can only be retrieved for the authenticated user.
     * Gets currency for the specified user.
     * @param userId The user Id to get the currency for.
     */
    public v1UsersUserIdCurrencyGet(userId: number, _options?: Configuration): Observable<RobloxWebResponsesEconomyCurrencyResponse> {
        return this.v1UsersUserIdCurrencyGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebResponsesEconomyCurrencyResponse>) => apiResponse.data));
    }

}

import { GroupPayoutsApiRequestFactory, GroupPayoutsApiResponseProcessor} from "../apis/GroupPayoutsApi";
export class ObservableGroupPayoutsApi {
    private requestFactory: GroupPayoutsApiRequestFactory;
    private responseProcessor: GroupPayoutsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupPayoutsApiRequestFactory,
        responseProcessor?: GroupPayoutsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupPayoutsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupPayoutsApiResponseProcessor();
    }

    /**
     * Gets the group payout eligibility for a group of users.
     * @param groupId 
     * @param userIds 
     */
    public v1GroupsGroupIdUsersPayoutEligibilityGetWithHttpInfo(groupId: number, userIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdUsersPayoutEligibilityGet(groupId, userIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdUsersPayoutEligibilityGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the group payout eligibility for a group of users.
     * @param groupId 
     * @param userIds 
     */
    public v1GroupsGroupIdUsersPayoutEligibilityGet(groupId: number, userIds: Array<number>, _options?: Configuration): Observable<RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel> {
        return this.v1GroupsGroupIdUsersPayoutEligibilityGetWithHttpInfo(groupId, userIds, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiModelsUserGroupPayoutEligibilityResponseModel>) => apiResponse.data));
    }

}

import { ResaleApiRequestFactory, ResaleApiResponseProcessor} from "../apis/ResaleApi";
export class ObservableResaleApi {
    private requestFactory: ResaleApiRequestFactory;
    private responseProcessor: ResaleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ResaleApiRequestFactory,
        responseProcessor?: ResaleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ResaleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ResaleApiResponseProcessor();
    }

    /**
     * This endpoint is only valid for resellable (limited) items.
     * Gets asset resale data.
     * @param assetId The asset id.
     */
    public v1AssetsAssetIdResaleDataGetWithHttpInfo(assetId: number, _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiResaleDataResponse>> {
        const requestContextPromise = this.requestFactory.v1AssetsAssetIdResaleDataGet(assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetsAssetIdResaleDataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint is only valid for resellable (limited) items.
     * Gets asset resale data.
     * @param assetId The asset id.
     */
    public v1AssetsAssetIdResaleDataGet(assetId: number, _options?: Configuration): Observable<RobloxEconomyApiResaleDataResponse> {
        return this.v1AssetsAssetIdResaleDataGetWithHttpInfo(assetId, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiResaleDataResponse>) => apiResponse.data));
    }

    /**
     * Sets copies of an asset owned by the authenticated user for sale
     * @param assetId 
     * @param userAssetId 
     * @param request 
     */
    public v1AssetsAssetIdResellableCopiesUserAssetIdPatchWithHttpInfo(assetId: number, userAssetId: number, request: RobloxEconomyApiUserAssetsPatchRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1AssetsAssetIdResellableCopiesUserAssetIdPatch(assetId, userAssetId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetsAssetIdResellableCopiesUserAssetIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets copies of an asset owned by the authenticated user for sale
     * @param assetId 
     * @param userAssetId 
     * @param request 
     */
    public v1AssetsAssetIdResellableCopiesUserAssetIdPatch(assetId: number, userAssetId: number, request: RobloxEconomyApiUserAssetsPatchRequest, _options?: Configuration): Observable<any> {
        return this.v1AssetsAssetIdResellableCopiesUserAssetIdPatchWithHttpInfo(assetId, userAssetId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets available resale copies of an asset.
     * @param assetId The asset id.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1AssetsAssetIdResellersGetWithHttpInfo(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse>> {
        const requestContextPromise = this.requestFactory.v1AssetsAssetIdResellersGet(assetId, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetsAssetIdResellersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets available resale copies of an asset.
     * @param assetId The asset id.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1AssetsAssetIdResellersGet(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse> {
        return this.v1AssetsAssetIdResellersGetWithHttpInfo(assetId, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiResaleRecordResponse>) => apiResponse.data));
    }

    /**
     * Gets resellable copies of an asset owned by the authenticated user.
     * @param userId The user id.
     * @param assetId The asset id.
     */
    public v1AssetsAssetIdUsersUserIdResellableCopiesGetWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse>> {
        const requestContextPromise = this.requestFactory.v1AssetsAssetIdUsersUserIdResellableCopiesGet(userId, assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetsAssetIdUsersUserIdResellableCopiesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets resellable copies of an asset owned by the authenticated user.
     * @param userId The user id.
     * @param assetId The asset id.
     */
    public v1AssetsAssetIdUsersUserIdResellableCopiesGet(userId: number, assetId: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse> {
        return this.v1AssetsAssetIdUsersUserIdResellableCopiesGetWithHttpInfo(userId, assetId, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxEconomyApiResaleRecordResponse>) => apiResponse.data));
    }

    /**
     * Gets asset resale related metadata.
     */
    public v1ResaleTaxRateGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxEconomyApiResaleTaxRateResponse>> {
        const requestContextPromise = this.requestFactory.v1ResaleTaxRateGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ResaleTaxRateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets asset resale related metadata.
     */
    public v1ResaleTaxRateGet(_options?: Configuration): Observable<RobloxEconomyApiResaleTaxRateResponse> {
        return this.v1ResaleTaxRateGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiResaleTaxRateResponse>) => apiResponse.data));
    }

}

import { RevenueSummaryApiRequestFactory, RevenueSummaryApiResponseProcessor} from "../apis/RevenueSummaryApi";
export class ObservableRevenueSummaryApi {
    private requestFactory: RevenueSummaryApiRequestFactory;
    private responseProcessor: RevenueSummaryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RevenueSummaryApiRequestFactory,
        responseProcessor?: RevenueSummaryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RevenueSummaryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RevenueSummaryApiResponseProcessor();
    }

    /**
     * Gets recent Robux revenue summary for a group.
     * @param groupId The group id to get Robux summary for.
     * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     */
    public v1GroupsGroupIdRevenueSummaryTimeFrameGetWithHttpInfo(groupId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', _options?: Configuration): Observable<HttpInfo<RobloxEconomyApiRevenueSummaryResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdRevenueSummaryTimeFrameGet(groupId, timeFrame, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdRevenueSummaryTimeFrameGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets recent Robux revenue summary for a group.
     * @param groupId The group id to get Robux summary for.
     * @param timeFrame The {Roblox.Economy.Api.RevenueSummaryTimeFrame} to get for.
     */
    public v1GroupsGroupIdRevenueSummaryTimeFrameGet(groupId: number, timeFrame: 'Day' | 'Week' | 'Month' | 'Year', _options?: Configuration): Observable<RobloxEconomyApiRevenueSummaryResponse> {
        return this.v1GroupsGroupIdRevenueSummaryTimeFrameGetWithHttpInfo(groupId, timeFrame, _options).pipe(map((apiResponse: HttpInfo<RobloxEconomyApiRevenueSummaryResponse>) => apiResponse.data));
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
     */
    public v1GroupsGroupIdTransactionsGetWithHttpInfo(groupId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdTransactionsGet(groupId, transactionType, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdTransactionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetches the transaction history for a group.
     * @param groupId 
     * @param transactionType 
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1GroupsGroupIdTransactionsGet(groupId: number, transactionType: 'Sale' | 'Purchase' | 'AffiliateSale' | 'DevEx' | 'GroupPayout' | 'AdImpressionPayout' | 'CurrencyPurchase' | 'TradeRobux' | 'PremiumStipend' | 'PendingRobux' | 'EngagementPayout' | 'GroupEngagementPayout' | 'AdSpend' | 'Summary' | 'IndividualToGroup' | 'CSAdjustment', limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse> {
        return this.v1GroupsGroupIdTransactionsGetWithHttpInfo(groupId, transactionType, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxEconomyApiModelsTransactionResponse>) => apiResponse.data));
    }

}
