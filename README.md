# Steam Wishlister #

This script will add all items to your wishlist on Steam. This supposedly includes free-to-play, DLC, movies, and other media.

## WARNING! ##

I still need to do a few things such as

* Making a wishlist backup that you can restore from
* Deleting all items from your wishlist
* Wishlisting only items that are not on your wishlist (like an updater)

If you want to use this then you are accepting the fact that you will have ~72,625 items wishlisted and may never be able to get rid of them. I am not responsible if you get your steam account banned or timeout.

I am unfamiliar with JavaScript. All the code written is from my understanding of programming and reviewing other people's code. Heavy influence from [auto-steam-queue](https://github.com/3xz/auto-steam-queue). Many thanks!

## Now to the fun stuff ##

Make sure you do the following
* Disable the wishlist email under [email preferences](https://store.steampowered.com/account/emailoptout)
	+ Unless you want hourly email spam
* Set your profile to private under [privacy settings](https://steamcommunity.com/id/me/edit/settings)
	+ This prevents spamming the activity feed with the "Added to wishlist" message
* Disable "Content Security Policy". MAKE SURE TO REVERT THIS CHANGE WHEN DONE
	+ Chrome: [This addon works well.](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden?hl=en) Install and enable it.
	+ Firefox: Type in "about:config" to the address bar. Search for "security.csp.enable" and set it to false

	   I HIGHLY SUGGEST YOU USE AN ENTIRELY DIFFERENT BROWSER such as [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)

## How to use ##
In either browser you can use the console and copy paste the code on any page beginning with store.steampowered.com

You can also install this as a script to TamperMonkey or GreaseMonkey, depending on your browser. The script will run if CSP is disabled and if you're on the wishlist page. It will wishlist any new items added to Steam since the last run through (not yet inplemented). Open the console to see the progress.

# Enjoy and make sure to enable CSP when done! #
