import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxPublishApiAssetQuota } from '../models/RobloxPublishApiAssetQuota';
import { RobloxPublishApiAssetQuotasResponse } from '../models/RobloxPublishApiAssetQuotasResponse';
import { RobloxPublishApiPublishAudioResponse } from '../models/RobloxPublishApiPublishAudioResponse';
import { RobloxPublishApiUploadAudioRequest } from '../models/RobloxPublishApiUploadAudioRequest';
import { RobloxPublishApiUploadResponse } from '../models/RobloxPublishApiUploadResponse';
import { RobloxPublishApiVerifyAudioRequest } from '../models/RobloxPublishApiVerifyAudioRequest';
import { RobloxPublishApiVerifyAudioResponse } from '../models/RobloxPublishApiVerifyAudioResponse';
import { SystemIOStream } from '../models/SystemIOStream';
import { ObservableAssetQuotasApi } from './ObservableAPI';

import { AssetQuotasApiRequestFactory, AssetQuotasApiResponseProcessor} from "../apis/AssetQuotasApi";
export class PromiseAssetQuotasApi {
    private api: ObservableAssetQuotasApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetQuotasApiRequestFactory,
        responseProcessor?: AssetQuotasApiResponseProcessor
    ) {
        this.api = new ObservableAssetQuotasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List asset quotas of the given resource type and asset type.
     * @param resourceType Resource type of the asset quota
     * @param assetType Asset type of the asset quota
     * @param useDummyData Use dummy data for testing. This is for internal use only
     */
    public v1AssetQuotasGetWithHttpInfo(resourceType: string, assetType: string, useDummyData?: boolean, _options?: Configuration): Promise<HttpInfo<RobloxPublishApiAssetQuotasResponse>> {
        const result = this.api.v1AssetQuotasGetWithHttpInfo(resourceType, assetType, useDummyData, _options);
        return result.toPromise();
    }

    /**
     * List asset quotas of the given resource type and asset type.
     * @param resourceType Resource type of the asset quota
     * @param assetType Asset type of the asset quota
     * @param useDummyData Use dummy data for testing. This is for internal use only
     */
    public v1AssetQuotasGet(resourceType: string, assetType: string, useDummyData?: boolean, _options?: Configuration): Promise<RobloxPublishApiAssetQuotasResponse> {
        const result = this.api.v1AssetQuotasGet(resourceType, assetType, useDummyData, _options);
        return result.toPromise();
    }


}



import { ObservableAudioApi } from './ObservableAPI';

