import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxItemConfigurationApiAllowedAssetTypeForReleaseMetadata } from '../models/RobloxItemConfigurationApiAllowedAssetTypeForReleaseMetadata';
import { RobloxItemConfigurationApiAllowedAssetTypeForUploadMetadata } from '../models/RobloxItemConfigurationApiAllowedAssetTypeForUploadMetadata';
import { RobloxItemConfigurationApiAllowedPremiumPricingMetadata } from '../models/RobloxItemConfigurationApiAllowedPremiumPricingMetadata';
import { RobloxItemConfigurationApiAllowedPriceRange } from '../models/RobloxItemConfigurationApiAllowedPriceRange';
import { RobloxItemConfigurationApiAssetCreationsDetailsRequest } from '../models/RobloxItemConfigurationApiAssetCreationsDetailsRequest';
import { RobloxItemConfigurationApiAssetCreationsDetailsResponse } from '../models/RobloxItemConfigurationApiAssetCreationsDetailsResponse';
import { RobloxItemConfigurationApiAssetCreationsResponse } from '../models/RobloxItemConfigurationApiAssetCreationsResponse';
import { RobloxItemConfigurationApiBundleItemResponse } from '../models/RobloxItemConfigurationApiBundleItemResponse';
import { RobloxItemConfigurationApiCollectibleCommissionRatesResponse } from '../models/RobloxItemConfigurationApiCollectibleCommissionRatesResponse';
import { RobloxItemConfigurationApiCommissionRatesModel } from '../models/RobloxItemConfigurationApiCommissionRatesModel';
import { RobloxItemConfigurationApiCommissionRatesResponse } from '../models/RobloxItemConfigurationApiCommissionRatesResponse';
import { RobloxItemConfigurationApiCreateItemTagRequest } from '../models/RobloxItemConfigurationApiCreateItemTagRequest';
import { RobloxItemConfigurationApiItemMetadataResponse } from '../models/RobloxItemConfigurationApiItemMetadataResponse';
import { RobloxItemConfigurationApiItemTagDetails } from '../models/RobloxItemConfigurationApiItemTagDetails';
import { RobloxItemConfigurationApiItemTagsMetadataResponse } from '../models/RobloxItemConfigurationApiItemTagsMetadataResponse';
import { RobloxItemConfigurationApiItemTypeDetails } from '../models/RobloxItemConfigurationApiItemTypeDetails';
import { RobloxItemConfigurationApiItemWithTags } from '../models/RobloxItemConfigurationApiItemWithTags';
import { RobloxItemConfigurationApiPriceConfigurationModel } from '../models/RobloxItemConfigurationApiPriceConfigurationModel';
import { RobloxItemConfigurationApiReleaseConfigurationResponseModel } from '../models/RobloxItemConfigurationApiReleaseConfigurationResponseModel';
import { RobloxItemConfigurationApiTagDetails } from '../models/RobloxItemConfigurationApiTagDetails';
import { RobloxPagingStartIndexCursor } from '../models/RobloxPagingStartIndexCursor';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails';
import { RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse';

import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";
export class ObservableItemApi {
    private requestFactory: ItemApiRequestFactory;
    private responseProcessor: ItemApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemApiRequestFactory,
        responseProcessor?: ItemApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemApiResponseProcessor();
    }

    /**
     * Gets the bundles details
     * @param bundleId 
     */
    public v1BundlesBundleIdGetWithHttpInfo(bundleId: number, _options?: Configuration): Observable<HttpInfo<RobloxItemConfigurationApiBundleItemResponse>> {
        const requestContextPromise = this.requestFactory.v1BundlesBundleIdGet(bundleId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BundlesBundleIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the bundles details
     * @param bundleId 
     */
    public v1BundlesBundleIdGet(bundleId: number, _options?: Configuration): Observable<RobloxItemConfigurationApiBundleItemResponse> {
        return this.v1BundlesBundleIdGetWithHttpInfo(bundleId, _options).pipe(map((apiResponse: HttpInfo<RobloxItemConfigurationApiBundleItemResponse>) => apiResponse.data));
    }

    /**
     * Gets the metadata related to bundles
     */
    public v1BundlesMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1BundlesMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BundlesMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the metadata related to bundles
     */
    public v1BundlesMetadataGet(_options?: Configuration): Observable<RobloxItemConfigurationApiItemMetadataResponse> {
        return this.v1BundlesMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>) => apiResponse.data));
    }

    /**
     * Gets the collectibles commission rate
     */
    public v1CollectiblesCommissionRatesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>>> {
        const requestContextPromise = this.requestFactory.v1CollectiblesCommissionRatesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CollectiblesCommissionRatesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the collectibles commission rate
     */
    public v1CollectiblesCommissionRatesGet(_options?: Configuration): Observable<Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>> {
        return this.v1CollectiblesCommissionRatesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>>) => apiResponse.data));
    }

    /**
     * Gets the metadata related to collectibles
     */
    public v1CollectiblesMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1CollectiblesMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CollectiblesMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the metadata related to collectibles
     */
    public v1CollectiblesMetadataGet(_options?: Configuration): Observable<RobloxItemConfigurationApiItemMetadataResponse> {
        return this.v1CollectiblesMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>) => apiResponse.data));
    }

    /**
     * Gets the asset status and other configuration details for the given assetIds list
     * @param request 
     */
    public v1CreationsGetAssetDetailsPostWithHttpInfo(request: RobloxItemConfigurationApiAssetCreationsDetailsRequest, _options?: Configuration): Observable<HttpInfo<Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>>> {
        const requestContextPromise = this.requestFactory.v1CreationsGetAssetDetailsPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreationsGetAssetDetailsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the asset status and other configuration details for the given assetIds list
     * @param request 
     */
    public v1CreationsGetAssetDetailsPost(request: RobloxItemConfigurationApiAssetCreationsDetailsRequest, _options?: Configuration): Observable<Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>> {
        return this.v1CreationsGetAssetDetailsPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>>) => apiResponse.data));
    }

    /**
     * Gets the user created asset information filtered by the given asset type
     * @param assetType 
     * @param isArchived 
     * @param groupId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1CreationsGetAssetsGetWithHttpInfo(assetType: string, isArchived?: boolean, groupId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse>> {
        const requestContextPromise = this.requestFactory.v1CreationsGetAssetsGet(assetType, isArchived, groupId, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1CreationsGetAssetsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the user created asset information filtered by the given asset type
     * @param assetType 
     * @param isArchived 
     * @param groupId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1CreationsGetAssetsGet(assetType: string, isArchived?: boolean, groupId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse> {
        return this.v1CreationsGetAssetsGetWithHttpInfo(assetType, isArchived, groupId, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse>) => apiResponse.data));
    }

    /**
     * Gets the commission rates related to assetTypes
     */
    public v1GetCommissionRatesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<RobloxItemConfigurationApiCommissionRatesResponse>>> {
        const requestContextPromise = this.requestFactory.v1GetCommissionRatesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GetCommissionRatesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the commission rates related to assetTypes
     */
    public v1GetCommissionRatesGet(_options?: Configuration): Observable<Array<RobloxItemConfigurationApiCommissionRatesResponse>> {
        return this.v1GetCommissionRatesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<RobloxItemConfigurationApiCommissionRatesResponse>>) => apiResponse.data));
    }

    /**
     * Gets the metadata related to assets and bundles
     */
    public v1MetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1MetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1MetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the metadata related to assets and bundles
     */
    public v1MetadataGet(_options?: Configuration): Observable<RobloxItemConfigurationApiItemMetadataResponse> {
        return this.v1MetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>) => apiResponse.data));
    }

}

