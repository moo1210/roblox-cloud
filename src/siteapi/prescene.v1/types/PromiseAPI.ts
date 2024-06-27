import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../../../common/http/http';
import { Configuration} from '../../../common/configuration'

import { RobloxPresenceApiModelsRequestLastOnlineRequest } from '../models/RobloxPresenceApiModelsRequestLastOnlineRequest';
import { RobloxPresenceApiModelsRequestRegisterAppPresenceRequest } from '../models/RobloxPresenceApiModelsRequestRegisterAppPresenceRequest';
import { RobloxPresenceApiModelsRequestUserPresenceRequest } from '../models/RobloxPresenceApiModelsRequestUserPresenceRequest';
import { RobloxPresenceApiModelsResponseLastOnline } from '../models/RobloxPresenceApiModelsResponseLastOnline';
import { RobloxPresenceApiModelsResponseLastOnlineResponse } from '../models/RobloxPresenceApiModelsResponseLastOnlineResponse';
import { RobloxPresenceApiModelsResponseUserPresence } from '../models/RobloxPresenceApiModelsResponseUserPresence';
import { RobloxPresenceApiModelsResponseUserPresencesResponse } from '../models/RobloxPresenceApiModelsResponseUserPresencesResponse';
import { ObservablePresenceApi } from './ObservableAPI';

import { PresenceApiRequestFactory, PresenceApiResponseProcessor} from "../apis/PresenceApi";
export class PromisePresenceApi {
    private api: ObservablePresenceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PresenceApiRequestFactory,
        responseProcessor?: PresenceApiResponseProcessor
    ) {
        this.api = new ObservablePresenceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get last online timestamps for a list of users.
     * @param lastOnlineRequest 
     */
    public v1PresenceLastOnlinePostWithHttpInfo(lastOnlineRequest: RobloxPresenceApiModelsRequestLastOnlineRequest, _options?: Configuration): Promise<HttpInfo<RobloxPresenceApiModelsResponseLastOnlineResponse>> {
        const result = this.api.v1PresenceLastOnlinePostWithHttpInfo(lastOnlineRequest, _options);
        return result.toPromise();
    }

    /**
     * Get last online timestamps for a list of users.
     * @param lastOnlineRequest 
     */
    public v1PresenceLastOnlinePost(lastOnlineRequest: RobloxPresenceApiModelsRequestLastOnlineRequest, _options?: Configuration): Promise<RobloxPresenceApiModelsResponseLastOnlineResponse> {
        const result = this.api.v1PresenceLastOnlinePost(lastOnlineRequest, _options);
        return result.toPromise();
    }

    /**
     * Register User Presence for IOS, Android, Xbox, regular studio session
     * @param registerAppPresenceRequest 
     */
    public v1PresenceRegisterAppPresencePostWithHttpInfo(registerAppPresenceRequest: RobloxPresenceApiModelsRequestRegisterAppPresenceRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.v1PresenceRegisterAppPresencePostWithHttpInfo(registerAppPresenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Register User Presence for IOS, Android, Xbox, regular studio session
     * @param registerAppPresenceRequest 
     */
    public v1PresenceRegisterAppPresencePost(registerAppPresenceRequest: RobloxPresenceApiModelsRequestRegisterAppPresenceRequest, _options?: Configuration): Promise<any> {
        const result = this.api.v1PresenceRegisterAppPresencePost(registerAppPresenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Get Presence for a list of users
     * @param userPresenceRequest 
     */
    public v1PresenceUsersPostWithHttpInfo(userPresenceRequest: RobloxPresenceApiModelsRequestUserPresenceRequest, _options?: Configuration): Promise<HttpInfo<RobloxPresenceApiModelsResponseUserPresencesResponse>> {
        const result = this.api.v1PresenceUsersPostWithHttpInfo(userPresenceRequest, _options);
        return result.toPromise();
    }

    /**
     * Get Presence for a list of users
     * @param userPresenceRequest 
     */
    public v1PresenceUsersPost(userPresenceRequest: RobloxPresenceApiModelsRequestUserPresenceRequest, _options?: Configuration): Promise<RobloxPresenceApiModelsResponseUserPresencesResponse> {
        const result = this.api.v1PresenceUsersPost(userPresenceRequest, _options);
        return result.toPromise();
    }


}



