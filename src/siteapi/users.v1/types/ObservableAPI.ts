import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
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

import { AccountInformationApiRequestFactory, AccountInformationApiResponseProcessor} from "../apis/AccountInformationApi";
export class ObservableAccountInformationApi {
    private requestFactory: AccountInformationApiRequestFactory;
    private responseProcessor: AccountInformationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountInformationApiRequestFactory,
        responseProcessor?: AccountInformationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountInformationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountInformationApiResponseProcessor();
    }

    /**
     * Get the user\'s birthdate
     */
    public v1BirthdateGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxUsersApiBirthdateResponse>> {
        const requestContextPromise = this.requestFactory.v1BirthdateGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BirthdateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the user\'s birthdate
     */
    public v1BirthdateGet(_options?: Configuration): Observable<RobloxUsersApiBirthdateResponse> {
        return this.v1BirthdateGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiBirthdateResponse>) => apiResponse.data));
    }

    /**
     * Update the user\'s birthdate
     * @param request The Roblox.Users.Api.BirthdateRequest
     */
    public v1BirthdatePostWithHttpInfo(request: RobloxUsersApiBirthdateRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1BirthdatePost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1BirthdatePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the user\'s birthdate
     * @param request The Roblox.Users.Api.BirthdateRequest
     */
    public v1BirthdatePost(request: RobloxUsersApiBirthdateRequest, _options?: Configuration): Observable<any> {
        return this.v1BirthdatePostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get the user\'s description
     */
    public v1DescriptionGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxUsersApiDescriptionResponse>> {
        const requestContextPromise = this.requestFactory.v1DescriptionGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DescriptionGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the user\'s description
     */
    public v1DescriptionGet(_options?: Configuration): Observable<RobloxUsersApiDescriptionResponse> {
        return this.v1DescriptionGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiDescriptionResponse>) => apiResponse.data));
    }

    /**
     * Update the user\'s description
     * @param request The Roblox.Users.Api.DescriptionRequest
     */
    public v1DescriptionPostWithHttpInfo(request: RobloxUsersApiDescriptionRequest, _options?: Configuration): Observable<HttpInfo<RobloxUsersApiDescriptionResponse>> {
        const requestContextPromise = this.requestFactory.v1DescriptionPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DescriptionPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the user\'s description
     * @param request The Roblox.Users.Api.DescriptionRequest
     */
    public v1DescriptionPost(request: RobloxUsersApiDescriptionRequest, _options?: Configuration): Observable<RobloxUsersApiDescriptionResponse> {
        return this.v1DescriptionPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiDescriptionResponse>) => apiResponse.data));
    }

    /**
     * Get the user\'s gender
     */
    public v1GenderGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxUsersApiGenderResponse>> {
        const requestContextPromise = this.requestFactory.v1GenderGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GenderGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the user\'s gender
     */
    public v1GenderGet(_options?: Configuration): Observable<RobloxUsersApiGenderResponse> {
        return this.v1GenderGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiGenderResponse>) => apiResponse.data));
    }

    /**
     * Update the user\'s gender
     * @param request The Roblox.Users.Api.GenderRequest
     */
    public v1GenderPostWithHttpInfo(request: RobloxUsersApiGenderRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1GenderPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1GenderPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the user\'s gender
     * @param request The Roblox.Users.Api.GenderRequest
     */
    public v1GenderPost(request: RobloxUsersApiGenderRequest, _options?: Configuration): Observable<any> {
        return this.v1GenderPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { DisplayNamesApiRequestFactory, DisplayNamesApiResponseProcessor} from "../apis/DisplayNamesApi";
export class ObservableDisplayNamesApi {
    private requestFactory: DisplayNamesApiRequestFactory;
    private responseProcessor: DisplayNamesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DisplayNamesApiRequestFactory,
        responseProcessor?: DisplayNamesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DisplayNamesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DisplayNamesApiResponseProcessor();
    }

    /**
     * Validate a display name for a new user.
     * @param displayName The display name.
     * @param birthdate The new user\&#39;s birthdate
     */
    public v1DisplayNamesValidateGetWithHttpInfo(displayName: string, birthdate: Date, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1DisplayNamesValidateGet(displayName, birthdate, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1DisplayNamesValidateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Validate a display name for a new user.
     * @param displayName The display name.
     * @param birthdate The new user\&#39;s birthdate
     */
    public v1DisplayNamesValidateGet(displayName: string, birthdate: Date, _options?: Configuration): Observable<any> {
        return this.v1DisplayNamesValidateGetWithHttpInfo(displayName, birthdate, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Set the display name for the authorized user.
     * @param userId the user id
     * @param request Roblox.Users.Api.SetDisplayNameRequest
     */
    public v1UsersUserIdDisplayNamesPatchWithHttpInfo(userId: number, request: RobloxUsersApiSetDisplayNameRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdDisplayNamesPatch(userId, request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdDisplayNamesPatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set the display name for the authorized user.
     * @param userId the user id
     * @param request Roblox.Users.Api.SetDisplayNameRequest
     */
    public v1UsersUserIdDisplayNamesPatch(userId: number, request: RobloxUsersApiSetDisplayNameRequest, _options?: Configuration): Observable<any> {
        return this.v1UsersUserIdDisplayNamesPatchWithHttpInfo(userId, request, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Validate a display name for an existing user.
     * @param userId The user id.
     * @param displayName The display name.
     */
    public v1UsersUserIdDisplayNamesValidateGetWithHttpInfo(userId: number, displayName: string, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdDisplayNamesValidateGet(userId, displayName, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdDisplayNamesValidateGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Validate a display name for an existing user.
     * @param userId The user id.
     * @param displayName The display name.
     */
    public v1UsersUserIdDisplayNamesValidateGet(userId: number, displayName: string, _options?: Configuration): Observable<any> {
        return this.v1UsersUserIdDisplayNamesValidateGetWithHttpInfo(userId, displayName, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}

import { UserSearchApiRequestFactory, UserSearchApiResponseProcessor} from "../apis/UserSearchApi";
export class ObservableUserSearchApi {
    private requestFactory: UserSearchApiRequestFactory;
    private responseProcessor: UserSearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserSearchApiRequestFactory,
        responseProcessor?: UserSearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserSearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserSearchApiResponseProcessor();
    }

    /**
     * Searches for users by keyword.
     * @param keyword The search keyword.
     * @param sessionId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1UsersSearchGetWithHttpInfo(keyword: string, sessionId?: string, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersSearchGet(keyword, sessionId, limit, cursor, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersSearchGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Searches for users by keyword.
     * @param keyword The search keyword.
     * @param sessionId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     */
    public v1UsersSearchGet(keyword: string, sessionId?: string, limit?: 10 | 25 | 50 | 100, cursor?: string, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse> {
        return this.v1UsersSearchGetWithHttpInfo(keyword, sessionId, limit, cursor, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUserSearchResponse>) => apiResponse.data));
    }

}

import { UsernamesApiRequestFactory, UsernamesApiResponseProcessor} from "../apis/UsernamesApi";
export class ObservableUsernamesApi {
    private requestFactory: UsernamesApiRequestFactory;
    private responseProcessor: UsernamesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsernamesApiRequestFactory,
        responseProcessor?: UsernamesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsernamesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsernamesApiResponseProcessor();
    }

    /**
     * Retrieves the username history for a particular user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdUsernameHistoryGetWithHttpInfo(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdUsernameHistoryGet(userId, limit, cursor, sortOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdUsernameHistoryGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the username history for a particular user.
     * @param userId 
     * @param limit The number of results per request.
     * @param cursor The paging cursor for the previous or next page.
     * @param sortOrder The order the results are sorted in.
     */
    public v1UsersUserIdUsernameHistoryGet(userId: number, limit?: 10 | 25 | 50 | 100, cursor?: string, sortOrder?: 'Asc' | 'Desc', _options?: Configuration): Observable<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse> {
        return this.v1UsersUserIdUsernameHistoryGetWithHttpInfo(userId, limit, cursor, sortOrder, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiPageResponseRobloxUsersApiUsernameHistoryResponse>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * This endpoint will also check previous usernames.  Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by usernames.
     * @param request The Roblox.Users.Api.MultiGetByUsernameRequest.
     */
    public v1UsernamesUsersPostWithHttpInfo(request: RobloxUsersApiMultiGetByUsernameRequest, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse>> {
        const requestContextPromise = this.requestFactory.v1UsernamesUsersPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsernamesUsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint will also check previous usernames.  Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by usernames.
     * @param request The Roblox.Users.Api.MultiGetByUsernameRequest.
     */
    public v1UsernamesUsersPost(request: RobloxUsersApiMultiGetByUsernameRequest, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse> {
        return this.v1UsernamesUsersPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiMultiGetUserByNameResponse>) => apiResponse.data));
    }

    /**
     * Gets the age bracket of the authenticated user.
     */
    public v1UsersAuthenticatedAgeBracketGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxUsersApiUserAgeBracketResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersAuthenticatedAgeBracketGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersAuthenticatedAgeBracketGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the age bracket of the authenticated user.
     */
    public v1UsersAuthenticatedAgeBracketGet(_options?: Configuration): Observable<RobloxUsersApiUserAgeBracketResponse> {
        return this.v1UsersAuthenticatedAgeBracketGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiUserAgeBracketResponse>) => apiResponse.data));
    }

    /**
     * Gets the country code of the authenticated user.
     */
    public v1UsersAuthenticatedCountryCodeGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxUsersApiUserCountryCodeResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersAuthenticatedCountryCodeGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersAuthenticatedCountryCodeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the country code of the authenticated user.
     */
    public v1UsersAuthenticatedCountryCodeGet(_options?: Configuration): Observable<RobloxUsersApiUserCountryCodeResponse> {
        return this.v1UsersAuthenticatedCountryCodeGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiUserCountryCodeResponse>) => apiResponse.data));
    }

    /**
     * Gets the minimal authenticated user.
     */
    public v1UsersAuthenticatedGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxUsersApiAuthenticatedUserResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersAuthenticatedGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersAuthenticatedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the minimal authenticated user.
     */
    public v1UsersAuthenticatedGet(_options?: Configuration): Observable<RobloxUsersApiAuthenticatedUserResponse> {
        return this.v1UsersAuthenticatedGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiAuthenticatedUserResponse>) => apiResponse.data));
    }

    /**
     * Gets the (public) roles of the authenticated user, such as `\"Soothsayer\"` and `\"BetaTester\"`.
     */
    public v1UsersAuthenticatedRolesGetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<RobloxUsersApiUserRolesResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersAuthenticatedRolesGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersAuthenticatedRolesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets the (public) roles of the authenticated user, such as `\"Soothsayer\"` and `\"BetaTester\"`.
     */
    public v1UsersAuthenticatedRolesGet(_options?: Configuration): Observable<RobloxUsersApiUserRolesResponse> {
        return this.v1UsersAuthenticatedRolesGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiUserRolesResponse>) => apiResponse.data));
    }

    /**
     * Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by ids.
     * @param request The Roblox.Users.Api.MultiGetByUserIdRequest.
     */
    public v1UsersPostWithHttpInfo(request: RobloxUsersApiMultiGetByUserIdRequest, _options?: Configuration): Observable<HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersPost(request, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Does not require X-CSRF-Token protection because this is essentially a get request but as a POST to avoid URI limits.
     * Get users by ids.
     * @param request The Roblox.Users.Api.MultiGetByUserIdRequest.
     */
    public v1UsersPost(request: RobloxUsersApiMultiGetByUserIdRequest, _options?: Configuration): Observable<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse> {
        return this.v1UsersPostWithHttpInfo(request, _options).pipe(map((apiResponse: HttpInfo<RobloxWebWebAPIModelsApiArrayResponseRobloxUsersApiVerifiedBadgeUserResponse>) => apiResponse.data));
    }

    /**
     * Gets detailed user information by id.
     * @param userId The user id.
     */
    public v1UsersUserIdGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<RobloxUsersApiGetUserResponse>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Gets detailed user information by id.
     * @param userId The user id.
     */
    public v1UsersUserIdGet(userId: number, _options?: Configuration): Observable<RobloxUsersApiGetUserResponse> {
        return this.v1UsersUserIdGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<RobloxUsersApiGetUserResponse>) => apiResponse.data));
    }

}