import { ItemTagsApiRequestFactory, ItemTagsApiResponseProcessor} from "../apis/ItemTagsApi";
export class ObservableItemTagsApi {
    private requestFactory: ItemTagsApiRequestFactory;
    private responseProcessor: ItemTagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemTagsApiRequestFactory,
        responseProcessor?: ItemTagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemTagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemTagsApiResponseProcessor();
    }

    /**
     * Gets all related item tags for each item id listed
     * @param itemIds 
     */
    public v1ItemTagsGetWithHttpInfo(itemIds: Array<string>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags>> {
        const requestContextPromise = this.requestFactory.v1ItemTagsGet(itemIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ItemTagsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets all related item tags for each item id listed
     * @param itemIds 
     */
    public v1ItemTagsGet(itemIds: Array<string>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags> {
        return this.v1ItemTagsGetWithHttpInfo(itemIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags>) => apiResponse.data));
    }

    /**
     * Deletes an item tag from an item
     * @param itemTagId 
     */
    public v1ItemTagsItemTagIdDeleteWithHttpInfo(itemTagId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1ItemTagsItemTagIdDelete(itemTagId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ItemTagsItemTagIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an item tag from an item
     * @param itemTagId 
     */
    public v1ItemTagsItemTagIdDelete(itemTagId: string, _options?: Configuration): Observable<any> {
        return this.v1ItemTagsItemTagIdDeleteWithHttpInfo(itemTagId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets the metadata related to item tags
     */
    public v1ItemTagsMetadataGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxItemConfigurationApiItemTagsMetadataResponse>> {
        const requestContextPromise = this.requestFactory.v1ItemTagsMetadataGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ItemTagsMetadataGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the metadata related to item tags
     */
    public v1ItemTagsMetadataGet(_options?: Configuration): Observable<RobloxItemConfigurationApiItemTagsMetadataResponse> {
        return this.v1ItemTagsMetadataGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxItemConfigurationApiItemTagsMetadataResponse>) => apiResponse.data));
    }

    /**
     * Creates a new item tag
     * @param request 
     */
    public v1ItemTagsPostWithHttpInfo(request: RobloxItemConfigurationApiCreateItemTagRequest, _options?: Configuration): Observable<HttpInfo<RobloxItemConfigurationApiItemTagDetails>> {
        const requestContextPromise = this.requestFactory.v1ItemTagsPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1ItemTagsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new item tag
     * @param request 
     */
    public v1ItemTagsPost(request: RobloxItemConfigurationApiCreateItemTagRequest, _options?: Configuration): Observable<RobloxItemConfigurationApiItemTagDetails> {
        return this.v1ItemTagsPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<RobloxItemConfigurationApiItemTagDetails>) => apiResponse.data));
    }

}

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class ObservableTagsApi {
    private requestFactory: TagsApiRequestFactory;
    private responseProcessor: TagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsApiResponseProcessor();
    }

    /**
     * Gets the information for a list of tag Ids
     * @param tagIds 
     */
    public v1TagsGetWithHttpInfo(tagIds: Array<string>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails>> {
        const requestContextPromise = this.requestFactory.v1TagsGet(tagIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TagsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the information for a list of tag Ids
     * @param tagIds 
     */
    public v1TagsGet(tagIds: Array<string>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails> {
        return this.v1TagsGetWithHttpInfo(tagIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails>) => apiResponse.data));
    }

    /**
     * Searches for up to numberOfResults tags based on the given prefix
     * @param prefix 
     * @param numberOfResults Must be 1, 5, 10, or 25
     */
    public v1TagsPrefixSearchGetWithHttpInfo(prefix: string, numberOfResults: number, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails>> {
        const requestContextPromise = this.requestFactory.v1TagsPrefixSearchGet(prefix, numberOfResults, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1TagsPrefixSearchGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for up to numberOfResults tags based on the given prefix
     * @param prefix 
     * @param numberOfResults Must be 1, 5, 10, or 25
     */
    public v1TagsPrefixSearchGet(prefix: string, numberOfResults: number, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails> {
        return this.v1TagsPrefixSearchGetWithHttpInfo(prefix, numberOfResults, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails>) => apiResponse.data));
    }

}
