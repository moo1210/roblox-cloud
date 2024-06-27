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

import { ObservableAccountInformationApi } from "./ObservableAPI";
import { AccountInformationApiRequestFactory, AccountInformationApiResponseProcessor} from "../apis/AccountInformationApi";

export interface AccountInformationApiV1BirthdateGetRequest {
}

export interface AccountInformationApiV1BirthdatePostRequest {
    /**
     * The Roblox.Users.Api.BirthdateRequest
     * @type RobloxUsersApiBirthdateRequest
     * @memberof AccountInformationApiv1BirthdatePost
     */
    request: RobloxUsersApiBirthdateRequest
}

export interface AccountInformationApiV1DescriptionGetRequest {
}

export interface AccountInformationApiV1DescriptionPostRequest {
    /**
     * The Roblox.Users.Api.DescriptionRequest
     * @type RobloxUsersApiDescriptionRequest
     * @memberof AccountInformationApiv1DescriptionPost
     */
    request: RobloxUsersApiDescriptionRequest
}

export interface AccountInformationApiV1GenderGetRequest {
}

export interface AccountInformationApiV1GenderPostRequest {
    /**
     * The Roblox.Users.Api.GenderRequest
     * @type RobloxUsersApiGenderRequest
     * @memberof AccountInformationApiv1GenderPost
     */
    request: RobloxUsersApiGenderRequest
}

export class ObjectAccountInformationApi {
    private api: ObservableAccountInformationApi

