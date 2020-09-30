/**
 * Sunshine Conversations API
 * # Introduction <aside class=\"notice\">As a stepping stone to new and greater things, we’ve updated Sunshine Conversations API to v2. For users wanting to access v1, please proceed <a href=\"https://docs.smooch.io/rest/\">here</a>.  </aside>  Welcome to the Sunshine Conversations API. The API allows you to craft entirely unique messaging experiences for your app and website as well as talk to any backend or external service.  The Sunshine Conversations API is designed according to REST principles. The API accepts JSON in request bodies and requires that the content-type: application/json header be specified for  all such requests. The API will always respond with an object. Depending on context, resources may be returned as single objects or as arrays of objects, nested within the response object.  In some cases, the API will also facilitate cross-origin resource sharing so that it can be called from a web application.  <aside class=\"notice\">Note that for authenticated requests, cross-origin resource sharing is only available to appUser scoped credentials. Attempting to call the API from the browser using  app or account scoped credentials will result in a <a href=\"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy\">same-origin policy</a> browser error. For more information, refer  to the <a href=\"http://docs.smooch.io/guide/authorization/#handle-credentials-with-caution\">Authorization guide</a>.</aside>  ## Regions  Sunshine Conversations is available in the following regions. Each Sunshine Conversations region has its own API host.  | Region         | Host                       | | -------------- | -------------------------- | | United States  | https://api.smooch.io      | | European Union | https://api.eu-1.smooch.io |  For more information on regions, visit [the guide](/guide/regions/).  <aside class=\"notice\">When configuring an API host, make sure to always use `https`. Some API clients can have unexpected behaviour when following redirects from `http` to `https`.</aside>  ## Errors  Sunshine Conversations uses standard HTTP status codes to communicate errors. In general, a `2xx` status code indicates success while `4xx` indicates an error, in which case, the response body includes a JSON object which includes an array of errors, with a text `code` and `title` containing more details. Multiple errors can only be included in a `400 Bad Request`. A `5xx` status code indicates that something went wrong on our end.  ```javascript {    \"errors\":  [     {         \"code\": \"unauthorized\",         \"title\": \"Authorization is required\"     }    ] } ```  ## API Version  The latest version of the API is v2. Version v1.1 is still supported and you can continue using it but we encourage you to upgrade to the latest version. To learn more about API versioning at Sunshine Conversations, including instructions on how to upgrade to the latest version, [visit our docs](https://docs.smooch.io/guide/versioning).  ## API Pagination and Records Limits  Some APIs can be paginated by providing the `offset` query string parameter.  The `offset` is the number of initial records to skip before picking records to return (default 0).  The `limit` query string can also be provided to change the number of records to return (maximum 100, default 25).  All paginated endpoints will eventually support cursor pagination and `offset` based pagination support will be dropped.  ### Cursor Pagination  Some APIs are paginated through cursor pagination. Rather than providing an `offset`, a `page[after]` or `page[before]` query string parameter may be provided. `page[after]` and `page[before]` are cursors pointing to a record id.  The `page[after]` cursor indicates that only records **subsequent** to it should be returned.  The `page[before]` cursor indicates that only records **preceding** it should be returned.  **Only one** of `page[after]` or `page[before]` may be provided in a query, not both.  In cursor pagination, the equivalent to the `limit` query string is the `page[size]` query string parameter.  ## API Libraries  Sunshine Conversations provides an official API library for [Java](https://github.com/zendesk/sunshine-conversations-java), with more languages to come. These helpful libraries wrap calls to the API and can make interfacing with Sunshine Conversations easier.  ## Postman Collection  In addition to API libraries, Sunshine Conversations also has a Postman collection that can be used for development or testing purposes. See the [guide](https://docs.smooch.io/guide/postman-collection/) for information on how to install and use the collection in your Postman client.  ## Rate Limits  Sunshine Conversations APIs are subject to rate limiting. If the rate limit is exceeded Sunshine Conversations may return a `429 Too Many Requests` HTTP status code. We apply rate limits to prevent abuse, spam, denial-of-service attacks, and similar issues. Our goal is to keep the limits high enough so that any application using Sunshine Conversations as intended will not encounter them. However usage spikes do occur and encountering a rate limit may be unavoidable. In order to avoid production outages, when calling the Sunshine Conversations API you should implement `429` retry logic using exponential backoff and jitter.  If your use case involves making API calls in bulk, please [contact us](https://smooch.io/contact).  ## Request Size Limits  The Sunshine Conversations API imposes the following size limits on HTTP requests:  | Request Type   | Limit           | | -------------- | --------------- | | JSON           | 100kb           | | File upload  | 25mb            |  ## Authorization  This is an overview of how authorization works with the Sunshine Conversations API. Sunshine Conversations allows basic authentication or JSON Web Tokens (JWTs) as authentication methods for server-to-server calls. [See below](#authentication) for more details. There are two different authorization scopes available - app and account.  | Scope          | Authorized Methods                        | | -------------- | ----------------------------------------- | | app            | All methods besides Account Provisioning  | | account     | All methods                               |  The app scope can be used to access any of the Sunshine Conversations APIs, besides account provisioning methods, on behalf of a single app, or any app user related to that app. The account scope can be used to access any of the Sunshine Conversations and Account Provisioning APIs on behalf of the account owner, any app belonging to the account, or any app user related to those apps.  <aside class=\"notice\">An additional scope of `appUser` can also be used to authenticate users when using one of the Sunshine Conversations native SDK integrations. For information on how and when to use this scope, see the guide for <a href=\"https://docs.smooch.io/guide/authenticating-users/\">authenticating users.</a></aside>  ## Authentication  To authenticate requests to the API, you will need an API key, composed of a key id and a secret. For an overview of how authentication works in Sunshine Conversations and instructions on how to generate an API key, see the guide. API requests can be authenticated in two ways:  * With Basic authentication you can make requests using an API key directly.  * With JSON Web Tokens (JWTs) you sign tokens with an API key, which are then used to authenticate with the API. See [When to Use JWTs?](https://docs.smooch.io/guide/jwt/#when-to-use-jwts) to learn if JWTs are relevant for your usage.  * Before using an API key in production, make sure to familiarize yourself with best practices on how to [securely handle credentials](https://docs.smooch.io/guide/authentication-secure-credential-handling/).  ### Basic Authentication  API requests can be authenticated with [basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) using an API key. The key id is used as the username and the secret as the password. The scope of access is determined by the owner of the API key. See the [guide](https://docs.smooch.io/guide/basic-authentication/#scope-of-access) for more details.  ### JWTs  JSON Web Tokens (JWTs) are an industry standard authentication method. The full specification is described [here](https://tools.ietf.org/html/rfc7519), and a set of supported JWT libraries for a variety of languages and platforms can be found at http://jwt.io. To summarize, a JWT is composed of a header, a payload, and a signature. The payload contains information called claims which describe the subject to whom the token was issued. The JWT itself is transmitted via the HTTP `authorization` header. The token should be prefixed with “Bearer” followed by a space. For example: `Bearer your-jwt`. To generate a JWT, you need an API key, which is composed of a key ID and a secret. The key ID is included in a JWT’s header, as the `kid` property, while the secret is used to sign the JWT. For more in-depth coverage, see the [guide](https://docs.smooch.io/guide/jwt).  #### Header   The JWT header must contain the key id (kid) of the API key that is used to sign it. The algorithm (alg) used should be HS256. Unsigned JWTs are not accepted.  ```javascript {     \"alg\": \"HS256\",     \"typ\": \"JWT\",     \"kid\": \"act_5963ceb97cde542d000dbdb1\" } ```  #### Payload The JWT payload must include a scope claim which specifies the caller’s scope of access.   * account-scoped JWTs must be generated with an API key associated with a Sunshine Conversations account (act_) or service account (svc_). ```javascript {     \"scope\": \"account\" } ```  * app-scoped JWTs can be generated with an API key associated with an app (app_).  ```javascript {     \"scope\": \"app\" }  ```
 *
 * The version of the OpenAPI document: 9.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import IntegrationApiKey from '../sunshine-conversations-client.model/IntegrationApiKey';
import IntegrationApiKeyListResponse from '../sunshine-conversations-client.model/IntegrationApiKeyListResponse';
import IntegrationApiKeyResponse from '../sunshine-conversations-client.model/IntegrationApiKeyResponse';

/**
* CustomIntegrationApiKeys service.
* @module sunshine-conversations-client/sunshine-conversations-client.api/CustomIntegrationApiKeysApi
* @version 9.0.0
*/
export default class CustomIntegrationApiKeysApi {

