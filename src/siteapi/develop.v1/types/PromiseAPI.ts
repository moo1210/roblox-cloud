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
import { ObservableAliasesApi } from './ObservableAPI';

import { AliasesApiRequestFactory, AliasesApiResponseProcessor} from "../apis/AliasesApi";
export class PromiseAliasesApi {
    private api: ObservableAliasesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasesApiRequestFactory,
        responseProcessor?: AliasesApiResponseProcessor
    ) {
        this.api = new ObservableAliasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an alias.
     * @param universeId The universe id.
     * @param name The name of the alias to delete.
     */
    public v1UniversesUniverseIdAliasesNameDeleteWithHttpInfo(universeId: number, name: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UniversesUniverseIdAliasesNameDeleteWithHttpInfo(universeId, name, _options);
        return result.toPromise();
    }

    /**
     * Deletes an alias.
     * @param universeId The universe id.
     * @param name The name of the alias to delete.
     */
    public v1UniversesUniverseIdAliasesNameDelete(universeId: number, name: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1UniversesUniverseIdAliasesNameDelete(universeId, name, _options);
        return result.toPromise();
    }

    /**
     * Updates an alias.
     * @param universeId The universe Id.
     * @param name The name of the alias to update.
     * @param request The request body containing the alias attributes to update.
     */
    public v1UniversesUniverseIdAliasesNamePatchWithHttpInfo(universeId: number, name: string, request: RobloxApiDevelopModelsAliasRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UniversesUniverseIdAliasesNamePatchWithHttpInfo(universeId, name, request, _options);
        return result.toPromise();
    }

    /**
     * Updates an alias.
     * @param universeId The universe Id.
     * @param name The name of the alias to update.
     * @param request The request body containing the alias attributes to update.
     */
    public v1UniversesUniverseIdAliasesNamePatch(universeId: number, name: string, request: RobloxApiDevelopModelsAliasRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1UniversesUniverseIdAliasesNamePatch(universeId, name, request, _options);
        return result.toPromise();
    }

    /**
     * Creates an alias.
     * @param universeId The universe Id.
     * @param request The request body containing the alias attributes.
     */
    public v1UniversesUniverseIdAliasesPostWithHttpInfo(universeId: number, request: RobloxApiDevelopModelsAliasRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UniversesUniverseIdAliasesPostWithHttpInfo(universeId, request, _options);
        return result.toPromise();
    }

    /**
     * Creates an alias.
     * @param universeId The universe Id.
     * @param request The request body containing the alias attributes.
     */
    public v1UniversesUniverseIdAliasesPost(universeId: number, request: RobloxApiDevelopModelsAliasRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1UniversesUniverseIdAliasesPost(universeId, request, _options);
        return result.toPromise();
    }


}



import { ObservableAssetsApi } from './ObservableAPI';

