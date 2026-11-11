---
title: Home
nav_order: 1
permalink: /
---

# MK Plus Guide

MK Plus plays video and reads comics, PDFs and EPUBs straight from where
you keep them: SMB shares, Jellyfin, OPDS catalogs, and cloud storage.

New here? Start with [Get started](Getting-Started.html).

## Connect a server

Most connections take a minute. Dropbox, Google Drive, OneDrive and Box take
a little longer the first time: [Connect a server](Connect-a-server.html)
walks through each one{% if site.data.guide_pages %}
({% for p in site.data.guide_pages %}[{{ p.title }}]({{ p.file | relative_url }}){% unless forloop.last %}, {% endunless %}{% endfor %}){% endif %}.
{% if site.data.guide_use_pages %}
## Use the app

{% for p in site.data.guide_use_pages %}- [{{ p.title }}]({{ p.file | relative_url }}){% if p.about != "" %}: {{ p.about }}{% endif %}
{% endfor %}{% endif %}

## Help

See [What's New](whats-new.html) for the highlights of each update, and
[Help](Help.html) for feedback, the privacy policy and the open-source
libraries.
