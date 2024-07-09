import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxApiDevelopAssetVersion } from '../models/RobloxApiDevelopAssetVersion';
import { RobloxApiDevelopModelsPlaceConfigurationModelV2 } from '../models/RobloxApiDevelopModelsPlaceConfigurationModelV2';
import { RobloxApiDevelopModelsPlaceModelV2 } from '../models/RobloxApiDevelopModelsPlaceModelV2';
import { RobloxApiDevelopModelsUniverseModerationPolicyStatus } from '../models/RobloxApiDevelopModelsUniverseModerationPolicyStatus';
import { RobloxApiDevelopModelsUniverseSettingsRequestV2 } from '../models/RobloxApiDevelopModelsUniverseSettingsRequestV2';
import { RobloxApiDevelopModelsUniverseSettingsResponseV2 } from '../models/RobloxApiDevelopModelsUniverseSettingsResponseV2';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemString } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemString';
import { RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel } from '../models/RobloxPlatformUniverseSettingsUniverseAvatarAssetOverrideResponseModel';
import { RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions } from '../models/RobloxUniversePluginPermissionAuthorityModelsUniversePluginPermissions';
import { RobloxWebResponsesAvatarScaleModel } from '../models/RobloxWebResponsesAvatarScaleModel';
import { RobloxWebWebAPIExclusiveStartRequestSystemString } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemString';
import { RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion';

import { AssetsV2ApiRequestFactory, AssetsV2ApiResponseProcessor} from "../apis/AssetsV2Api";
export class ObservableAssetsV2Api {
    private requestFactory: AssetsV2ApiRequestFactory;
    private responseProcessor: AssetsV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsV2ApiRequestFactory,
        responseProcessor?: AssetsV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetsV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetsV2ApiResponseProcessor();
    }

    /**
     * Retrieves asset information for the specified asset ID. The authenticated user must be able to manage the asset  or granted by package permission.
     * @param id The ID of the asset.Roblox.Platform.Assets.IAsset
     * @param robloxPlaceId The ID of the place.Roblox.Platform.Assets.IPlace
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sort by version number, default is desc.
     */
    public v2AssetsIdVersionsGetWithHttpInfo(id: number, robloxPlaceId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion>> {
        const requestContextPromise = this.requestFactory.v2AssetsIdVersionsGet(id, robloxPlaceId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2AssetsIdVersionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves asset information for the specified asset ID. The authenticated user must be able to manage the asset  or granted by package permission.
     * @param id The ID of the asset.Roblox.Platform.Assets.IAsset
     * @param robloxPlaceId The ID of the place.Roblox.Platform.Assets.IPlace
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sort by version number, default is desc.
     */
    public v2AssetsIdVersionsGet(id: number, robloxPlaceId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion> {
        return this.v2AssetsIdVersionsGetWithHttpInfo(id, robloxPlaceId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopAssetVersion>) => apiResponse.data));
    }

}

import { PlacesV2ApiRequestFactory, PlacesV2ApiResponseProcessor} from "../apis/PlacesV2Api";
export class ObservablePlacesV2Api {
    private requestFactory: PlacesV2ApiRequestFactory;
    private responseProcessor: PlacesV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlacesV2ApiRequestFactory,
        responseProcessor?: PlacesV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlacesV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlacesV2ApiResponseProcessor();
    }

    /**
     * Gets the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     */
    public v2PlacesPlaceIdGetWithHttpInfo(placeId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsPlaceModelV2>> {
        const requestContextPromise = this.requestFactory.v2PlacesPlaceIdGet(placeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PlacesPlaceIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     */
    public v2PlacesPlaceIdGet(placeId: number, _options?: Configuration): Observable<RobloxApiDevelopModelsPlaceModelV2> {
        return this.v2PlacesPlaceIdGetWithHttpInfo(placeId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsPlaceModelV2>) => apiResponse.data));
    }

    /**
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v2PlacesPlaceIdPatchWithHttpInfo(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModelV2, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsPlaceModelV2>> {
        const requestContextPromise = this.requestFactory.v2PlacesPlaceIdPatch(placeId, configuration, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2PlacesPlaceIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v2PlacesPlaceIdPatch(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModelV2, _options?: Configuration): Observable<RobloxApiDevelopModelsPlaceModelV2> {
        return this.v2PlacesPlaceIdPatchWithHttpInfo(placeId, configuration, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsPlaceModelV2>) => apiResponse.data));
    }

}

import { TeamTestV2ApiRequestFactory, TeamTestV2ApiResponseProcessor} from "../apis/TeamTestV2Api";
export class ObservableTeamTestV2Api {
    private requestFactory: TeamTestV2ApiRequestFactory;
    private responseProcessor: TeamTestV2ApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamTestV2ApiRequestFactory,
        responseProcessor?: TeamTestV2ApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamTestV2ApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamTestV2ApiResponseProcessor();
    }

    /**
     * Close a game instance that is being used for team testing
     * @param placeId The Id of the place we are setting the metadata for.
     * @param gameId the Guid of the game instance System.Guid
     */
    public v2TeamtestPlaceIdDeleteWithHttpInfo(placeId: number, gameId: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v2TeamtestPlaceIdDelete(placeId, gameId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2TeamtestPlaceIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Close a game instance that is being used for team testing
     * @param placeId The Id of the place we are setting the metadata for.
     * @param gameId the Guid of the game instance System.Guid
     */
    public v2TeamtestPlaceIdDelete(placeId: number, gameId: string, _options?: Configuration): Observable<any> {
        return this.v2TeamtestPlaceIdDeleteWithHttpInfo(placeId, gameId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { UniverseSettingsApiRequestFactory, UniverseSettingsApiResponseProcessor} from "../apis/UniverseSettingsApi";
export class ObservableUniverseSettingsApi {
    private requestFactory: UniverseSettingsApiRequestFactory;
    private responseProcessor: UniverseSettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UniverseSettingsApiRequestFactory,
        responseProcessor?: UniverseSettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UniverseSettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UniverseSettingsApiResponseProcessor();
    }

    /**
     * Update universe settings for an owned universe.  V2 Contains data for avatar scale and asset override.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public v2UniversesUniverseIdConfigurationPatchWithHttpInfo(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequestV2, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponseV2>> {
        const requestContextPromise = this.requestFactory.v2UniversesUniverseIdConfigurationPatch(universeId, model, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v2UniversesUniverseIdConfigurationPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update universe settings for an owned universe.  V2 Contains data for avatar scale and asset override.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public v2UniversesUniverseIdConfigurationPatch(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequestV2, _options?: Configuration): Observable<RobloxApiDevelopModelsUniverseSettingsResponseV2> {
        return this.v2UniversesUniverseIdConfigurationPatchWithHttpInfo(universeId, model, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponseV2>) => apiResponse.data));
    }

}
