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

import { ObservableItemApi } from "./ObservableAPI";
import { ItemApiRequestFactory, ItemApiResponseProcessor} from "../apis/ItemApi";

export interface ItemApiV1BundlesBundleIdGetRequest {
    /**
     * 
     * @type number
     * @memberof ItemApiv1BundlesBundleIdGet
     */
    bundleId: number
}

export interface ItemApiV1BundlesMetadataGetRequest {
}

export interface ItemApiV1CollectiblesCommissionRatesGetRequest {
}

export interface ItemApiV1CollectiblesMetadataGetRequest {
}

export interface ItemApiV1CreationsGetAssetDetailsPostRequest {
    /**
     * 
     * @type RobloxItemConfigurationApiAssetCreationsDetailsRequest
     * @memberof ItemApiv1CreationsGetAssetDetailsPost
     */
    request: RobloxItemConfigurationApiAssetCreationsDetailsRequest
}

export interface ItemApiV1CreationsGetAssetsGetRequest {
    /**
     * 
     * @type string
     * @memberof ItemApiv1CreationsGetAssetsGet
     */
    assetType: string
    /**
     * 
     * @type boolean
     * @memberof ItemApiv1CreationsGetAssetsGet
     */
    isArchived?: boolean
    /**
     * 
     * @type number
     * @memberof ItemApiv1CreationsGetAssetsGet
     */
    groupId?: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof ItemApiv1CreationsGetAssetsGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof ItemApiv1CreationsGetAssetsGet
     */
    cursor?: string
}

export interface ItemApiV1GetCommissionRatesGetRequest {
}

export interface ItemApiV1MetadataGetRequest {
}

export class ObjectItemApi {
    private api: ObservableItemApi

