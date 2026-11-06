---
title: "Dropbox"
nav_order: 2
---

# Setting up Dropbox

Dropbox only lets apps in through an app you register yourself. It takes a few minutes, it's free, and you do it once: MK Plus remembers the key it gives you for any other Dropbox account you add later.

_Checked November 2026. Consoles change; if a button's moved, the names below should still find it._

## What you need

- A Dropbox account (a free one is fine).
- About 5 minutes.
- Nothing to pay. Registering a Dropbox app is free.

An **app key** is a short code that names your Dropbox app. It isn't a password, and it doesn't give anyone access to your files on its own.

## In the Dropbox console

<!-- screenshots: add-form, console steps (phase 2/3) -->

1. On a computer or your iPhone, open **https://www.dropbox.com/developers/apps** and sign in to Dropbox.
2. Choose **Create app**.
3. Under **Choose an API**, pick **Scoped access**.
4. Under **Choose the type of access you need**, pick **Full Dropbox**. This lets MK Plus see the folders you already have, not just a folder of its own.
5. Give the app any name you like, such as `My MK Plus`. Names have to be unique across Dropbox, so add something of your own if it's taken. Then choose **Create app**.
6. Open the **Permissions** tab. Tick all three of these:
   - `files.metadata.read`
   - `files.content.read`
   - `files.content.write`
7. Choose **Submit** at the bottom of the page. Do this before you sign in from MK Plus: permissions only apply to sign-ins made after you submit them.
8. Open the **Settings** tab and copy the **App key**. (You don't need the App secret.)

You don't need to register a redirect address. The one MK Plus uses is built from your app key, and Dropbox accepts it for every app.

## In MK Plus

1. On the Server List, tap the **+** button and choose **Add Server**.
2. Tap **Dropbox**.
3. Under **Dropbox App**, paste your key into **App Key**.
4. Tap **Sign In with Dropbox** (under **Account**). Dropbox's own sign-in page opens in a sheet. Sign in and tap **Allow**.
5. Back in the form, **Signed In As** shows your Dropbox email. Change **Name** if you like.
6. Optionally switch the server to private, then tap **Save**.

**Save** stays greyed out until you've signed in.

## What went wrong

Sign-in problems show an alert titled **Couldn't Sign In**. Messages that come later, while you browse, appear on the server itself.

| What you see | Why | What to do |
|---|---|---|
| **Sign In with Dropbox** is greyed out | The **App Key** field is empty. | Paste the key from the console's **Settings** tab. |
| "Couldn't sign in to Dropbox: …" followed by a reason, such as `invalid_client` | Dropbox didn't accept the key. Usually it has a typo, an extra space, or it's the **App secret** rather than the **App key**. | Copy the **App key** again from the **Settings** tab and paste it into **App Key**. |
| "Couldn't sign in to Dropbox." (nothing after it) | Dropbox sent the sheet back without a code or a reason. | Try again. If it keeps happening, check the key and that the app's status in the console isn't disabled. |
| "Couldn't sign in to Dropbox: Dropbox didn't send a token to stay signed in with." | Dropbox signed you in but didn't hand over a long-lasting token. | Tap **Sign In Again**. If it repeats, make a new app following the steps above. |
| "Dropbox answered: …" followed by a short code | Dropbox refused a request and said why. | Read the code, then try **Sign In with Dropbox** again. If it keeps happening, check the app's permissions. |
| "Dropbox has signed this app out. Sign in again in the server's settings." | You removed MK Plus's access in your Dropbox account, or the sign-in was cancelled from Dropbox's side. | Open the server's page in **Settings → Server List** and tap **Sign In Again**. |
| "The Dropbox app isn't allowed to do that — turn on its files.content.write permission in the App Console, then sign in again." | A permission is missing, usually because it was ticked but **Submit** was never pressed, or it was added after you signed in. | In the console's **Permissions** tab, tick all three, choose **Submit**, then tap **Sign In Again** in MK Plus. |
| "That isn't in this Dropbox any more." | The file or folder was moved or deleted. | Refresh the folder. |
| "This Dropbox is full." | There's no space left to save to. | Free some space in Dropbox. |
| Nothing happens when you close the sign-in sheet | You cancelled. MK Plus stays quiet when that happens. | Tap **Sign In with Dropbox** again. |

## Good to know

- **Your password never reaches MK Plus.** You sign in on Dropbox's own page, and the app keeps only a sign-in token, in this iPhone's Keychain.
- **You sign in fresh each time.** The sheet doesn't share Safari's sign-ins, so Dropbox asks for your email and password (or a passkey) every time you tap **Sign In with Dropbox**.
- **The key is remembered.** Adding a second Dropbox account fills **App Key** in for you.
- **Your app stays in development mode.** That's fine: a Dropbox app you make for yourself works for you without anyone approving it.

Next: [Google Drive](Setup-Google-Drive.html).