import { AudioApiRequestFactory, AudioApiResponseProcessor} from "../apis/AudioApi";
export class PromiseAudioApi {
    private api: ObservableAudioApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AudioApiRequestFactory,
        responseProcessor?: AudioApiResponseProcessor
    ) {
        this.api = new ObservableAudioApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Published an audio file and returns the new asset info.
     * @param request The file upload request body. Roblox.Publish.Api.UploadAudioRequest
     */
    public v1AudioPostWithHttpInfo(request: RobloxPublishApiUploadAudioRequest, _options?: Configuration): Promise<HttpInfo<RobloxPublishApiPublishAudioResponse>> {
        const result = this.api.v1AudioPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Published an audio file and returns the new asset info.
     * @param request The file upload request body. Roblox.Publish.Api.UploadAudioRequest
     */
    public v1AudioPost(request: RobloxPublishApiUploadAudioRequest, _options?: Configuration): Promise<RobloxPublishApiPublishAudioResponse> {
        const result = this.api.v1AudioPost(request, _options);
        return result.toPromise();
    }

    /**
     * Verifies an audio file and returns a product that you can purchase to publish the audio file.
     * @param request The verify audio request body. Roblox.Publish.Api.VerifyAudioRequest
     */
    public v1AudioVerifyPostWithHttpInfo(request: RobloxPublishApiVerifyAudioRequest, _options?: Configuration): Promise<HttpInfo<RobloxPublishApiVerifyAudioResponse>> {
        const result = this.api.v1AudioVerifyPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Verifies an audio file and returns a product that you can purchase to publish the audio file.
     * @param request The verify audio request body. Roblox.Publish.Api.VerifyAudioRequest
     */
    public v1AudioVerifyPost(request: RobloxPublishApiVerifyAudioRequest, _options?: Configuration): Promise<RobloxPublishApiVerifyAudioResponse> {
        const result = this.api.v1AudioVerifyPost(request, _options);
        return result.toPromise();
    }


}



import { ObservableBadgesApi } from './ObservableAPI';

import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi";
export class PromiseBadgesApi {
    private api: ObservableBadgesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BadgesApiRequestFactory,
        responseProcessor?: BadgesApiResponseProcessor
    ) {
        this.api = new ObservableBadgesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Overwrites a badge icon with a new one.
     * @param badgeId The badge Id.
     * @param files 
     */
    public v1BadgesBadgeIdIconPostWithHttpInfo(badgeId: number, files?: HttpFile, _options?: Configuration): Promise<HttpInfo<RobloxPublishApiUploadResponse>> {
        const result = this.api.v1BadgesBadgeIdIconPostWithHttpInfo(badgeId, files, _options);
        return result.toPromise();
    }

    /**
     * Overwrites a badge icon with a new one.
     * @param badgeId The badge Id.
     * @param files 
     */
    public v1BadgesBadgeIdIconPost(badgeId: number, files?: HttpFile, _options?: Configuration): Promise<RobloxPublishApiUploadResponse> {
        const result = this.api.v1BadgesBadgeIdIconPost(badgeId, files, _options);
        return result.toPromise();
    }


}



import { ObservableGameThumbnailsApi } from './ObservableAPI';

import { GameThumbnailsApiRequestFactory, GameThumbnailsApiResponseProcessor} from "../apis/GameThumbnailsApi";
export class PromiseGameThumbnailsApi {
    private api: ObservableGameThumbnailsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GameThumbnailsApiRequestFactory,
        responseProcessor?: GameThumbnailsApiResponseProcessor
    ) {
        this.api = new ObservableGameThumbnailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Uploads a game thumbnail.
     * @param gameId The universe Id.
     * @param files 
     */
    public v1GamesGameIdThumbnailImagePostWithHttpInfo(gameId: number, files?: HttpFile, _options?: Configuration): Promise<HttpInfo<RobloxPublishApiUploadResponse>> {
        const result = this.api.v1GamesGameIdThumbnailImagePostWithHttpInfo(gameId, files, _options);
        return result.toPromise();
    }

    /**
     * Uploads a game thumbnail.
     * @param gameId The universe Id.
     * @param files 
     */
    public v1GamesGameIdThumbnailImagePost(gameId: number, files?: HttpFile, _options?: Configuration): Promise<RobloxPublishApiUploadResponse> {
        const result = this.api.v1GamesGameIdThumbnailImagePost(gameId, files, _options);
        return result.toPromise();
    }


}



import { ObservablePluginApi } from './ObservableAPI';

import { PluginApiRequestFactory, PluginApiResponseProcessor} from "../apis/PluginApi";
export class PromisePluginApi {
    private api: ObservablePluginApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginApiRequestFactory,
        responseProcessor?: PluginApiResponseProcessor
    ) {
        this.api = new ObservablePluginApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Overwrites a plugin icon with a new one.
     * @param pluginId The plugin Id.
     * @param files 
     */
    public v1PluginsPluginIdIconPostWithHttpInfo(pluginId: number, files?: HttpFile, _options?: Configuration): Promise<HttpInfo<RobloxPublishApiUploadResponse>> {
        const result = this.api.v1PluginsPluginIdIconPostWithHttpInfo(pluginId, files, _options);
        return result.toPromise();
    }

    /**
     * Overwrites a plugin icon with a new one.
     * @param pluginId The plugin Id.
     * @param files 
     */
    public v1PluginsPluginIdIconPost(pluginId: number, files?: HttpFile, _options?: Configuration): Promise<RobloxPublishApiUploadResponse> {
        const result = this.api.v1PluginsPluginIdIconPost(pluginId, files, _options);
        return result.toPromise();
    }


}