    public constructor(configuration: Configuration, requestFactory?: AccountInformationApiRequestFactory, responseProcessor?: AccountInformationApiResponseProcessor) {
        this.api = new ObservableAccountInformationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get the user\'s birthdate
     * @param param the request object
     */
    public v1BirthdateGetWithHttpInfo(param: AccountInformationApiV1BirthdateGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxUsersApiBirthdateResponse>> {
        return this.api.v1BirthdateGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get the user\'s birthdate
     * @param param the request object
     */
    public v1BirthdateGet(param: AccountInformationApiV1BirthdateGetRequest = {}, options?: Configuration): Promise<RobloxUsersApiBirthdateResponse> {
        return this.api.v1BirthdateGet( options).toPromise();
    }

    /**
     * Update the user\'s birthdate
     * @param param the request object
     */
    public v1BirthdatePostWithHttpInfo(param: AccountInformationApiV1BirthdatePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1BirthdatePostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Update the user\'s birthdate
     * @param param the request object
     */
    public v1BirthdatePost(param: AccountInformationApiV1BirthdatePostRequest, options?: Configuration): Promise<any> {
        return this.api.v1BirthdatePost(param.request,  options).toPromise();
    }

    /**
     * Get the user\'s description
     * @param param the request object
     */
    public v1DescriptionGetWithHttpInfo(param: AccountInformationApiV1DescriptionGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxUsersApiDescriptionResponse>> {
        return this.api.v1DescriptionGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get the user\'s description
     * @param param the request object
     */
    public v1DescriptionGet(param: AccountInformationApiV1DescriptionGetRequest = {}, options?: Configuration): Promise<RobloxUsersApiDescriptionResponse> {
        return this.api.v1DescriptionGet( options).toPromise();
    }

    /**
     * Update the user\'s description
     * @param param the request object
     */
    public v1DescriptionPostWithHttpInfo(param: AccountInformationApiV1DescriptionPostRequest, options?: Configuration): Promise<HttpInfo<RobloxUsersApiDescriptionResponse>> {
        return this.api.v1DescriptionPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Update the user\'s description
     * @param param the request object
     */
    public v1DescriptionPost(param: AccountInformationApiV1DescriptionPostRequest, options?: Configuration): Promise<RobloxUsersApiDescriptionResponse> {
        return this.api.v1DescriptionPost(param.request,  options).toPromise();
    }

    /**
     * Get the user\'s gender
     * @param param the request object
     */
    public v1GenderGetWithHttpInfo(param: AccountInformationApiV1GenderGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxUsersApiGenderResponse>> {
        return this.api.v1GenderGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get the user\'s gender
     * @param param the request object
     */
    public v1GenderGet(param: AccountInformationApiV1GenderGetRequest = {}, options?: Configuration): Promise<RobloxUsersApiGenderResponse> {
        return this.api.v1GenderGet( options).toPromise();
    }

    /**
     * Update the user\'s gender
     * @param param the request object
     */
    public v1GenderPostWithHttpInfo(param: AccountInformationApiV1GenderPostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1GenderPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Update the user\'s gender
     * @param param the request object
     */
    public v1GenderPost(param: AccountInformationApiV1GenderPostRequest, options?: Configuration): Promise<any> {
        return this.api.v1GenderPost(param.request,  options).toPromise();
    }

}

import { ObservableDisplayNamesApi } from "./ObservableAPI";
import { DisplayNamesApiRequestFactory, DisplayNamesApiResponseProcessor} from "../apis/DisplayNamesApi";

export interface DisplayNamesApiV1DisplayNamesValidateGetRequest {
    /**
     * The display name.
     * @type string
     * @memberof DisplayNamesApiv1DisplayNamesValidateGet
     */
    displayName: string
    /**
     * The new user\&#39;s birthdate
     * @type Date
     * @memberof DisplayNamesApiv1DisplayNamesValidateGet
     */
    birthdate: Date
}

export interface DisplayNamesApiV1UsersUserIdDisplayNamesPatchRequest {
    /**
     * the user id
     * @type number
     * @memberof DisplayNamesApiv1UsersUserIdDisplayNamesPatch
     */
    userId: number
    /**
     * Roblox.Users.Api.SetDisplayNameRequest
     * @type RobloxUsersApiSetDisplayNameRequest
     * @memberof DisplayNamesApiv1UsersUserIdDisplayNamesPatch
     */
    request: RobloxUsersApiSetDisplayNameRequest
}

export interface DisplayNamesApiV1UsersUserIdDisplayNamesValidateGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof DisplayNamesApiv1UsersUserIdDisplayNamesValidateGet
     */
    userId: number
    /**
     * The display name.
     * @type string
     * @memberof DisplayNamesApiv1UsersUserIdDisplayNamesValidateGet
     */
    displayName: string
}

export class ObjectDisplayNamesApi {
    private api: ObservableDisplayNamesApi

    public constructor(configuration: Configuration, requestFactory?: DisplayNamesApiRequestFactory, responseProcessor?: DisplayNamesApiResponseProcessor) {
        this.api = new ObservableDisplayNamesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validate a display name for a new user.
     * @param param the request object
     */
    public v1DisplayNamesValidateGetWithHttpInfo(param: DisplayNamesApiV1DisplayNamesValidateGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1DisplayNamesValidateGetWithHttpInfo(param.displayName, param.birthdate,  options).toPromise();
    }

    /**
     * Validate a display name for a new user.
     * @param param the request object
     */
    public v1DisplayNamesValidateGet(param: DisplayNamesApiV1DisplayNamesValidateGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1DisplayNamesValidateGet(param.displayName, param.birthdate,  options).toPromise();
    }

    /**
     * Set the display name for the authorized user.
     * @param param the request object
     */
    public v1UsersUserIdDisplayNamesPatchWithHttpInfo(param: DisplayNamesApiV1UsersUserIdDisplayNamesPatchRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersUserIdDisplayNamesPatchWithHttpInfo(param.userId, param.request,  options).toPromise();
    }

    /**
     * Set the display name for the authorized user.
     * @param param the request object
     */
    public v1UsersUserIdDisplayNamesPatch(param: DisplayNamesApiV1UsersUserIdDisplayNamesPatchRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersUserIdDisplayNamesPatch(param.userId, param.request,  options).toPromise();
    }

    /**
     * Validate a display name for an existing user.
     * @param param the request object
     */
    public v1UsersUserIdDisplayNamesValidateGetWithHttpInfo(param: DisplayNamesApiV1UsersUserIdDisplayNamesValidateGetRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1UsersUserIdDisplayNamesValidateGetWithHttpInfo(param.userId, param.displayName,  options).toPromise();
    }

    /**
     * Validate a display name for an existing user.
     * @param param the request object
     */
    public v1UsersUserIdDisplayNamesValidateGet(param: DisplayNamesApiV1UsersUserIdDisplayNamesValidateGetRequest, options?: Configuration): Promise<any> {
        return this.api.v1UsersUserIdDisplayNamesValidateGet(param.userId, param.displayName,  options).toPromise();
    }

}

import { ObservableUserSearchApi } from "./ObservableAPI";
import { UserSearchApiRequestFactory, UserSearchApiResponseProcessor} from "../apis/UserSearchApi";

export interface UserSearchApiV1UsersSearchGetRequest {
    /**
     * The search keyword.
     * @type string
     * @memberof UserSearchApiv1UsersSearchGet
     */
    keyword: string
    /**
     * 
     * @type string
     * @memberof UserSearchApiv1UsersSearchGet
     */
    sessionId?: string
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof UserSearchApiv1UsersSearchGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof UserSearchApiv1UsersSearchGet
     */
    cursor?: string
}

export class ObjectUserSearchApi {
    private api: ObservableUserSearchApi

    public constructor(configuration: Configuration, requestFactory?: UserSearchApiRequestFactory, responseProcessor?: UserSearchApiResponseProcessor) {
        this.api = new ObservableUserSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Searches for users by keyword.
     * @param param the request object
     */
    public v1UsersSearchGetWithHttpInfo(param: UserSearchApiV1UsersSearchGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse>> {
        return this.api.v1UsersSearchGetWithHttpInfo(param.keyword, param.sessionId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Searches for users by keyword.
     * @param param the request object
     */
    public v1UsersSearchGet(param: UserSearchApiV1UsersSearchGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse> {
        return this.api.v1UsersSearchGet(param.keyword, param.sessionId, param.limit, param.cursor,  options).toPromise();
    }

}

import { ObservableUsernamesApi } from "./ObservableAPI";
import { UsernamesApiRequestFactory, UsernamesApiResponseProcessor} from "../apis/UsernamesApi";

export interface UsernamesApiV1UsersUserIdUsernameHistoryGetRequest {
    /**
     * 
     * @type number
     * @memberof UsernamesApiv1UsersUserIdUsernameHistoryGet
     */
    userId: number
    /**
     * The number of results per request.
     * @type 10 | 25 | 50 | 100
     * @memberof UsernamesApiv1UsersUserIdUsernameHistoryGet
     */
    limit?: 10 | 25 | 50 | 100
    /**
     * The paging cursor for the previous or next page.
     * @type string
     * @memberof UsernamesApiv1UsersUserIdUsernameHistoryGet
     */
    cursor?: string
    /**
     * The order the results are sorted in.
     * @type &#39;Asc&#39; | &#39;Desc&#39;
     * @memberof UsernamesApiv1UsersUserIdUsernameHistoryGet
     */
    sortOrder?: 'Asc' | 'Desc'
}

export class ObjectUsernamesApi {
    private api: ObservableUsernamesApi

    public constructor(configuration: Configuration, requestFactory?: UsernamesApiRequestFactory, responseProcessor?: UsernamesApiResponseProcessor) {
        this.api = new ObservableUsernamesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the username history for a particular user.
     * @param param the request object
     */
    public v1UsersUserIdUsernameHistoryGetWithHttpInfo(param: UsernamesApiV1UsersUserIdUsernameHistoryGetRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse>> {
        return this.api.v1UsersUserIdUsernameHistoryGetWithHttpInfo(param.userId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

    /**
     * Retrieves the username history for a particular user.
     * @param param the request object
     */
    public v1UsersUserIdUsernameHistoryGet(param: UsernamesApiV1UsersUserIdUsernameHistoryGetRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse> {
        return this.api.v1UsersUserIdUsernameHistoryGet(param.userId, param.limit, param.cursor, param.sortOrder,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiV1UsernamesUsersPostRequest {
    /**
     * The Roblox.Users.Api.MultiGetByUsernameRequest.
     * @type RobloxUsersApiMultiGetByUsernameRequest
     * @memberof UsersApiv1UsernamesUsersPost
     */
    request: RobloxUsersApiMultiGetByUsernameRequest
}

export interface UsersApiV1UsersAuthenticatedAgeBracketGetRequest {
}

export interface UsersApiV1UsersAuthenticatedCountryCodeGetRequest {
}

export interface UsersApiV1UsersAuthenticatedGetRequest {
}

export interface UsersApiV1UsersAuthenticatedRolesGetRequest {
}

export interface UsersApiV1UsersPostRequest {
    /**
     * The Roblox.Users.Api.MultiGetByUserIdRequest.
     * @type RobloxUsersApiMultiGetByUserIdRequest
     * @memberof UsersApiv1UsersPost
     */
    request: RobloxUsersApiMultiGetByUserIdRequest
}

export interface UsersApiV1UsersUserIdGetRequest {
    /**
     * The user id.
     * @type number
     * @memberof UsersApiv1UsersUserIdGet
     */
    userId: number
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint will also check previous usernames.  Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by usernames.
     * @param param the request object
     */
    public v1UsernamesUsersPostWithHttpInfo(param: UsersApiV1UsernamesUsersPostRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse>> {
        return this.api.v1UsernamesUsersPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * This endpoint will also check previous usernames.  Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by usernames.
     * @param param the request object
     */
    public v1UsernamesUsersPost(param: UsersApiV1UsernamesUsersPostRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse> {
        return this.api.v1UsernamesUsersPost(param.request,  options).toPromise();
    }

    /**
     * Gets the age bracket of the authenticated user.
     * @param param the request object
     */
    public v1UsersAuthenticatedAgeBracketGetWithHttpInfo(param: UsersApiV1UsersAuthenticatedAgeBracketGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxUsersApiUserAgeBracketResponse>> {
        return this.api.v1UsersAuthenticatedAgeBracketGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the age bracket of the authenticated user.
     * @param param the request object
     */
    public v1UsersAuthenticatedAgeBracketGet(param: UsersApiV1UsersAuthenticatedAgeBracketGetRequest = {}, options?: Configuration): Promise<RobloxUsersApiUserAgeBracketResponse> {
        return this.api.v1UsersAuthenticatedAgeBracketGet( options).toPromise();
    }

    /**
     * Gets the country code of the authenticated user.
     * @param param the request object
     */
    public v1UsersAuthenticatedCountryCodeGetWithHttpInfo(param: UsersApiV1UsersAuthenticatedCountryCodeGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxUsersApiUserCountryCodeResponse>> {
        return this.api.v1UsersAuthenticatedCountryCodeGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the country code of the authenticated user.
     * @param param the request object
     */
    public v1UsersAuthenticatedCountryCodeGet(param: UsersApiV1UsersAuthenticatedCountryCodeGetRequest = {}, options?: Configuration): Promise<RobloxUsersApiUserCountryCodeResponse> {
        return this.api.v1UsersAuthenticatedCountryCodeGet( options).toPromise();
    }

    /**
     * Gets the minimal authenticated user.
     * @param param the request object
     */
    public v1UsersAuthenticatedGetWithHttpInfo(param: UsersApiV1UsersAuthenticatedGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxUsersApiAuthenticatedUserResponse>> {
        return this.api.v1UsersAuthenticatedGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the minimal authenticated user.
     * @param param the request object
     */
    public v1UsersAuthenticatedGet(param: UsersApiV1UsersAuthenticatedGetRequest = {}, options?: Configuration): Promise<RobloxUsersApiAuthenticatedUserResponse> {
        return this.api.v1UsersAuthenticatedGet( options).toPromise();
    }

    /**
     * Gets the (public) roles of the authenticated user, such as `\"Soothsayer\"` and `\"BetaTester\"`.
     * @param param the request object
     */
    public v1UsersAuthenticatedRolesGetWithHttpInfo(param: UsersApiV1UsersAuthenticatedRolesGetRequest = {}, options?: Configuration): Promise<HttpInfo<RobloxUsersApiUserRolesResponse>> {
        return this.api.v1UsersAuthenticatedRolesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Gets the (public) roles of the authenticated user, such as `\"Soothsayer\"` and `\"BetaTester\"`.
     * @param param the request object
     */
    public v1UsersAuthenticatedRolesGet(param: UsersApiV1UsersAuthenticatedRolesGetRequest = {}, options?: Configuration): Promise<RobloxUsersApiUserRolesResponse> {
        return this.api.v1UsersAuthenticatedRolesGet( options).toPromise();
    }

    /**
     * Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by ids.
     * @param param the request object
     */
    public v1UsersPostWithHttpInfo(param: UsersApiV1UsersPostRequest, options?: Configuration): Promise<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse>> {
        return this.api.v1UsersPostWithHttpInfo(param.request,  options).toPromise();
    }

    /**
     * Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by ids.
     * @param param the request object
     */
    public v1UsersPost(param: UsersApiV1UsersPostRequest, options?: Configuration): Promise<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse> {
        return this.api.v1UsersPost(param.request,  options).toPromise();
    }

    /**
     * Gets detailed user information by id.
     * @param param the request object
     */
    public v1UsersUserIdGetWithHttpInfo(param: UsersApiV1UsersUserIdGetRequest, options?: Configuration): Promise<HttpInfo<RobloxUsersApiGetUserResponse>> {
        return this.api.v1UsersUserIdGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Gets detailed user information by id.
     * @param param the request object
     */
    public v1UsersUserIdGet(param: UsersApiV1UsersUserIdGetRequest, options?: Configuration): Promise<RobloxUsersApiGetUserResponse> {
        return this.api.v1UsersUserIdGet(param.userId,  options).toPromise();
    }

}
