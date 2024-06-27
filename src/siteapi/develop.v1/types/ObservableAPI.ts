import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxApiDevelopModelsAliasRequest } from '../models/RobloxApiDevelopModelsAliasRequest';
import { RobloxApiDevelopModelsGameTemplateModel } from '../models/RobloxApiDevelopModelsGameTemplateModel';
import { RobloxApiDevelopModelsGroupModel } from '../models/RobloxApiDevelopModelsGroupModel';
import { RobloxApiDevelopModelsPlaceConfigurationModel } from '../models/RobloxApiDevelopModelsPlaceConfigurationModel';
import { RobloxApiDevelopModelsPlaceModel } from '../models/RobloxApiDevelopModelsPlaceModel';
import { RobloxApiDevelopModelsPrivateServerDetailsResponse } from '../models/RobloxApiDevelopModelsPrivateServerDetailsResponse';
import { RobloxApiDevelopModelsResponseAssetVotingModel } from '../models/RobloxApiDevelopModelsResponseAssetVotingModel';
import { RobloxApiDevelopModelsResponseTeamCreateSettingsResponse } from '../models/RobloxApiDevelopModelsResponseTeamCreateSettingsResponse';
import { RobloxApiDevelopModelsTeamCreateMembershipRequest } from '../models/RobloxApiDevelopModelsTeamCreateMembershipRequest';
import { RobloxApiDevelopModelsUniverseIdPermissionsModel } from '../models/RobloxApiDevelopModelsUniverseIdPermissionsModel';
import { RobloxApiDevelopModelsUniverseModel } from '../models/RobloxApiDevelopModelsUniverseModel';
import { RobloxApiDevelopModelsUniversePermissionsModel } from '../models/RobloxApiDevelopModelsUniversePermissionsModel';
import { RobloxApiDevelopModelsUniverseSettingsRequest } from '../models/RobloxApiDevelopModelsUniverseSettingsRequest';
import { RobloxApiDevelopModelsUniverseSettingsResponse } from '../models/RobloxApiDevelopModelsUniverseSettingsResponse';
import { RobloxApiDevelopModelsUniverseTeamCreateSettingsModel } from '../models/RobloxApiDevelopModelsUniverseTeamCreateSettingsModel';
import { RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest } from '../models/RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest';
import { RobloxDevelopApiUpdatePluginRequest } from '../models/RobloxDevelopApiUpdatePluginRequest';
import { RobloxPagingStartIndexCursor } from '../models/RobloxPagingStartIndexCursor';
import { RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64 } from '../models/RobloxPlatformCoreExclusiveStartPagingIExclusiveStartKeyInfoSystemInt64';
import { RobloxWebResponsesPluginsPluginResponse } from '../models/RobloxWebResponsesPluginsPluginResponse';
import { RobloxWebResponsesUsersSkinnyUserResponse } from '../models/RobloxWebResponsesUsersSkinnyUserResponse';
import { RobloxWebWebAPIExclusiveStartRequestSystemInt64 } from '../models/RobloxWebWebAPIExclusiveStartRequestSystemInt64';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel';
import { RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel';

import { AliasesApiRequestFactory, AliasesApiResponseProcessor} from "../apis/AliasesApi";
export class ObservableAliasesApi {
    private requestFactory: AliasesApiRequestFactory;
    private responseProcessor: AliasesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasesApiRequestFactory,
        responseProcessor?: AliasesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AliasesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AliasesApiResponseProcessor();
    }

    /**
     * Deletes an alias.
     * @param universeId The universe id.
     * @param name The name of the alias to delete.
     */
    public v1UniversesUniverseIdAliasesNameDeleteWithHttpInfo(universeId: number, name: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdAliasesNameDelete(universeId, name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdAliasesNameDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an alias.
     * @param universeId The universe id.
     * @param name The name of the alias to delete.
     */
    public v1UniversesUniverseIdAliasesNameDelete(universeId: number, name: string, _options?: Configuration): Observable<any> {
        return this.v1UniversesUniverseIdAliasesNameDeleteWithHttpInfo(universeId, name, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Updates an alias.
     * @param universeId The universe Id.
     * @param name The name of the alias to update.
     * @param request The request body containing the alias attributes to update.
     */
    public v1UniversesUniverseIdAliasesNamePatchWithHttpInfo(universeId: number, name: string, request: RobloxApiDevelopModelsAliasRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdAliasesNamePatch(universeId, name, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdAliasesNamePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an alias.
     * @param universeId The universe Id.
     * @param name The name of the alias to update.
     * @param request The request body containing the alias attributes to update.
     */
    public v1UniversesUniverseIdAliasesNamePatch(universeId: number, name: string, request: RobloxApiDevelopModelsAliasRequest, _options?: Configuration): Observable<any> {
        return this.v1UniversesUniverseIdAliasesNamePatchWithHttpInfo(universeId, name, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Creates an alias.
     * @param universeId The universe Id.
     * @param request The request body containing the alias attributes.
     */
    public v1UniversesUniverseIdAliasesPostWithHttpInfo(universeId: number, request: RobloxApiDevelopModelsAliasRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdAliasesPost(universeId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdAliasesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an alias.
     * @param universeId The universe Id.
     * @param request The request body containing the alias attributes.
     */
    public v1UniversesUniverseIdAliasesPost(universeId: number, request: RobloxApiDevelopModelsAliasRequest, _options?: Configuration): Observable<any> {
        return this.v1UniversesUniverseIdAliasesPostWithHttpInfo(universeId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class ObservableAssetsApi {
    private requestFactory: AssetsApiRequestFactory;
    private responseProcessor: AssetsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssetsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssetsApiResponseProcessor();
    }

    /**
     * Gets the voting information of the given assets
     * @param assetIds The ids of the Roblox.Platform.Assets.IAsset.
     */
    public v1AssetsVotingGetWithHttpInfo(assetIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel>> {
        const requestContextPromise = this.requestFactory.v1AssetsVotingGet(assetIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1AssetsVotingGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the voting information of the given assets
     * @param assetIds The ids of the Roblox.Platform.Assets.IAsset.
     */
    public v1AssetsVotingGet(assetIds: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel> {
        return this.v1AssetsVotingGetWithHttpInfo(assetIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel>) => apiResponse.data));
    }

}

import { GameTemplatesApiRequestFactory, GameTemplatesApiResponseProcessor} from "../apis/GameTemplatesApi";
export class ObservableGameTemplatesApi {
    private requestFactory: GameTemplatesApiRequestFactory;
    private responseProcessor: GameTemplatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GameTemplatesApiRequestFactory,
        responseProcessor?: GameTemplatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GameTemplatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GameTemplatesApiResponseProcessor();
    }

    /**
     * Templates subject to change without notice.  Sort order of templates specified by Roblox.
     * Gets a page of templates that can be used to start off making games.
     */
    public v1GametemplatesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel>> {
        const requestContextPromise = this.requestFactory.v1GametemplatesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GametemplatesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Templates subject to change without notice.  Sort order of templates specified by Roblox.
     * Gets a page of templates that can be used to start off making games.
     */
    public v1GametemplatesGet(_options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel> {
        return this.v1GametemplatesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel>) => apiResponse.data));
    }

}

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class ObservableGroupsApi {
    private requestFactory: GroupsApiRequestFactory;
    private responseProcessor: GroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupsApiResponseProcessor();
    }

    /**
     * Gets a list of universes for the given group.
     * @param groupId The group id.
     * @param isArchived Whether or not to return archived games.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by universeId
     */
    public v1GroupsGroupIdUniversesGetWithHttpInfo(groupId: number, isArchived?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel>> {
        const requestContextPromise = this.requestFactory.v1GroupsGroupIdUniversesGet(groupId, isArchived, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GroupsGroupIdUniversesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of universes for the given group.
     * @param groupId The group id.
     * @param isArchived Whether or not to return archived games.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by universeId
     */
    public v1GroupsGroupIdUniversesGet(groupId: number, isArchived?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel> {
        return this.v1GroupsGroupIdUniversesGetWithHttpInfo(groupId, isArchived, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel>) => apiResponse.data));
    }

}

import { PlacesApiRequestFactory, PlacesApiResponseProcessor} from "../apis/PlacesApi";
export class ObservablePlacesApi {
    private requestFactory: PlacesApiRequestFactory;
    private responseProcessor: PlacesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PlacesApiRequestFactory,
        responseProcessor?: PlacesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PlacesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PlacesApiResponseProcessor();
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v1PlacesPlaceIdPatchWithHttpInfo(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsPlaceModel>> {
        const requestContextPromise = this.requestFactory.v1PlacesPlaceIdPatch(placeId, configuration, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PlacesPlaceIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v1PlacesPlaceIdPatch(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Observable<RobloxApiDevelopModelsPlaceModel> {
        return this.v1PlacesPlaceIdPatchWithHttpInfo(placeId, configuration, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsPlaceModel>) => apiResponse.data));
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v1PlacesPlaceIdPostWithHttpInfo(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsPlaceModel>> {
        const requestContextPromise = this.requestFactory.v1PlacesPlaceIdPost(placeId, configuration, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PlacesPlaceIdPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v1PlacesPlaceIdPost(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Observable<RobloxApiDevelopModelsPlaceModel> {
        return this.v1PlacesPlaceIdPostWithHttpInfo(placeId, configuration, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsPlaceModel>) => apiResponse.data));
    }

}

import { PluginsApiRequestFactory, PluginsApiResponseProcessor} from "../apis/PluginsApi";
export class ObservablePluginsApi {
    private requestFactory: PluginsApiRequestFactory;
    private responseProcessor: PluginsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginsApiRequestFactory,
        responseProcessor?: PluginsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PluginsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PluginsApiResponseProcessor();
    }

    /**
     * Gets plugin details by ids.
     * @param pluginIds The plugin ids.
     */
    public v1PluginsGetWithHttpInfo(pluginIds: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse>> {
        const requestContextPromise = this.requestFactory.v1PluginsGet(pluginIds, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PluginsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets plugin details by ids.
     * @param pluginIds The plugin ids.
     */
    public v1PluginsGet(pluginIds: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse> {
        return this.v1PluginsGetWithHttpInfo(pluginIds, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse>) => apiResponse.data));
    }

    /**
     * Updates a plugin.
     * @param pluginId The id of the plugin.
     * @param request The Roblox.Develop.Api.UpdatePluginRequest.
     */
    public v1PluginsPluginIdPatchWithHttpInfo(pluginId: number, request: RobloxDevelopApiUpdatePluginRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1PluginsPluginIdPatch(pluginId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PluginsPluginIdPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a plugin.
     * @param pluginId The id of the plugin.
     * @param request The Roblox.Develop.Api.UpdatePluginRequest.
     */
    public v1PluginsPluginIdPatch(pluginId: number, request: RobloxDevelopApiUpdatePluginRequest, _options?: Configuration): Observable<any> {
        return this.v1PluginsPluginIdPatchWithHttpInfo(pluginId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { TeamCreateApiRequestFactory, TeamCreateApiResponseProcessor} from "../apis/TeamCreateApi";
export class ObservableTeamCreateApi {
    private requestFactory: TeamCreateApiRequestFactory;
    private responseProcessor: TeamCreateApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamCreateApiRequestFactory,
        responseProcessor?: TeamCreateApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamCreateApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamCreateApiResponseProcessor();
    }

    /**
     * List of users in the active Team Create session
     * @param placeId The place Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1PlacesPlaceIdTeamcreateActiveSessionMembersGetWithHttpInfo(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse>> {
        const requestContextPromise = this.requestFactory.v1PlacesPlaceIdTeamcreateActiveSessionMembersGet(placeId, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PlacesPlaceIdTeamcreateActiveSessionMembersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * List of users in the active Team Create session
     * @param placeId The place Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1PlacesPlaceIdTeamcreateActiveSessionMembersGet(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse> {
        return this.v1PlacesPlaceIdTeamcreateActiveSessionMembersGetWithHttpInfo(placeId, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse>) => apiResponse.data));
    }

    /**
     * Gets TeamCreate settings for multiple universes specified by Ids
     * @param ids 
     */
    public v1UniversesMultigetTeamcreateGetWithHttpInfo(ids: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel>> {
        const requestContextPromise = this.requestFactory.v1UniversesMultigetTeamcreateGet(ids, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesMultigetTeamcreateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets TeamCreate settings for multiple universes specified by Ids
     * @param ids 
     */
    public v1UniversesMultigetTeamcreateGet(ids: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel> {
        return this.v1UniversesMultigetTeamcreateGetWithHttpInfo(ids, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel>) => apiResponse.data));
    }

    /**
     * Gets TeamCreate settings for an Roblox.Platform.Universes.IUniverse.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdTeamcreateGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsResponseTeamCreateSettingsResponse>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdTeamcreateGet(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdTeamcreateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets TeamCreate settings for an Roblox.Platform.Universes.IUniverse.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdTeamcreateGet(universeId: number, _options?: Configuration): Observable<RobloxApiDevelopModelsResponseTeamCreateSettingsResponse> {
        return this.v1UniversesUniverseIdTeamcreateGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsResponseTeamCreateSettingsResponse>) => apiResponse.data));
    }

    /**
     * Removes a user from a TeamCreate permissions list.
     * @param universeId The universe Id.
     * @param request The request body.
     */
    public v1UniversesUniverseIdTeamcreateMembershipsDeleteWithHttpInfo(universeId: number, request: RobloxApiDevelopModelsTeamCreateMembershipRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdTeamcreateMembershipsDelete(universeId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdTeamcreateMembershipsDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a user from a TeamCreate permissions list.
     * @param universeId The universe Id.
     * @param request The request body.
     */
    public v1UniversesUniverseIdTeamcreateMembershipsDelete(universeId: number, request: RobloxApiDevelopModelsTeamCreateMembershipRequest, _options?: Configuration): Observable<any> {
        return this.v1UniversesUniverseIdTeamcreateMembershipsDeleteWithHttpInfo(universeId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Enables, or disables team create for a universe.
     * Edit team create settings for a universe.
     * @param universeId The universe Id.
     * @param request The request body containing the team create settings.
     */
    public v1UniversesUniverseIdTeamcreatePatchWithHttpInfo(universeId: number, request: RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdTeamcreatePatch(universeId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdTeamcreatePatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Enables, or disables team create for a universe.
     * Edit team create settings for a universe.
     * @param universeId The universe Id.
     * @param request The request body containing the team create settings.
     */
    public v1UniversesUniverseIdTeamcreatePatch(universeId: number, request: RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest, _options?: Configuration): Observable<any> {
        return this.v1UniversesUniverseIdTeamcreatePatchWithHttpInfo(universeId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
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
     * Get settings for an owned universe.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdConfigurationGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponse>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdConfigurationGet(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdConfigurationGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get settings for an owned universe.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdConfigurationGet(universeId: number, _options?: Configuration): Observable<RobloxApiDevelopModelsUniverseSettingsResponse> {
        return this.v1UniversesUniverseIdConfigurationGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponse>) => apiResponse.data));
    }

    /**
     * Update universe settings for an owned universe.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public v1UniversesUniverseIdConfigurationPatchWithHttpInfo(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequest, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponse>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdConfigurationPatch(universeId, model, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdConfigurationPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update universe settings for an owned universe.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public v1UniversesUniverseIdConfigurationPatch(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequest, _options?: Configuration): Observable<RobloxApiDevelopModelsUniverseSettingsResponse> {
        return this.v1UniversesUniverseIdConfigurationPatchWithHttpInfo(universeId, model, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponse>) => apiResponse.data));
    }

    /**
     * Get settings for an owned universe\'s VIP servers.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdConfigurationVipServersGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsPrivateServerDetailsResponse>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdConfigurationVipServersGet(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdConfigurationVipServersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get settings for an owned universe\'s VIP servers.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdConfigurationVipServersGet(universeId: number, _options?: Configuration): Observable<RobloxApiDevelopModelsPrivateServerDetailsResponse> {
        return this.v1UniversesUniverseIdConfigurationVipServersGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsPrivateServerDetailsResponse>) => apiResponse.data));
    }

}

import { UniversesApiRequestFactory, UniversesApiResponseProcessor} from "../apis/UniversesApi";
export class ObservableUniversesApi {
    private requestFactory: UniversesApiRequestFactory;
    private responseProcessor: UniversesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UniversesApiRequestFactory,
        responseProcessor?: UniversesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UniversesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UniversesApiResponseProcessor();
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Gets a System.Collections.Generic.List`1.
     * @param ids The universe IDs to get. Limit 100.
     */
    public v1UniversesMultigetGetWithHttpInfo(ids: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel>> {
        const requestContextPromise = this.requestFactory.v1UniversesMultigetGet(ids, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesMultigetGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Gets a System.Collections.Generic.List`1.
     * @param ids The universe IDs to get. Limit 100.
     */
    public v1UniversesMultigetGet(ids: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel> {
        return this.v1UniversesMultigetGetWithHttpInfo(ids, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel>) => apiResponse.data));
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Returns an array of granted and declined permissions related to the universes with the ids in ids for the authenticated user.
     * @param ids The universe ids.
     */
    public v1UniversesMultigetPermissionsGetWithHttpInfo(ids: Array<number>, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel>> {
        const requestContextPromise = this.requestFactory.v1UniversesMultigetPermissionsGet(ids, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesMultigetPermissionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Returns an array of granted and declined permissions related to the universes with the ids in ids for the authenticated user.
     * @param ids The universe ids.
     */
    public v1UniversesMultigetPermissionsGet(ids: Array<number>, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel> {
        return this.v1UniversesMultigetPermissionsGetWithHttpInfo(ids, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel>) => apiResponse.data));
    }

    /**
     * Activates a universes.
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdActivatePostWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdActivatePost(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdActivatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Activates a universes.
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdActivatePost(universeId: number, _options?: Configuration): Observable<any> {
        return this.v1UniversesUniverseIdActivatePostWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Deactivates a universe.
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdDeactivatePostWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdDeactivatePost(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdDeactivatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deactivates a universe.
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdDeactivatePost(universeId: number, _options?: Configuration): Observable<any> {
        return this.v1UniversesUniverseIdDeactivatePostWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Gets a Roblox.Api.Develop.Models.UniverseModel.
     * @param universeId The Universe id.
     */
    public v1UniversesUniverseIdGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsUniverseModel>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdGet(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a Roblox.Api.Develop.Models.UniverseModel.
     * @param universeId The Universe id.
     */
    public v1UniversesUniverseIdGet(universeId: number, _options?: Configuration): Observable<RobloxApiDevelopModelsUniverseModel> {
        return this.v1UniversesUniverseIdGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsUniverseModel>) => apiResponse.data));
    }

    /**
     * Returns list of granted and declined permissions related to the universe with the id universeId for authenticated user
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdPermissionsGetWithHttpInfo(universeId: number, _options?: Configuration): Observable<HttpInfo<RobloxApiDevelopModelsUniversePermissionsModel>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdPermissionsGet(universeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdPermissionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns list of granted and declined permissions related to the universe with the id universeId for authenticated user
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdPermissionsGet(universeId: number, _options?: Configuration): Observable<RobloxApiDevelopModelsUniversePermissionsModel> {
        return this.v1UniversesUniverseIdPermissionsGetWithHttpInfo(universeId, _options).pipe(map((apiResponse: HttpInfo<RobloxApiDevelopModelsUniversePermissionsModel>) => apiResponse.data));
    }

    /**
     * Gets a list of places for a universe.
     * @param universeId The asset id.
     * @param isUniverseCreation 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by placeId
     */
    public v1UniversesUniverseIdPlacesGetWithHttpInfo(universeId: number, isUniverseCreation?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel>> {
        const requestContextPromise = this.requestFactory.v1UniversesUniverseIdPlacesGet(universeId, isUniverseCreation, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UniversesUniverseIdPlacesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of places for a universe.
     * @param universeId The asset id.
     * @param isUniverseCreation 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by placeId
     */
    public v1UniversesUniverseIdPlacesGet(universeId: number, isUniverseCreation?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel> {
        return this.v1UniversesUniverseIdPlacesGetWithHttpInfo(universeId, isUniverseCreation, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Gets a list of Groups that a user can manage.
     */
    public v1UserGroupsCanmanageGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel>> {
        const requestContextPromise = this.requestFactory.v1UserGroupsCanmanageGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserGroupsCanmanageGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of Groups that a user can manage.
     */
    public v1UserGroupsCanmanageGet(_options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel> {
        return this.v1UserGroupsCanmanageGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel>) => apiResponse.data));
    }

    /**
     * Gets a list of groups a user can manage games or items for.
     */
    public v1UserGroupsCanmanagegamesoritemsGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel>> {
        const requestContextPromise = this.requestFactory.v1UserGroupsCanmanagegamesoritemsGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserGroupsCanmanagegamesoritemsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of groups a user can manage games or items for.
     */
    public v1UserGroupsCanmanagegamesoritemsGet(_options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel> {
        return this.v1UserGroupsCanmanagegamesoritemsGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel>) => apiResponse.data));
    }

    /**
     * Gets a list of universes for the authenticated user.
     * @param isArchived Whether or not to return archived games.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by universeId
     */
    public v1UserUniversesGetWithHttpInfo(isArchived?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel>> {
        const requestContextPromise = this.requestFactory.v1UserUniversesGet(isArchived, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserUniversesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets a list of universes for the authenticated user.
     * @param isArchived Whether or not to return archived games.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by universeId
     */
    public v1UserUniversesGet(isArchived?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel> {
        return this.v1UserUniversesGetWithHttpInfo(isArchived, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel>) => apiResponse.data));
    }

    /**
     * Returns whether the user can manage a given asset.
     * @param userId The ID of the user.
     * @param assetId The ID of the asset.
     */
    public v1UserUserIdCanmanageAssetIdGetWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1UserUserIdCanmanageAssetIdGet(userId, assetId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UserUserIdCanmanageAssetIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns whether the user can manage a given asset.
     * @param userId The ID of the user.
     * @param assetId The ID of the asset.
     */
    public v1UserUserIdCanmanageAssetIdGet(userId: number, assetId: number, _options?: Configuration): Observable<void> {
        return this.v1UserUserIdCanmanageAssetIdGetWithHttpInfo(userId, assetId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