    public constructor(configuration: Configuration, requestFactory?: ItemApiRequestFactory, responseProcessor?: ItemApiResponseProcessor) {
        this.api = new ObservableItemApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the bundles details
     * @param param the request object
     */
    public v1BundlesBundleIdGetWithHttpInfo(param: ItemApiV1BundlesBundleIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiBundleItemResponse>> {
        return this.api.v1BundlesBundleIdGetWithHttpInfo(param.bundleId,  options).toPromise();
    }

    /**
     * Gets the bundles details
     * @param param the request object
     */
    public v1BundlesBundleIdGet(param: ItemApiV1BundlesBundleIdGetRequest, options?: Configuration): Promise<RobloxItemConfigurationApiBundleItemResponse> {
        return this.api.v1BundlesBundleIdGet(param.bundleId,  options).toPromise();
    }

    /**
     * Gets the metadata related to bundles
     * @param param the request object
     */
    public v1BundlesMetadataGetWithHttpInfo(param: ItemApiV1BundlesMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        return this.api.v1BundlesMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the metadata related to bundles
     * @param param the request object
     */
    public v1BundlesMetadataGet(param: ItemApiV1BundlesMetadataGetRequest = {}, options?: Configuration): Promise<RobloxItemConfigurationApiItemMetadataResponse> {
        return this.api.v1BundlesMetadataGet( options).toPromise();
    }

    /**
     * Gets the collectibles commission rate
     * @param param the request object
     */
    public v1CollectiblesCommissionRatesGetWithHttpInfo(param: ItemApiV1CollectiblesCommissionRatesGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>>> {
        return this.api.v1CollectiblesCommissionRatesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the collectibles commission rate
     * @param param the request object
     */
    public v1CollectiblesCommissionRatesGet(param: ItemApiV1CollectiblesCommissionRatesGetRequest = {}, options?: Configuration): Promise<Array<RobloxItemConfigurationApiCollectibleCommissionRatesResponse>> {
        return this.api.v1CollectiblesCommissionRatesGet( options).toPromise();
    }

    /**
     * Gets the metadata related to collectibles
     * @param param the request object
     */
    public v1CollectiblesMetadataGetWithHttpInfo(param: ItemApiV1CollectiblesMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        return this.api.v1CollectiblesMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the metadata related to collectibles
     * @param param the request object
     */
    public v1CollectiblesMetadataGet(param: ItemApiV1CollectiblesMetadataGetRequest = {}, options?: Configuration): Promise<RobloxItemConfigurationApiItemMetadataResponse> {
        return this.api.v1CollectiblesMetadataGet( options).toPromise();
    }

    /**
     * Gets the asset status and other configuration details for the given assetIds list
     * @param param the request object
     */
    public v1CreationsGetAssetDetailsPostWithHttpInfo(param: ItemApiV1CreationsGetAssetDetailsPostRequest, options?: Configuration): Promise<HttpInfo<Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>>> {
        return this.api.v1CreationsGetAssetDetailsPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Gets the asset status and other configuration details for the given assetIds list
     * @param param the request object
     */
    public v1CreationsGetAssetDetailsPost(param: ItemApiV1CreationsGetAssetDetailsPostRequest, options?: Configuration): Promise<Array<RobloxItemConfigurationApiAssetCreationsDetailsResponse>> {
        return this.api.v1CreationsGetAssetDetailsPost(param.request,  options).toPromise();
    }

    /**
     * Gets the user created asset information filtered by the given asset type
     * @param param the request object
     */
    public v1CreationsGetAssetsGetWithHttpInfo(param: ItemApiV1CreationsGetAssetsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse>> {
        return this.api.v1CreationsGetAssetsGetWithHttpInfo(param.assetType, param.isArchived, param.groupId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Gets the user created asset information filtered by the given asset type
     * @param param the request object
     */
    public v1CreationsGetAssetsGet(param: ItemApiV1CreationsGetAssetsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxItemConfigurationApiAssetCreationsResponse> {
        return this.api.v1CreationsGetAssetsGet(param.assetType, param.isArchived, param.groupId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Gets the commission rates related to assetTypes
     * @param param the request object
     */
    public v1GetCommissionRatesGetWithHttpInfo(param: ItemApiV1GetCommissionRatesGetRequest = {}, options?: Configuration): Promise<HttpInfo<Array<RobloxItemConfigurationApiCommissionRatesResponse>>> {
        return this.api.v1GetCommissionRatesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the commission rates related to assetTypes
     * @param param the request object
     */
    public v1GetCommissionRatesGet(param: ItemApiV1GetCommissionRatesGetRequest = {}, options?: Configuration): Promise<Array<RobloxItemConfigurationApiCommissionRatesResponse>> {
        return this.api.v1GetCommissionRatesGet( options).toPromise();
    }

    /**
     * Gets the metadata related to assets and bundles
     * @param param the request object
     */
    public v1MetadataGetWithHttpInfo(param: ItemApiV1MetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemMetadataResponse>> {
        return this.api.v1MetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the metadata related to assets and bundles
     * @param param the request object
     */
    public v1MetadataGet(param: ItemApiV1MetadataGetRequest = {}, options?: Configuration): Promise<RobloxItemConfigurationApiItemMetadataResponse> {
        return this.api.v1MetadataGet( options).toPromise();
    }

}

import { ObservableItemTagsApi } from "./ObservableAPI";
import { ItemTagsApiRequestFactory, ItemTagsApiResponseProcessor} from "../apis/ItemTagsApi";

export interface ItemTagsApiV1ItemTagsGetRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof ItemTagsApiv1ItemTagsGet
     */
    itemIds: Array<string>
}

export interface ItemTagsApiV1ItemTagsItemTagIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ItemTagsApiv1ItemTagsItemTagIdDelete
     */
    itemTagId: string
}

export interface ItemTagsApiV1ItemTagsMetadataGetRequest {
}

export interface ItemTagsApiV1ItemTagsPostRequest {
    /**
     * 
     * @type RobloxItemConfigurationApiCreateItemTagRequest
     * @memberof ItemTagsApiv1ItemTagsPost
     */
    request: RobloxItemConfigurationApiCreateItemTagRequest
}

export class ObjectItemTagsApi {
    private api: ObservableItemTagsApi

    public constructor(configuration: Configuration, requestFactory?: ItemTagsApiRequestFactory, responseProcessor?: ItemTagsApiResponseProcessor) {
        this.api = new ObservableItemTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets all related item tags for each item id listed
     * @param param the request object
     */
    public v1ItemTagsGetWithHttpInfo(param: ItemTagsApiV1ItemTagsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags>> {
        return this.api.v1ItemTagsGetWithHttpInfo(param.itemIds,  options).toPromise();
    }

    /**
     * Gets all related item tags for each item id listed
     * @param param the request object
     */
    public v1ItemTagsGet(param: ItemTagsApiV1ItemTagsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiItemWithTags> {
        return this.api.v1ItemTagsGet(param.itemIds,  options).toPromise();
    }

    /**
     * Deletes an item tag from an item
     * @param param the request object
     */
    public v1ItemTagsItemTagIdDeleteWithHttpInfo(param: ItemTagsApiV1ItemTagsItemTagIdDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1ItemTagsItemTagIdDeleteWithHttpInfo(param.itemTagId,  options).toPromise();
    }

    /**
     * Deletes an item tag from an item
     * @param param the request object
     */
    public v1ItemTagsItemTagIdDelete(param: ItemTagsApiV1ItemTagsItemTagIdDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1ItemTagsItemTagIdDelete(param.itemTagId,  options).toPromise();
    }

    /**
     * Gets the metadata related to item tags
     * @param param the request object
     */
    public v1ItemTagsMetadataGetWithHttpInfo(param: ItemTagsApiV1ItemTagsMetadataGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemTagsMetadataResponse>> {
        return this.api.v1ItemTagsMetadataGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the metadata related to item tags
     * @param param the request object
     */
    public v1ItemTagsMetadataGet(param: ItemTagsApiV1ItemTagsMetadataGetRequest = {}, options?: Configuration): Promise<RobloxItemConfigurationApiItemTagsMetadataResponse> {
        return this.api.v1ItemTagsMetadataGet( options).toPromise();
    }

    /**
     * Creates a new item tag
     * @param param the request object
     */
    public v1ItemTagsPostWithHttpInfo(param: ItemTagsApiV1ItemTagsPostRequest, options?: Configuration): Promise<HttpInfo<RobloxItemConfigurationApiItemTagDetails>> {
        return this.api.v1ItemTagsPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Creates a new item tag
     * @param param the request object
     */
    public v1ItemTagsPost(param: ItemTagsApiV1ItemTagsPostRequest, options?: Configuration): Promise<RobloxItemConfigurationApiItemTagDetails> {
        return this.api.v1ItemTagsPost(param.request,  options).toPromise();
    }

}

import { ObservableTagsApi } from "./ObservableAPI";
import { TagsApiRequestFactory, TagsApiResponseProcessor} from "../apis/TagsApi";

export interface TagsApiV1TagsGetRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof TagsApiv1TagsGet
     */
    tagIds: Array<string>
}

export interface TagsApiV1TagsPrefixSearchGetRequest {
    /**
     * 
     * @type string
     * @memberof TagsApiv1TagsPrefixSearchGet
     */
    prefix: string
    /**
     * Must be 1, 5, 10, or 25
     * @type number
     * @memberof TagsApiv1TagsPrefixSearchGet
     */
    numberOfResults: number
}

export class ObjectTagsApi {
    private api: ObservableTagsApi

    public constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor) {
        this.api = new ObservableTagsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the information for a list of tag Ids
     * @param param the request object
     */
    public v1TagsGetWithHttpInfo(param: TagsApiV1TagsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails>> {
        return this.api.v1TagsGetWithHttpInfo(param.tagIds,  options).toPromise();
    }

    /**
     * Gets the information for a list of tag Ids
     * @param param the request object
     */
    public v1TagsGet(param: TagsApiV1TagsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails> {
        return this.api.v1TagsGet(param.tagIds,  options).toPromise();
    }

    /**
     * Searches for up to numberOfResults tags based on the given prefix
     * @param param the request object
     */
    public v1TagsPrefixSearchGetWithHttpInfo(param: TagsApiV1TagsPrefixSearchGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails>> {
        return this.api.v1TagsPrefixSearchGetWithHttpInfo(param.prefix, param.numberOfResults,  options).toPromise();
    }

    /**
     * Searches for up to numberOfResults tags based on the given prefix
     * @param param the request object
     */
    public v1TagsPrefixSearchGet(param: TagsApiV1TagsPrefixSearchGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxItemConfigurationApiTagDetails> {
        return this.api.v1TagsPrefixSearchGet(param.prefix, param.numberOfResults,  options).toPromise();
    }

}
