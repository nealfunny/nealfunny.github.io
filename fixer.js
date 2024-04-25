window.onload = function(){
    var games = document.querySelector("#__layout > div > div > div.posts").children
    for (var i = 0; i < games.length; i++) {
        pathname = (new URL(games[i].href)).pathname
        if (pathname == '/infinite-craft/'){
            games[i].href = 'https://infinite-craft.com/infinite-craft/'
        }
        else {
            games[i].href = `https://neal.fun${pathname}`
        }
    }
}