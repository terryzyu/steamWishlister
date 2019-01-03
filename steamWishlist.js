// ==UserScript==
// @name         Steam Wishlister
// @namespace    https://github.com/terryzyu/steamWishlister
// @version      1.0
// @description  Wishlist (almost) all items on steam
// @author       Terry Yu
// @match        https://store.steampowered.com/wishlist/*
// @run-at		 document-end
// @grant        none
// ==/UserScript==


//See README.md for more details!

function wishlistAllItems(){

    var currentWishlist = []; //Stores items already wishlisted
    var allSteamItems = []; //Stores all items on steam
    var diff = []; //Stores unique/non-wishlisted items
    //populate allSteamItems


    //Gets all steam items, populates allSteamItems
    $J.getJSON('//api.steampowered.com/ISteamApps/GetAppList/v0002',
               function(data){
        $J.each(data['applist']['apps'], function(key, value) {
            allSteamItems.push(value['appid']);
        }) //populate allSteamItems

        //populate currentWishlist
        $J.getJSON('https://store.steampowered.com/dynamicstore/userdata/', 
                   function(data){
            $J.each(data['rgWishlist'], function(index, value) {
                currentWishlist.push(value);
            })
        }); //populate currentWishlist

        //Gets the difference of two arrays but doesn't seem to work at the moment
        var diff = $J(allSteamItems).not(currentWishlist).get();

        var total = diff.length; //Total number of items to wishlist
        var completed = 0; //Items already wishlisted

        //Sleep function
        var sleep = function(ms){
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        //Adds item to wishlist. 
        var addItem = async function(){
            await sleep(1500);

            //Makes API call to wishlist the item
            $J.post('https://store.steampowered.com/api/addtowishlist', {
                appid: diff[completed],
                sessionid: g_sessionID
            }).always(function(){
                if(completed >= total){ //All items are wishlisted
                	console.log('Completed. Please make sure to disable script');
                }
                else{ //Calls function again and continues wishlisting
               		console.log('Wishlisted: ' + completed + '/' + total)
                    completed++;
                    addItem();
                }

            });
        }; //addItem()
        addItem();
    });

} //wishlistAllItems()



addJS_Node(null, null, wishlistAllItems);

//-- This is a standard-ish utility function: borrowed from auto-steam-queue
function addJS_Node(text, s_URL, funcToRun, runOnLoad) {
    var D                                   = document;
    var scriptNode                          = D.createElement ('script');
    if (runOnLoad) {
        scriptNode.addEventListener ("load", runOnLoad, false);
    }
    scriptNode.type                         = "text/javascript";
    if (text)       scriptNode.textContent  = text;
    if (s_URL)      scriptNode.src          = s_URL;
    if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (scriptNode);
}