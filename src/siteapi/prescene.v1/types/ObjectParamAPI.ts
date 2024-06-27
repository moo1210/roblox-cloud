import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxPresenceApiModelsRequestLastOnlineRequest } from '../models/RobloxPresenceApiModelsRequestLastOnlineRequest';
import { RobloxPresenceApiModelsRequestRegisterAppPresenceRequest } from '../models/RobloxPresenceApiModelsRequestRegisterAppPresenceRequest';
import { RobloxPresenceApiModelsRequestUserPresenceRequest } from '../models/RobloxPresenceApiModelsRequestUserPresenceRequest';
import { RobloxPresenceApiModelsResponseLastOnline } from '../models/RobloxPresenceApiModelsResponseLastOnline';
import { RobloxPresenceApiModelsResponseLastOnlineResponse } from '../models/RobloxPresenceApiModelsResponseLastOnlineResponse';
import { RobloxPresenceApiModelsResponseUserPresence } from '../models/RobloxPresenceApiModelsResponseUserPresence';
import { RobloxPresenceApiModelsResponseUserPresencesResponse } from '../models/RobloxPresenceApiModelsResponseUserPresencesResponse';

import { ObservablePresenceApi } from "./ObservableAPI";
import { PresenceApiRequestFactory, PresenceApiResponseProcessor} from "../apis/PresenceApi";

export interface PresenceApiV1PresenceLastOnlinePostRequest {
    /**
     * 
     * @type RobloxPresenceApiModelsRequestLastOnlineRequest
     * @memberof PresenceApiv1PresenceLastOnlinePost
     */
    lastOnlineRequest: RobloxPresenceApiModelsRequestLastOnlineRequest
}

export interface PresenceApiV1PresenceRegisterAppPresencePostRequest {
    /**
     * 
     * @type RobloxPresenceApiModelsRequestRegisterAppPresenceRequest
     * @memberof PresenceApiv1PresenceRegisterAppPresencePost
     */
    registerAppPresenceRequest: RobloxPresenceApiModelsRequestRegisterAppPresenceRequest
}

export interface PresenceApiV1PresenceUsersPostRequest {
    /**
     * 
     * @type RobloxPresenceApiModelsRequestUserPresenceRequest
     * @memberof PresenceApiv1PresenceUsersPost
     */
    userPresenceRequest: RobloxPresenceApiModelsRequestUserPresenceRequest
}

export class ObjectPresenceApi {
    private api: ObservablePresenceApi

    public constructor(configuration: Configuration, requestFactory?: PresenceApiRequestFactory, responseProcessor?: PresenceApiResponseProcessor) {
        this.api = new ObservablePresenceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get last online timestamps for a list of users.
     * @param param the request object
     */
    public v1PresenceLastOnlinePostWithHttpInfo(param: PresenceApiV1PresenceLastOnlinePostRequest, options?: Configuration): Promise<HttpInfo<RobloxPresenceApiModelsResponseLastOnlineResponse>> {
        return this.api.v1PresenceLastOnlinePostWithHttpInfo(param.lastOnlineRequest,  options).toPromise();
    }

    /**
     * Get last online timestamps for a list of users.
     * @param param the request object
     */
    public v1PresenceLastOnlinePost(param: PresenceApiV1PresenceLastOnlinePostRequest, options?: Configuration): Promise<RobloxPresenceApiModelsResponseLastOnlineResponse> {
        return this.api.v1PresenceLastOnlinePost(param.lastOnlineRequest,  options).toPromise();
    }

    /**
     * Register User Presence for IOS, Android, Xbox, regular studio session
     * @param param the request object
     */
    public v1PresenceRegisterAppPresencePostWithHttpInfo(param: PresenceApiV1PresenceRegisterAppPresencePostRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.v1PresenceRegisterAppPresencePostWithHttpInfo(param.registerAppPresenceRequest,  options).toPromise();
    }

    /**
     * Register User Presence for IOS, Android, Xbox, regular studio session
     * @param param the request object
     */
    public v1PresenceRegisterAppPresencePost(param: PresenceApiV1PresenceRegisterAppPresencePostRequest, options?: Configuration): Promise<any> {
        return this.api.v1PresenceRegisterAppPresencePost(param.registerAppPresenceRequest,  options).toPromise();
    }

    /**
     * Get Presence for a list of users
     * @param param the request object
     */
    public v1PresenceUsersPostWithHttpInfo(param: PresenceApiV1PresenceUsersPostRequest, options?: Configuration): Promise<HttpInfo<RobloxPresenceApiModelsResponseUserPresencesResponse>> {
        return this.api.v1PresenceUsersPostWithHttpInfo(param.userPresenceRequest,  options).toPromise();
    }

    /**
     * Get Presence for a list of users
     * @param param the request object
     */
    public v1PresenceUsersPost(param: PresenceApiV1PresenceUsersPostRequest, options?: Configuration): Promise<RobloxPresenceApiModelsResponseUserPresencesResponse> {
        return this.api.v1PresenceUsersPost(param.userPresenceRequest,  options).toPromise();
    }

}
