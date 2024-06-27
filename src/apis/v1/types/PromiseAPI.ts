import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { ToolBoxServiceAssetTypes } from '../models/ToolBoxServiceAssetTypes';
import { ToolBoxServiceError } from '../models/ToolBoxServiceError';
import { ToolBoxServiceSearchV1Result } from '../models/ToolBoxServiceSearchV1Result';
import { ToolBoxServiceSearchV1ResultItem } from '../models/ToolBoxServiceSearchV1ResultItem';
import { ToolBoxServiceSearchV1ResultQueryFacets } from '../models/ToolBoxServiceSearchV1ResultQueryFacets';
import { ToolBoxServiceSearchV1ResultSpellCheckerResult } from '../models/ToolBoxServiceSearchV1ResultSpellCheckerResult';
import { ToolboxServiceGetHomePageAssetsForSection200Response } from '../models/ToolboxServiceGetHomePageAssetsForSection200Response';
import { ObservableToolBoxServiceApi } from './ObservableAPI';

import { ToolBoxServiceApiRequestFactory, ToolBoxServiceApiResponseProcessor} from "../apis/ToolBoxServiceApi";
export class PromiseToolBoxServiceApi {
    private api: ObservableToolBoxServiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ToolBoxServiceApiRequestFactory,
        responseProcessor?: ToolBoxServiceApiResponseProcessor
    ) {
        this.api = new ObservableToolBoxServiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get group creations
     * @param ownerId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     */
    public toolboxServiceGetGroupCreationsWithHttpInfo(ownerId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const result = this.api.toolboxServiceGetGroupCreationsWithHttpInfo(ownerId, assetType, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get group creations
     * @param ownerId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     */
    public toolboxServiceGetGroupCreations(ownerId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, _options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        const result = this.api.toolboxServiceGetGroupCreations(ownerId, assetType, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Get home page assets for section
     * @param assetType 
     * @param section 
     * @param includeOnlyVerifiedCreators 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     * @param assetsInCameraVicinity 
     * @param assetsInCameraViewport 
     * @param minPriceInCents 
     * @param maxPriceInCents 
     * @param qualityFilter 
     */
    public toolboxServiceGetHomePageAssetsForSectionWithHttpInfo(assetType: ToolBoxServiceAssetTypes, section: string, includeOnlyVerifiedCreators?: string, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, locale?: string, placeId?: number, developerSegment?: string, assetsInCameraVicinity?: number, assetsInCameraViewport?: number, minPriceInCents?: number, maxPriceInCents?: number, qualityFilter?: string, _options?: Configuration): Promise<HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response>> {
        const result = this.api.toolboxServiceGetHomePageAssetsForSectionWithHttpInfo(assetType, section, includeOnlyVerifiedCreators, sortOrder, limit, cursor, pageNumber, locale, placeId, developerSegment, assetsInCameraVicinity, assetsInCameraViewport, minPriceInCents, maxPriceInCents, qualityFilter, _options);
        return result.toPromise();
    }

    /**
     * Get home page assets for section
     * @param assetType 
     * @param section 
     * @param includeOnlyVerifiedCreators 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     * @param assetsInCameraVicinity 
     * @param assetsInCameraViewport 
     * @param minPriceInCents 
     * @param maxPriceInCents 
     * @param qualityFilter 
     */
    public toolboxServiceGetHomePageAssetsForSection(assetType: ToolBoxServiceAssetTypes, section: string, includeOnlyVerifiedCreators?: string, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, locale?: string, placeId?: number, developerSegment?: string, assetsInCameraVicinity?: number, assetsInCameraViewport?: number, minPriceInCents?: number, maxPriceInCents?: number, qualityFilter?: string, _options?: Configuration): Promise<ToolboxServiceGetHomePageAssetsForSection200Response> {
        const result = this.api.toolboxServiceGetHomePageAssetsForSection(assetType, section, includeOnlyVerifiedCreators, sortOrder, limit, cursor, pageNumber, locale, placeId, developerSegment, assetsInCameraVicinity, assetsInCameraViewport, minPriceInCents, maxPriceInCents, qualityFilter, _options);
        return result.toPromise();
    }

    /**
     * Get home page configuration for asset type
     * @param assetType 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     */
    public toolboxServiceGetHomePageConfigurationWithHttpInfo(assetType: ToolBoxServiceAssetTypes, locale?: string, placeId?: number, developerSegment?: string, _options?: Configuration): Promise<HttpInfo<ToolboxServiceGetHomePageAssetsForSection200Response>> {
        const result = this.api.toolboxServiceGetHomePageConfigurationWithHttpInfo(assetType, locale, placeId, developerSegment, _options);
        return result.toPromise();
    }

    /**
     * Get home page configuration for asset type
     * @param assetType 
     * @param locale 
     * @param placeId 
     * @param developerSegment 
     */
    public toolboxServiceGetHomePageConfiguration(assetType: ToolBoxServiceAssetTypes, locale?: string, placeId?: number, developerSegment?: string, _options?: Configuration): Promise<ToolboxServiceGetHomePageAssetsForSection200Response> {
        const result = this.api.toolboxServiceGetHomePageConfiguration(assetType, locale, placeId, developerSegment, _options);
        return result.toPromise();
    }

    /**
     * Get user creations
     * @param userId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     * @param separateModelsAndPackages 
     */
    public toolboxServiceGetUserCreationsWithHttpInfo(userId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, separateModelsAndPackages?: boolean, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const result = this.api.toolboxServiceGetUserCreationsWithHttpInfo(userId, assetType, limit, cursor, separateModelsAndPackages, _options);
        return result.toPromise();
    }

    /**
     * Get user creations
     * @param userId 
     * @param assetType 
     * @param limit 
     * @param cursor 
     * @param separateModelsAndPackages 
     */
    public toolboxServiceGetUserCreations(userId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, separateModelsAndPackages?: boolean, _options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        const result = this.api.toolboxServiceGetUserCreations(userId, assetType, limit, cursor, separateModelsAndPackages, _options);
        return result.toPromise();
    }

    /**
     * Search for audios
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchAudiosWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const result = this.api.toolboxServiceSearchAudiosWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for audios
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchAudios(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        const result = this.api.toolboxServiceSearchAudios(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for decals
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchDecalsWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const result = this.api.toolboxServiceSearchDecalsWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for decals
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchDecals(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        const result = this.api.toolboxServiceSearchDecals(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for assets
     * @param assetType 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param assetSubTypes 
     * @param excludeAssetSubTypes 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param searchSource 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     * @param qualityFilter 
     * @param robloxPlaceId 
     */
    public toolboxServiceSearchGetAssetsWithHttpInfo(assetType: ToolBoxServiceAssetTypes, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, assetSubTypes?: string, excludeAssetSubTypes?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, searchSource?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, qualityFilter?: string, robloxPlaceId?: number, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const result = this.api.toolboxServiceSearchGetAssetsWithHttpInfo(assetType, sortOrder, limit, cursor, pageNumber, keyword, assetSubTypes, excludeAssetSubTypes, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, searchSource, querySource, originalUserQuery, originalCorrection, qualityFilter, robloxPlaceId, _options);
        return result.toPromise();
    }

    /**
     * Search for assets
     * @param assetType 
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param assetSubTypes 
     * @param excludeAssetSubTypes 
     * @param creatorType 
     * @param creatorTargetId 
     * @param minDuration 
     * @param maxDuration 
     * @param sortDirection 
     * @param artist 
     * @param album 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param searchSource 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     * @param qualityFilter 
     * @param robloxPlaceId 
     */
    public toolboxServiceSearchGetAssets(assetType: ToolBoxServiceAssetTypes, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, assetSubTypes?: string, excludeAssetSubTypes?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, searchSource?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, qualityFilter?: string, robloxPlaceId?: number, _options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        const result = this.api.toolboxServiceSearchGetAssets(assetType, sortOrder, limit, cursor, pageNumber, keyword, assetSubTypes, excludeAssetSubTypes, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, searchSource, querySource, originalUserQuery, originalCorrection, qualityFilter, robloxPlaceId, _options);
        return result.toPromise();
    }

    /**
     * Search for meshes
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchMeshesWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const result = this.api.toolboxServiceSearchMeshesWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for meshes
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchMeshes(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        const result = this.api.toolboxServiceSearchMeshes(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for plugins
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchPluginsWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const result = this.api.toolboxServiceSearchPluginsWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for plugins
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchPlugins(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        const result = this.api.toolboxServiceSearchPlugins(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for videos
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchVideosWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchV1Result>> {
        const result = this.api.toolboxServiceSearchVideosWithHttpInfo(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Search for videos
     * @param sortOrder 
     * @param limit 
     * @param cursor 
     * @param pageNumber 
     * @param keyword 
     * @param creatorType 
     * @param creatorTargetId 
     * @param uiSortIntent 
     * @param tags 
     * @param includeOnlyVerifiedCreators 
     * @param querySource 
     * @param originalUserQuery 
     * @param originalCorrection 
     */
    public toolboxServiceSearchVideos(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchV1Result> {
        const result = this.api.toolboxServiceSearchVideos(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }


}



