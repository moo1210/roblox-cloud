import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxPublishApiAssetQuota } from '../models/RobloxPublishApiAssetQuota';
import { RobloxPublishApiAssetQuotasResponse } from '../models/RobloxPublishApiAssetQuotasResponse';
import { RobloxPublishApiPublishAudioResponse } from '../models/RobloxPublishApiPublishAudioResponse';
import { RobloxPublishApiUploadAudioRequest } from '../models/RobloxPublishApiUploadAudioRequest';
import { RobloxPublishApiUploadResponse } from '../models/RobloxPublishApiUploadResponse';
import { RobloxPublishApiVerifyAudioRequest } from '../models/RobloxPublishApiVerifyAudioRequest';
import { RobloxPublishApiVerifyAudioResponse } from '../models/RobloxPublishApiVerifyAudioResponse';
import { SystemIOStream } from '../models/SystemIOStream';

import { AssetQuotasApiRequestFactory, AssetQuotasApiResponseProcessor} from "../apis/AssetQuotasApi";
export class ObservableAssetQuotasApi {
    private requestFactory: AssetQuotasApiRequestFactory;
    private responseProcessor: AssetQuotasApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetQuotasApiRequestFactory,
        responseProcessor?: AssetQuotasApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetQuotasApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetQuotasApiResponseProcessor();
    }

    /**
     * List asset quotas of the given resource type and asset type.
     * @param resourceType Resource type of the asset quota
     * @param assetType Asset type of the asset quota
     * @param useDummyData Use dummy data for testing. This is for internal use only
     */
    public v1AssetQuotasGetWithHttpInfo(resourceType: string, assetType: string, useDummyData?: boolean, _options?: Configuration): Observable<HttpInfo<RobloxPublishApiAssetQuotasResponse>> {
        const requestContextPromise = this.requestFactory.v1AssetQuotasGet(resourceType, assetType, useDummyData, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetQuotasGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List asset quotas of the given resource type and asset type.
     * @param resourceType Resource type of the asset quota
     * @param assetType Asset type of the asset quota
     * @param useDummyData Use dummy data for testing. This is for internal use only
     */
    public v1AssetQuotasGet(resourceType: string, assetType: string, useDummyData?: boolean, _options?: Configuration): Observable<RobloxPublishApiAssetQuotasResponse> {
        return this.v1AssetQuotasGetWithHttpInfo(resourceType, assetType, useDummyData, _options).pipe(map((apiResponse: HttpInfo<RobloxPublishApiAssetQuotasResponse>) => apiResponse.data));
    }

}

import { AudioApiRequestFactory, AudioApiResponseProcessor} from "../apis/AudioApi";
export class ObservableAudioApi {
    private requestFactory: AudioApiRequestFactory;
    private responseProcessor: AudioApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AudioApiRequestFactory,
        responseProcessor?: AudioApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AudioApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AudioApiResponseProcessor();
    }

    /**
     * Published an audio file and returns the new asset info.
     * @param request The file upload request body. Roblox.Publish.Api.UploadAudioRequest
     */
    public v1AudioPostWithHttpInfo(request: RobloxPublishApiUploadAudioRequest, _options?: Configuration): Observable<HttpInfo<RobloxPublishApiPublishAudioResponse>> {
        const requestContextPromise = this.requestFactory.v1AudioPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AudioPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Published an audio file and returns the new asset info.
     * @param request The file upload request body. Roblox.Publish.Api.UploadAudioRequest
     */
    public v1AudioPost(request: RobloxPublishApiUploadAudioRequest, _options?: Configuration): Observable<RobloxPublishApiPublishAudioResponse> {
        return this.v1AudioPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<RobloxPublishApiPublishAudioResponse>) => apiResponse.data));
    }

    /**
     * Verifies an audio file and returns a product that you can purchase to publish the audio file.
     * @param request The verify audio request body. Roblox.Publish.Api.VerifyAudioRequest
     */
    public v1AudioVerifyPostWithHttpInfo(request: RobloxPublishApiVerifyAudioRequest, _options?: Configuration): Observable<HttpInfo<RobloxPublishApiVerifyAudioResponse>> {
        const requestContextPromise = this.requestFactory.v1AudioVerifyPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AudioVerifyPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Verifies an audio file and returns a product that you can purchase to publish the audio file.
     * @param request The verify audio request body. Roblox.Publish.Api.VerifyAudioRequest
     */
    public v1AudioVerifyPost(request: RobloxPublishApiVerifyAudioRequest, _options?: Configuration): Observable<RobloxPublishApiVerifyAudioResponse> {
        return this.v1AudioVerifyPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<RobloxPublishApiVerifyAudioResponse>) => apiResponse.data));
    }

}

