// ==UserScript==
// @name         GeoFSUsers
// @namespace    https://github.com/KittenApps-Films/GeoFSUsers
// @version      1.0
// @description  Adds user lookup
// @author       Noah S. Davidson, GeoFS call sign KittenFilms[KFA]
// @match        http://geo-fs.com/geofs.php?v=*
// @match        http://www.geo-fs.com/geofs.php?v=*
// @match        https://geo-fs.com/geofs.php?v=*
// @match        https://www.geo-fs.com/geofs.php?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// ==/UserScript==

window.addEventListener('load', function() {
    'use strict';
    console.log("GeoFSUsers installer running");
    var UsersScript = document.createElement('script');
    UsersScript.src="https://kittenapps-films.github.io/GeoFSUsers/main.js";
    UsersScript.type = 'text/javascript';
    UsersScript.id = "UsersScript";
    document.body.appendChild(UsersScript);
    console.log("GeoFSUsers installed");
})
