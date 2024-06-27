import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { ToolBoxServiceAssetTypes } from '../models/ToolBoxServiceAssetTypes';
import { ToolBoxServiceError } from '../models/ToolBoxServiceError';
import { ToolBoxServiceSearchV1Result } from '../models/ToolBoxServiceSearchV1Result';
import { ToolBoxServiceSearchV1ResultItem } from '../models/ToolBoxServiceSearchV1ResultItem';
import { ToolBoxServiceSearchV1ResultQueryFacets } from '../models/ToolBoxServiceSearchV1ResultQueryFacets';
import { ToolBoxServiceSearchV1ResultSpellCheckerResult } from '../models/ToolBoxServiceSearchV1ResultSpellCheckerResult';
import { ToolboxServiceGetHomePageAssetsForSection200Response } from '../models/ToolboxServiceGetHomePageAssetsForSection200Response';

import { ObservableToolBoxServiceApi } from "./ObservableAPI";
import { ToolBoxServiceApiRequestFactory, ToolBoxServiceApiResponseProcessor} from "../apis/ToolBoxServiceApi";

export interface ToolBoxServiceApiToolboxServiceGetGroupCreationsRequest {
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetGroupCreations
     */
    ownerId: number
    /**
     * 
     * @type ToolBoxServiceAssetTypes
     * @memberof ToolBoxServiceApitoolboxServiceGetGroupCreations
     */
    assetType: ToolBoxServiceAssetTypes
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetGroupCreations
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetGroupCreations
     */
    cursor?: string
}

export interface ToolBoxServiceApiToolboxServiceGetHomePageAssetsForSectionRequest {
    /**
     * 
     * @type ToolBoxServiceAssetTypes
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    assetType: ToolBoxServiceAssetTypes
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    section: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    includeOnlyVerifiedCreators?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    cursor?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    pageNumber?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    locale?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    placeId?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    developerSegment?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    assetsInCameraVicinity?: number
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    assetsInCameraViewport?: number
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    minPriceInCents?: number
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    maxPriceInCents?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageAssetsForSection
     */
    qualityFilter?: string
}

export interface ToolBoxServiceApiToolboxServiceGetHomePageConfigurationRequest {
    /**
     * 
     * @type ToolBoxServiceAssetTypes
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageConfiguration
     */
    assetType: ToolBoxServiceAssetTypes
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageConfiguration
     */
    locale?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageConfiguration
     */
    placeId?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetHomePageConfiguration
     */
    developerSegment?: string
}

export interface ToolBoxServiceApiToolboxServiceGetUserCreationsRequest {
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetUserCreations
     */
    userId: number
    /**
     * 
     * @type ToolBoxServiceAssetTypes
     * @memberof ToolBoxServiceApitoolboxServiceGetUserCreations
     */
    assetType: ToolBoxServiceAssetTypes
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceGetUserCreations
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceGetUserCreations
     */
    cursor?: string
    /**
     * 
     * @type boolean
     * @memberof ToolBoxServiceApitoolboxServiceGetUserCreations
     */
    separateModelsAndPackages?: boolean
}

export interface ToolBoxServiceApiToolboxServiceSearchAudiosRequest {
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    cursor?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    pageNumber?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    keyword?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    creatorType?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    creatorTargetId?: number
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    minDuration?: number
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    maxDuration?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    sortDirection?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    artist?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    album?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    uiSortIntent?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    tags?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    includeOnlyVerifiedCreators?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    querySource?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    originalUserQuery?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchAudios
     */
    originalCorrection?: string
}

export interface ToolBoxServiceApiToolboxServiceSearchDecalsRequest {
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    cursor?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    pageNumber?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    keyword?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    creatorType?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    creatorTargetId?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    uiSortIntent?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    tags?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    includeOnlyVerifiedCreators?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    querySource?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    originalUserQuery?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchDecals
     */
    originalCorrection?: string
}

export interface ToolBoxServiceApiToolboxServiceSearchGetAssetsRequest {
    /**
     * 
     * @type ToolBoxServiceAssetTypes
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    assetType: ToolBoxServiceAssetTypes
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    cursor?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    pageNumber?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    keyword?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    assetSubTypes?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    excludeAssetSubTypes?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    creatorType?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    creatorTargetId?: number
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    minDuration?: number
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    maxDuration?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    sortDirection?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    artist?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    album?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    uiSortIntent?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    tags?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    includeOnlyVerifiedCreators?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    searchSource?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    querySource?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    originalUserQuery?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    originalCorrection?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    qualityFilter?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchGetAssets
     */
    robloxPlaceId?: number
}

