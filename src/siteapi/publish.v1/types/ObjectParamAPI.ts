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

import { ObservableAssetQuotasApi } from "./ObservableAPI";
import { AssetQuotasApiRequestFactory, AssetQuotasApiResponseProcessor} from "../apis/AssetQuotasApi";

export interface AssetQuotasApiV1AssetQuotasGetRequest {
    /**
     * Resource type of the asset quota
     * @type string
     * @memberof AssetQuotasApiv1AssetQuotasGet
     */
    resourceType: string
    /**
     * Asset type of the asset quota
     * @type string
     * @memberof AssetQuotasApiv1AssetQuotasGet
     */
    assetType: string
    /**
     * Use dummy data for testing. This is for internal use only
     * @type boolean
     * @memberof AssetQuotasApiv1AssetQuotasGet
     */
    useDummyData?: boolean
}

export class ObjectAssetQuotasApi {
    private api: ObservableAssetQuotasApi

    public constructor(configuration: Configuration, requestFactory?: AssetQuotasApiRequestFactory, responseProcessor?: AssetQuotasApiResponseProcessor) {
        this.api = new ObservableAssetQuotasApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List asset quotas of the given resource type and asset type.
     * @param param the request object
     */
    public v1AssetQuotasGetWithHttpInfo(param: AssetQuotasApiV1AssetQuotasGetRequest, options?: Configuration): Promise<HttpInfo<RobloxPublishApiAssetQuotasResponse>> {
        return this.api.v1AssetQuotasGetWithHttpInfo(param.resourceType, param.assetType, param.useDummyData,  options).toPromise();
    }

    /**
     * List asset quotas of the given resource type and asset type.
     * @param param the request object
     */
    public v1AssetQuotasGet(param: AssetQuotasApiV1AssetQuotasGetRequest, options?: Configuration): Promise<RobloxPublishApiAssetQuotasResponse> {
        return this.api.v1AssetQuotasGet(param.resourceType, param.assetType, param.useDummyData,  options).toPromise();
    }

}

import { ObservableAudioApi } from "./ObservableAPI";
import { AudioApiRequestFactory, AudioApiResponseProcessor} from "../apis/AudioApi";

export interface AudioApiV1AudioPostRequest {
    /**
     * The file upload request body. Roblox.Publish.Api.UploadAudioRequest
     * @type RobloxPublishApiUploadAudioRequest
     * @memberof AudioApiv1AudioPost
     */
    request: RobloxPublishApiUploadAudioRequest
}

export interface AudioApiV1AudioVerifyPostRequest {
    /**
     * The verify audio request body. Roblox.Publish.Api.VerifyAudioRequest
     * @type RobloxPublishApiVerifyAudioRequest
     * @memberof AudioApiv1AudioVerifyPost
     */
    request: RobloxPublishApiVerifyAudioRequest
}

export class ObjectAudioApi {
    private api: ObservableAudioApi

