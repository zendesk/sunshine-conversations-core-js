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
import Action from './Action';

/**
 * The TextMessage model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/TextMessage
 * @version 9.1.0
 */
class TextMessage {
    /**
     * Constructs a new <code>TextMessage</code>.
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/TextMessage
     * @param type {String} The type of message.
     */
    constructor(type) { 
        
        TextMessage.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>TextMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/TextMessage} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/TextMessage} The populated <code>TextMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TextMessage();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [Action]);
            }
        }
        return obj;
    }

/**
     * Returns The type of message.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The type of message.
     * @param {String} type The type of message.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The text content of the message. Optional only if actions are provided.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The text content of the message. Optional only if actions are provided.
     * @param {String} text The text content of the message. Optional only if actions are provided.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns Array of message actions.
     * @return {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>}
     */
    getActions() {
        return this.actions;
    }

    /**
     * Sets Array of message actions.
     * @param {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>} actions Array of message actions.
     */
    setActions(actions) {
        this['actions'] = actions;
    }

}

/**
 * The type of message.
 * @member {String} type
 * @default 'text'
 */
TextMessage.prototype['type'] = 'text';

/**
 * The text content of the message. Optional only if actions are provided.
 * @member {String} text
 */
TextMessage.prototype['text'] = undefined;

/**
 * Array of message actions.
 * @member {Array.<module:sunshine-conversations-client/sunshine-conversations-client.model/Action>} actions
 */
TextMessage.prototype['actions'] = undefined;






export default TextMessage;

