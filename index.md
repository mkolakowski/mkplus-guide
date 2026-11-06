---
title: Home
nav_order: 1
permalink: /
---

# MK Plus Setup Guide

MK Plus plays video and reads comics, PDFs and EPUBs straight from where
you keep them: SMB shares, Jellyfin, OPDS catalogs, and cloud storage.

Most connections take a minute: you type an address and sign in. The cloud
ones take longer the first time, because **Dropbox, Google, Microsoft and
Box only let apps in through an app you register with them yourself**.
That gets you a key or client ID to paste into MK Plus. These pages walk
through it step by step, and say what to do when signing in goes wrong.

## Pick what you're connecting

| Connection | What you'll need | Time |
|---|---|---|
{% for p in site.data.guide_pages %}| [{{ p.title }}]({{ p.file | relative_url }}) | {{ p.need }} | {{ p.time }} |
{% endfor %}

You only do this once per service: MK Plus remembers the key for the next
account you add.
{% if site.data.guide_use_pages %}
## Using MK Plus

{% for p in site.data.guide_use_pages %}- [{{ p.title }}]({{ p.file | relative_url }}){% if p.about != "" %}: {{ p.about }}{% endif %}
{% endfor %}{% endif %}

## What's new

See [What's New](whats-new.html) for the highlights of each update.
