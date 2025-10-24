---
layout: page
---
<h2>{{ page.title }}</h2>
<p><small>{{ page.date | date: "%B %d, %Y" }}</small><p>
{% if page.disabled != true %}
{{ content }}
{% else %}
This post is disabled.
{% endif %}