import { AssetsApiRequestFactory, AssetsApiResponseProcessor} from "../apis/AssetsApi";
export class PromiseAssetsApi {
    private api: ObservableAssetsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AssetsApiRequestFactory,
        responseProcessor?: AssetsApiResponseProcessor
    ) {
        this.api = new ObservableAssetsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets the voting information of the given assets
     * @param assetIds The ids of the Roblox.Platform.Assets.IAsset.
     */
    public v1AssetsVotingGetWithHttpInfo(assetIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel>> {
        const result = this.api.v1AssetsVotingGetWithHttpInfo(assetIds, _options);
        return result.toPromise();
    }

    /**
     * Gets the voting information of the given assets
     * @param assetIds The ids of the Roblox.Platform.Assets.IAsset.
     */
    public v1AssetsVotingGet(assetIds: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsResponseAssetVotingModel> {
        const result = this.api.v1AssetsVotingGet(assetIds, _options);
        return result.toPromise();
    }


}



import { ObservableGameTemplatesApi } from './ObservableAPI';

import { GameTemplatesApiRequestFactory, GameTemplatesApiResponseProcessor} from "../apis/GameTemplatesApi";
export class PromiseGameTemplatesApi {
    private api: ObservableGameTemplatesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GameTemplatesApiRequestFactory,
        responseProcessor?: GameTemplatesApiResponseProcessor
    ) {
        this.api = new ObservableGameTemplatesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Templates subject to change without notice.  Sort order of templates specified by Roblox.
     * Gets a page of templates that can be used to start off making games.
     */
    public v1GametemplatesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel>> {
        const result = this.api.v1GametemplatesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Templates subject to change without notice.  Sort order of templates specified by Roblox.
     * Gets a page of templates that can be used to start off making games.
     */
    public v1GametemplatesGet(_options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGameTemplateModel> {
        const result = this.api.v1GametemplatesGet(_options);
        return result.toPromise();
    }


}



import { ObservableGroupsApi } from './ObservableAPI';

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class PromiseGroupsApi {
    private api: ObservableGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a list of universes for the given group.
     * @param groupId The group id.
     * @param isArchived Whether or not to return archived games.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by universeId
     */
    public v1GroupsGroupIdUniversesGetWithHttpInfo(groupId: number, isArchived?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel>> {
        const result = this.api.v1GroupsGroupIdUniversesGetWithHttpInfo(groupId, isArchived, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of universes for the given group.
     * @param groupId The group id.
     * @param isArchived Whether or not to return archived games.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by universeId
     */
    public v1GroupsGroupIdUniversesGet(groupId: number, isArchived?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel> {
        const result = this.api.v1GroupsGroupIdUniversesGet(groupId, isArchived, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



import { ObservablePlacesApi } from './ObservableAPI';

import { PlacesApiRequestFactory, PlacesApiResponseProcessor} from "../apis/PlacesApi";
export class PromisePlacesApi {
    private api: ObservablePlacesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlacesApiRequestFactory,
        responseProcessor?: PlacesApiResponseProcessor
    ) {
        this.api = new ObservablePlacesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v1PlacesPlaceIdPatchWithHttpInfo(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModel>> {
        const result = this.api.v1PlacesPlaceIdPatchWithHttpInfo(placeId, configuration, _options);
        return result.toPromise();
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v1PlacesPlaceIdPatch(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Promise<RobloxApiDevelopModelsPlaceModel> {
        const result = this.api.v1PlacesPlaceIdPatch(placeId, configuration, _options);
        return result.toPromise();
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v1PlacesPlaceIdPostWithHttpInfo(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPlaceModel>> {
        const result = this.api.v1PlacesPlaceIdPostWithHttpInfo(placeId, configuration, _options);
        return result.toPromise();
    }

    /**
     * Currently the only supported functionality for updating the configuration is around Name, and Description.
     * Updates the place configuration for the place with the id placeId
     * @param placeId The place id for the place to be updated.
     * @param configuration 
     */
    public v1PlacesPlaceIdPost(placeId: number, configuration: RobloxApiDevelopModelsPlaceConfigurationModel, _options?: Configuration): Promise<RobloxApiDevelopModelsPlaceModel> {
        const result = this.api.v1PlacesPlaceIdPost(placeId, configuration, _options);
        return result.toPromise();
    }


}



import { ObservablePluginsApi } from './ObservableAPI';

import { PluginsApiRequestFactory, PluginsApiResponseProcessor} from "../apis/PluginsApi";
export class PromisePluginsApi {
    private api: ObservablePluginsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PluginsApiRequestFactory,
        responseProcessor?: PluginsApiResponseProcessor
    ) {
        this.api = new ObservablePluginsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets plugin details by ids.
     * @param pluginIds The plugin ids.
     */
    public v1PluginsGetWithHttpInfo(pluginIds: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse>> {
        const result = this.api.v1PluginsGetWithHttpInfo(pluginIds, _options);
        return result.toPromise();
    }

    /**
     * Gets plugin details by ids.
     * @param pluginIds The plugin ids.
     */
    public v1PluginsGet(pluginIds: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesPluginsPluginResponse> {
        const result = this.api.v1PluginsGet(pluginIds, _options);
        return result.toPromise();
    }

    /**
     * Updates a plugin.
     * @param pluginId The id of the plugin.
     * @param request The Roblox.Develop.Api.UpdatePluginRequest.
     */
    public v1PluginsPluginIdPatchWithHttpInfo(pluginId: number, request: RobloxDevelopApiUpdatePluginRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1PluginsPluginIdPatchWithHttpInfo(pluginId, request, _options);
        return result.toPromise();
    }

    /**
     * Updates a plugin.
     * @param pluginId The id of the plugin.
     * @param request The Roblox.Develop.Api.UpdatePluginRequest.
     */
    public v1PluginsPluginIdPatch(pluginId: number, request: RobloxDevelopApiUpdatePluginRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1PluginsPluginIdPatch(pluginId, request, _options);
        return result.toPromise();
    }


}



import { ObservableTeamCreateApi } from './ObservableAPI';

import { TeamCreateApiRequestFactory, TeamCreateApiResponseProcessor} from "../apis/TeamCreateApi";
export class PromiseTeamCreateApi {
    private api: ObservableTeamCreateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamCreateApiRequestFactory,
        responseProcessor?: TeamCreateApiResponseProcessor
    ) {
        this.api = new ObservableTeamCreateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * List of users in the active Team Create session
     * @param placeId The place Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1PlacesPlaceIdTeamcreateActiveSessionMembersGetWithHttpInfo(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse>> {
        const result = this.api.v1PlacesPlaceIdTeamcreateActiveSessionMembersGetWithHttpInfo(placeId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * List of users in the active Team Create session
     * @param placeId The place Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1PlacesPlaceIdTeamcreateActiveSessionMembersGet(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse> {
        const result = this.api.v1PlacesPlaceIdTeamcreateActiveSessionMembersGet(placeId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Gets TeamCreate settings for multiple universes specified by Ids
     * @param ids 
     */
    public v1UniversesMultigetTeamcreateGetWithHttpInfo(ids: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel>> {
        const result = this.api.v1UniversesMultigetTeamcreateGetWithHttpInfo(ids, _options);
        return result.toPromise();
    }

    /**
     * Gets TeamCreate settings for multiple universes specified by Ids
     * @param ids 
     */
    public v1UniversesMultigetTeamcreateGet(ids: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel> {
        const result = this.api.v1UniversesMultigetTeamcreateGet(ids, _options);
        return result.toPromise();
    }

    /**
     * Gets TeamCreate settings for an Roblox.Platform.Universes.IUniverse.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdTeamcreateGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsResponseTeamCreateSettingsResponse>> {
        const result = this.api.v1UniversesUniverseIdTeamcreateGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Gets TeamCreate settings for an Roblox.Platform.Universes.IUniverse.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdTeamcreateGet(universeId: number, _options?: Configuration): Promise<RobloxApiDevelopModelsResponseTeamCreateSettingsResponse> {
        const result = this.api.v1UniversesUniverseIdTeamcreateGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Removes a user from a TeamCreate permissions list.
     * @param universeId The universe Id.
     * @param request The request body.
     */
    public v1UniversesUniverseIdTeamcreateMembershipsDeleteWithHttpInfo(universeId: number, request: RobloxApiDevelopModelsTeamCreateMembershipRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UniversesUniverseIdTeamcreateMembershipsDeleteWithHttpInfo(universeId, request, _options);
        return result.toPromise();
    }

    /**
     * Removes a user from a TeamCreate permissions list.
     * @param universeId The universe Id.
     * @param request The request body.
     */
    public v1UniversesUniverseIdTeamcreateMembershipsDelete(universeId: number, request: RobloxApiDevelopModelsTeamCreateMembershipRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1UniversesUniverseIdTeamcreateMembershipsDelete(universeId, request, _options);
        return result.toPromise();
    }

    /**
     * Enables, or disables team create for a universe.
     * Edit team create settings for a universe.
     * @param universeId The universe Id.
     * @param request The request body containing the team create settings.
     */
    public v1UniversesUniverseIdTeamcreatePatchWithHttpInfo(universeId: number, request: RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UniversesUniverseIdTeamcreatePatchWithHttpInfo(universeId, request, _options);
        return result.toPromise();
    }

    /**
     * Enables, or disables team create for a universe.
     * Edit team create settings for a universe.
     * @param universeId The universe Id.
     * @param request The request body containing the team create settings.
     */
    public v1UniversesUniverseIdTeamcreatePatch(universeId: number, request: RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1UniversesUniverseIdTeamcreatePatch(universeId, request, _options);
        return result.toPromise();
    }


}



import { ObservableUniverseSettingsApi } from './ObservableAPI';

import { UniverseSettingsApiRequestFactory, UniverseSettingsApiResponseProcessor} from "../apis/UniverseSettingsApi";
export class PromiseUniverseSettingsApi {
    private api: ObservableUniverseSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UniverseSettingsApiRequestFactory,
        responseProcessor?: UniverseSettingsApiResponseProcessor
    ) {
        this.api = new ObservableUniverseSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get settings for an owned universe.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdConfigurationGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponse>> {
        const result = this.api.v1UniversesUniverseIdConfigurationGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get settings for an owned universe.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdConfigurationGet(universeId: number, _options?: Configuration): Promise<RobloxApiDevelopModelsUniverseSettingsResponse> {
        const result = this.api.v1UniversesUniverseIdConfigurationGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Update universe settings for an owned universe.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public v1UniversesUniverseIdConfigurationPatchWithHttpInfo(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequest, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniverseSettingsResponse>> {
        const result = this.api.v1UniversesUniverseIdConfigurationPatchWithHttpInfo(universeId, model, _options);
        return result.toPromise();
    }

    /**
     * Update universe settings for an owned universe.
     * @param universeId The universeId.
     * @param model The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
     */
    public v1UniversesUniverseIdConfigurationPatch(universeId: number, model: RobloxApiDevelopModelsUniverseSettingsRequest, _options?: Configuration): Promise<RobloxApiDevelopModelsUniverseSettingsResponse> {
        const result = this.api.v1UniversesUniverseIdConfigurationPatch(universeId, model, _options);
        return result.toPromise();
    }

    /**
     * Get settings for an owned universe\'s VIP servers.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdConfigurationVipServersGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsPrivateServerDetailsResponse>> {
        const result = this.api.v1UniversesUniverseIdConfigurationVipServersGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Get settings for an owned universe\'s VIP servers.
     * @param universeId The universe Id.
     */
    public v1UniversesUniverseIdConfigurationVipServersGet(universeId: number, _options?: Configuration): Promise<RobloxApiDevelopModelsPrivateServerDetailsResponse> {
        const result = this.api.v1UniversesUniverseIdConfigurationVipServersGet(universeId, _options);
        return result.toPromise();
    }


}



import { ObservableUniversesApi } from './ObservableAPI';

import { UniversesApiRequestFactory, UniversesApiResponseProcessor} from "../apis/UniversesApi";
export class PromiseUniversesApi {
    private api: ObservableUniversesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UniversesApiRequestFactory,
        responseProcessor?: UniversesApiResponseProcessor
    ) {
        this.api = new ObservableUniversesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Gets a System.Collections.Generic.List`1.
     * @param ids The universe IDs to get. Limit 100.
     */
    public v1UniversesMultigetGetWithHttpInfo(ids: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel>> {
        const result = this.api.v1UniversesMultigetGetWithHttpInfo(ids, _options);
        return result.toPromise();
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Gets a System.Collections.Generic.List`1.
     * @param ids The universe IDs to get. Limit 100.
     */
    public v1UniversesMultigetGet(ids: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseModel> {
        const result = this.api.v1UniversesMultigetGet(ids, _options);
        return result.toPromise();
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Returns an array of granted and declined permissions related to the universes with the ids in ids for the authenticated user.
     * @param ids The universe ids.
     */
    public v1UniversesMultigetPermissionsGetWithHttpInfo(ids: Array<number>, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel>> {
        const result = this.api.v1UniversesMultigetPermissionsGetWithHttpInfo(ids, _options);
        return result.toPromise();
    }

    /**
     * If a universe can not be found for a given ID (such as -1) it will be skipped.
     * Returns an array of granted and declined permissions related to the universes with the ids in ids for the authenticated user.
     * @param ids The universe ids.
     */
    public v1UniversesMultigetPermissionsGet(ids: Array<number>, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseIdPermissionsModel> {
        const result = this.api.v1UniversesMultigetPermissionsGet(ids, _options);
        return result.toPromise();
    }

    /**
     * Activates a universes.
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdActivatePostWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UniversesUniverseIdActivatePostWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Activates a universes.
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdActivatePost(universeId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1UniversesUniverseIdActivatePost(universeId, _options);
        return result.toPromise();
    }

    /**
     * Deactivates a universe.
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdDeactivatePostWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UniversesUniverseIdDeactivatePostWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Deactivates a universe.
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdDeactivatePost(universeId: number, _options?: Configuration): Promise<any> {
        const result = this.api.v1UniversesUniverseIdDeactivatePost(universeId, _options);
        return result.toPromise();
    }

    /**
     * Gets a Roblox.Api.Develop.Models.UniverseModel.
     * @param universeId The Universe id.
     */
    public v1UniversesUniverseIdGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniverseModel>> {
        const result = this.api.v1UniversesUniverseIdGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Gets a Roblox.Api.Develop.Models.UniverseModel.
     * @param universeId The Universe id.
     */
    public v1UniversesUniverseIdGet(universeId: number, _options?: Configuration): Promise<RobloxApiDevelopModelsUniverseModel> {
        const result = this.api.v1UniversesUniverseIdGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Returns list of granted and declined permissions related to the universe with the id universeId for authenticated user
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdPermissionsGetWithHttpInfo(universeId: number, _options?: Configuration): Promise<HttpInfo<RobloxApiDevelopModelsUniversePermissionsModel>> {
        const result = this.api.v1UniversesUniverseIdPermissionsGetWithHttpInfo(universeId, _options);
        return result.toPromise();
    }

    /**
     * Returns list of granted and declined permissions related to the universe with the id universeId for authenticated user
     * @param universeId The universe id.
     */
    public v1UniversesUniverseIdPermissionsGet(universeId: number, _options?: Configuration): Promise<RobloxApiDevelopModelsUniversePermissionsModel> {
        const result = this.api.v1UniversesUniverseIdPermissionsGet(universeId, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of places for a universe.
     * @param universeId The asset id.
     * @param isUniverseCreation 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by placeId
     */
    public v1UniversesUniverseIdPlacesGetWithHttpInfo(universeId: number, isUniverseCreation?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel>> {
        const result = this.api.v1UniversesUniverseIdPlacesGetWithHttpInfo(universeId, isUniverseCreation, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of places for a universe.
     * @param universeId The asset id.
     * @param isUniverseCreation 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by placeId
     */
    public v1UniversesUniverseIdPlacesGet(universeId: number, isUniverseCreation?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsIPlaceModel> {
        const result = this.api.v1UniversesUniverseIdPlacesGet(universeId, isUniverseCreation, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Gets a list of Groups that a user can manage.
     */
    public v1UserGroupsCanmanageGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel>> {
        const result = this.api.v1UserGroupsCanmanageGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets a list of Groups that a user can manage.
     */
    public v1UserGroupsCanmanageGet(_options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel> {
        const result = this.api.v1UserGroupsCanmanageGet(_options);
        return result.toPromise();
    }

    /**
     * Gets a list of groups a user can manage games or items for.
     */
    public v1UserGroupsCanmanagegamesoritemsGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel>> {
        const result = this.api.v1UserGroupsCanmanagegamesoritemsGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets a list of groups a user can manage games or items for.
     */
    public v1UserGroupsCanmanagegamesoritemsGet(_options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsGroupModel> {
        const result = this.api.v1UserGroupsCanmanagegamesoritemsGet(_options);
        return result.toPromise();
    }

    /**
     * Gets a list of universes for the authenticated user.
     * @param isArchived Whether or not to return archived games.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by universeId
     */
    public v1UserUniversesGetWithHttpInfo(isArchived?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel>> {
        const result = this.api.v1UserUniversesGetWithHttpInfo(isArchived, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Gets a list of universes for the authenticated user.
     * @param isArchived Whether or not to return archived games.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder Sorted by universeId
     */
    public v1UserUniversesGet(isArchived?: boolean, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxApiDevelopModelsUniverseModel> {
        const result = this.api.v1UserUniversesGet(isArchived, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Returns whether the user can manage a given asset.
     * @param userId The ID of the user.
     * @param assetId The ID of the asset.
     */
    public v1UserUserIdCanmanageAssetIdGetWithHttpInfo(userId: number, assetId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.v1UserUserIdCanmanageAssetIdGetWithHttpInfo(userId, assetId, _options);
        return result.toPromise();
    }

    /**
     * Returns whether the user can manage a given asset.
     * @param userId The ID of the user.
     * @param assetId The ID of the asset.
     */
    public v1UserUserIdCanmanageAssetIdGet(userId: number, assetId: number, _options?: Configuration): Promise<void> {
        const result = this.api.v1UserUserIdCanmanageAssetIdGet(userId, assetId, _options);
        return result.toPromise();
    }


}



