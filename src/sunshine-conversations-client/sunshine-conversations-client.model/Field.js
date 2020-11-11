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

/**
 * The Field model module.
 * @module sunshine-conversations-client/sunshine-conversations-client.model/Field
 * @version 9.1.0
 */
class Field {
    /**
     * Constructs a new <code>Field</code>.
     * Properties that can be expected to receive inside a form or formResponse message field. 
     * @alias module:sunshine-conversations-client/sunshine-conversations-client.model/Field
     * @param type {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} The field type.
     * @param name {String} The name of the field. Must be unique per form or formResponse.
     * @param label {String} The label of the field. What the field is displayed as on Web Messenger.
     */
    constructor(type, name, label) { 
        
        Field.initialize(this, type, name, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name, label) { 
        obj['type'] = type;
        obj['name'] = name;
        obj['label'] = label;
    }

    /**
     * Constructs a <code>Field</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Field} obj Optional instance to populate.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Field} The populated <code>Field</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Field();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('placeholder')) {
                obj['placeholder'] = ApiClient.convertToType(data['placeholder'], 'String');
            }
            if (data.hasOwnProperty('minSize')) {
                obj['minSize'] = ApiClient.convertToType(data['minSize'], 'Number');
            }
            if (data.hasOwnProperty('maxSize')) {
                obj['maxSize'] = ApiClient.convertToType(data['maxSize'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('select')) {
                obj['select'] = ApiClient.convertToType(data['select'], [Object]);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [Object]);
            }
        }
        return obj;
    }

/**
     * Returns The field type.
     * @return {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets The field type.
     * @param {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} type The field type.
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns The name of the field. Must be unique per form or formResponse.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets The name of the field. Must be unique per form or formResponse.
     * @param {String} name The name of the field. Must be unique per form or formResponse.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns The label of the field. What the field is displayed as on Web Messenger.
     * @return {String}
     */
    getLabel() {
        return this.label;
    }

    /**
     * Sets The label of the field. What the field is displayed as on Web Messenger.
     * @param {String} label The label of the field. What the field is displayed as on Web Messenger.
     */
    setLabel(label) {
        this['label'] = label;
    }
/**
     * Returns Placeholder text for the field. form message only.
     * @return {String}
     */
    getPlaceholder() {
        return this.placeholder;
    }

    /**
     * Sets Placeholder text for the field. form message only.
     * @param {String} placeholder Placeholder text for the field. form message only.
     */
    setPlaceholder(placeholder) {
        this['placeholder'] = placeholder;
    }
/**
     * Returns The minimum allowed length for the response for a field of type text. form message only.
     * minimum: 1
     * maximum: 128
     * @return {Number}
     */
    getMinSize() {
        return this.minSize;
    }

    /**
     * Sets The minimum allowed length for the response for a field of type text. form message only.
     * @param {Number} minSize The minimum allowed length for the response for a field of type text. form message only.
     */
    setMinSize(minSize) {
        this['minSize'] = minSize;
    }
/**
     * Returns The maximum allowed length for the response for a field of type text. form message only.
     * minimum: 1
     * maximum: 128
     * @return {Number}
     */
    getMaxSize() {
        return this.maxSize;
    }

    /**
     * Sets The maximum allowed length for the response for a field of type text. form message only.
     * @param {Number} maxSize The maximum allowed length for the response for a field of type text. form message only.
     */
    setMaxSize(maxSize) {
        this['maxSize'] = maxSize;
    }
/**
     * Returns Specifies the response for a text field.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets Specifies the response for a text field.
     * @param {String} text Specifies the response for a text field.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns Specifies the response for a email field.
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Specifies the response for a email field.
     * @param {String} email Specifies the response for a email field.
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * Returns Array of objects representing the response for a field of type select. form and formResponse messages only.
     * @return {Array.<Object>}
     */
    getSelect() {
        return this.select;
    }

    /**
     * Sets Array of objects representing the response for a field of type select. form and formResponse messages only.
     * @param {Array.<Object>} select Array of objects representing the response for a field of type select. form and formResponse messages only.
     */
    setSelect(select) {
        this['select'] = select;
    }
/**
     * Returns Array of objects representing options for a field of type select.
     * @return {Array.<Object>}
     */
    getOptions() {
        return this.options;
    }

    /**
     * Sets Array of objects representing options for a field of type select.
     * @param {Array.<Object>} options Array of objects representing options for a field of type select.
     */
    setOptions(options) {
        this['options'] = options;
    }

}

/**
 * The field type.
 * @member {module:sunshine-conversations-client/sunshine-conversations-client.model/Field.TypeEnum} type
 */
Field.prototype['type'] = undefined;

/**
 * The name of the field. Must be unique per form or formResponse.
 * @member {String} name
 */
Field.prototype['name'] = undefined;

/**
 * The label of the field. What the field is displayed as on Web Messenger.
 * @member {String} label
 */
Field.prototype['label'] = undefined;

/**
 * Placeholder text for the field. form message only.
 * @member {String} placeholder
 */
Field.prototype['placeholder'] = undefined;

/**
 * The minimum allowed length for the response for a field of type text. form message only.
 * @member {Number} minSize
 * @default 1
 */
Field.prototype['minSize'] = 1;

/**
 * The maximum allowed length for the response for a field of type text. form message only.
 * @member {Number} maxSize
 * @default 128
 */
Field.prototype['maxSize'] = 128;

/**
 * Specifies the response for a text field.
 * @member {String} text
 */
Field.prototype['text'] = undefined;

/**
 * Specifies the response for a email field.
 * @member {String} email
 */
Field.prototype['email'] = undefined;

/**
 * Array of objects representing the response for a field of type select. form and formResponse messages only.
 * @member {Array.<Object>} select
 */
Field.prototype['select'] = undefined;

/**
 * Array of objects representing options for a field of type select.
 * @member {Array.<Object>} options
 */
Field.prototype['options'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Field['TypeEnum'] = {

    /**
     * value: "email"
     * @const
     */
    "email": "email",

    /**
     * value: "select"
     * @const
     */
    "select": "select",

    /**
     * value: "text"
     * @const
     */
    "text": "text"
};



export default Field;

