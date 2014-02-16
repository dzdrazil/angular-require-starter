define(/** @lends BaseModel */function() {
    'use strict';

    /**
     * @constructor
     * @param {Object} data Initial data to populate the model
     */
    function BaseModel(json) {
        if (json) {
            this._fromJSON(json);
        }
    }

    /** @lends  BaseModel.prototype */
    BaseModel.prototype = {
        constructor: BaseModel,
        /**
         * Merges properties from a POJO into the model
         * @param  {Object} json raw data
         */
        _fromJSON: function(json) {
            var key;
            for (key in json) {
                if (json.hasOwnProperty(key)) {
                    this[key] = json[key];
                }
            }
        },

        /**
         * Returns an object hash of the model properties
         * @return {Object}
         */
        toJSON: function() {
            var hash = {};
            var key;
            for (key in this) {
                if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                    hash[key] = this[key];
                }
            }

            return hash;
        }
    };

    return BaseModel;
});
