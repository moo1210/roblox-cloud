import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

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

import { ObservableAliasesApi } from "./ObservableAPI";
import { AliasesApiRequestFactory, AliasesApiResponseProcessor} from "../apis/AliasesApi";

export interface AliasesApiV1UniversesUniverseIdAliasesNameDeleteRequest {
    /**
     * The universe id.
     * @type number
     * @memberof AliasesApiv1UniversesUniverseIdAliasesNameDelete
     */
    universeId: number
    /**
     * The name of the alias to delete.
     * @type string
     * @memberof AliasesApiv1UniversesUniverseIdAliasesNameDelete
     */
    name: string
}

export interface AliasesApiV1UniversesUniverseIdAliasesNamePatchRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof AliasesApiv1UniversesUniverseIdAliasesNamePatch
     */
    universeId: number
    /**
     * The name of the alias to update.
     * @type string
     * @memberof AliasesApiv1UniversesUniverseIdAliasesNamePatch
     */
    name: string
    /**
     * The request body containing the alias attributes to update.
     * @type RobloxApiDevelopModelsAliasRequest
     * @memberof AliasesApiv1UniversesUniverseIdAliasesNamePatch
     */
    request: RobloxApiDevelopModelsAliasRequest
}

export interface AliasesApiV1UniversesUniverseIdAliasesPostRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof AliasesApiv1UniversesUniverseIdAliasesPost
     */
    universeId: number
    /**
     * The request body containing the alias attributes.
     * @type RobloxApiDevelopModelsAliasRequest
     * @memberof AliasesApiv1UniversesUniverseIdAliasesPost
     */
    request: RobloxApiDevelopModelsAliasRequest
}

export class ObjectAliasesApi {
    private api: ObservableAliasesApi

    public constructor(configuration: Configuration, requestFactory?: AliasesApiRequestFactory, responseProcessor?: AliasesApiResponseProcessor) {
        this.api = new ObservableAliasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an alias.
     * @param param the request object
     */
    public v1UniversesUniverseIdAliasesNameDeleteWithHttpInfo(param: AliasesApiV1UniversesUniverseIdAliasesNameDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UniversesUniverseIdAliasesNameDeleteWithHttpInfo(param.universeId, param.name,  options).toPromise();
    }

    /**
     * Deletes an alias.
     * @param param the request object
     */
    public v1UniversesUniverseIdAliasesNameDelete(param: AliasesApiV1UniversesUniverseIdAliasesNameDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1UniversesUniverseIdAliasesNameDelete(param.universeId, param.name,  options).toPromise();
    }

    /**
     * Updates an alias.
     * @param param the request object
     */
    public v1UniversesUniverseIdAliasesNamePatchWithHttpInfo(param: AliasesApiV1UniversesUniverseIdAliasesNamePatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UniversesUniverseIdAliasesNamePatchWithHttpInfo(param.universeId, param.name, param.request,  options).toPromise();
    }

    /**
     * Updates an alias.
     * @param param the request object
     */
    public v1UniversesUniverseIdAliasesNamePatch(param: AliasesApiV1UniversesUniverseIdAliasesNamePatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1UniversesUniverseIdAliasesNamePatch(param.universeId, param.name, param.request,  options).toPromise();
    }

    /**
     * Creates an alias.
     * @param param the request object
     */
    public v1UniversesUniverseIdAliasesPostWithHttpInfo(param: AliasesApiV1UniversesUniverseIdAliasesPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UniversesUniverseIdAliasesPostWithHttpInfo(param.universeId, param.request,  options).toPromise();
    }

    /**
     * Creates an alias.
     * @param param the request object
     */
    public v1UniversesUniverseIdAliasesPost(param: AliasesApiV1UniversesUniverseIdAliasesPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UniversesUniverseIdAliasesPost(param.universeId, param.request,  options).toPromise();
    }

}

import { ObservableAssetsApi } from "./ObservableAPI";
import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";

export interface AssetsApiV1AssetsVotingGetRequest {
    /**
     * The ids of the Roblox.Platform.Assets.IAsset.
     * @type Array&lt;number&gt;
     * @memberof AssetsApiv1AssetsVotingGet
     */
    assetIds: Array<number>
}

export class ObjectAssetsApi {
    private api: ObservableAssetsApi

