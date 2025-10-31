// (c) 2025 Beem Media. All rights reserved.

class JEGamesList extends HTMLElement {
    getFromService = false;

    connectedCallback() {
        this.innerHTML = "Loading list...";
        
        if (this.getFromService)
        {
            this.GetFromService();
        }
        else
        {
            this.GetFromHost();
        }
    }

    GetFromHost() {
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

    GetFromService() {
        $.ajax({
            type: 'GET',
            url: this.getAttribute("serviceurl"),
            async: true,
            success: function (response) {
                if (response.status != null && response.status == "OK")
                {
                    // this.innerHTML = JSON.stringify(response.data);
                    var jsonObject = JSON.parse(response.data);
                    this.BuildGamesList(jsonObject);
                } else {
                    this.innerHTML = "Response was not OK.";
                }
                // this.BuildGamesList(response);
            }.bind(this),
            error: function (request, status, error) {
                this.innerHTML = "Request failed.";
            }.bind(this),
        });
    }

    BuildGamesList(jsonObject) {

        this.innerHTML = "";

        for (var category of jsonObject) {
            this.innerHTML += "<h2>" + category.header + "</h2>";

            for (var item of category.games) {
                this.innerHTML += "<ul>";
                this.innerHTML += "<li>" + item.displayText + (item.notesText != null && item.notesText.length > 0 ? (" - " + item.notesText) : "") + "</li>";
                this.innerHTML += "</ul>";
            }
        }
    }
}
customElements.define("ge-gameslist", JEGamesList);
