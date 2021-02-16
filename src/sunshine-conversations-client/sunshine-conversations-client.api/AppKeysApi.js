/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.4.3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import AppKeyCreateBody from '../sunshine-conversations-client.model/AppKeyCreateBody';
import AppKeyListResponse from '../sunshine-conversations-client.model/AppKeyListResponse';
import AppKeyResponse from '../sunshine-conversations-client.model/AppKeyResponse';

/**
* AppKeys service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/AppKeysApi
* @version 9.4.3
*/
export default class AppKeysApi {

    /**
    * Constructs a new AppKeysApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/AppKeysApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create App Key
     * Creates an API key for the specified app. The response body will include a secret  as well as its corresponding id, which you can use to generate JSON Web Tokens to  securely make API calls on behalf of the app. 
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody} appKeyCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse} and HTTP response
     */
    createAppKeyWithHttpInfo(appId, appKeyCreateBody) {
      let postBody = appKeyCreateBody;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createAppKey");
      }
      // verify the required parameter 'appKeyCreateBody' is set
      if (appKeyCreateBody === undefined || appKeyCreateBody === null) {
        throw new Error("Missing the required parameter 'appKeyCreateBody' when calling createAppKey");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AppKeyResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create App Key
     * Creates an API key for the specified app. The response body will include a secret  as well as its corresponding id, which you can use to generate JSON Web Tokens to  securely make API calls on behalf of the app. 
     * @param {String} appId Identifies the app.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyCreateBody} appKeyCreateBody 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse}
     */
    createAppKey(appId, appKeyCreateBody) {
      return this.createAppKeyWithHttpInfo(appId, appKeyCreateBody)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete App Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteAppKeyWithHttpInfo(appId, keyId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteAppKey");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling deleteAppKey");
      }

      let pathParams = {
        'appId': appId,
        'keyId': keyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/keys/{keyId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete App Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteAppKey(appId, keyId) {
      return this.deleteAppKeyWithHttpInfo(appId, keyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get App Key
     * Returns an API key.
     * @param {String} appId Identifies the app.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse} and HTTP response
     */
    getAppKeyWithHttpInfo(appId, keyId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getAppKey");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling getAppKey");
      }

      let pathParams = {
        'appId': appId,
        'keyId': keyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AppKeyResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/keys/{keyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get App Key
     * Returns an API key.
     * @param {String} appId Identifies the app.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyResponse}
     */
    getAppKey(appId, keyId) {
      return this.getAppKeyWithHttpInfo(appId, keyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List App Keys
     * Lists all API keys for a given app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse} and HTTP response
     */
    listAppKeysWithHttpInfo(appId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listAppKeys");
      }

      let pathParams = {
        'appId': appId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AppKeyListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List App Keys
     * Lists all API keys for a given app.
     * @param {String} appId Identifies the app.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/AppKeyListResponse}
     */
    listAppKeys(appId) {
      return this.listAppKeysWithHttpInfo(appId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