    public constructor(configuration: Configuration, requestFactory?: AudioApiRequestFactory, responseProcessor?: AudioApiResponseProcessor) {
        this.api = new ObservableAudioApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Published an audio file and returns the new asset info.
     * @param param the request object
     */
    public v1AudioPostWithHttpInfo(param: AudioApiV1AudioPostRequest, options?: Configuration): Promise<HttpInfo<RobloxPublishApiPublishAudioResponse>> {
        return this.api.v1AudioPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Published an audio file and returns the new asset info.
     * @param param the request object
     */
    public v1AudioPost(param: AudioApiV1AudioPostRequest, options?: Configuration): Promise<RobloxPublishApiPublishAudioResponse> {
        return this.api.v1AudioPost(param.request,  options).toPromise();
    }

    /**
     * Verifies an audio file and returns a product that you can purchase to publish the audio file.
     * @param param the request object
     */
    public v1AudioVerifyPostWithHttpInfo(param: AudioApiV1AudioVerifyPostRequest, options?: Configuration): Promise<HttpInfo<RobloxPublishApiVerifyAudioResponse>> {
        return this.api.v1AudioVerifyPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Verifies an audio file and returns a product that you can purchase to publish the audio file.
     * @param param the request object
     */
    public v1AudioVerifyPost(param: AudioApiV1AudioVerifyPostRequest, options?: Configuration): Promise<RobloxPublishApiVerifyAudioResponse> {
        return this.api.v1AudioVerifyPost(param.request,  options).toPromise();
    }

}

import { ObservableBadgesApi } from "./ObservableAPI";
import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi";

export interface BadgesApiV1BadgesBadgeIdIconPostRequest {
    /**
     * The badge Id.
     * @type number
     * @memberof BadgesApiv1BadgesBadgeIdIconPost
     */
    badgeId: number
    /**
     * 
     * @type HttpFile
     * @memberof BadgesApiv1BadgesBadgeIdIconPost
     */
    files?: HttpFile
}

export class ObjectBadgesApi {
    private api: ObservableBadgesApi

    public constructor(configuration: Configuration, requestFactory?: BadgesApiRequestFactory, responseProcessor?: BadgesApiResponseProcessor) {
        this.api = new ObservableBadgesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Overwrites a badge icon with a new one.
     * @param param the request object
     */
    public v1BadgesBadgeIdIconPostWithHttpInfo(param: BadgesApiV1BadgesBadgeIdIconPostRequest, options?: Configuration): Promise<HttpInfo<RobloxPublishApiUploadResponse>> {
        return this.api.v1BadgesBadgeIdIconPostWithHttpInfo(param.badgeId, param.files,  options).toPromise();
    }

    /**
     * Overwrites a badge icon with a new one.
     * @param param the request object
     */
    public v1BadgesBadgeIdIconPost(param: BadgesApiV1BadgesBadgeIdIconPostRequest, options?: Configuration): Promise<RobloxPublishApiUploadResponse> {
        return this.api.v1BadgesBadgeIdIconPost(param.badgeId, param.files,  options).toPromise();
    }

}

import { ObservableGameThumbnailsApi } from "./ObservableAPI";
import { GameThumbnailsApiRequestFactory, GameThumbnailsApiResponseProcessor} from "../apis/GameThumbnailsApi";

export interface GameThumbnailsApiV1GamesGameIdThumbnailImagePostRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof GameThumbnailsApiv1GamesGameIdThumbnailImagePost
     */
    gameId: number
    /**
     * 
     * @type HttpFile
     * @memberof GameThumbnailsApiv1GamesGameIdThumbnailImagePost
     */
    files?: HttpFile
}

export class ObjectGameThumbnailsApi {
    private api: ObservableGameThumbnailsApi

    public constructor(configuration: Configuration, requestFactory?: GameThumbnailsApiRequestFactory, responseProcessor?: GameThumbnailsApiResponseProcessor) {
        this.api = new ObservableGameThumbnailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Uploads a game thumbnail.
     * @param param the request object
     */
    public v1GamesGameIdThumbnailImagePostWithHttpInfo(param: GameThumbnailsApiV1GamesGameIdThumbnailImagePostRequest, options?: Configuration): Promise<HttpInfo<RobloxPublishApiUploadResponse>> {
        return this.api.v1GamesGameIdThumbnailImagePostWithHttpInfo(param.gameId, param.files,  options).toPromise();
    }

    /**
     * Uploads a game thumbnail.
     * @param param the request object
     */
    public v1GamesGameIdThumbnailImagePost(param: GameThumbnailsApiV1GamesGameIdThumbnailImagePostRequest, options?: Configuration): Promise<RobloxPublishApiUploadResponse> {
        return this.api.v1GamesGameIdThumbnailImagePost(param.gameId, param.files,  options).toPromise();
    }

}

import { ObservablePluginApi } from "./ObservableAPI";
import { PluginApiRequestFactory, PluginApiResponseProcessor} from "../apis/PluginApi";

export interface PluginApiV1PluginsPluginIdIconPostRequest {
    /**
     * The plugin Id.
     * @type number
     * @memberof PluginApiv1PluginsPluginIdIconPost
     */
    pluginId: number
    /**
     * 
     * @type HttpFile
     * @memberof PluginApiv1PluginsPluginIdIconPost
     */
    files?: HttpFile
}

export class ObjectPluginApi {
    private api: ObservablePluginApi

    public constructor(configuration: Configuration, requestFactory?: PluginApiRequestFactory, responseProcessor?: PluginApiResponseProcessor) {
        this.api = new ObservablePluginApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Overwrites a plugin icon with a new one.
     * @param param the request object
     */
    public v1PluginsPluginIdIconPostWithHttpInfo(param: PluginApiV1PluginsPluginIdIconPostRequest, options?: Configuration): Promise<HttpInfo<RobloxPublishApiUploadResponse>> {
        return this.api.v1PluginsPluginIdIconPostWithHttpInfo(param.pluginId, param.files,  options).toPromise();
    }

    /**
     * Overwrites a plugin icon with a new one.
     * @param param the request object
     */
    public v1PluginsPluginIdIconPost(param: PluginApiV1PluginsPluginIdIconPostRequest, options?: Configuration): Promise<RobloxPublishApiUploadResponse> {
        return this.api.v1PluginsPluginIdIconPost(param.pluginId, param.files,  options).toPromise();
    }

}
