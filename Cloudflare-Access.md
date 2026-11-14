---
title: "Cloudflare Access"
parent: "Connect a server"
nav_order: 7
---

# Cloudflare Access

A server you reach through **Cloudflare Access** (Zero Trust) — Kavita, any
other OPDS catalog, or Jellyfin — asks you to sign in to Cloudflare before
the server itself answers. MK Plus spots that on its own: adding the
server, connecting to it or opening it brings up the Cloudflare sign-in, and
then carries on.

## What you need

- A server behind Cloudflare Access: Kavita, any other OPDS catalog, or Jellyfin.
- For the two sign-in ways, a way to sign in to Cloudflare, such as your Google account.
- For a service token (optional), the Cloudflare dashboard, where you make one for the server's Access application.

## Three ways in

| Way | What it's like | Lasts |
|---|---|---|
| **Sign In with Safari** | The system's sign-in sheet. It shares Safari's sign-ins, so if Safari's signed in to Google you just pick the account; passkeys and password managers fill in as in Safari. | As long as the Access application's session (24 hours by default) |
| **Sign In in the App** | Cloudflare's page in the app. It keeps its own cookies, so you sign in to Google (or whatever) once in it; after that, signing in again is usually a tap. To fill a password, press and hold the field → **AutoFill → Passwords**. Passkeys can't work on this page. | The same |
| **Service token** | A Client ID and Secret made for apps. The phone is let in without signing in at all. | As long as you made it last (a year, or for good) |

Sign In with Safari gets its token back the way Cloudflare's own
command-line sign-in does: the sign-in page hands it to Cloudflare,
sealed so only this sign-in can open it, and the app collects it.

Sign-ins are kept per address, in the Keychain on this phone only: your
server's home address isn't sent them, its Cloudflare address is.

## Passkeys

Signing in with Safari, Cloudflare may show a page asking you to **Approve**:
that's it handing the sign-in to the app.

Passkeys only work in Safari's sign-in sheet, not on sign-in pages inside the
app. iOS allows them in an app's own page only for domains tied to that app, and
Google doesn't offer one there. What that means for each sign-in:

| Sign-in | Passkeys? | How |
|---|---|---|
| Cloudflare Access | Yes | **Sign In with Safari** |
| Kavita's own OpenID login | Yes | **Sign In with … in Safari**, then paste the OPDS URL ([OPDS Catalogs](OPDS-Catalogs.html)) |
| Storyteller's own sign-in page | Yes | **Sign In with Web Page**, after signing in to Cloudflare ([OPDS Catalogs](OPDS-Catalogs.html#sign-in-on-storytellers-own-page)) |
| An OpenID Connect proxy (Authelia, Authentik, Keycloak, oauth2-proxy, Pomerium) | No | Its session is a cookie the app can only read from its own page, so use a password or code there. If that isn't possible, ask the server's admin about a token or a bypass rule for the app. |

## Setting up a service token

Best for the phone: nothing ever asks you to sign in, at home or away, and
people keep signing in with Google in browsers. The same steps are under
**How to Set One Up** in the app's Cloudflare sheet.

1. In the Cloudflare dashboard, open **Zero Trust → Access → Service
   credentials** (**Service Auth** in older dashboards) **→ Service Tokens**,
   and choose **Create Service Token**.
2. Name it (MK Plus, say) and pick how long it lasts — **Non-expiring**,
   or a year.
3. Copy the **Client ID** and **Client Secret** straight away: the secret is
   shown only once.
4. Open **Access → Applications →** the application for your server **→
   Policies**, and add a policy with the action **Service Auth**, including
   **Service Token →** the one you made. Leave your Google (or other) policy
   as it is.
5. In MK Plus, open the Cloudflare sheet (it comes up when the server
   asks, or **Settings → Server List → Cloudflare Access →** the server),
   paste the Client ID and Secret, and tap **Use Service Token**. The app
   checks it's let in before keeping it.

One token can let the app into several applications — add the same policy
to each (Kavita and Jellyfin, say).

## Staying signed in

- **Settings → Server List → Cloudflare Access** lists every server found
  behind Access, with whether you're signed in and until when. Tap one to
  sign in or out; swipe to forget it.
- **Check Gateway Sign-Ins** (on by default) asks each one whether you're
  still let in when you come back to the app, when the network changes (off
  Wi-Fi onto cellular, say) and every 15 minutes. A server whose sign-in has
  run out gets an **orange lock** beside it in the server list.

## Playback

Video and music through the built-in player carry the sign-in on every
request, including converted (HLS) streams. VLC can only send a cookie: a
web sign-in's token works as one; with a service token, the app uses the
cookie Cloudflare hands back when it checks the token. Subtitle files VLC
loads beside a video may not get it.

## What went wrong

- **Sign In with Safari stops working.** It gets its token back in a way Cloudflare doesn't document for apps, so use **Sign In in the App** instead.
- **A passkey won't work on a sign-in page inside the app.** Passkeys only work in Safari's sign-in sheet, so use **Sign In with Safari**. iOS allows them in an app's own page only for domains tied to that app, and Google doesn't offer one there.
- **An OpenID Connect proxy (Authelia, Authentik, Keycloak, oauth2-proxy, Pomerium) won't take a passkey.** Its session is a cookie the app can only read from its own page, so use a password or code there. If that isn't possible, ask the server's admin about a token or a bypass rule for the app.
- **A server has an orange lock beside it in the server list.** Its sign-in has run out. Open **Settings → Server List → Cloudflare Access**, tap the server and sign in again.
- **You're asked to sign in too often.** Use a service token, or lengthen the Access application's **Session Duration** in Cloudflare.
- **The phone is lost.** Revoke the service token on the same dashboard page where you made it.

---

Previous: [← Folders in the Files app](Setup-Files-Folders.html) · Next: [Use the app →](Using-MK-Plus.html)
