---
---
<!DOCTYPE html>
<html>
{%- include head.md -%}
<body>
    {%- include header.md -%}
    <div class="bm-main-container">
        <div class="bm-window">
            <a class="bm-site-title" rel="author" href="{{ '/' | relative_url }}"><img class="bm-header-img" src="{{ '/assets/images/jackeverettheader.jpg' | relative_url }}"/></a>
            <div class="bm-nav-buttons">
            {% include nav.md %}
            </div>
            <h1>{{ page.title }}</h1>
            <div class="bm-window-body">
                <div class="bm-sidebar bm-hidden">
                    <h2>{{ page.title }}</h2>
                    <div class="bm-color-line"></div>
                    <p>{{ page.description }}</p>
                </div>
                <div class="bm-content-area">
                    <div class="bm-content-area-inner">
                        {{ content }}
                    </div>
                </div>
            </div>
            {%- include footer.md -%}
        </div>
    </div>
    <script type="module" src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script type="module" src="{{ '/assets/js/site.js' | relative_url }}"></script>
</body>
</html>