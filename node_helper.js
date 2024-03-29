/* MagicMirror²
 * Module: MMM-CustomMessage2
 *
 * By Dirk Melchers 
 * MIT Licensed.
 */
var NodeHelper = require('node_helper');
var request = require('request');

module.exports = NodeHelper.create({
    start: function () {
        console.log(this.name + ' helper started ...');
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'MMM_CUSTOMMESSAGE2_REQUEST') {
            var that = this;
            request({
                url: payload.url,
                method: 'GET'
            }, function(error, response, body) {
                // console.log("MMM_CustomMessage2 response:");
                if (!error && response.statusCode == 200) {
                    // console.log("send notification: "+payload.id);
                    that.sendSocketNotification('MMM_CUSTOMMESSAGE2_RESPONSE', {
                        id: payload.id,
                        data: response,
                        tableID: payload.tableID
                    });
                }
            });
        }
    }
});