    public constructor(configuration: Configuration, requestFactory?: AssetsApiRequestFactory, responseProcessor?: AssetsApiResponseProcessor) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the voting information of the given assets
     * @param param the request object
     */
    public v1AssetsVotingGetWithHttpInfo(param: AssetsApiV1AssetsVotingGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel>> {
        return this.api.v1AssetsVotingGetWithHttpInfo(param.assetIds,  options).toPromise();
    }

    /**
     * Gets the voting information of the given assets
     * @param param the request object
     */
    public v1AssetsVotingGet(param: AssetsApiV1AssetsVotingGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel> {
        return this.api.v1AssetsVotingGet(param.assetIds,  options).toPromise();
    }

}

import { ObservableGameTemplatesApi } from "./ObservableAPI";
import { GameTemplatesApiRequestFactory, GameTemplatesApiResponseProcessor} from "../apis/GameTemplatesApi";

export interface GameTemplatesApiV1GametemplatesGetRequest {
}

export class ObjectGameTemplatesApi {
    private api: ObservableGameTemplatesApi

    public constructor(configuration: Configuration, requestFactory?: GameTemplatesApiRequestFactory, responseProcessor?: GameTemplatesApiResponseProcessor) {
        this.api = new ObservableGameTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Templates subject to change without notice.  Sort order of templates specified by Roblox.
     * Gets a page of templates that can be used to start off making games.
     * @param param the request object
     */
    public v1GametemplatesGetWithHttpInfo(param: GameTemplatesApiV1GametemplatesGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel>> {
        return this.api.v1GametemplatesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Templates subject to change without notice.  Sort order of templates specified by Roblox.
     * Gets a page of templates that can be used to start off making games.
     * @param param the request object
     */
    public v1GametemplatesGet(param: GameTemplatesApiV1GametemplatesGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel> {
        return this.api.v1GametemplatesGet( options).toPromise();
    }

}

import { ObservableGroupsApi } from "./ObservableAPI";
import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";

export interface GroupsApiV1GroupsGroupIdUniversesGetRequest {
    /**
     * The group id.
     * @type number
     * @memberof GroupsApiv1GroupsGroupIdUniversesGet
     */
    groupId: number
    /**
     * Whether or not to return archived games.
     * @type boolean
     * @memberof GroupsApiv1GroupsGroupIdUniversesGet
     */
    isArchived?: boolean
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof GroupsApiv1GroupsGroupIdUniversesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof GroupsApiv1GroupsGroupIdUniversesGet
     */
    cursor?: string
    /**
     * Sorted by universeId
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof GroupsApiv1GroupsGroupIdUniversesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectGroupsApi {
    private api: ObservableGroupsApi

    public constructor(configuration: Configuration, requestFactory?: GroupsApiRequestFactory, responseProcessor?: GroupsApiResponseProcessor) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a list of universes for the given group.
     * @param param the request object
     */
    public v1GroupsGroupIdUniversesGetWithHttpInfo(param: GroupsApiV1GroupsGroupIdUniversesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel>> {
        return this.api.v1GroupsGroupIdUniversesGetWithHttpInfo(param.groupId, param.isArchived, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of universes for the given group.
     * @param param the request object
     */
    public v1GroupsGroupIdUniversesGet(param: GroupsApiV1GroupsGroupIdUniversesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel> {
        return this.api.v1GroupsGroupIdUniversesGet(param.groupId, param.isArchived, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}

import { ObservablePlacesApi } from "./ObservableAPI";
import { PlacesApiRequestFactory, PlacesApiResponseProcessor} from "../apis/PlacesApi";

export interface PlacesApiV1PlacesPlaceIdPatchRequest {
    /**
     * The place id for the place to be updated.
     * @type number
     * @memberof PlacesApiv1PlacesPlaceIdPatch
     */
    placeId: number
    /**
     * 
     * @type RobloxApiDevelopModelsPlaceConfigurationModel
     * @memberof PlacesApiv1PlacesPlaceIdPatch
     */
    configuration: RobloxApiDevelopModelsPlaceConfigurationModel
}

export interface PlacesApiV1PlacesPlaceIdPostRequest {
    /**
     * The place id for the place to be updated.
     * @type number
     * @memberof PlacesApiv1PlacesPlaceIdPost
     */
    placeId: number
    /**
     * 
     * @type RobloxApiDevelopModelsPlaceConfigurationModel
     * @memberof PlacesApiv1PlacesPlaceIdPost
     */
    configuration: RobloxApiDevelopModelsPlaceConfigurationModel
}

export class ObjectPlacesApi {
    private api: ObservablePlacesApi

    public constructor(configuration: Configuration, requestFactory?: PlacesApiRequestFactory, responseProcessor?: PlacesApiResponseProcessor) {
        this.api = new ObservablePlacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param param the request object
     */
    public v1PlacesPlaceIdPatchWithHttpInfo(param: PlacesApiV1PlacesPlaceIdPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModel>> {
        return this.api.v1PlacesPlaceIdPatchWithHttpInfo(param.placeId, param.configuration,  options).toPromise();
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param param the request object
     */
    public v1PlacesPlaceIdPatch(param: PlacesApiV1PlacesPlaceIdPatchRequest, options?: Configuration): Promise<RobloxApiDevelopModelsPlaceModel> {
        return this.api.v1PlacesPlaceIdPatch(param.placeId, param.configuration,  options).toPromise();
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param param the request object
     */
    public v1PlacesPlaceIdPostWithHttpInfo(param: PlacesApiV1PlacesPlaceIdPostRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModel>> {
        return this.api.v1PlacesPlaceIdPostWithHttpInfo(param.placeId, param.configuration,  options).toPromise();
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param param the request object
     */
    public v1PlacesPlaceIdPost(param: PlacesApiV1PlacesPlaceIdPostRequest, options?: Configuration): Promise<RobloxApiDevelopModelsPlaceModel> {
        return this.api.v1PlacesPlaceIdPost(param.placeId, param.configuration,  options).toPromise();
    }

}

import { ObservablePluginsApi } from "./ObservableAPI";
import { PluginsApiRequestFactory, PluginsApiResponseProcessor} from "../apis/PluginsApi";

export interface PluginsApiV1PluginsGetRequest {
    /**
     * The plugin ids.
     * @type Array&lt;number&gt;
     * @memberof PluginsApiv1PluginsGet
     */
    pluginIds: Array<number>
}

export interface PluginsApiV1PluginsPluginIdPatchRequest {
    /**
     * The id of the plugin.
     * @type number
     * @memberof PluginsApiv1PluginsPluginIdPatch
     */
    pluginId: number
    /**
     * The Roblox.Develop.Api.UpdatePluginRequest.
     * @type RobloxDevelopApiUpdatePluginRequest
     * @memberof PluginsApiv1PluginsPluginIdPatch
     */
    request: RobloxDevelopApiUpdatePluginRequest
}

export class ObjectPluginsApi {
    private api: ObservablePluginsApi

    public constructor(configuration: Configuration, requestFactory?: PluginsApiRequestFactory, responseProcessor?: PluginsApiResponseProcessor) {
        this.api = new ObservablePluginsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets plugin details by ids.
     * @param param the request object
     */
    public v1PluginsGetWithHttpInfo(param: PluginsApiV1PluginsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse>> {
        return this.api.v1PluginsGetWithHttpInfo(param.pluginIds,  options).toPromise();
    }

    /**
     * Gets plugin details by ids.
     * @param param the request object
     */
    public v1PluginsGet(param: PluginsApiV1PluginsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse> {
        return this.api.v1PluginsGet(param.pluginIds,  options).toPromise();
    }

    /**
     * Updates a plugin.
     * @param param the request object
     */
    public v1PluginsPluginIdPatchWithHttpInfo(param: PluginsApiV1PluginsPluginIdPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1PluginsPluginIdPatchWithHttpInfo(param.pluginId, param.request,  options).toPromise();
    }

    /**
     * Updates a plugin.
     * @param param the request object
     */
    public v1PluginsPluginIdPatch(param: PluginsApiV1PluginsPluginIdPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1PluginsPluginIdPatch(param.pluginId, param.request,  options).toPromise();
    }

}

import { ObservableTeamCreateApi } from "./ObservableAPI";
import { TeamCreateApiRequestFactory, TeamCreateApiResponseProcessor} from "../apis/TeamCreateApi";

export interface TeamCreateApiV1PlacesPlaceIdTeamcreateActiveSessionMembersGetRequest {
    /**
     * The place Id.
     * @type number
     * @memberof TeamCreateApiv1PlacesPlaceIdTeamcreateActiveSessionMembersGet
     */
    placeId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof TeamCreateApiv1PlacesPlaceIdTeamcreateActiveSessionMembersGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof TeamCreateApiv1PlacesPlaceIdTeamcreateActiveSessionMembersGet
     */
    cursor?: string
}

export interface TeamCreateApiV1UniversesMultigetTeamcreateGetRequest {
    /**
     * 
     * @type Array&lt;number&gt;
     * @memberof TeamCreateApiv1UniversesMultigetTeamcreateGet
     */
    ids: Array<number>
}

export interface TeamCreateApiV1UniversesUniverseIdTeamcreateGetRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof TeamCreateApiv1UniversesUniverseIdTeamcreateGet
     */
    universeId: number
}

export interface TeamCreateApiV1UniversesUniverseIdTeamcreateMembershipsDeleteRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof TeamCreateApiv1UniversesUniverseIdTeamcreateMembershipsDelete
     */
    universeId: number
    /**
     * The request body.
     * @type RobloxApiDevelopModelsTeamCreateMembershipRequest
     * @memberof TeamCreateApiv1UniversesUniverseIdTeamcreateMembershipsDelete
     */
    request: RobloxApiDevelopModelsTeamCreateMembershipRequest
}

export interface TeamCreateApiV1UniversesUniverseIdTeamcreatePatchRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof TeamCreateApiv1UniversesUniverseIdTeamcreatePatch
     */
    universeId: number
    /**
     * The request body containing the team create settings.
     * @type RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest
     * @memberof TeamCreateApiv1UniversesUniverseIdTeamcreatePatch
     */
    request: RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest
}

export class ObjectTeamCreateApi {
    private api: ObservableTeamCreateApi

    public constructor(configuration: Configuration, requestFactory?: TeamCreateApiRequestFactory, responseProcessor?: TeamCreateApiResponseProcessor) {
        this.api = new ObservableTeamCreateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of users in the active Team Create session
     * @param param the request object
     */
    public v1PlacesPlaceIdTeamcreateActiveSessionMembersGetWithHttpInfo(param: TeamCreateApiV1PlacesPlaceIdTeamcreateActiveSessionMembersGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse>> {
        return this.api.v1PlacesPlaceIdTeamcreateActiveSessionMembersGetWithHttpInfo(param.placeId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * List of users in the active Team Create session
     * @param param the request object
     */
    public v1PlacesPlaceIdTeamcreateActiveSessionMembersGet(param: TeamCreateApiV1PlacesPlaceIdTeamcreateActiveSessionMembersGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse> {
        return this.api.v1PlacesPlaceIdTeamcreateActiveSessionMembersGet(param.placeId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Gets TeamCreate settings for multiple universes specified by Ids
     * @param param the request object
     */
    public v1UniversesMultigetTeamcreateGetWithHttpInfo(param: TeamCreateApiV1UniversesMultigetTeamcreateGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel>> {
        return this.api.v1UniversesMultigetTeamcreateGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * Gets TeamCreate settings for multiple universes specified by Ids
     * @param param the request object
     */
    public v1UniversesMultigetTeamcreateGet(param: TeamCreateApiV1UniversesMultigetTeamcreateGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel> {
        return this.api.v1UniversesMultigetTeamcreateGet(param.ids,  options).toPromise();
    }

    /**
     * Gets TeamCreate settings for an Roblox.Platform.Universes.IUniverse.
     * @param param the request object
     */
    public v1UniversesUniverseIdTeamcreateGetWithHttpInfo(param: TeamCreateApiV1UniversesUniverseIdTeamcreateGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsResponseTeamCreateSettingsResponse>> {
        return this.api.v1UniversesUniverseIdTeamcreateGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Gets TeamCreate settings for an Roblox.Platform.Universes.IUniverse.
     * @param param the request object
     */
    public v1UniversesUniverseIdTeamcreateGet(param: TeamCreateApiV1UniversesUniverseIdTeamcreateGetRequest, options?: Configuration): Promise<RobloxApiDevelopModelsResponseTeamCreateSettingsResponse> {
        return this.api.v1UniversesUniverseIdTeamcreateGet(param.universeId,  options).toPromise();
    }

    /**
     * Removes a user from a TeamCreate permissions list.
     * @param param the request object
     */
    public v1UniversesUniverseIdTeamcreateMembershipsDeleteWithHttpInfo(param: TeamCreateApiV1UniversesUniverseIdTeamcreateMembershipsDeleteRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UniversesUniverseIdTeamcreateMembershipsDeleteWithHttpInfo(param.universeId, param.request,  options).toPromise();
    }

    /**
     * Removes a user from a TeamCreate permissions list.
     * @param param the request object
     */
    public v1UniversesUniverseIdTeamcreateMembershipsDelete(param: TeamCreateApiV1UniversesUniverseIdTeamcreateMembershipsDeleteRequest, options?: Configuration): Promise<any> {
        return this.api.v1UniversesUniverseIdTeamcreateMembershipsDelete(param.universeId, param.request,  options).toPromise();
    }

    /**
     * Enables, or disables team create for a universe.
     * Edit team create settings for a universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdTeamcreatePatchWithHttpInfo(param: TeamCreateApiV1UniversesUniverseIdTeamcreatePatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UniversesUniverseIdTeamcreatePatchWithHttpInfo(param.universeId, param.request,  options).toPromise();
    }

    /**
     * Enables, or disables team create for a universe.
     * Edit team create settings for a universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdTeamcreatePatch(param: TeamCreateApiV1UniversesUniverseIdTeamcreatePatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1UniversesUniverseIdTeamcreatePatch(param.universeId, param.request,  options).toPromise();
    }

}

import { ObservableUniverseSettingsApi } from "./ObservableAPI";
import { UniverseSettingsApiRequestFactory, UniverseSettingsApiResponseProcessor} from "../apis/UniverseSettingsApi";

export interface UniverseSettingsApiV1UniversesUniverseIdConfigurationGetRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof UniverseSettingsApiv1UniversesUniverseIdConfigurationGet
     */
    universeId: number
}

export interface UniverseSettingsApiV1UniversesUniverseIdConfigurationPatchRequest {
    /**
     * The universeId.
     * @type number
     * @memberof UniverseSettingsApiv1UniversesUniverseIdConfigurationPatch
     */
    universeId: number
    /**
     * The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     * @type RobloxApiDevelopModelsUniverseSettingsRequest
     * @memberof UniverseSettingsApiv1UniversesUniverseIdConfigurationPatch
     */
    model: RobloxApiDevelopModelsUniverseSettingsRequest
}

export interface UniverseSettingsApiV1UniversesUniverseIdConfigurationVipServersGetRequest {
    /**
     * The universe Id.
     * @type number
     * @memberof UniverseSettingsApiv1UniversesUniverseIdConfigurationVipServersGet
     */
    universeId: number
}

export class ObjectUniverseSettingsApi {
    private api: ObservableUniverseSettingsApi

    public constructor(configuration: Configuration, requestFactory?: UniverseSettingsApiRequestFactory, responseProcessor?: UniverseSettingsApiResponseProcessor) {
        this.api = new ObservableUniverseSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get settings for an owned universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdConfigurationGetWithHttpInfo(param: UniverseSettingsApiV1UniversesUniverseIdConfigurationGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponse>> {
        return this.api.v1UniversesUniverseIdConfigurationGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Get settings for an owned universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdConfigurationGet(param: UniverseSettingsApiV1UniversesUniverseIdConfigurationGetRequest, options?: Configuration): Promise<RobloxApiDevelopModelsUniverseSettingsResponse> {
        return this.api.v1UniversesUniverseIdConfigurationGet(param.universeId,  options).toPromise();
    }

    /**
     * Update universe settings for an owned universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdConfigurationPatchWithHttpInfo(param: UniverseSettingsApiV1UniversesUniverseIdConfigurationPatchRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponse>> {
        return this.api.v1UniversesUniverseIdConfigurationPatchWithHttpInfo(param.universeId, param.model,  options).toPromise();
    }

    /**
     * Update universe settings for an owned universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdConfigurationPatch(param: UniverseSettingsApiV1UniversesUniverseIdConfigurationPatchRequest, options?: Configuration): Promise<RobloxApiDevelopModelsUniverseSettingsResponse> {
        return this.api.v1UniversesUniverseIdConfigurationPatch(param.universeId, param.model,  options).toPromise();
    }

    /**
     * Get settings for an owned universe\'s VIP servers.
     * @param param the request object
     */
    public v1UniversesUniverseIdConfigurationVipServersGetWithHttpInfo(param: UniverseSettingsApiV1UniversesUniverseIdConfigurationVipServersGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPrivateServerDetailsResponse>> {
        return this.api.v1UniversesUniverseIdConfigurationVipServersGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Get settings for an owned universe\'s VIP servers.
     * @param param the request object
     */
    public v1UniversesUniverseIdConfigurationVipServersGet(param: UniverseSettingsApiV1UniversesUniverseIdConfigurationVipServersGetRequest, options?: Configuration): Promise<RobloxApiDevelopModelsPrivateServerDetailsResponse> {
        return this.api.v1UniversesUniverseIdConfigurationVipServersGet(param.universeId,  options).toPromise();
    }

}

import { ObservableUniversesApi } from "./ObservableAPI";
import { UniversesApiRequestFactory, UniversesApiResponseProcessor} from "../apis/UniversesApi";

export interface UniversesApiV1UniversesMultigetGetRequest {
    /**
     * The universe IDs to get. Limit 100.
     * @type Array&lt;number&gt;
     * @memberof UniversesApiv1UniversesMultigetGet
     */
    ids: Array<number>
}

export interface UniversesApiV1UniversesMultigetPermissionsGetRequest {
    /**
     * The universe ids.
     * @type Array&lt;number&gt;
     * @memberof UniversesApiv1UniversesMultigetPermissionsGet
     */
    ids: Array<number>
}

export interface UniversesApiV1UniversesUniverseIdActivatePostRequest {
    /**
     * The universe id.
     * @type number
     * @memberof UniversesApiv1UniversesUniverseIdActivatePost
     */
    universeId: number
}

export interface UniversesApiV1UniversesUniverseIdDeactivatePostRequest {
    /**
     * The universe id.
     * @type number
     * @memberof UniversesApiv1UniversesUniverseIdDeactivatePost
     */
    universeId: number
}

export interface UniversesApiV1UniversesUniverseIdGetRequest {
    /**
     * The Universe id.
     * @type number
     * @memberof UniversesApiv1UniversesUniverseIdGet
     */
    universeId: number
}

export interface UniversesApiV1UniversesUniverseIdPermissionsGetRequest {
    /**
     * The universe id.
     * @type number
     * @memberof UniversesApiv1UniversesUniverseIdPermissionsGet
     */
    universeId: number
}

export interface UniversesApiV1UniversesUniverseIdPlacesGetRequest {
    /**
     * The asset id.
     * @type number
     * @memberof UniversesApiv1UniversesUniverseIdPlacesGet
     */
    universeId: number
    /**
     * 
     * @type boolean
     * @memberof UniversesApiv1UniversesUniverseIdPlacesGet
     */
    isUniverseCreation?: boolean
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof UniversesApiv1UniversesUniverseIdPlacesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof UniversesApiv1UniversesUniverseIdPlacesGet
     */
    cursor?: string
    /**
     * Sorted by placeId
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof UniversesApiv1UniversesUniverseIdPlacesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectUniversesApi {
    private api: ObservableUniversesApi

    public constructor(configuration: Configuration, requestFactory?: UniversesApiRequestFactory, responseProcessor?: UniversesApiResponseProcessor) {
        this.api = new ObservableUniversesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Gets a System.Collections.Generic.List`1.
     * @param param the request object
     */
    public v1UniversesMultigetGetWithHttpInfo(param: UniversesApiV1UniversesMultigetGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel>> {
        return this.api.v1UniversesMultigetGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Gets a System.Collections.Generic.List`1.
     * @param param the request object
     */
    public v1UniversesMultigetGet(param: UniversesApiV1UniversesMultigetGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel> {
        return this.api.v1UniversesMultigetGet(param.ids,  options).toPromise();
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Returns an array of granted and declined permissions related to the universes with the ids in ids for the authenticated user.
     * @param param the request object
     */
    public v1UniversesMultigetPermissionsGetWithHttpInfo(param: UniversesApiV1UniversesMultigetPermissionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel>> {
        return this.api.v1UniversesMultigetPermissionsGetWithHttpInfo(param.ids,  options).toPromise();
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Returns an array of granted and declined permissions related to the universes with the ids in ids for the authenticated user.
     * @param param the request object
     */
    public v1UniversesMultigetPermissionsGet(param: UniversesApiV1UniversesMultigetPermissionsGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel> {
        return this.api.v1UniversesMultigetPermissionsGet(param.ids,  options).toPromise();
    }

    /**
     * Activates a universes.
     * @param param the request object
     */
    public v1UniversesUniverseIdActivatePostWithHttpInfo(param: UniversesApiV1UniversesUniverseIdActivatePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UniversesUniverseIdActivatePostWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Activates a universes.
     * @param param the request object
     */
    public v1UniversesUniverseIdActivatePost(param: UniversesApiV1UniversesUniverseIdActivatePostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UniversesUniverseIdActivatePost(param.universeId,  options).toPromise();
    }

    /**
     * Deactivates a universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdDeactivatePostWithHttpInfo(param: UniversesApiV1UniversesUniverseIdDeactivatePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UniversesUniverseIdDeactivatePostWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Deactivates a universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdDeactivatePost(param: UniversesApiV1UniversesUniverseIdDeactivatePostRequest, options?: Configuration): Promise<any> {
        return this.api.v1UniversesUniverseIdDeactivatePost(param.universeId,  options).toPromise();
    }

    /**
     * Gets a Roblox.Api.Develop.Models.UniverseModel.
     * @param param the request object
     */
    public v1UniversesUniverseIdGetWithHttpInfo(param: UniversesApiV1UniversesUniverseIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniverseModel>> {
        return this.api.v1UniversesUniverseIdGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Gets a Roblox.Api.Develop.Models.UniverseModel.
     * @param param the request object
     */
    public v1UniversesUniverseIdGet(param: UniversesApiV1UniversesUniverseIdGetRequest, options?: Configuration): Promise<RobloxApiDevelopModelsUniverseModel> {
        return this.api.v1UniversesUniverseIdGet(param.universeId,  options).toPromise();
    }

    /**
     * Returns list of granted and declined permissions related to the universe with the id universeId for authenticated user
     * @param param the request object
     */
    public v1UniversesUniverseIdPermissionsGetWithHttpInfo(param: UniversesApiV1UniversesUniverseIdPermissionsGetRequest, options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniversePermissionsModel>> {
        return this.api.v1UniversesUniverseIdPermissionsGetWithHttpInfo(param.universeId,  options).toPromise();
    }

    /**
     * Returns list of granted and declined permissions related to the universe with the id universeId for authenticated user
     * @param param the request object
     */
    public v1UniversesUniverseIdPermissionsGet(param: UniversesApiV1UniversesUniverseIdPermissionsGetRequest, options?: Configuration): Promise<RobloxApiDevelopModelsUniversePermissionsModel> {
        return this.api.v1UniversesUniverseIdPermissionsGet(param.universeId,  options).toPromise();
    }

    /**
     * Gets a list of places for a universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdPlacesGetWithHttpInfo(param: UniversesApiV1UniversesUniverseIdPlacesGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel>> {
        return this.api.v1UniversesUniverseIdPlacesGetWithHttpInfo(param.universeId, param.isUniverseCreation, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of places for a universe.
     * @param param the request object
     */
    public v1UniversesUniverseIdPlacesGet(param: UniversesApiV1UniversesUniverseIdPlacesGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel> {
        return this.api.v1UniversesUniverseIdPlacesGet(param.universeId, param.isUniverseCreation, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiV1UserGroupsCanmanageGetRequest {
}

export interface UserApiV1UserGroupsCanmanagegamesoritemsGetRequest {
}

export interface UserApiV1UserUniversesGetRequest {
    /**
     * Whether or not to return archived games.
     * @type boolean
     * @memberof UserApiv1UserUniversesGet
     */
    isArchived?: boolean
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof UserApiv1UserUniversesGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof UserApiv1UserUniversesGet
     */
    cursor?: string
    /**
     * Sorted by universeId
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof UserApiv1UserUniversesGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export interface UserApiV1UserUserIdCanmanageAssetIdGetRequest {
    /**
     * The ID of the user.
     * @type number
     * @memberof UserApiv1UserUserIdCanmanageAssetIdGet
     */
    userId: number
    /**
     * The ID of the asset.
     * @type number
     * @memberof UserApiv1UserUserIdCanmanageAssetIdGet
     */
    assetId: number
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a list of Groups that a user can manage.
     * @param param the request object
     */
    public v1UserGroupsCanmanageGetWithHttpInfo(param: UserApiV1UserGroupsCanmanageGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel>> {
        return this.api.v1UserGroupsCanmanageGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets a list of Groups that a user can manage.
     * @param param the request object
     */
    public v1UserGroupsCanmanageGet(param: UserApiV1UserGroupsCanmanageGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel> {
        return this.api.v1UserGroupsCanmanageGet( options).toPromise();
    }

    /**
     * Gets a list of groups a user can manage games or items for.
     * @param param the request object
     */
    public v1UserGroupsCanmanagegamesoritemsGetWithHttpInfo(param: UserApiV1UserGroupsCanmanagegamesoritemsGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel>> {
        return this.api.v1UserGroupsCanmanagegamesoritemsGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets a list of groups a user can manage games or items for.
     * @param param the request object
     */
    public v1UserGroupsCanmanagegamesoritemsGet(param: UserApiV1UserGroupsCanmanagegamesoritemsGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel> {
        return this.api.v1UserGroupsCanmanagegamesoritemsGet( options).toPromise();
    }

    /**
     * Gets a list of universes for the authenticated user.
     * @param param the request object
     */
    public v1UserUniversesGetWithHttpInfo(param: UserApiV1UserUniversesGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel>> {
        return this.api.v1UserUniversesGetWithHttpInfo(param.isArchived, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Gets a list of universes for the authenticated user.
     * @param param the request object
     */
    public v1UserUniversesGet(param: UserApiV1UserUniversesGetRequest = {}, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel> {
        return this.api.v1UserUniversesGet(param.isArchived, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Returns whether the user can manage a given asset.
     * @param param the request object
     */
    public v1UserUserIdCanmanageAssetIdGetWithHttpInfo(param: UserApiV1UserUserIdCanmanageAssetIdGetRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.v1UserUserIdCanmanageAssetIdGetWithHttpInfo(param.userId, param.assetId,  options).toPromise();
    }

    /**
     * Returns whether the user can manage a given asset.
     * @param param the request object
     */
    public v1UserUserIdCanmanageAssetIdGet(param: UserApiV1UserUserIdCanmanageAssetIdGetRequest, options?: Configuration): Promise<void> {
        return this.api.v1UserUserIdCanmanageAssetIdGet(param.userId, param.assetId,  options).toPromise();
    }

}
