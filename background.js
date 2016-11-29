/*
	Author: Richard Olsen @richardolsen
	Use this code however you want.
*/

$( document ).ready(function() {

	$("body").bind("DOMSubtreeModified", newNode);

	function occurrences(string, subString, allowOverlapping) {

		/** Function count the occurrences of substring in a string;
		 * @param {String} string   Required. The string;
		 * @param {String} subString    Required. The string to search for;
		 * @param {Boolean} allowOverlapping    Optional. Default: false;
		 * @author Vitim.us http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
		 */

	    string += "";
	    subString += "";
	    if (subString.length <= 0) return (string.length + 1);

	    var n = 0,
	        pos = 0,
	        step = allowOverlapping ? 1 : subString.length;

	    while (true) {
	        pos = string.indexOf(subString, pos);
	        if (pos >= 0) {
	            ++n;
	            pos += step;
	        } else break;
	    }
	    return n;
	}

	function newNode(el) {

		var cl = el.target.classList;

		//Edit these four variables to customise tweetdeck.

		//whitelist is an array of whitelisted words, if the tweet contains one of these words it will always be displayed
		var whitelist = ['richardolsen', 'richard olsen'];

		//blacklist is an array of blacklisted words, if the tweet contains one or more of these words and no whitelisted words it will be hidden
		var blacklist = [ 'pbs.twimg.com/media', 'background-image:url' , 'Sunday_Trivia','Trump','groupon.com','fllwrs.com','visiblelearning', 'auspol', 'gonski',  'pic.twitter.com', 'theage.com.au', 'smh.com.au','sumall.com','paper.li', 'ln.is',  'thanks for the follow'];

		//ReplacementHTML contains the text or HTML that will replace the tweet, you can use this to show a tweet has been deleted
		var replacementHTML = '';  //Leaving this as an empty string hides the whole tweet. A thicker border is the only hint a tweet has been deleted

		//If the tweet has more hashtags than specified in the hashTagThreshold it will be hidden. Set to 0 to hide all tweets with hashtags.
		var hashTagThreshold = 1;


		for ( var i=0; i < cl.length; i++ ) {
				if ( cl[i] == 'chirp-container' ) {
					var articles = el.target.children;
					for( var j =0; j < articles.length; j++ ) {

						//Reset the inWhiteList flag for each new tweet.
						var inWhitelist = false;
						var isHidden = false;

						for ( var k=0; k < whitelist.length; k++ ) {

							if ( articles[j].outerText.toLowerCase().indexOf(whitelist[k].toLowerCase()) > 0 ) {
								//The tweet contains a whitelisted word, so this tweet will be displayed regardless of blacklisted words, or number of hashtags
								inWhitelist = true;
							}
						}

						for ( var k=0; k < blacklist.length; k++ ) {

							if ( ( articles[j].outerText.toLowerCase().indexOf(blacklist[k].toLowerCase()) > 0 ) && ( inWhitelist == false ) ) {
								console.log('*** Removing this tweet *** reason contains the blacklisted word: '+ blacklist[k] );

								//Removing the node freaks Tweetdeck out, so replace the HTML instead.
								$('[data-key='+$(articles[j]).attr('data-key')+']').html(replacementHTML);
								isHidden = true;
							}
						}


						if ( ( occurrences(articles[j].outerText, '#') > hashTagThreshold ) && ( inWhitelist == false ) ) {
							//console.log('*** Removing this tweet *** reason: More that '+hashTagThreshold+' hashtags used.' );

							//Removing the node freaks Tweetdeck out, so replace the HTML instead.
							$('[data-key='+$(articles[j]).attr('data-key')+']').html(replacementHTML);
							isHidden = true;
						}
					}
				}
		}
	}

	//Display a message in the console to show that the plugin is operating and the content is being filtered
	console.log('Richard\'s Tweetdeck extension loaded.');
});