export interface ToolBoxServiceApiToolboxServiceSearchMeshesRequest {
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    cursor?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    pageNumber?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    keyword?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    creatorType?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    creatorTargetId?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    uiSortIntent?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    tags?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    includeOnlyVerifiedCreators?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    querySource?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    originalUserQuery?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchMeshes
     */
    originalCorrection?: string
}

export interface ToolBoxServiceApiToolboxServiceSearchPluginsRequest {
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    cursor?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    pageNumber?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    keyword?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    creatorType?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    creatorTargetId?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    uiSortIntent?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    tags?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    includeOnlyVerifiedCreators?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    querySource?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    originalUserQuery?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchPlugins
     */
    originalCorrection?: string
}

export interface ToolBoxServiceApiToolboxServiceSearchVideosRequest {
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    sortOrder?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    cursor?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    pageNumber?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    keyword?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    creatorType?: string
    /**
     * 
     * @type number
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    creatorTargetId?: number
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    uiSortIntent?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    tags?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    includeOnlyVerifiedCreators?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    querySource?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    originalUserQuery?: string
    /**
     * 
     * @type string
     * @memberof ToolBoxServiceApitoolboxServiceSearchVideos
     */
    originalCorrection?: string
}

export class ObjectToolBoxServiceApi {
    private api: ObservableToolBoxServiceApi

