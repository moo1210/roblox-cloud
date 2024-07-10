import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { ToolBoxServiceAssetTypes } from '../models/ToolBoxServiceAssetTypes';
import { ToolBoxServiceDetailsItem } from '../models/ToolBoxServiceDetailsItem';
import { ToolBoxServiceDetailsItemAsset } from '../models/ToolBoxServiceDetailsItemAsset';
import { ToolBoxServiceDetailsItemAssetAsset } from '../models/ToolBoxServiceDetailsItemAssetAsset';
import { ToolBoxServiceDetailsItemAssetAssetAudioDetails } from '../models/ToolBoxServiceDetailsItemAssetAssetAudioDetails';
import { ToolBoxServiceDetailsItemAssetCreatorInner } from '../models/ToolBoxServiceDetailsItemAssetCreatorInner';
import { ToolBoxServiceDetailsItemAssetFiatProduct } from '../models/ToolBoxServiceDetailsItemAssetFiatProduct';
import { ToolBoxServiceDetailsItemAssetFiatProductPurchasePrice } from '../models/ToolBoxServiceDetailsItemAssetFiatProductPurchasePrice';
import { ToolBoxServiceDetailsItemAssetFiatProductPurchasePriceQuantity } from '../models/ToolBoxServiceDetailsItemAssetFiatProductPurchasePriceQuantity';
import { ToolBoxServiceDetailsItemAssetProduct } from '../models/ToolBoxServiceDetailsItemAssetProduct';
import { ToolBoxServiceDetailsItemAssetVoting } from '../models/ToolBoxServiceDetailsItemAssetVoting';
import { ToolBoxServiceError } from '../models/ToolBoxServiceError';
import { ToolBoxServiceSearchResult } from '../models/ToolBoxServiceSearchResult';
import { ToolBoxServiceSearchResultItem } from '../models/ToolBoxServiceSearchResultItem';
import { ToolBoxServiceSearchResultQueryFacets } from '../models/ToolBoxServiceSearchResultQueryFacets';
import { ToolBoxServiceSearchResultSpellCheckerResult } from '../models/ToolBoxServiceSearchResultSpellCheckerResult';
import { ToolBoxServiceSocialLinks } from '../models/ToolBoxServiceSocialLinks';
import { ToolboxServiceGetHomePageAssetsForSection200Response } from '../models/ToolboxServiceGetHomePageAssetsForSection200Response';
import { ToolboxServiceSearchGetAssets200Response } from '../models/ToolboxServiceSearchGetAssets200Response';
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
    public toolboxServiceGetGroupCreationsWithHttpInfo(ownerId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchResult>> {
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
    public toolboxServiceGetGroupCreations(ownerId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, _options?: Configuration): Promise<ToolBoxServiceSearchResult> {
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
    public toolboxServiceGetUserCreationsWithHttpInfo(userId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, separateModelsAndPackages?: boolean, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchResult>> {
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
    public toolboxServiceGetUserCreations(userId: number, assetType: ToolBoxServiceAssetTypes, limit?: number, cursor?: string, separateModelsAndPackages?: boolean, _options?: Configuration): Promise<ToolBoxServiceSearchResult> {
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
    public toolboxServiceSearchAudiosWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchResult>> {
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
    public toolboxServiceSearchAudios(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchResult> {
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
    public toolboxServiceSearchDecalsWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchResult>> {
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
    public toolboxServiceSearchDecals(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchResult> {
        const result = this.api.toolboxServiceSearchDecals(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }

    /**
     * Get details of assets
     * @param assetIds 
     */
    public toolboxServiceSearchGetAssetsWithHttpInfo(assetIds?: string, _options?: Configuration): Promise<HttpInfo<ToolboxServiceSearchGetAssets200Response>> {
        const result = this.api.toolboxServiceSearchGetAssetsWithHttpInfo(assetIds, _options);
        return result.toPromise();
    }

    /**
     * Get details of assets
     * @param assetIds 
     */
    public toolboxServiceSearchGetAssets(assetIds?: string, _options?: Configuration): Promise<ToolboxServiceSearchGetAssets200Response> {
        const result = this.api.toolboxServiceSearchGetAssets(assetIds, _options);
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
    public toolboxServiceSearchGetAssets_1WithHttpInfo(assetType: ToolBoxServiceAssetTypes, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, assetSubTypes?: string, excludeAssetSubTypes?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, searchSource?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, qualityFilter?: string, robloxPlaceId?: number, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchResult>> {
        const result = this.api.toolboxServiceSearchGetAssets_1WithHttpInfo(assetType, sortOrder, limit, cursor, pageNumber, keyword, assetSubTypes, excludeAssetSubTypes, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, searchSource, querySource, originalUserQuery, originalCorrection, qualityFilter, robloxPlaceId, _options);
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
    public toolboxServiceSearchGetAssets_1(assetType: ToolBoxServiceAssetTypes, sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, assetSubTypes?: string, excludeAssetSubTypes?: string, creatorType?: string, creatorTargetId?: number, minDuration?: number, maxDuration?: number, sortDirection?: string, artist?: string, album?: string, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, searchSource?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, qualityFilter?: string, robloxPlaceId?: number, _options?: Configuration): Promise<ToolBoxServiceSearchResult> {
        const result = this.api.toolboxServiceSearchGetAssets_1(assetType, sortOrder, limit, cursor, pageNumber, keyword, assetSubTypes, excludeAssetSubTypes, creatorType, creatorTargetId, minDuration, maxDuration, sortDirection, artist, album, uiSortIntent, tags, includeOnlyVerifiedCreators, searchSource, querySource, originalUserQuery, originalCorrection, qualityFilter, robloxPlaceId, _options);
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
    public toolboxServiceSearchMeshesWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchResult>> {
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
    public toolboxServiceSearchMeshes(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchResult> {
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
    public toolboxServiceSearchPluginsWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchResult>> {
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
    public toolboxServiceSearchPlugins(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchResult> {
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
    public toolboxServiceSearchVideosWithHttpInfo(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<HttpInfo<ToolBoxServiceSearchResult>> {
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
    public toolboxServiceSearchVideos(sortOrder?: string, limit?: number, cursor?: string, pageNumber?: number, keyword?: string, creatorType?: string, creatorTargetId?: number, uiSortIntent?: string, tags?: string, includeOnlyVerifiedCreators?: string, querySource?: string, originalUserQuery?: string, originalCorrection?: string, _options?: Configuration): Promise<ToolBoxServiceSearchResult> {
        const result = this.api.toolboxServiceSearchVideos(sortOrder, limit, cursor, pageNumber, keyword, creatorType, creatorTargetId, uiSortIntent, tags, includeOnlyVerifiedCreators, querySource, originalUserQuery, originalCorrection, _options);
        return result.toPromise();
    }


}



