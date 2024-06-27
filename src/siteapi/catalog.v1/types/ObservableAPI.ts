import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxAvatarCatalogSearchClientElasticsearchDebugInfo } from '../models/RobloxAvatarCatalogSearchClientElasticsearchDebugInfo';
import { RobloxCatalogApiAssetFavoriteModel } from '../models/RobloxCatalogApiAssetFavoriteModel';
import { RobloxCatalogApiBundleCreatorModel } from '../models/RobloxCatalogApiBundleCreatorModel';
import { RobloxCatalogApiBundleDetailsModel } from '../models/RobloxCatalogApiBundleDetailsModel';
import { RobloxCatalogApiBundleFavoriteModel } from '../models/RobloxCatalogApiBundleFavoriteModel';
import { RobloxCatalogApiBundleItemDetailModel } from '../models/RobloxCatalogApiBundleItemDetailModel';
import { RobloxCatalogApiBundleProductModel } from '../models/RobloxCatalogApiBundleProductModel';
import { RobloxCatalogApiCatalogSearchDetailedResponseItem } from '../models/RobloxCatalogApiCatalogSearchDetailedResponseItem';
import { RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem } from '../models/RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem';
import { RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem } from '../models/RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem';
import { RobloxCatalogApiCatalogSearchResponseItem } from '../models/RobloxCatalogApiCatalogSearchResponseItem';
import { RobloxCatalogApiCatalogSortModel } from '../models/RobloxCatalogApiCatalogSortModel';
import { RobloxCatalogApiCatalogSortsResponseModel } from '../models/RobloxCatalogApiCatalogSortsResponseModel';
import { RobloxCatalogApiCollectibleItemDetail } from '../models/RobloxCatalogApiCollectibleItemDetail';
import { RobloxCatalogApiFavoriteBundlesResponse } from '../models/RobloxCatalogApiFavoriteBundlesResponse';
import { RobloxCatalogApiMultigetItemDetailsRequestItem } from '../models/RobloxCatalogApiMultigetItemDetailsRequestItem';
import { RobloxCatalogApiMultigetItemDetailsRequestModel } from '../models/RobloxCatalogApiMultigetItemDetailsRequestModel';
import { RobloxCatalogApiOwnedBundleModel } from '../models/RobloxCatalogApiOwnedBundleModel';
import { RobloxCatalogApiPremiumPricingModel } from '../models/RobloxCatalogApiPremiumPricingModel';
import { RobloxCatalogApiSaleLocation } from '../models/RobloxCatalogApiSaleLocation';
import { RobloxCatalogApiTopicsTopicModel } from '../models/RobloxCatalogApiTopicsTopicModel';
import { RobloxCatalogApiTopicsTopicRequestModel } from '../models/RobloxCatalogApiTopicsTopicRequestModel';
import { RobloxCatalogApiTopicsTopicResponse } from '../models/RobloxCatalogApiTopicsTopicResponse';
import { RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItem } from '../models/RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1AvatarItem';
import { RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1Error } from '../models/RobloxMarketplacetopicdiscoveryTopicdiscoveryserviceV1Beta1Error';
import { RobloxPagingExclusiveStartKeyCursorSystemNullableSystemInt64 } from '../models/RobloxPagingExclusiveStartKeyCursorSystemNullableSystemInt64';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoRobloxPlatformBundlesCoreIBundleInstance } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoRobloxPlatformBundlesCoreIBundleInstance';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebWebAPIExclusiveStartRequestRobloxPlatformBundlesCoreIBundleInstance } from '../models/RobloxWebWebAPIExclusiveStartRequestRobloxPlatformBundlesCoreIBundleInstance';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem';
import { RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel';

import { BundleApiRequestFactory, BundleApiResponseProcessor} from "../apis/BundleApi";
export class ObservableBundleApi {
    private requestFactory: BundleApiRequestFactory;
    private responseProcessor: BundleApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BundleApiRequestFactory,
        responseProcessor?: BundleApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BundleApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BundleApiResponseProcessor();
    }

    /**
     * Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
     * @param assetId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1AssetsAssetIdBundlesGetWithHttpInfo(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel>> {
        const requestContextPromise = this.requestFactory.v1AssetsAssetIdBundlesGet(assetId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetsAssetIdBundlesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists the bundles a particular asset belongs to. Use the Id of the last bundle in the response to get the next page.
     * @param assetId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1AssetsAssetIdBundlesGet(assetId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel> {
        return this.v1AssetsAssetIdBundlesGetWithHttpInfo(assetId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiBundleDetailsModel>) => apiResponse.data));
    }

    /**
     * Returns details about the given bundleId.
     * @param bundleId 
     */
    public v1BundlesBundleIdDetailsGetWithHttpInfo(bundleId: number, _options?: Configuration): Observable<HttpInfo<RobloxCatalogApiBundleDetailsModel>> {
        const requestContextPromise = this.requestFactory.v1BundlesBundleIdDetailsGet(bundleId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BundlesBundleIdDetailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns details about the given bundleId.
     * @param bundleId 
     */
    public v1BundlesBundleIdDetailsGet(bundleId: number, _options?: Configuration): Observable<RobloxCatalogApiBundleDetailsModel> {
        return this.v1BundlesBundleIdDetailsGetWithHttpInfo(bundleId, _options).pipe(map((apiResponse: HttpInfo<RobloxCatalogApiBundleDetailsModel>) => apiResponse.data));
    }

    /**
     * Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles  - Accepts both public and authenticated users
     * @param bundleId 
     * @param numItems The number of recommended items to return.
     */
    public v1BundlesBundleIdRecommendationsGetWithHttpInfo(bundleId: number, numItems?: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel>> {
        const requestContextPromise = this.requestFactory.v1BundlesBundleIdRecommendationsGet(bundleId, numItems, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BundlesBundleIdRecommendationsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets recommendations for a given bundle, bundleId of 0 returns randomized bundles  - Accepts both public and authenticated users
     * @param bundleId 
     * @param numItems The number of recommended items to return.
     */
    public v1BundlesBundleIdRecommendationsGet(bundleId: number, numItems?: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel> {
        return this.v1BundlesBundleIdRecommendationsGetWithHttpInfo(bundleId, numItems, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiBundleDetailsModel>) => apiResponse.data));
    }

    /**
     * Returns details about the given bundleIds.
     * @param bundleIds 
     */
    public v1BundlesDetailsGetWithHttpInfo(bundleIds: Array<number>, _options?: Configuration): Observable<HttpInfo<Array<RobloxCatalogApiBundleDetailsModel>>> {
        const requestContextPromise = this.requestFactory.v1BundlesDetailsGet(bundleIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BundlesDetailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns details about the given bundleIds.
     * @param bundleIds 
     */
    public v1BundlesDetailsGet(bundleIds: Array<number>, _options?: Configuration): Observable<Array<RobloxCatalogApiBundleDetailsModel>> {
        return this.v1BundlesDetailsGetWithHttpInfo(bundleIds, _options).pipe(map((apiResponse: HttpInfo<Array<RobloxCatalogApiBundleDetailsModel>>) => apiResponse.data));
    }

    /**
     * @param userId 
     * @param bundleType 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdBundlesBundleTypeGetWithHttpInfo(userId: number, bundleType: 1 | 2 | 3 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdBundlesBundleTypeGet(userId, bundleType, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdBundlesBundleTypeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userId 
     * @param bundleType 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdBundlesBundleTypeGet(userId: number, bundleType: 1 | 2 | 3 | 4, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel> {
        return this.v1UsersUserIdBundlesBundleTypeGetWithHttpInfo(userId, bundleType, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel>) => apiResponse.data));
    }

    /**
     * Lists the bundles owned by a given user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by bundle
     */
    public v1UsersUserIdBundlesGetWithHttpInfo(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdBundlesGet(userId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdBundlesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists the bundles owned by a given user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by bundle
     */
    public v1UsersUserIdBundlesGet(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel> {
        return this.v1UsersUserIdBundlesGetWithHttpInfo(userId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxCatalogApiOwnedBundleModel>) => apiResponse.data));
    }

}

import { CatalogApiRequestFactory, CatalogApiResponseProcessor} from "../apis/CatalogApi";
export class ObservableCatalogApi {
    private requestFactory: CatalogApiRequestFactory;
    private responseProcessor: CatalogApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CatalogApiRequestFactory,
        responseProcessor?: CatalogApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CatalogApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CatalogApiResponseProcessor();
    }

    /**
     * Returns list of item details.
     * @param model Roblox.Catalog.Api.MultigetItemDetailsRequestModel
     */
    public v1CatalogItemsDetailsPostWithHttpInfo(model: RobloxCatalogApiMultigetItemDetailsRequestModel, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem>> {
        const requestContextPromise = this.requestFactory.v1CatalogItemsDetailsPost(model, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CatalogItemsDetailsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns list of item details.
     * @param model Roblox.Catalog.Api.MultigetItemDetailsRequestModel
     */
    public v1CatalogItemsDetailsPost(model: RobloxCatalogApiMultigetItemDetailsRequestModel, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem> {
        return this.v1CatalogItemsDetailsPostWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxCatalogApiCatalogSearchDetailedResponseItem>) => apiResponse.data));
    }

}

import { CategoryApiRequestFactory, CategoryApiResponseProcessor} from "../apis/CategoryApi";
export class ObservableCategoryApi {
    private requestFactory: CategoryApiRequestFactory;
    private responseProcessor: CategoryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CategoryApiRequestFactory,
        responseProcessor?: CategoryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CategoryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CategoryApiResponseProcessor();
    }

    /**
     * Lists a mapping for assets to category IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     */
    public v1AssetToCategoryGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: number; }>> {
        const requestContextPromise = this.requestFactory.v1AssetToCategoryGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetToCategoryGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists a mapping for assets to category IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     */
    public v1AssetToCategoryGet(_options?: Configuration): Observable<{ [key: string]: number; }> {
        return this.v1AssetToCategoryGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: number; }>) => apiResponse.data));
    }

    /**
     * Lists a mapping for assets to subcategory IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     */
    public v1AssetToSubcategoryGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: number; }>> {
        const requestContextPromise = this.requestFactory.v1AssetToSubcategoryGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetToSubcategoryGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists a mapping for assets to subcategory IDs to convert from inventory ID to catalog ID. Creates a mapping to link \'Get More\' button in inventory page to the relevant catalog page.
     */
    public v1AssetToSubcategoryGet(_options?: Configuration): Observable<{ [key: string]: number; }> {
        return this.v1AssetToSubcategoryGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: number; }>) => apiResponse.data));
    }

    /**
     * Lists Category Names and their Ids
     */
    public v1CategoriesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: number; }>> {
        const requestContextPromise = this.requestFactory.v1CategoriesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CategoriesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists Category Names and their Ids
     */
    public v1CategoriesGet(_options?: Configuration): Observable<{ [key: string]: number; }> {
        return this.v1CategoriesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: number; }>) => apiResponse.data));
    }

    /**
     * Lists Subcategory Names and their Ids
     */
    public v1SubcategoriesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<{ [key: string]: number; }>> {
        const requestContextPromise = this.requestFactory.v1SubcategoriesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SubcategoriesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists Subcategory Names and their Ids
     */
    public v1SubcategoriesGet(_options?: Configuration): Observable<{ [key: string]: number; }> {
        return this.v1SubcategoriesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<{ [key: string]: number; }>) => apiResponse.data));
    }

}

