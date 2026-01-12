---
layout: base
title: Home
pagination:
  data: collections.posts
  size: 20
  alias: posts
---

<ul class="post-list">
{% for post in posts %}
  <li class="post-item">
    <h2><a href="{{ post.url | url }}">{{ post.data.title }}</a></h2>
    <div class="post-meta">
      <!-- <span>{{ post.data.author }}</span> -->
      <span>{{ post.date | formatDate: "%B %d, %Y" }}</span>
    </div>
    {% if post.data.excerpt %}
      <div class="post-excerpt">{{ post.data.excerpt }}</div>
    {% endif %}
  </li>
{% endfor %}
</ul>

{% if pagination.pages.size > 1 %}
  <nav class="pagination">
    {% if pagination.href.previous %}
      <a href="{{ pagination.href.previous }}" class="pagination-link pagination-link--prev">← Previous</a>
    {% endif %}
    
    <span class="pagination-info">Page {{ pagination.pageNumber | plus: 1 }} of {{ pagination.pages.size }}</span>
    
    {% if pagination.href.next %}
      <a href="{{ pagination.href.next }}" class="pagination-link pagination-link--next">Next →</a>
    {% endif %}
  </nav>
{% endif %}
