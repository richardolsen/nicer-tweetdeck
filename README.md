# nicer-tweetdeck
Nicer Tweetdeck is a Google Chrome plugin for blacklisting and whitelisting tweets that appear in Tweetdeck
Currently the plugin isn't packaged up for normal installation as a Chrome Extension but rather requires you
to add it as an Unpacked Extension, which apparently doesn't work on Windows, refer to: http://stackoverflow.com/questions/24577024/install-chrome-extension-not-in-the-store

To edit the blacklist or whitelist edit the file background.js
The lines you are looking for are start with:
var blacklist = [

and

var whitelist = [

In the future I'll consider making this an extension in the store.

Any feedback is appreciated.
