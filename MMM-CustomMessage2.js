/* global Module */

/* MagicMirror²
 * Module: MMM-CustomMessage2
 *
 * By dathbe
 * CC Licensed.
 */

Module.register("MMM-CustomMessage2",{

	// Default config.
	defaults: {
		animationSpeed: 2 * 1000,
		uniqueID: null,
		initialMessage: "No notification received yet"
	},
	// Define required scripts.
	getStyles: function() {
		return ["MMM-CustomMessage2.css"];
	},
    
	// Define start sequence.
	start: function() {        
		this.loaded = false;
		this.initialUpdate();
	},

	// Override dom generator.
	getDom: function() {
        var self = this;
        // create wrapper
		var wrapper = document.createElement("div");

        // Loading message
		if (!this.loaded) {
			wrapper.innerHTML = "MMM-CustomMessage2 Loading...";
			wrapper.className = "dimmed light small";
			return wrapper;
		}

		// Actual message
        wrapper.innerHTML = self.messageText;
        
		return wrapper;
	},

    processNewMessage: function(data) {  
        this.messageText = data;
        this.loaded = true;
		this.updateDom(this.config.animationSpeed);
	},

	notificationReceived: function(notification, payload, sender) {
        if(notification === 'CUSTOMMESSAGE2_UPDATE' && (payload.uniqueID == this.config.uniqueID || !this.config.uniqueID)) {
			this.processNewMessage(payload.message);
        }
    },

	initialUpdate: function() {
		var self = this;
		setTimeout(function() {
			self.processNewMessage(self.config.initialMessage);
		}, 0);
	},
});