    /**
    * Constructs a new CustomIntegrationApiKeysApi. 
    * @alias module:sunshine-conversations-client/sunshine-conversations-client.api/CustomIntegrationApiKeysApi
    * @class
    * @param {module:sunshine-conversations-client/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:sunshine-conversations-client/ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create Integration Key
     * Creates an API key for the specified custom integration. The response body will include a secret as well it’s corresponding id, which you can use to generate JSON Web Tokens to securely make API calls on behalf of the integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey} integrationApiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} and HTTP response
     */
    createCustomIntegrationKeyWithHttpInfo(appId, integrationId, integrationApiKey) {
      let postBody = integrationApiKey;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createCustomIntegrationKey");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling createCustomIntegrationKey");
      }
      // verify the required parameter 'integrationApiKey' is set
      if (integrationApiKey === undefined || integrationApiKey === null) {
        throw new Error("Missing the required parameter 'integrationApiKey' when calling createCustomIntegrationKey");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId
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
      let returnType = IntegrationApiKeyResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create Integration Key
     * Creates an API key for the specified custom integration. The response body will include a secret as well it’s corresponding id, which you can use to generate JSON Web Tokens to securely make API calls on behalf of the integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKey} integrationApiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse}
     */
    createCustomIntegrationKey(appId, integrationId, integrationApiKey) {
      return this.createCustomIntegrationKeyWithHttpInfo(appId, integrationId, integrationApiKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Integration Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    deleteCustomIntegrationKeyWithHttpInfo(appId, integrationId, keyId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling deleteCustomIntegrationKey");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling deleteCustomIntegrationKey");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling deleteCustomIntegrationKey");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId,
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
        '/v2/apps/{appId}/integrations/{integrationId}/keys/{keyId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Integration Key
     * Removes an API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    deleteCustomIntegrationKey(appId, integrationId, keyId) {
      return this.deleteCustomIntegrationKeyWithHttpInfo(appId, integrationId, keyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Integration Key
     * Get the specified API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse} and HTTP response
     */
    getCustomIntegrationKeyWithHttpInfo(appId, integrationId, keyId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getCustomIntegrationKey");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getCustomIntegrationKey");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling getCustomIntegrationKey");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId,
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
      let returnType = IntegrationApiKeyResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/keys/{keyId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Integration Key
     * Get the specified API key.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @param {String} keyId The id of the key.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyResponse}
     */
    getCustomIntegrationKey(appId, integrationId, keyId) {
      return this.getCustomIntegrationKeyWithHttpInfo(appId, integrationId, keyId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Integration Keys
     * Lists all API keys for a given integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse} and HTTP response
     */
    listCustomIntegrationKeysWithHttpInfo(appId, integrationId) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling listCustomIntegrationKeys");
      }
      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling listCustomIntegrationKeys");
      }

      let pathParams = {
        'appId': appId,
        'integrationId': integrationId
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
      let returnType = IntegrationApiKeyListResponse;
      return this.apiClient.callApi(
        '/v2/apps/{appId}/integrations/{integrationId}/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Integration Keys
     * Lists all API keys for a given integration.
     * @param {String} appId Identifies the app.
     * @param {String} integrationId The id of the integration.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:sunshine-conversations-client/sunshine-conversations-client.model/IntegrationApiKeyListResponse}
     */
    listCustomIntegrationKeys(appId, integrationId) {
      return this.listCustomIntegrationKeysWithHttpInfo(appId, integrationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
