# Module: MMM-CustomMessage2

THIS MODULE IS A WORK IN PROGRESS
THIS README NEEDS TO BE UPDATED 

The `MMM-CustomMessage2` module is a [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) addon module.  It posts any message you want to your MagicMirror.  Multiple instances are supported.  Message can be updated via notification.

![Example Screenshot](example1.png)

Suggestions are welcome.

## Installation

```bash
cd ~/MagicMirror/modules \
&& git clone https://github.com/dathbe/MMM-CustomMessage2 \
&& cd MMM-CustomMessage2 \
&& npm install
```

## Updating

```sh
cd ~/MagicMirror/modules/MMM-CustomMessage2 \
&& git pull \
&& npm install
```

## Usage

### Example Config
To use this module, add it to the modules array in your `~/MagicMirror/config/config.js` file:

````js
{
module: 'MMM-CustomMessage2',
	position: 'top_bar',
	config: {
		initialMessage: "I posted my first message!",
		uniqueID: "firstMessage",
		animationSpeed: 1000 * 2,
	},
}
````

### Configuration options

The following properties can be configured:

| Option                | Description
|-----------------------|------------
|`initialMessage`	|*Optional* A message you would like to display when MagicMirror loads<br>**Type:** `string`<br>**Default:** `"No notification received yet"`
|`uniqueID`	|*Optional*, but necessary if you plan to have multiple instances of this module in your config file.  Give each instance a unique `uniqueID` that you can pass in notifications (see below)<br>**Type:** anything<br>**Default:** `""`
|`animationSpeed`	|*Optional* The speed of animated transitions from one message to another in milliseconds<br>**Type:** `int`<br>**Default:** `2000` (2 seconds)

## Changelog

- 2024-XX-XX: Initial release
