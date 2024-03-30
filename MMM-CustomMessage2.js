/* global Log, Module */

/* MagicMirror²
 * Module: MMM-CustomMessage2
 *
 * By dathbe
 * MIT Licensed.
 */

Module.register("MMM-CustomMessage2", {

	// Default config.
	defaults: {
		animationSpeed: 2 * 1000,
		uniqueID: "",
		initialMessage: "No notification received yet"
	},
	// Define required scripts.
	getStyles () {
		return ["MMM-CustomMessage2.css"];
	},

	// Define start sequence.
	start () {
		this.loaded = false;
		this.initialUpdate();
	},

	// Override dom generator.
	getDom () {
		const self = this;
		// create wrapper
		const wrapper = document.createElement("div");

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

	processNewMessage (data) {
		this.messageText = data;
		this.loaded = true;
		this.updateDom(this.config.animationSpeed);
	},

	notificationReceived (notification, payload, sender) {
		if (notification === "CUSTOMMESSAGE2_UPDATE" && payload.uniqueID === this.config.uniqueID) {
			Log.debug(`Received notification: ${notification} with payload.message: ${payload.message} from sender: ${sender}`);
			this.processNewMessage(payload.message);
		}
	},

	initialUpdate () {
		const self = this;
		setTimeout(() => {
			self.processNewMessage(self.config.initialMessage);
		}, 0);
	}
});
