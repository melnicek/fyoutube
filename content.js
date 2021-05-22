if (window.location.href.indexOf("youtube.com/watch") > 0) {
    for (param of window.location.search.substr(1).split("&")) {
        if (param.split('=')[0] == 'v') {
            window.location.href = "https://fyoutube.melnicek.xyz/?" + param.split('=')[1];
        }
    }
} else {
    window.location.href = "https://is.muni.cz/auth";
}