import { BadgesApiRequestFactory, BadgesApiResponseProcessor} from "../apis/BadgesApi";
export class ObservableBadgesApi {
    private requestFactory: BadgesApiRequestFactory;
    private responseProcessor: BadgesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BadgesApiRequestFactory,
        responseProcessor?: BadgesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BadgesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BadgesApiResponseProcessor();
    }

    /**
     * Overwrites a badge icon with a new one.
     * @param badgeId The badge Id.
     * @param files 
     */
    public v1BadgesBadgeIdIconPostWithHttpInfo(badgeId: number, files?: HttpFile, _options?: Configuration): Observable<HttpInfo<RobloxPublishApiUploadResponse>> {
        const requestContextPromise = this.requestFactory.v1BadgesBadgeIdIconPost(badgeId, files, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BadgesBadgeIdIconPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Overwrites a badge icon with a new one.
     * @param badgeId The badge Id.
     * @param files 
     */
    public v1BadgesBadgeIdIconPost(badgeId: number, files?: HttpFile, _options?: Configuration): Observable<RobloxPublishApiUploadResponse> {
        return this.v1BadgesBadgeIdIconPostWithHttpInfo(badgeId, files, _options).pipe(map((apiResponse: HttpInfo<RobloxPublishApiUploadResponse>) => apiResponse.data));
    }

}

import { GameThumbnailsApiRequestFactory, GameThumbnailsApiResponseProcessor} from "../apis/GameThumbnailsApi";
export class ObservableGameThumbnailsApi {
    private requestFactory: GameThumbnailsApiRequestFactory;
    private responseProcessor: GameThumbnailsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GameThumbnailsApiRequestFactory,
        responseProcessor?: GameThumbnailsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GameThumbnailsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GameThumbnailsApiResponseProcessor();
    }

    /**
     * Uploads a game thumbnail.
     * @param gameId The universe Id.
     * @param files 
     */
    public v1GamesGameIdThumbnailImagePostWithHttpInfo(gameId: number, files?: HttpFile, _options?: Configuration): Observable<HttpInfo<RobloxPublishApiUploadResponse>> {
        const requestContextPromise = this.requestFactory.v1GamesGameIdThumbnailImagePost(gameId, files, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GamesGameIdThumbnailImagePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Uploads a game thumbnail.
     * @param gameId The universe Id.
     * @param files 
     */
    public v1GamesGameIdThumbnailImagePost(gameId: number, files?: HttpFile, _options?: Configuration): Observable<RobloxPublishApiUploadResponse> {
        return this.v1GamesGameIdThumbnailImagePostWithHttpInfo(gameId, files, _options).pipe(map((apiResponse: HttpInfo<RobloxPublishApiUploadResponse>) => apiResponse.data));
    }

}

import { PluginApiRequestFactory, PluginApiResponseProcessor} from "../apis/PluginApi";
export class ObservablePluginApi {
    private requestFactory: PluginApiRequestFactory;
    private responseProcessor: PluginApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginApiRequestFactory,
        responseProcessor?: PluginApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PluginApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PluginApiResponseProcessor();
    }

    /**
     * Overwrites a plugin icon with a new one.
     * @param pluginId The plugin Id.
     * @param files 
     */
    public v1PluginsPluginIdIconPostWithHttpInfo(pluginId: number, files?: HttpFile, _options?: Configuration): Observable<HttpInfo<RobloxPublishApiUploadResponse>> {
        const requestContextPromise = this.requestFactory.v1PluginsPluginIdIconPost(pluginId, files, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PluginsPluginIdIconPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Overwrites a plugin icon with a new one.
     * @param pluginId The plugin Id.
     * @param files 
     */
    public v1PluginsPluginIdIconPost(pluginId: number, files?: HttpFile, _options?: Configuration): Observable<RobloxPublishApiUploadResponse> {
        return this.v1PluginsPluginIdIconPostWithHttpInfo(pluginId, files, _options).pipe(map((apiResponse: HttpInfo<RobloxPublishApiUploadResponse>) => apiResponse.data));
    }

}