    public constructor(configuration: Configuration, requestFactory?: ToolBoxServiceApiRequestFactory, responseProcessor?: ToolBoxServiceApiResponseProcessor) {
        this.api = new ObservableToolBoxServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get group creations
     * @param param the request object
     */
    public toolboxServiceGetGroupCreationsWithHttpInfo(param: ToolBoxServiceApiToolboxServiceGetGroupCreationsRequest, options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        return this.api.toolboxServiceGetGroupCreationsWithHttpInfo(param.ownerId, param.assetType, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get group creations
     * @param param the request object
     */
    public toolboxServiceGetGroupCreations(param: ToolBoxServiceApiToolboxServiceGetGroupCreationsRequest, options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        return this.api.toolboxServiceGetGroupCreations(param.ownerId, param.assetType, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get home page assets for section
     * @param param the request object
     */
    public toolboxServiceGetHomePageAssetsForSectionWithHttpInfo(param: ToolBoxServiceApiToolboxServiceGetHomePageAssetsForSectionRequest, options?: Configuration): Promise<HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response>> {
        return this.api.toolboxServiceGetHomePageAssetsForSectionWithHttpInfo(param.assetType, param.section, param.includeOnlyVerifiedCreators, param.sortOrder, param.limit, param.cursor, param.pageNumber, param.locale, param.placeId, param.developerSegment, param.assetsInCameraVicinity, param.assetsInCameraViewport, param.minPriceInCents, param.maxPriceInCents, param.qualityFilter,  options).toPromise();
    }

    /**
     * Get home page assets for section
     * @param param the request object
     */
    public toolboxServiceGetHomePageAssetsForSection(param: ToolBoxServiceApiToolboxServiceGetHomePageAssetsForSectionRequest, options?: Configuration): Promise<ToolboxServiceGetHomePageAssetsForSection200Response> {
        return this.api.toolboxServiceGetHomePageAssetsForSection(param.assetType, param.section, param.includeOnlyVerifiedCreators, param.sortOrder, param.limit, param.cursor, param.pageNumber, param.locale, param.placeId, param.developerSegment, param.assetsInCameraVicinity, param.assetsInCameraViewport, param.minPriceInCents, param.maxPriceInCents, param.qualityFilter,  options).toPromise();
    }

    /**
     * Get home page configuration for asset type
     * @param param the request object
     */
    public toolboxServiceGetHomePageConfigurationWithHttpInfo(param: ToolBoxServiceApiToolboxServiceGetHomePageConfigurationRequest, options?: Configuration): Promise<HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response>> {
        return this.api.toolboxServiceGetHomePageConfigurationWithHttpInfo(param.assetType, param.locale, param.placeId, param.developerSegment,  options).toPromise();
    }

    /**
     * Get home page configuration for asset type
     * @param param the request object
     */
    public toolboxServiceGetHomePageConfiguration(param: ToolBoxServiceApiToolboxServiceGetHomePageConfigurationRequest, options?: Configuration): Promise<ToolboxServiceGetHomePageAssetsForSection200Response> {
        return this.api.toolboxServiceGetHomePageConfiguration(param.assetType, param.locale, param.placeId, param.developerSegment,  options).toPromise();
    }

    /**
     * Get user creations
     * @param param the request object
     */
    public toolboxServiceGetUserCreationsWithHttpInfo(param: ToolBoxServiceApiToolboxServiceGetUserCreationsRequest, options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        return this.api.toolboxServiceGetUserCreationsWithHttpInfo(param.userId, param.assetType, param.limit, param.cursor, param.separateModelsAndPackages,  options).toPromise();
    }

    /**
     * Get user creations
     * @param param the request object
     */
    public toolboxServiceGetUserCreations(param: ToolBoxServiceApiToolboxServiceGetUserCreationsRequest, options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        return this.api.toolboxServiceGetUserCreations(param.userId, param.assetType, param.limit, param.cursor, param.separateModelsAndPackages,  options).toPromise();
    }

    /**
     * Search for audios
     * @param param the request object
     */
    public toolboxServiceSearchAudiosWithHttpInfo(param: ToolBoxServiceApiToolboxServiceSearchAudiosRequest = {}, options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        return this.api.toolboxServiceSearchAudiosWithHttpInfo(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.minDuration, param.maxDuration, param.sortDirection, param.artist, param.album, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for audios
     * @param param the request object
     */
    public toolboxServiceSearchAudios(param: ToolBoxServiceApiToolboxServiceSearchAudiosRequest = {}, options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        return this.api.toolboxServiceSearchAudios(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.minDuration, param.maxDuration, param.sortDirection, param.artist, param.album, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for decals
     * @param param the request object
     */
    public toolboxServiceSearchDecalsWithHttpInfo(param: ToolBoxServiceApiToolboxServiceSearchDecalsRequest = {}, options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        return this.api.toolboxServiceSearchDecalsWithHttpInfo(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for decals
     * @param param the request object
     */
    public toolboxServiceSearchDecals(param: ToolBoxServiceApiToolboxServiceSearchDecalsRequest = {}, options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        return this.api.toolboxServiceSearchDecals(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for assets
     * @param param the request object
     */
    public toolboxServiceSearchGetAssetsWithHttpInfo(param: ToolBoxServiceApiToolboxServiceSearchGetAssetsRequest, options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        return this.api.toolboxServiceSearchGetAssetsWithHttpInfo(param.assetType, param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.assetSubTypes, param.excludeAssetSubTypes, param.creatorType, param.creatorTargetId, param.minDuration, param.maxDuration, param.sortDirection, param.artist, param.album, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.searchSource, param.querySource, param.originalUserQuery, param.originalCorrection, param.qualityFilter, param.robloxPlaceId,  options).toPromise();
    }

    /**
     * Search for assets
     * @param param the request object
     */
    public toolboxServiceSearchGetAssets(param: ToolBoxServiceApiToolboxServiceSearchGetAssetsRequest, options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        return this.api.toolboxServiceSearchGetAssets(param.assetType, param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.assetSubTypes, param.excludeAssetSubTypes, param.creatorType, param.creatorTargetId, param.minDuration, param.maxDuration, param.sortDirection, param.artist, param.album, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.searchSource, param.querySource, param.originalUserQuery, param.originalCorrection, param.qualityFilter, param.robloxPlaceId,  options).toPromise();
    }

    /**
     * Search for meshes
     * @param param the request object
     */
    public toolboxServiceSearchMeshesWithHttpInfo(param: ToolBoxServiceApiToolboxServiceSearchMeshesRequest = {}, options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        return this.api.toolboxServiceSearchMeshesWithHttpInfo(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for meshes
     * @param param the request object
     */
    public toolboxServiceSearchMeshes(param: ToolBoxServiceApiToolboxServiceSearchMeshesRequest = {}, options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        return this.api.toolboxServiceSearchMeshes(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for plugins
     * @param param the request object
     */
    public toolboxServiceSearchPluginsWithHttpInfo(param: ToolBoxServiceApiToolboxServiceSearchPluginsRequest = {}, options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        return this.api.toolboxServiceSearchPluginsWithHttpInfo(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for plugins
     * @param param the request object
     */
    public toolboxServiceSearchPlugins(param: ToolBoxServiceApiToolboxServiceSearchPluginsRequest = {}, options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        return this.api.toolboxServiceSearchPlugins(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for videos
     * @param param the request object
     */
    public toolboxServiceSearchVideosWithHttpInfo(param: ToolBoxServiceApiToolboxServiceSearchVideosRequest = {}, options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        return this.api.toolboxServiceSearchVideosWithHttpInfo(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

    /**
     * Search for videos
     * @param param the request object
     */
    public toolboxServiceSearchVideos(param: ToolBoxServiceApiToolboxServiceSearchVideosRequest = {}, options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        return this.api.toolboxServiceSearchVideos(param.sortOrder, param.limit, param.cursor, param.pageNumber, param.keyword, param.creatorType, param.creatorTargetId, param.uiSortIntent, param.tags, param.includeOnlyVerifiedCreators, param.querySource, param.originalUserQuery, param.originalCorrection,  options).toPromise();
    }

}
