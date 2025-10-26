// (c) 2025 Beem Media. All rights reserved.

class JEGamesList extends HTMLElement{
    connectedCallback() {
        this.innerHTML = "Games List!";

        $.ajax({
            type: 'GET',
            url: this.getAttribute("datapath"),
            async: true,
            success: function (response) {
                this.BuildGamesList(response);
            }.bind(this),
            error: function (request, status, error) {
                this.innerHTML = "Request failed.";
            }.bind(this),
        });
    }

    BuildGamesList(response) {
        // this.innerHTML = JSON.stringify(response);  return;

        this.innerHTML = "";

        for (var key in response) {
            this.innerHTML += "<h2>" + key + "</h2>";
            for (var item of response[key]) {
                this.innerHTML += "<p>" + item.name + " (" + item.platform + ") " + item.date + " - " + item.notes + "</p>";
            }
        }
    }
}
customElements.define("ge-gameslist", JEGamesList);
