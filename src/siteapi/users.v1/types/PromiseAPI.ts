import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxPagingExclusiveStartKeyCursorSystemNullableSystemInt64 } from '../models/RobloxPagingExclusiveStartKeyCursorSystemNullableSystemInt64';
import { RobloxPagingStartIndexCursor } from '../models/RobloxPagingStartIndexCursor';
import { RobloxUsersApiAuthenticatedUserResponse } from '../models/RobloxUsersApiAuthenticatedUserResponse';
import { RobloxUsersApiBirthdateRequest } from '../models/RobloxUsersApiBirthdateRequest';
import { RobloxUsersApiBirthdateResponse } from '../models/RobloxUsersApiBirthdateResponse';
import { RobloxUsersApiDescriptionRequest } from '../models/RobloxUsersApiDescriptionRequest';
import { RobloxUsersApiDescriptionResponse } from '../models/RobloxUsersApiDescriptionResponse';
import { RobloxUsersApiGenderRequest } from '../models/RobloxUsersApiGenderRequest';
import { RobloxUsersApiGenderResponse } from '../models/RobloxUsersApiGenderResponse';
import { RobloxUsersApiGetUserResponse } from '../models/RobloxUsersApiGetUserResponse';
import { RobloxUsersApiMultiGetByUserIdRequest } from '../models/RobloxUsersApiMultiGetByUserIdRequest';
import { RobloxUsersApiMultiGetByUsernameRequest } from '../models/RobloxUsersApiMultiGetByUsernameRequest';
import { RobloxUsersApiMultiGetUserByNameResponse } from '../models/RobloxUsersApiMultiGetUserByNameResponse';
import { RobloxUsersApiSetDisplayNameRequest } from '../models/RobloxUsersApiSetDisplayNameRequest';
import { RobloxUsersApiUserAgeBracketResponse } from '../models/RobloxUsersApiUserAgeBracketResponse';
import { RobloxUsersApiUserCountryCodeResponse } from '../models/RobloxUsersApiUserCountryCodeResponse';
import { RobloxUsersApiUserRolesResponse } from '../models/RobloxUsersApiUserRolesResponse';
import { RobloxUsersApiUserSearchResponse } from '../models/RobloxUsersApiUserSearchResponse';
import { RobloxUsersApiUsernameHistoryResponse } from '../models/RobloxUsersApiUsernameHistoryResponse';
import { RobloxUsersApiVerifiedBadgeUserResponse } from '../models/RobloxUsersApiVerifiedBadgeUserResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse';
import { RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse } from '../models/RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse';
import { RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse } from '../models/RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse';
import { ObservableAccountInformationApi } from './ObservableAPI';