import { FavoritesApiRequestFactory, FavoritesApiResponseProcessor} from "../apis/FavoritesApi";
export class ObservableFavoritesApi {
    private requestFactory: FavoritesApiRequestFactory;
    private responseProcessor: FavoritesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FavoritesApiRequestFactory,
        responseProcessor?: FavoritesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FavoritesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FavoritesApiResponseProcessor();
    }

    /**
     * Gets the favorite count for the given asset Id.
     * @param assetId 
     */
    public v1FavoritesAssetsAssetIdCountGetWithHttpInfo(assetId: number, _options?: Configuration): Observable<HttpInfo<number>> {
        const requestContextPromise = this.requestFactory.v1FavoritesAssetsAssetIdCountGet(assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesAssetsAssetIdCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the favorite count for the given asset Id.
     * @param assetId 
     */
    public v1FavoritesAssetsAssetIdCountGet(assetId: number, _options?: Configuration): Observable<number> {
        return this.v1FavoritesAssetsAssetIdCountGetWithHttpInfo(assetId, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
    }

    /**
     * Gets the favorite count for the given bundle Id.
     * @param bundleId 
     */
    public v1FavoritesBundlesBundleIdCountGetWithHttpInfo(bundleId: number, _options?: Configuration): Observable<HttpInfo<number>> {
        const requestContextPromise = this.requestFactory.v1FavoritesBundlesBundleIdCountGet(bundleId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesBundlesBundleIdCountGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the favorite count for the given bundle Id.
     * @param bundleId 
     */
    public v1FavoritesBundlesBundleIdCountGet(bundleId: number, _options?: Configuration): Observable<number> {
        return this.v1FavoritesBundlesBundleIdCountGetWithHttpInfo(bundleId, _options).pipe(map((apiResponse: HttpInfo<number>) => apiResponse.data));
    }

    /**
     * Delete a favorite for an asset by the authenticated user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(userId, assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a favorite for an asset by the authenticated user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteDelete(userId: number, assetId: number, _options?: Configuration): Observable<any> {
        return this.v1FavoritesUsersUserIdAssetsAssetIdFavoriteDeleteWithHttpInfo(userId, assetId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets the favorite model for the asset and user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteGetWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Observable<HttpInfo<RobloxCatalogApiAssetFavoriteModel>> {
        const requestContextPromise = this.requestFactory.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(userId, assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the favorite model for the asset and user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoriteGet(userId: number, assetId: number, _options?: Configuration): Observable<RobloxCatalogApiAssetFavoriteModel> {
        return this.v1FavoritesUsersUserIdAssetsAssetIdFavoriteGetWithHttpInfo(userId, assetId, _options).pipe(map((apiResponse: HttpInfo<RobloxCatalogApiAssetFavoriteModel>) => apiResponse.data));
    }

    /**
     * Create a favorite for an asset by the authenticated user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoritePostWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(userId, assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesUsersUserIdAssetsAssetIdFavoritePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a favorite for an asset by the authenticated user.
     * @param userId 
     * @param assetId 
     */
    public v1FavoritesUsersUserIdAssetsAssetIdFavoritePost(userId: number, assetId: number, _options?: Configuration): Observable<any> {
        return this.v1FavoritesUsersUserIdAssetsAssetIdFavoritePostWithHttpInfo(userId, assetId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Delete favorite for the bundle by the authenticated user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteWithHttpInfo(userId: number, bundleId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(userId, bundleId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete favorite for the bundle by the authenticated user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteDelete(userId: number, bundleId: number, _options?: Configuration): Observable<any> {
        return this.v1FavoritesUsersUserIdBundlesBundleIdFavoriteDeleteWithHttpInfo(userId, bundleId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets the favorite model for the bundle and user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteGetWithHttpInfo(userId: number, bundleId: number, _options?: Configuration): Observable<HttpInfo<RobloxCatalogApiBundleFavoriteModel>> {
        const requestContextPromise = this.requestFactory.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(userId, bundleId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the favorite model for the bundle and user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoriteGet(userId: number, bundleId: number, _options?: Configuration): Observable<RobloxCatalogApiBundleFavoriteModel> {
        return this.v1FavoritesUsersUserIdBundlesBundleIdFavoriteGetWithHttpInfo(userId, bundleId, _options).pipe(map((apiResponse: HttpInfo<RobloxCatalogApiBundleFavoriteModel>) => apiResponse.data));
    }

    /**
     * Create a favorite for the bundle by the authenticated user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoritePostWithHttpInfo(userId: number, bundleId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(userId, bundleId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesUsersUserIdBundlesBundleIdFavoritePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a favorite for the bundle by the authenticated user.
     * @param userId 
     * @param bundleId 
     */
    public v1FavoritesUsersUserIdBundlesBundleIdFavoritePost(userId: number, bundleId: number, _options?: Configuration): Observable<any> {
        return this.v1FavoritesUsersUserIdBundlesBundleIdFavoritePostWithHttpInfo(userId, bundleId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Lists the bundles favorited by a given user with the given bundle subtypeId.  After 5/31/2024, only cursor based pagination will be supported.
     * @param userId 
     * @param subtypeId 
     * @param pageNumber 
     * @param itemsPerPage 
     * @param cursor 
     * @param isPrevious 
     */
    public v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetWithHttpInfo(userId: number, subtypeId: number, pageNumber?: number, itemsPerPage?: number, cursor?: string, isPrevious?: boolean, _options?: Configuration): Observable<HttpInfo<RobloxCatalogApiFavoriteBundlesResponse>> {
        const requestContextPromise = this.requestFactory.v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet(userId, subtypeId, pageNumber, itemsPerPage, cursor, isPrevious, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Lists the bundles favorited by a given user with the given bundle subtypeId.  After 5/31/2024, only cursor based pagination will be supported.
     * @param userId 
     * @param subtypeId 
     * @param pageNumber 
     * @param itemsPerPage 
     * @param cursor 
     * @param isPrevious 
     */
    public v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGet(userId: number, subtypeId: number, pageNumber?: number, itemsPerPage?: number, cursor?: string, isPrevious?: boolean, _options?: Configuration): Observable<RobloxCatalogApiFavoriteBundlesResponse> {
        return this.v1FavoritesUsersUserIdFavoritesSubtypeIdBundlesGetWithHttpInfo(userId, subtypeId, pageNumber, itemsPerPage, cursor, isPrevious, _options).pipe(map((apiResponse: HttpInfo<RobloxCatalogApiFavoriteBundlesResponse>) => apiResponse.data));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * Search for avatarCatalog items
     * @param modelCategory 
     * @param modelSubcategory 
     * @param modelSortAggregation 
     * @param modelSortCurrency 
     * @param modelGenres 
     * @param modelSortType 
     * @param modelCreatorType 
     * @param modelPremiumBenefitFilterType 
     * @param modelCreatorTargetId 
     * @param modelCreatorName 
     * @param modelMaxPrice 
     * @param modelMinPrice 
     * @param modelKeyword 
     * @param modelIncludeNotForSale 
     * @param modelTagNames 
     * @param sortOrder The order the results are sorted in.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1SearchItemsDetailsGetWithHttpInfo(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem>> {
        const requestContextPromise = this.requestFactory.v1SearchItemsDetailsGet(modelCategory, modelSubcategory, modelSortAggregation, modelSortCurrency, modelGenres, modelSortType, modelCreatorType, modelPremiumBenefitFilterType, modelCreatorTargetId, modelCreatorName, modelMaxPrice, modelMinPrice, modelKeyword, modelIncludeNotForSale, modelTagNames, sortOrder, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SearchItemsDetailsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for avatarCatalog items
     * @param modelCategory 
     * @param modelSubcategory 
     * @param modelSortAggregation 
     * @param modelSortCurrency 
     * @param modelGenres 
     * @param modelSortType 
     * @param modelCreatorType 
     * @param modelPremiumBenefitFilterType 
     * @param modelCreatorTargetId 
     * @param modelCreatorName 
     * @param modelMaxPrice 
     * @param modelMinPrice 
     * @param modelKeyword 
     * @param modelIncludeNotForSale 
     * @param modelTagNames 
     * @param sortOrder The order the results are sorted in.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1SearchItemsDetailsGet(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30, cursor?: string, _options?: Configuration): Observable<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem> {
        return this.v1SearchItemsDetailsGetWithHttpInfo(modelCategory, modelSubcategory, modelSortAggregation, modelSortCurrency, modelGenres, modelSortType, modelCreatorType, modelPremiumBenefitFilterType, modelCreatorTargetId, modelCreatorName, modelMaxPrice, modelMinPrice, modelKeyword, modelIncludeNotForSale, modelTagNames, sortOrder, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchDetailedResponseItem>) => apiResponse.data));
    }

    /**
     * Search for avatarCatalog item ids
     * @param modelCategory 
     * @param modelSubcategory 
     * @param modelSortAggregation 
     * @param modelSortCurrency 
     * @param modelGenres 
     * @param modelSortType 
     * @param modelCreatorType 
     * @param modelPremiumBenefitFilterType 
     * @param modelCreatorTargetId 
     * @param modelCreatorName 
     * @param modelMaxPrice 
     * @param modelMinPrice 
     * @param modelKeyword 
     * @param modelIncludeNotForSale 
     * @param modelTagNames 
     * @param sortOrder The order the results are sorted in.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1SearchItemsGetWithHttpInfo(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30 | 50 | 60 | 100, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem>> {
        const requestContextPromise = this.requestFactory.v1SearchItemsGet(modelCategory, modelSubcategory, modelSortAggregation, modelSortCurrency, modelGenres, modelSortType, modelCreatorType, modelPremiumBenefitFilterType, modelCreatorTargetId, modelCreatorName, modelMaxPrice, modelMinPrice, modelKeyword, modelIncludeNotForSale, modelTagNames, sortOrder, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1SearchItemsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search for avatarCatalog item ids
     * @param modelCategory 
     * @param modelSubcategory 
     * @param modelSortAggregation 
     * @param modelSortCurrency 
     * @param modelGenres 
     * @param modelSortType 
     * @param modelCreatorType 
     * @param modelPremiumBenefitFilterType 
     * @param modelCreatorTargetId 
     * @param modelCreatorName 
     * @param modelMaxPrice 
     * @param modelMinPrice 
     * @param modelKeyword 
     * @param modelIncludeNotForSale 
     * @param modelTagNames 
     * @param sortOrder The order the results are sorted in.
     * @param limit The amount of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1SearchItemsGet(modelCategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'Featured' | 'Gear' | 'CommunityCreations' | 'Premium' | 'Recommended', modelSubcategory?: 'Accessories' | 'All' | 'AvatarAnimations' | 'BackAccessories' | 'BodyParts' | 'Clothing' | 'Collectibles' | 'FaceAccessories' | 'Faces' | 'Featured' | 'FrontAccessories' | 'Gear' | 'HairAccessories' | 'Hats' | 'Heads' | 'NeckAccessories' | 'Pants' | 'Shirts' | 'ShoulderAccessories' | 'Tshirts' | 'WaistAccessories' | 'Bundles' | 'AnimationBundles' | 'EmoteAnimations' | 'CommunityCreations' | 'Melee' | 'Ranged' | 'Explosive' | 'PowerUp' | 'Navigation' | 'Musical' | 'Social' | 'Building' | 'Transport' | 'Premium' | 'Recommended', modelSortAggregation?: 'Past12Hours' | 'PastDay' | 'Past3Days' | 'PastWeek' | 'PastMonth' | 'AllTime', modelSortCurrency?: 'All' | 'Robux' | 'Tickets' | 'CustomRobux' | 'CustomTickets' | 'Free', modelGenres?: Array<string>, modelSortType?: 'Relevance' | 'Favorited' | 'Sales' | 'Updated' | 'PriceAsc' | 'PriceDesc', modelCreatorType?: 'User' | 'Group', modelPremiumBenefitFilterType?: 'None' | 'PremiumDiscountedOnly' | 'PremiumExclusiveOnly', modelCreatorTargetId?: number, modelCreatorName?: string, modelMaxPrice?: number, modelMinPrice?: number, modelKeyword?: string, modelIncludeNotForSale?: boolean, modelTagNames?: Array<string>, sortOrder?: 'Asc' | 'Desc', limit?: 10 | 28 | 30 | 50 | 60 | 100, cursor?: string, _options?: Configuration): Observable<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem> {
        return this.v1SearchItemsGetWithHttpInfo(modelCategory, modelSubcategory, modelSortAggregation, modelSortCurrency, modelGenres, modelSortType, modelCreatorType, modelPremiumBenefitFilterType, modelCreatorTargetId, modelCreatorName, modelMaxPrice, modelMinPrice, modelKeyword, modelIncludeNotForSale, modelTagNames, sortOrder, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxCatalogApiCatalogSearchPageResponseRobloxCatalogApiCatalogSearchResponseItem>) => apiResponse.data));
    }

}

import { TopicDiscoveryApiRequestFactory, TopicDiscoveryApiResponseProcessor} from "../apis/TopicDiscoveryApi";
export class ObservableTopicDiscoveryApi {
    private requestFactory: TopicDiscoveryApiRequestFactory;
    private responseProcessor: TopicDiscoveryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TopicDiscoveryApiRequestFactory,
        responseProcessor?: TopicDiscoveryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TopicDiscoveryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TopicDiscoveryApiResponseProcessor();
    }

    /**
     * @param model 
     */
    public v1TopicGetTopicsPostWithHttpInfo(model: RobloxCatalogApiTopicsTopicRequestModel, _options?: Configuration): Observable<HttpInfo<RobloxCatalogApiTopicsTopicResponse>> {
        const requestContextPromise = this.requestFactory.v1TopicGetTopicsPost(model, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TopicGetTopicsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param model 
     */
    public v1TopicGetTopicsPost(model: RobloxCatalogApiTopicsTopicRequestModel, _options?: Configuration): Observable<RobloxCatalogApiTopicsTopicResponse> {
        return this.v1TopicGetTopicsPostWithHttpInfo(model, _options).pipe(map((apiResponse: HttpInfo<RobloxCatalogApiTopicsTopicResponse>) => apiResponse.data));
    }

}
