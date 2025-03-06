console.log("GeoFSUsers running");
var d = document.getElementsByClassName("geofs-user-dialog")[0];
d.id = "test2";

var selected = "no_one_selected";

//var players = {
    //"KittenFilms[KFA]": "kittenapps-films.github.io/geofs/kfa/"
//}

function linkGet() {
    if (selected in users) {
        return '//'+users[selected];
    } else {
        return '//google.com/search?q=GeoFS+user+'+selected;
    }
}

var button = document.createElement('p');
button.innerHTML = "user";
button.classList = ["mdl-button mdl-button--raised"];
button.onclick = function() { console.log("click"); window.open(linkGet(),'_blank'); };

d.appendChild(button);

var targeter = document.querySelector("#test2").childNodes[1].childNodes[2];
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    console.log(targeter.innerHTML);
    button.innerHTML = targeter.innerHTML;
    selected = targeter.innerHTML;
    });
});
var config = {
    childList: true,
    subtree: true,
    characterData: true
};
observer.observe(targeter, config);
one()