import { AccountInformationApiRequestFactory, AccountInformationApiResponseProcessor} from "../apis/AccountInformationApi";
export class PromiseAccountInformationApi {
    private api: ObservableAccountInformationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountInformationApiRequestFactory,
        responseProcessor?: AccountInformationApiResponseProcessor
    ) {
        this.api = new ObservableAccountInformationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the user\'s birthdate
     */
    public v1BirthdateGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxUsersApiBirthdateResponse>> {
        const result = this.api.v1BirthdateGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the user\'s birthdate
     */
    public v1BirthdateGet(_options?: Configuration): Promise<RobloxUsersApiBirthdateResponse> {
        const result = this.api.v1BirthdateGet(_options);
        return result.toPromise();
    }

    /**
     * Update the user\'s birthdate
     * @param request The Roblox.Users.Api.BirthdateRequest
     */
    public v1BirthdatePostWithHttpInfo(request: RobloxUsersApiBirthdateRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1BirthdatePostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Update the user\'s birthdate
     * @param request The Roblox.Users.Api.BirthdateRequest
     */
    public v1BirthdatePost(request: RobloxUsersApiBirthdateRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1BirthdatePost(request, _options);
        return result.toPromise();
    }

    /**
     * Get the user\'s description
     */
    public v1DescriptionGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxUsersApiDescriptionResponse>> {
        const result = this.api.v1DescriptionGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the user\'s description
     */
    public v1DescriptionGet(_options?: Configuration): Promise<RobloxUsersApiDescriptionResponse> {
        const result = this.api.v1DescriptionGet(_options);
        return result.toPromise();
    }

    /**
     * Update the user\'s description
     * @param request The Roblox.Users.Api.DescriptionRequest
     */
    public v1DescriptionPostWithHttpInfo(request: RobloxUsersApiDescriptionRequest, _options?: Configuration): Promise<HttpInfo<RobloxUsersApiDescriptionResponse>> {
        const result = this.api.v1DescriptionPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Update the user\'s description
     * @param request The Roblox.Users.Api.DescriptionRequest
     */
    public v1DescriptionPost(request: RobloxUsersApiDescriptionRequest, _options?: Configuration): Promise<RobloxUsersApiDescriptionResponse> {
        const result = this.api.v1DescriptionPost(request, _options);
        return result.toPromise();
    }

    /**
     * Get the user\'s gender
     */
    public v1GenderGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxUsersApiGenderResponse>> {
        const result = this.api.v1GenderGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get the user\'s gender
     */
    public v1GenderGet(_options?: Configuration): Promise<RobloxUsersApiGenderResponse> {
        const result = this.api.v1GenderGet(_options);
        return result.toPromise();
    }

    /**
     * Update the user\'s gender
     * @param request The Roblox.Users.Api.GenderRequest
     */
    public v1GenderPostWithHttpInfo(request: RobloxUsersApiGenderRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1GenderPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Update the user\'s gender
     * @param request The Roblox.Users.Api.GenderRequest
     */
    public v1GenderPost(request: RobloxUsersApiGenderRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1GenderPost(request, _options);
        return result.toPromise();
    }


}



import { ObservableDisplayNamesApi } from './ObservableAPI';

import { DisplayNamesApiRequestFactory, DisplayNamesApiResponseProcessor} from "../apis/DisplayNamesApi";
export class PromiseDisplayNamesApi {
    private api: ObservableDisplayNamesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DisplayNamesApiRequestFactory,
        responseProcessor?: DisplayNamesApiResponseProcessor
    ) {
        this.api = new ObservableDisplayNamesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validate a display name for a new user.
     * @param displayName The display name.
     * @param birthdate The new user\&#39;s birthdate
     */
    public v1DisplayNamesValidateGetWithHttpInfo(displayName: string, birthdate: Date, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1DisplayNamesValidateGetWithHttpInfo(displayName, birthdate, _options);
        return result.toPromise();
    }

    /**
     * Validate a display name for a new user.
     * @param displayName The display name.
     * @param birthdate The new user\&#39;s birthdate
     */
    public v1DisplayNamesValidateGet(displayName: string, birthdate: Date, _options?: Configuration): Promise<any> {
        const result = this.api.v1DisplayNamesValidateGet(displayName, birthdate, _options);
        return result.toPromise();
    }

    /**
     * Set the display name for the authorized user.
     * @param userId the user id
     * @param request Roblox.Users.Api.SetDisplayNameRequest
     */
    public v1UsersUserIdDisplayNamesPatchWithHttpInfo(userId: number, request: RobloxUsersApiSetDisplayNameRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersUserIdDisplayNamesPatchWithHttpInfo(userId, request, _options);
        return result.toPromise();
    }

    /**
     * Set the display name for the authorized user.
     * @param userId the user id
     * @param request Roblox.Users.Api.SetDisplayNameRequest
     */
    public v1UsersUserIdDisplayNamesPatch(userId: number, request: RobloxUsersApiSetDisplayNameRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersUserIdDisplayNamesPatch(userId, request, _options);
        return result.toPromise();
    }

    /**
     * Validate a display name for an existing user.
     * @param userId The user id.
     * @param displayName The display name.
     */
    public v1UsersUserIdDisplayNamesValidateGetWithHttpInfo(userId: number, displayName: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1UsersUserIdDisplayNamesValidateGetWithHttpInfo(userId, displayName, _options);
        return result.toPromise();
    }

    /**
     * Validate a display name for an existing user.
     * @param userId The user id.
     * @param displayName The display name.
     */
    public v1UsersUserIdDisplayNamesValidateGet(userId: number, displayName: string, _options?: Configuration): Promise<any> {
        const result = this.api.v1UsersUserIdDisplayNamesValidateGet(userId, displayName, _options);
        return result.toPromise();
    }


}



import { ObservableUserSearchApi } from './ObservableAPI';

import { UserSearchApiRequestFactory, UserSearchApiResponseProcessor} from "../apis/UserSearchApi";
export class PromiseUserSearchApi {
    private api: ObservableUserSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserSearchApiRequestFactory,
        responseProcessor?: UserSearchApiResponseProcessor
    ) {
        this.api = new ObservableUserSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Searches for users by keyword.
     * @param keyword The search keyword.
     * @param sessionId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1UsersSearchGetWithHttpInfo(keyword: string, sessionId?: string, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse>> {
        const result = this.api.v1UsersSearchGetWithHttpInfo(keyword, sessionId, limit, cursor, _options);
        return result.toPromise();
    }

    /**
     * Searches for users by keyword.
     * @param keyword The search keyword.
     * @param sessionId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1UsersSearchGet(keyword: string, sessionId?: string, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse> {
        const result = this.api.v1UsersSearchGet(keyword, sessionId, limit, cursor, _options);
        return result.toPromise();
    }


}



import { ObservableUsernamesApi } from './ObservableAPI';

import { UsernamesApiRequestFactory, UsernamesApiResponseProcessor} from "../apis/UsernamesApi";
export class PromiseUsernamesApi {
    private api: ObservableUsernamesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsernamesApiRequestFactory,
        responseProcessor?: UsernamesApiResponseProcessor
    ) {
        this.api = new ObservableUsernamesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the username history for a particular user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdUsernameHistoryGetWithHttpInfo(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse>> {
        const result = this.api.v1UsersUserIdUsernameHistoryGetWithHttpInfo(userId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the username history for a particular user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdUsernameHistoryGet(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse> {
        const result = this.api.v1UsersUserIdUsernameHistoryGet(userId, limit, cursor, sortOrder, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint will also check previous usernames.  Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by usernames.
     * @param request The Roblox.Users.Api.MultiGetByUsernameRequest.
     */
    public v1UsernamesUsersPostWithHttpInfo(request: RobloxUsersApiMultiGetByUsernameRequest, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse>> {
        const result = this.api.v1UsernamesUsersPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * This endpoint will also check previous usernames.  Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by usernames.
     * @param request The Roblox.Users.Api.MultiGetByUsernameRequest.
     */
    public v1UsernamesUsersPost(request: RobloxUsersApiMultiGetByUsernameRequest, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse> {
        const result = this.api.v1UsernamesUsersPost(request, _options);
        return result.toPromise();
    }

    /**
     * Gets the age bracket of the authenticated user.
     */
    public v1UsersAuthenticatedAgeBracketGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxUsersApiUserAgeBracketResponse>> {
        const result = this.api.v1UsersAuthenticatedAgeBracketGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the age bracket of the authenticated user.
     */
    public v1UsersAuthenticatedAgeBracketGet(_options?: Configuration): Promise<RobloxUsersApiUserAgeBracketResponse> {
        const result = this.api.v1UsersAuthenticatedAgeBracketGet(_options);
        return result.toPromise();
    }

    /**
     * Gets the country code of the authenticated user.
     */
    public v1UsersAuthenticatedCountryCodeGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxUsersApiUserCountryCodeResponse>> {
        const result = this.api.v1UsersAuthenticatedCountryCodeGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the country code of the authenticated user.
     */
    public v1UsersAuthenticatedCountryCodeGet(_options?: Configuration): Promise<RobloxUsersApiUserCountryCodeResponse> {
        const result = this.api.v1UsersAuthenticatedCountryCodeGet(_options);
        return result.toPromise();
    }

    /**
     * Gets the minimal authenticated user.
     */
    public v1UsersAuthenticatedGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxUsersApiAuthenticatedUserResponse>> {
        const result = this.api.v1UsersAuthenticatedGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the minimal authenticated user.
     */
    public v1UsersAuthenticatedGet(_options?: Configuration): Promise<RobloxUsersApiAuthenticatedUserResponse> {
        const result = this.api.v1UsersAuthenticatedGet(_options);
        return result.toPromise();
    }

    /**
     * Gets the (public) roles of the authenticated user, such as `\"Soothsayer\"` and `\"BetaTester\"`.
     */
    public v1UsersAuthenticatedRolesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<RobloxUsersApiUserRolesResponse>> {
        const result = this.api.v1UsersAuthenticatedRolesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Gets the (public) roles of the authenticated user, such as `\"Soothsayer\"` and `\"BetaTester\"`.
     */
    public v1UsersAuthenticatedRolesGet(_options?: Configuration): Promise<RobloxUsersApiUserRolesResponse> {
        const result = this.api.v1UsersAuthenticatedRolesGet(_options);
        return result.toPromise();
    }

    /**
     * Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by ids.
     * @param request The Roblox.Users.Api.MultiGetByUserIdRequest.
     */
    public v1UsersPostWithHttpInfo(request: RobloxUsersApiMultiGetByUserIdRequest, _options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse>> {
        const result = this.api.v1UsersPostWithHttpInfo(request, _options);
        return result.toPromise();
    }

    /**
     * Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by ids.
     * @param request The Roblox.Users.Api.MultiGetByUserIdRequest.
     */
    public v1UsersPost(request: RobloxUsersApiMultiGetByUserIdRequest, _options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse> {
        const result = this.api.v1UsersPost(request, _options);
        return result.toPromise();
    }

    /**
     * Gets detailed user information by id.
     * @param userId The user id.
     */
    public v1UsersUserIdGetWithHttpInfo(userId: number, _options?: Configuration): Promise<HttpInfo<RobloxUsersApiGetUserResponse>> {
        const result = this.api.v1UsersUserIdGetWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * Gets detailed user information by id.
     * @param userId The user id.
     */
    public v1UsersUserIdGet(userId: number, _options?: Configuration): Promise<RobloxUsersApiGetUserResponse> {
        const result = this.api.v1UsersUserIdGet(userId, _options);
        return result.toPromise();
    }


}



