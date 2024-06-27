import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'
import { Observable, of, from } from '../../../common/rxjsStub';
import {mergeMap, map} from  '../../../common/rxjsStub';

import { PremiumFeaturesUsersApiRequestFactory, PremiumFeaturesUsersApiResponseProcessor} from "../apis/PremiumFeaturesUsersApi";
export class ObservablePremiumFeaturesUsersApi {
    private requestFactory: PremiumFeaturesUsersApiRequestFactory;
    private responseProcessor: PremiumFeaturesUsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PremiumFeaturesUsersApiRequestFactory,
        responseProcessor?: PremiumFeaturesUsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PremiumFeaturesUsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PremiumFeaturesUsersApiResponseProcessor();
    }

    /**
     * Premium upsell precheck
     * @param userId User ID
     * @param universeId 
     * @param placeId 
     */
    public v1UsersUserIdPremiumUpsellPrecheckGetWithHttpInfo(userId: number, universeId: number, placeId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdPremiumUpsellPrecheckGet(userId, universeId, placeId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdPremiumUpsellPrecheckGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Premium upsell precheck
     * @param userId User ID
     * @param universeId 
     * @param placeId 
     */
    public v1UsersUserIdPremiumUpsellPrecheckGet(userId: number, universeId: number, placeId: number, _options?: Configuration): Observable<void> {
        return this.v1UsersUserIdPremiumUpsellPrecheckGetWithHttpInfo(userId, universeId, placeId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get if a user has a Premium membership
     * @param userId User ID
     */
    public v1UsersUserIdValidateMembershipGetWithHttpInfo(userId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.v1UsersUserIdValidateMembershipGet(userId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.v1UsersUserIdValidateMembershipGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get if a user has a Premium membership
     * @param userId User ID
     */
    public v1UsersUserIdValidateMembershipGet(userId: number, _options?: Configuration): Observable<void> {
        return this.v1UsersUserIdValidateMembershipGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
