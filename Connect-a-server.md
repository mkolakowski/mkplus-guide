---
title: Connect a server
nav_order: 3
has_children: true
---

# Connect a server

Most connections take a minute: in MK Plus, tap **+**, type an address and
sign in. SMB shares, Jellyfin and book servers on your network often show up
on their own under **Found on Network**.

The cloud ones take longer the first time, because **Dropbox, Google,
Microsoft and Box only let apps in through an app you register with them
yourself**. That gets you a key or client ID to paste into MK Plus. These
pages walk through it step by step, and say what to do when signing in goes
wrong.

## Pick what you're connecting

| Connection | What you'll need | Time |
|---|---|---|
{% for p in site.data.guide_pages %}| [{{ p.title }}]({{ p.file | relative_url }}) | {{ p.need }} | {{ p.time }} |
{% endfor %}

You only do this once per service: MK Plus remembers the key for the next
account you add.
