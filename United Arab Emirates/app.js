fetch('app.json')
        .then(function (response) {
        return response.json();
})
        .then(function (data) {
        appendData(data);
})
        .catch(function (err) {
        console.log('error: ' + err);
});

function IPTVTemplate(iptv) {
        return `
        <div class="IPTVBox"><a href="${iptv.url}"><img class="IPTVCover" src="${iptv.photo}"></a>
        <h2 class="IPTVText">${iptv.name}</h2></div>
        `;
}

function appendData(data) {
        var mainContainer = document.getElementById("app").innerHTML = `
        <h1 class="IPTVHeader">United Arab Emirates (${data.length})</h1>
        ${data.map(IPTVTemplate).join("")}
        <p class="IPTVFooter">These ${data.length} Channels were added recently. Check back soon for updates.</p>
        `;
}