import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';
import { RobloxPresenceApiModelsRequestLastOnlineRequest } from '../models/RobloxPresenceApiModelsRequestLastOnlineRequest';
import { RobloxPresenceApiModelsRequestRegisterAppPresenceRequest } from '../models/RobloxPresenceApiModelsRequestRegisterAppPresenceRequest';
import { RobloxPresenceApiModelsRequestUserPresenceRequest } from '../models/RobloxPresenceApiModelsRequestUserPresenceRequest';
import { RobloxPresenceApiModelsResponseLastOnline } from '../models/RobloxPresenceApiModelsResponseLastOnline';
import { RobloxPresenceApiModelsResponseLastOnlineResponse } from '../models/RobloxPresenceApiModelsResponseLastOnlineResponse';
import { RobloxPresenceApiModelsResponseUserPresence } from '../models/RobloxPresenceApiModelsResponseUserPresence';
import { RobloxPresenceApiModelsResponseUserPresencesResponse } from '../models/RobloxPresenceApiModelsResponseUserPresencesResponse';

import { PresenceApiRequestFactory, PresenceApiResponseProcessor} from "../apis/PresenceApi";
export class ObservablePresenceApi {
    private requestFactory: PresenceApiRequestFactory;
    private responseProcessor: PresenceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PresenceApiRequestFactory,
        responseProcessor?: PresenceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PresenceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PresenceApiResponseProcessor();
    }

    /**
     * Get last online timestamps for a list of users.
     * @param lastOnlineRequest 
     */
    public v1PresenceLastOnlinePostWithHttpInfo(lastOnlineRequest: RobloxPresenceApiModelsRequestLastOnlineRequest, _options?: Configuration): Observable<HttpInfo<RobloxPresenceApiModelsResponseLastOnlineResponse>> {
        const requestContextPromise = this.requestFactory.v1PresenceLastOnlinePost(lastOnlineRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PresenceLastOnlinePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get last online timestamps for a list of users.
     * @param lastOnlineRequest 
     */
    public v1PresenceLastOnlinePost(lastOnlineRequest: RobloxPresenceApiModelsRequestLastOnlineRequest, _options?: Configuration): Observable<RobloxPresenceApiModelsResponseLastOnlineResponse> {
        return this.v1PresenceLastOnlinePostWithHttpInfo(lastOnlineRequest, _options).pipe(map((apiResponse: HttpInfo<RobloxPresenceApiModelsResponseLastOnlineResponse>) => apiResponse.data));
    }

    /**
     * Register User Presence for IOS, Android, Xbox, regular studio session
     * @param registerAppPresenceRequest 
     */
    public v1PresenceRegisterAppPresencePostWithHttpInfo(registerAppPresenceRequest: RobloxPresenceApiModelsRequestRegisterAppPresenceRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.v1PresenceRegisterAppPresencePost(registerAppPresenceRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PresenceRegisterAppPresencePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Register User Presence for IOS, Android, Xbox, regular studio session
     * @param registerAppPresenceRequest 
     */
    public v1PresenceRegisterAppPresencePost(registerAppPresenceRequest: RobloxPresenceApiModelsRequestRegisterAppPresenceRequest, _options?: Configuration): Observable<any> {
        return this.v1PresenceRegisterAppPresencePostWithHttpInfo(registerAppPresenceRequest, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * Get Presence for a list of users
     * @param userPresenceRequest 
     */
    public v1PresenceUsersPostWithHttpInfo(userPresenceRequest: RobloxPresenceApiModelsRequestUserPresenceRequest, _options?: Configuration): Observable<HttpInfo<RobloxPresenceApiModelsResponseUserPresencesResponse>> {
        const requestContextPromise = this.requestFactory.v1PresenceUsersPost(userPresenceRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1PresenceUsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Presence for a list of users
     * @param userPresenceRequest 
     */
    public v1PresenceUsersPost(userPresenceRequest: RobloxPresenceApiModelsRequestUserPresenceRequest, _options?: Configuration): Observable<RobloxPresenceApiModelsResponseUserPresencesResponse> {
        return this.v1PresenceUsersPostWithHttpInfo(userPresenceRequest, _options).pipe(map((apiResponse: HttpInfo<RobloxPresenceApiModelsResponseUserPresencesResponse>) => apiResponse.data));
    }

}
