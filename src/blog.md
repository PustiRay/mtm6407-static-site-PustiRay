---
layout: blog-layout.njk
title: Blog
---

<h1>{{ title }}</h1>

<ul>
  {% for post in collections.blog %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a> - {{ post.date | date: "%B %-d, %Y" }}
    </li>
  {% else %}
    <li>No blog posts yet.</li>
  {% endfor %}
</ul>