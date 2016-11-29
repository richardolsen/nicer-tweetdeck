# nicer-tweetdeck
Nicer Tweetdeck is a Google Chrome plugin for blacklisting and whitelisting tweets that appear in Tweetdeck. Tweets that are blacklisted due to containing a blacklist word, username or url (including parts of words and usernames) are automatically hidden, except if they are also whitelisted.

For example, I whitelist my username and name, so that I see every tweet that is directed at me, even if they contain a blacklist word.  I've been using this plugin for a number of months and I've found it really has improved my experience on twitter.  This plugin only works with the web-based Tweetdeck, it could be modified to also work on twitter.com


Currently the plugin isn't packaged up for normal installation as a Chrome Extension but rather requires you
to add it as an Unpacked Extension, which apparently doesn't work on Windows, refer to: http://stackoverflow.com/questions/24577024/install-chrome-extension-not-in-the-store

To edit the blacklist or whitelist edit the file background.js
The lines you are looking for are start with:
var blacklist = [

and

var whitelist = [

In the future I'll consider making this an extension in the store.

Any feedback is appreciated.
