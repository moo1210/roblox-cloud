import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

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
import { ObservableItemApi } from './ObservableAPI';

import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";
export class PromiseItemApi {
    private api: ObservableItemApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemApiRequestFactory,
        responseProcessor?: ItemApiResponseProcessor
    ) {
        this.api = new ObservableItemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the bundles details
     * @param bundleId 
     */
    public v1BundlesBundleIdGetWithHttpInfo(bundleId: number, _options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiBundleItemResponse>> {
        const result = this.api.v1BundlesBundleIdGetWithHttpInfo(bundleId, _options);
        return result.toPromise();
    }

    /**
     * Gets the bundles details
     * @param bundleId 
     */
    public v1BundlesBundleIdGet(bundleId: number, _options?: Configuration): Promise<RobloxItemConfigurationApiBundleItemResponse> {
        const result = this.api.v1BundlesBundleIdGet(bundleId, _options);
        return result.toPromise();
    }

    /**
     * Gets the metadata related to bundles
     */
    public v1BundlesMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        const result = this.api.v1BundlesMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the metadata related to bundles
     */
    public v1BundlesMetadataGet(_options?: Configuration): Promise<RobloxItemConfigurationApiItemMetadataResponse> {
        const result = this.api.v1BundlesMetadataGet(_options);
        return result.toPromise();
    }

    /**
     * Gets the collectibles commission rate
     */
    public v1CollectiblesCommissionRatesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>>> {
        const result = this.api.v1CollectiblesCommissionRatesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the collectibles commission rate
     */
    public v1CollectiblesCommissionRatesGet(_options?: Configuration): Promise<Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>> {
        const result = this.api.v1CollectiblesCommissionRatesGet(_options);
        return result.toPromise();
    }

    /**
     * Gets the metadata related to collectibles
     */
    public v1CollectiblesMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        const result = this.api.v1CollectiblesMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the metadata related to collectibles
     */
    public v1CollectiblesMetadataGet(_options?: Configuration): Promise<RobloxItemConfigurationApiItemMetadataResponse> {
        const result = this.api.v1CollectiblesMetadataGet(_options);
        return result.toPromise();
    }

    /**
     * Gets the asset status and other configuration details for the given assetIds list
     * @param request 
     */
    public v1CreationsGetAssetDetailsPostWithHttpInfo(request: RobloxItemConfigurationApiAssetCreationsDetailsRequest, _options?: Configuration): Promise<HttpInfo<Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>>> {
        const result = this.api.v1CreationsGetAssetDetailsPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Gets the asset status and other configuration details for the given assetIds list
     * @param request 
     */
    public v1CreationsGetAssetDetailsPost(request: RobloxItemConfigurationApiAssetCreationsDetailsRequest, _options?: Configuration): Promise<Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>> {
        const result = this.api.v1CreationsGetAssetDetailsPost(request, _options);
        return result.toPromise();
    }

    /**
     * Gets the user created asset information filtered by the given asset type
     * @param assetType 
     * @param isArchived 
     * @param groupId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1CreationsGetAssetsGetWithHttpInfo(assetType: string, isArchived?: boolean, groupId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse>> {
        const result = this.api.v1CreationsGetAssetsGetWithHttpInfo(assetType, isArchived, groupId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Gets the user created asset information filtered by the given asset type
     * @param assetType 
     * @param isArchived 
     * @param groupId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1CreationsGetAssetsGet(assetType: string, isArchived?: boolean, groupId?: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse> {
        const result = this.api.v1CreationsGetAssetsGet(assetType, isArchived, groupId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Gets the commission rates related to assetTypes
     */
    public v1GetCommissionRatesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<RobloxItemConfigurationApiCommissionRatesResponse>>> {
        const result = this.api.v1GetCommissionRatesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the commission rates related to assetTypes
     */
    public v1GetCommissionRatesGet(_options?: Configuration): Promise<Array<RobloxItemConfigurationApiCommissionRatesResponse>> {
        const result = this.api.v1GetCommissionRatesGet(_options);
        return result.toPromise();
    }

    /**
     * Gets the metadata related to assets and bundles
     */
    public v1MetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        const result = this.api.v1MetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the metadata related to assets and bundles
     */
    public v1MetadataGet(_options?: Configuration): Promise<RobloxItemConfigurationApiItemMetadataResponse> {
        const result = this.api.v1MetadataGet(_options);
        return result.toPromise();
    }


}



import { ObservableItemTagsApi } from './ObservableAPI';

import { ItemTagsApiRequestFactory, ItemTagsApiResponseProcessor} from "../apis/ItemTagsApi";
export class PromiseItemTagsApi {
    private api: ObservableItemTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemTagsApiRequestFactory,
        responseProcessor?: ItemTagsApiResponseProcessor
    ) {
        this.api = new ObservableItemTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets all related item tags for each item id listed
     * @param itemIds 
     */
    public v1ItemTagsGetWithHttpInfo(itemIds: Array<string>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags>> {
        const result = this.api.v1ItemTagsGetWithHttpInfo(itemIds, _options);
        return result.toPromise();
    }

    /**
     * Gets all related item tags for each item id listed
     * @param itemIds 
     */
    public v1ItemTagsGet(itemIds: Array<string>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags> {
        const result = this.api.v1ItemTagsGet(itemIds, _options);
        return result.toPromise();
    }

    /**
     * Deletes an item tag from an item
     * @param itemTagId 
     */
    public v1ItemTagsItemTagIdDeleteWithHttpInfo(itemTagId: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1ItemTagsItemTagIdDeleteWithHttpInfo(itemTagId, _options);
        return result.toPromise();
    }

    /**
     * Deletes an item tag from an item
     * @param itemTagId 
     */
    public v1ItemTagsItemTagIdDelete(itemTagId: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1ItemTagsItemTagIdDelete(itemTagId, _options);
        return result.toPromise();
    }

    /**
     * Gets the metadata related to item tags
     */
    public v1ItemTagsMetadataGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemTagsMetadataResponse>> {
        const result = this.api.v1ItemTagsMetadataGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the metadata related to item tags
     */
    public v1ItemTagsMetadataGet(_options?: Configuration): Promise<RobloxItemConfigurationApiItemTagsMetadataResponse> {
        const result = this.api.v1ItemTagsMetadataGet(_options);
        return result.toPromise();
    }

    /**
     * Creates a new item tag
     * @param request 
     */
    public v1ItemTagsPostWithHttpInfo(request: RobloxItemConfigurationApiCreateItemTagRequest, _options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemTagDetails>> {
        const result = this.api.v1ItemTagsPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Creates a new item tag
     * @param request 
     */
    public v1ItemTagsPost(request: RobloxItemConfigurationApiCreateItemTagRequest, _options?: Configuration): Promise<RobloxItemConfigurationApiItemTagDetails> {
        const result = this.api.v1ItemTagsPost(request, _options);
        return result.toPromise();
    }


}



import { ObservableTagsApi } from './ObservableAPI';

import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";
export class PromiseTagsApi {
    private api: ObservableTagsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsApiRequestFactory,
        responseProcessor?: TagsApiResponseProcessor
    ) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the information for a list of tag Ids
     * @param tagIds 
     */
    public v1TagsGetWithHttpInfo(tagIds: Array<string>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails>> {
        const result = this.api.v1TagsGetWithHttpInfo(tagIds, _options);
        return result.toPromise();
    }

    /**
     * Gets the information for a list of tag Ids
     * @param tagIds 
     */
    public v1TagsGet(tagIds: Array<string>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails> {
        const result = this.api.v1TagsGet(tagIds, _options);
        return result.toPromise();
    }

    /**
     * Searches for up to numberOfResults tags based on the given prefix
     * @param prefix 
     * @param numberOfResults Must be 1, 5, 10, or 25
     */
    public v1TagsPrefixSearchGetWithHttpInfo(prefix: string, numberOfResults: number, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails>> {
        const result = this.api.v1TagsPrefixSearchGetWithHttpInfo(prefix, numberOfResults, _options);
        return result.toPromise();
    }

    /**
     * Searches for up to numberOfResults tags based on the given prefix
     * @param prefix 
     * @param numberOfResults Must be 1, 5, 10, or 25
     */
    public v1TagsPrefixSearchGet(prefix: string, numberOfResults: number, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails> {
        const result = this.api.v1TagsPrefixSearchGet(prefix, numberOfResults, _options);
        return result.toPromise();
    }


}



