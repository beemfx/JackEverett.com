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

        Object.entries(response).forEach(([key, value]) => {
            this.innerHTML += "<h2>" + key + "</h2>";
            for (var item of value) {
                this.innerHTML += "<p>" + item.name + " (" + item.platform + ") " + item.date + " - " + item.notes + "</p>";
            }
        });
    }
}
customElements.define("ge-gameslist", JEGamesList);
