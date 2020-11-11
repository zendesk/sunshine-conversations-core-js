/**
 * Sunshine Conversations API
 *
 * The version of the OpenAPI document: 9.1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.3.1
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
import ClientType from './ClientType';

/**
 * The Client model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Client
 * @version 9.1.0
 */
class Client {
    /**
     * Constructs a new <code>Client</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Client
     */
    constructor() { 
        
        Client.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client} The populated <code>Client</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Client();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ClientType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('integrationId')) {
                obj['integrationId'] = ApiClient.convertToType(data['integrationId'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('lastSeen')) {
                obj['lastSeen'] = ApiClient.convertToType(data['lastSeen'], 'String');
            }
            if (data.hasOwnProperty('linkedAt')) {
                obj['linkedAt'] = ApiClient.convertToType(data['linkedAt'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('avatarUrl')) {
                obj['avatarUrl'] = ApiClient.convertToType(data['avatarUrl'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ApiClient.convertToType(data['info'], Object);
            }
            if (data.hasOwnProperty('raw')) {
                obj['raw'] = ApiClient.convertToType(data['raw'], Object);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the client.
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets The unique ID of the client.
     * @param {String} id The unique ID of the client.
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType} type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The client status. Indicates if the client is able to receive messages or not. Can be pending, inactive, active, or blocked.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Client.StatusEnum}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets The client status. Indicates if the client is able to receive messages or not. Can be pending, inactive, active, or blocked.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Client.StatusEnum} status The client status. Indicates if the client is able to receive messages or not. Can be pending, inactive, active, or blocked.
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * Returns The ID of the integration that the client was created for. Unused for clients of type sdk, as they incorporate multiple integrations.
     * @return {String}
     */
    getIntegrationId() {
        return this.integrationId;
    }

    /**
     * Sets The ID of the integration that the client was created for. Unused for clients of type sdk, as they incorporate multiple integrations.
     * @param {String} integrationId The ID of the integration that the client was created for. Unused for clients of type sdk, as they incorporate multiple integrations.
     */
    setIntegrationId(integrationId) {
        this['integrationId'] = integrationId;
    }
/**
     * Returns The ID of the user on an external channel. For example, the user’s phone number for Twilio, or their page-scoped user ID for Facebook Messenger. Applies only to non-SDK clients.
     * @return {String}
     */
    getExternalId() {
        return this.externalId;
    }

    /**
     * Sets The ID of the user on an external channel. For example, the user’s phone number for Twilio, or their page-scoped user ID for Facebook Messenger. Applies only to non-SDK clients.
     * @param {String} externalId The ID of the user on an external channel. For example, the user’s phone number for Twilio, or their page-scoped user ID for Facebook Messenger. Applies only to non-SDK clients.
     */
    setExternalId(externalId) {
        this['externalId'] = externalId;
    }
/**
     * Returns A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing the last time the user interacted with this client.
     * @return {String}
     */
    getLastSeen() {
        return this.lastSeen;
    }

    /**
     * Sets A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing the last time the user interacted with this client.
     * @param {String} lastSeen A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing the last time the user interacted with this client.
     */
    setLastSeen(lastSeen) {
        this['lastSeen'] = lastSeen;
    }
/**
     * Returns A timestamp signifying when the client was added to the user. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     * @return {String}
     */
    getLinkedAt() {
        return this.linkedAt;
    }

    /**
     * Sets A timestamp signifying when the client was added to the user. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     * @param {String} linkedAt A timestamp signifying when the client was added to the user. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
     */
    setLinkedAt(linkedAt) {
        this['linkedAt'] = linkedAt;
    }
/**
     * Returns The user's display name on the channel.
     * @return {String}
     */
    getDisplayName() {
        return this.displayName;
    }

    /**
     * Sets The user's display name on the channel.
     * @param {String} displayName The user's display name on the channel.
     */
    setDisplayName(displayName) {
        this['displayName'] = displayName;
    }
/**
     * Returns The URL for the user's avatar on the channel.
     * @return {String}
     */
    getAvatarUrl() {
        return this.avatarUrl;
    }

    /**
     * Sets The URL for the user's avatar on the channel.
     * @param {String} avatarUrl The URL for the user's avatar on the channel.
     */
    setAvatarUrl(avatarUrl) {
        this['avatarUrl'] = avatarUrl;
    }
/**
     * Returns A flat curated object with properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     * @return {Object}
     */
    getInfo() {
        return this.info;
    }

    /**
     * Sets A flat curated object with properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     * @param {Object} info A flat curated object with properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     */
    setInfo(info) {
        this['info'] = info;
    }
/**
     * Returns An object with raw properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     * @return {Object}
     */
    getRaw() {
        return this.raw;
    }

    /**
     * Sets An object with raw properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     * @param {Object} raw An object with raw properties that vary for each client platform. All keys are optional and not guaranteed to be available.
     */
    setRaw(raw) {
        this['raw'] = raw;
    }

}

/**
 * The unique ID of the client.
 * @member {String} id
 */
Client.prototype['id'] = undefined;

/**
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/ClientType} type
 */
Client.prototype['type'] = undefined;

/**
 * The client status. Indicates if the client is able to receive messages or not. Can be pending, inactive, active, or blocked.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Client.StatusEnum} status
 */
Client.prototype['status'] = undefined;

/**
 * The ID of the integration that the client was created for. Unused for clients of type sdk, as they incorporate multiple integrations.
 * @member {String} integrationId
 */
Client.prototype['integrationId'] = undefined;

/**
 * The ID of the user on an external channel. For example, the user’s phone number for Twilio, or their page-scoped user ID for Facebook Messenger. Applies only to non-SDK clients.
 * @member {String} externalId
 */
Client.prototype['externalId'] = undefined;

/**
 * A datetime string with the format `YYYY-MM-DDThh:mm:ss.SSSZ` representing the last time the user interacted with this client.
 * @member {String} lastSeen
 */
Client.prototype['lastSeen'] = undefined;

/**
 * A timestamp signifying when the client was added to the user. Formatted as `YYYY-MM-DDThh:mm:ss.SSSZ`.
 * @member {String} linkedAt
 */
Client.prototype['linkedAt'] = undefined;

/**
 * The user's display name on the channel.
 * @member {String} displayName
 */
Client.prototype['displayName'] = undefined;

/**
 * The URL for the user's avatar on the channel.
 * @member {String} avatarUrl
 */
Client.prototype['avatarUrl'] = undefined;

/**
 * A flat curated object with properties that vary for each client platform. All keys are optional and not guaranteed to be available.
 * @member {Object} info
 */
Client.prototype['info'] = undefined;

/**
 * An object with raw properties that vary for each client platform. All keys are optional and not guaranteed to be available.
 * @member {Object} raw
 */
Client.prototype['raw'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Client['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "blocked"
     * @const
     */
    "blocked": "blocked",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",

    /**
     * value: "pending"
     * @const
     */
    "pending": "pending"
};



export default Client;

