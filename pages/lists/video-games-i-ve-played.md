---
layout: page
title: "Video Games I've Played"
permalink: /pages/lists/video-games-i-ve-played
category: lists
---
This is a list that, to the best of my recollection, documents every video game that I’ve played. It is fairly complete, but I know that I’m still missing quite a few games that I played before 1998. The list is grouped by years to show some of the context in which I played these games.

I will try to organize this list in the reverse order that I completed the games, with the most recent first. However, because I didn’t exactly keep track of this list up until August 11, 2011 will not accurately reflect when I completed the games. If I never completed a game, or if the game isn’t completable (i.e. MMOs or simulation games) I will list it in the order of when I first played it.

This list was inspired by [another guy’s list](http://kentie.net/indices/2.htm).

<!-- <ge-gameslist datapath="{{ '/assets/db/glist.json' | relative_url }}" serviceurl=""></ge-gameslist> -->

<div class="bm-gameslist">
{% for item in site.data.glist %}
    <h2>{{ item.header }}</h2>
    <ul>
        {% for game in item.games %}
            <li>
            {{ game.displayText }}
            {% if game.notesText.size > 0 %}
                - {{ game.notesText }}
            {% endif %}
            </li>
        {% endfor %}
    </ul>
{% endfor %}
</div>

<h3 class="wp-block-heading">Other Cool Stuff</h3>
<ul class="wp-block-list">
<li><a href="{{ '/pages/my-might-and-magic-characters' | relative_url }}">My Might and Magic Characters</a></li>
</ul>

