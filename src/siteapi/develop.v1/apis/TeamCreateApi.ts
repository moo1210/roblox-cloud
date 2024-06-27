import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from '../../../common/apis/baseapi';
import {Configuration} from '../../../common/configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../../../common/http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from '../../../common/apis/exception';
import {canConsumeForm, isCodeInRange} from '../../../common/util';
import {SecurityAuthentication} from '../../../common/auth/auth';


import { RobloxApiDevelopModelsResponseTeamCreateSettingsResponse } from '../models/RobloxApiDevelopModelsResponseTeamCreateSettingsResponse';
import { RobloxApiDevelopModelsTeamCreateMembershipRequest } from '../models/RobloxApiDevelopModelsTeamCreateMembershipRequest';
import { RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest } from '../models/RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse';

/**
 * no description
 */
export class TeamCreateApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List of users in the active Team Create session
     * @param placeId The place Id.
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public async v1PlacesPlaceIdTeamcreateActiveSessionMembersGet(placeId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'placeId' is not null or undefined
        if (placeId === null || placeId === undefined) {
            throw new RequiredError("TeamCreateApi", "v1PlacesPlaceIdTeamcreateActiveSessionMembersGet", "placeId");
        }




        // Path Params
        const localVarPath = '/v1/places/{placeId}/teamcreate/active_session/members'
            .replace('{' + 'placeId' + '}', encodeURIComponent(String(placeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "10 | 25 | 50 | 100", "int32"));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets TeamCreate settings for multiple universes specified by Ids
     * @param ids 
     */
    public async v1UniversesMultigetTeamcreateGet(ids: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'ids' is not null or undefined
        if (ids === null || ids === undefined) {
            throw new RequiredError("TeamCreateApi", "v1UniversesMultigetTeamcreateGet", "ids");
        }


        // Path Params
        const localVarPath = '/v1/universes/multiget/teamcreate';

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ids !== undefined) {
            requestContext.setQueryParam("ids", ObjectSerializer.serialize(ids, "Array<number>", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets TeamCreate settings for an Roblox.Platform.Universes.IUniverse.
     * @param universeId The universe Id.
     */
    public async v1UniversesUniverseIdTeamcreateGet(universeId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("TeamCreateApi", "v1UniversesUniverseIdTeamcreateGet", "universeId");
        }


        // Path Params
        const localVarPath = '/v1/universes/{universeId}/teamcreate'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Removes a user from a TeamCreate permissions list.
     * @param universeId The universe Id.
     * @param request The request body.
     */
    public async v1UniversesUniverseIdTeamcreateMembershipsDelete(universeId: number, request: RobloxApiDevelopModelsTeamCreateMembershipRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("TeamCreateApi", "v1UniversesUniverseIdTeamcreateMembershipsDelete", "universeId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("TeamCreateApi", "v1UniversesUniverseIdTeamcreateMembershipsDelete", "request");
        }


        // Path Params
        const localVarPath = '/v1/universes/{universeId}/teamcreate/memberships'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxApiDevelopModelsTeamCreateMembershipRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Enables, or disables team create for a universe.
     * Edit team create settings for a universe.
     * @param universeId The universe Id.
     * @param request The request body containing the team create settings.
     */
    public async v1UniversesUniverseIdTeamcreatePatch(universeId: number, request: RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'universeId' is not null or undefined
        if (universeId === null || universeId === undefined) {
            throw new RequiredError("TeamCreateApi", "v1UniversesUniverseIdTeamcreatePatch", "universeId");
        }


        // verify required parameter 'request' is not null or undefined
        if (request === null || request === undefined) {
            throw new RequiredError("TeamCreateApi", "v1UniversesUniverseIdTeamcreatePatch", "request");
        }


        // Path Params
        const localVarPath = '/v1/universes/{universeId}/teamcreate'
            .replace('{' + 'universeId' + '}', encodeURIComponent(String(universeId)));

        // Make Request Context
        const requestContext = _config.getServer('https://develop.roblox.com').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json",
        
            "text/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(request, "RobloxApiDevelopModelsUpdateTeamCreateSettingsRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TeamCreateApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1PlacesPlaceIdTeamcreateActiveSessionMembersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1PlacesPlaceIdTeamcreateActiveSessionMembersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "1: The universe is invalid.  5: The place is invalid.", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "2: Not authorized to perform this action.  4: TeamCreate on universe is disabled.", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: An unknown error occurred.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "6: Multiple active sessions in a Team Create place.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxWebResponsesUsersSkinnyUserResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UniversesMultigetTeamcreateGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UniversesMultigetTeamcreateGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.TooManyUniverseIdsSent", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel", ""
            ) as RobloxWebWebAPIModelsApiArrayResponseRobloxApiDevelopModelsUniverseTeamCreateSettingsModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UniversesUniverseIdTeamcreateGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UniversesUniverseIdTeamcreateGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<RobloxApiDevelopModelsResponseTeamCreateSettingsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RobloxApiDevelopModelsResponseTeamCreateSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsResponseTeamCreateSettingsResponse", ""
            ) as RobloxApiDevelopModelsResponseTeamCreateSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RobloxApiDevelopModelsResponseTeamCreateSettingsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RobloxApiDevelopModelsResponseTeamCreateSettingsResponse", ""
            ) as RobloxApiDevelopModelsResponseTeamCreateSettingsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UniversesUniverseIdTeamcreateMembershipsDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UniversesUniverseIdTeamcreateMembershipsDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse OR Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUser", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.TeamCreateDisabled  0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to v1UniversesUniverseIdTeamcreatePatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async v1UniversesUniverseIdTeamcreatePatchWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.Unauthorized  0: Token Validation Failed", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "0: Authorization has been denied for this request.", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
