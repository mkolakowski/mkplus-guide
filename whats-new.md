---
title: "What's New"
nav_order: 90
---

{% raw %}

# What's New

The highlights of each MK Plus update since public TestFlight testing began (version 1.281.0), newest first. Every detail is in **Settings → Changelog** in the app.

## November 2026

### Step-by-step setup guides

_Version 1.307.1 · 6 November 2026_

- Adding Dropbox, Google Drive, OneDrive, Box or S3 storage? Tap Step-by-step guide under the form for numbered help, and for what to do if signing in fails.
- Settings → Setup Guide and Privacy Policy open them in Safari.

<img src="images/iphone-18-pro-max/add-dropbox.png" width="300" alt="The Add Dropbox form, with Step-by-step guide at the end of its help">

<details markdown="1">
<summary>Everything in 1.307.1</summary>

**New**

- A Step-by-step guide link under the Dropbox, Google Drive, OneDrive, Box, S3 and Files folder forms, opening that service's page of the setup guide.
- Settings → Setup Guide and Settings → Privacy Policy.

</details>

### Add your Box account

_Version 1.307.0 · 5 November 2026_

- Add Server → Box: browse, play and copy from your Box files and folders.
- Big files copy up to Box in checked pieces, and a dropped piece is sent again.

<details markdown="1">
<summary>Everything in 1.307.0</summary>

**New**

- Box as a server, signed in on Box's own page. Browse it, play videos and music, read books, download, rename, move, copy and delete — deleted things go to Box's trash.
- Back up to Box, and copy files of any size to it from another server.
- Box asks for an app you make in its developer console (free): the form says how, step by step.

</details>

### Add your OneDrive

_Version 1.306.0 · 5 November 2026_

- Add Server → OneDrive: browse, play and copy from your OneDrive, with a personal, work or school Microsoft account.
- Big files copy up in pieces and carry on after a dropped connection.

<details markdown="1">
<summary>Everything in 1.306.0</summary>

**New**

- OneDrive as a server, signed in on Microsoft's own page. Browse it, play videos and music, read books, download, rename, move, copy and delete — deleted things go to OneDrive's recycle bin.
- Back up to a OneDrive, and copy files of any size to it from another server.
- OneDrive asks for an app you register with Microsoft (free): the form says how, step by step.
- Only your own files for now: things others shared with you, and OneNote notebooks, don't show yet.

</details>

### The music player opens again from a server or folder

_Version 1.305.2 · 5 November 2026_

- Tapping the mini player opens the full music player again when the music's playing in a server or folder opened from Home.

<details markdown="1">
<summary>Everything in 1.305.2</summary>

**Fixed**

- In a server, folder or album opened from Home, tapping the mini player did nothing. It opens the full player again, with its queue.

</details>

### Cancel and Done stay put while you scroll

_Version 1.305.1 · 5 November 2026_

- Cancel, Save and Done no longer disappear while a screen scrolls.

<details markdown="1">
<summary>Everything in 1.305.1</summary>

**Fixed**

- Scrolling a screen like Add Server could hide its top bar, with Cancel on it, until you scrolled back. It now stays, on every screen with a Cancel, Save or Done button.

</details>

### Copy big files up to Google Drive

_Version 1.305.0 · 5 November 2026_

- Files of any size can now be copied to Google Drive. The 100 MB limit is gone for Drive.
- If the connection drops for a moment, the copy carries on from where it was.

<details markdown="1">
<summary>Everything in 1.305.0</summary>

**Changed**

- Copying to Google Drive sends big files a piece at a time, and picks up again after a short drop in the connection. Stopping a copy leaves nothing behind in Drive.

</details>

### Provide Feedback, right from the app, or with a shake

_Version 1.304.0 · 4 November 2026_

- Settings → Provide Feedback is now a short form for a problem or a feature you'd like.
- Attach an image and the Activity Log if they'd help.
- Shake your phone to open it from anywhere. You can turn that off in Settings.

### Copy the Activity Log yourself

_Version 1.303.0 · 4 November 2026_

- Turn on Settings → Privacy → Show Activity Log to read the app's log and copy or share it, to paste into a message or a bug report.

<details markdown="1">
<summary>Everything in 1.303.0</summary>

**New**

- Settings → Privacy → Show Activity Log, off by default: a page to read the Activity Log, and copy or share it. Names, addresses and file names show as codes, as they do when it's attached to feedback.

</details>

### Google Docs in Google Drive

_Version 1.302.0 · 4 November 2026_

- Docs, Sheets, Slides and Drawings now show in Google Drive as PDFs, and open in the reader.
- Each one's made when you open it, so it's always the latest version.

<details markdown="1">
<summary>Everything in 1.302.0</summary>

**New**

- Google Docs, Sheets, Slides and Drawings show as PDFs in a Google Drive server. Google stops at 10 MB for each one.
- Google Docs as PDFs in Settings → File Browsing leaves them out of the list if you'd rather not see them.

</details>

### Google Drive as a server

_Version 1.301.0 · 4 November 2026_

- Add your Google Drive, personal or Workspace, from Add Server: browse it, play, read, download and manage files like any other server, and back up to it.
- My Drive, Shared with me and shared drives are all there. Deleting moves things to Drive's Trash.
- It needs a Google client of your own, which takes a few minutes to set up. The form says how.

<details markdown="1">
<summary>Everything in 1.301.0</summary>

**New**

- Google Drive in Add Server, signed in on Google's own page. Videos play in either player, with seeking.
- My Drive, Shared with me and Shared Drives at the top level, and shortcuts open what they point to.
- Back up the app to a folder in Google Drive, by hand or automatically.

**Changed**

- Google Docs, Sheets and Slides aren't shown yet, since there's no file to open. Files over 100 MB can't be copied up to Drive yet.

</details>

### Sign in to Jellyfin with Google or a passkey

_Version 1.300.0 · 4 November 2026_

- A Jellyfin that signs in with Google or a passkey can now be added from your phone alone: start Quick Connect and tap Approve in Safari.
- The code's filled in for you, and the sheet closes once it's approved. The server's admin needs Quick Connect turned on.

<details markdown="1">
<summary>Everything in 1.300.0</summary>

**New**

- Approve in Safari beside a Quick Connect code, with your passkeys and whatever Safari's signed in to, so you don't need another device.

</details>

### Sign in to Kavita with a passkey

_Version 1.299.0 · 3 November 2026_

- A Kavita that signs in with Google or another OpenID login now opens in Safari's sign-in sheet, so your passkeys and Safari's sign-ins work.
- Copy the OPDS URL on Kavita's page and the sheet closes itself. Tap Paste in the app, and that's it, just this once.
- The page in the app is still a button away, or first if you prefer: Settings → Server List → Sign In with Safari First.

<details markdown="1">
<summary>Everything in 1.299.0</summary>

**New**

- Sign in to Kavita's OpenID login in Safari's sign-in sheet, with passkeys and whatever Safari's already signed in to, then paste the OPDS URL into the app.
- Settings → Server List → Sign In with Safari First, on by default. Off, the page in the app comes first.

**Changed**

- Sign-in pages inside the app now say passkeys can't work on them, and offer Safari where it can get you back to the app.
- The app clears the OPDS URL from your clipboard as soon as you've pasted it.

</details>

### Search Jellyfin for people

_Version 1.298.0 · 2 November 2026_

- A Jellyfin search now finds actors, directors and other people.
- Tap someone to see the movies and shows they're credited on.

<details markdown="1">
<summary>Everything in 1.298.0</summary>

**New**

- Jellyfin search finds people: among Everything, or on their own under Show → People.
- Opening a person lists the movies, shows, episodes and videos they're credited on.

</details>

### New servers come with widgets

_Version 1.297.0 · 2 November 2026_

- Add a server and its widgets appear on your top Home, ready to use.
- Jellyfin gets Continue Watching, Next Up and your newest movies and shows. Book catalogs get Continue Reading.
- Don't want this? Turn off Add Widgets for New Servers in Settings → Home Screen.

<details markdown="1">
<summary>Everything in 1.297.0</summary>

**New**

- A server you add now puts widgets on the Home at the top of your list: its tile, plus Continue Watching, Next Up and up to three movie and show libraries for Jellyfin, or Continue Reading for a book catalog.
- Settings → Home Screen → Add Widgets for New Servers turns this off.

**Changed**

- A new server's tile goes on your top Home rather than the Home you're looking at, unless you turn the new setting off.
- A private server's widgets only go there if that Home shows private servers.

</details>

### Folder Loading page has your theme

_Version 1.296.7 · 2 November 2026_

- The Loading… page while a folder opens now has your Home's theme across the whole screen, not black.

<details markdown="1">
<summary>Everything in 1.296.7</summary>

**Fixed**

- Opening a folder on a server showed a black page with the theme only behind the word Loading…. The theme now fills the page.

</details>

### Connecting page matches your theme

_Version 1.296.6 · 2 November 2026_

- The Connecting… page you see while a widget's folder opens now has your Home's theme instead of a plain background.

<details markdown="1">
<summary>Everything in 1.296.6</summary>

**Fixed**

- Opening a server's folder from a themed Home showed a plain Connecting… page first. It now uses the Home's theme, as does the page that says a folder can't be opened.

</details>

### Big folders open without freezing

_Version 1.296.5 · 2 November 2026_

- Folders on a server with hundreds or thousands of files no longer freeze the app for seconds when they open or refresh.

<details markdown="1">
<summary>Everything in 1.296.5</summary>

**Fixed**

- Opening a big folder on a share froze the app for several seconds (a folder of 552 items took 5-11 seconds each time it refreshed, and a bigger one would have taken far longer). The app was re-checking, for every row, whether the folder was a series of comics. It now checks once.

</details>

### Show Info is see-through

_Version 1.296.2 · 2 November 2026_

- Show Info's sheet is now semi-transparent, with your Home's theme tinted over the blur.

<details markdown="1">
<summary>Everything in 1.296.2</summary>

**Changed**

- Show Info's sheet is semi-transparent: the folder shows through a blur, tinted with your Home's theme.

</details>

### Show Info keeps your theme

_Version 1.296.1 · 2 November 2026_

- Show Info's sheet keeps your Home's theme when you pull it all the way up.

<details markdown="1">
<summary>Everything in 1.296.1</summary>

**Fixed**

- Show Info lost its theme (background, rows and colors) when pulled up to full height. It now keeps the Home's theme at every height.

</details>

### A bigger press-and-hold menu for files

_Version 1.296.0 · 2 November 2026_

- Press and hold a file or folder on a server for Select, Copy, Cut, Move, Rename, Show Info and Delete.
- Show Info lists a file's size, dates, type and, for pictures and videos, their resolution and more.
- Copy and Cut work without Select mode: a Paste button shows up in the folder you want them in.

<details markdown="1">
<summary>Everything in 1.296.0</summary>

**New**

- Press and hold a file or folder on a server (or right-click it) for a menu: Select, Copy, Cut, Move, Rename, Show Info and Delete.
- Show Info shows the name, kind, size, where it is, when it was created and last changed, how many items a folder holds, and what's inside a picture, video or song: dimensions, resolution, length, frame rate, codecs and bitrate.
- A Paste button appears in a folder once you've copied or cut something, so you don't need Select mode.
- Settings → File Browsing → Hold Shows File Menu turns the menu off, so a press and hold starts Select mode as before.

**Changed**

- Pressing and holding a file now opens the menu instead of starting Select mode. Select is the menu's first item.

</details>

### Videos close straight away

_Version 1.295.1 · 2 November 2026_

- Closing a video VLC plays (an .avi, say) no longer hangs for a few seconds.

<details markdown="1">
<summary>Everything in 1.295.1</summary>

**Fixed**

- Closing a video from a share that VLC plays took a few seconds while the player shut down. It now shuts down in the background.

</details>

### HDR and more MKV files in Apple's player

_Version 1.295.0 · 2 November 2026_

- HDR10, HLG and Dolby Vision .mkv files play in Apple's player in HDR on your iPhone.
- MKV files with FLAC or Opus audio now play there too.

<details markdown="1">
<summary>Everything in 1.295.0</summary>

**New**

- HDR .mkv files (HDR10, HLG, Dolby Vision) play in Apple's player, marked as HDR. Dolby Vision profile 5 still plays in VLC.
- MKV files with FLAC or Opus audio can play in Apple's player.

**Fixed**

- An .mkv whose timeline doesn't start at zero no longer looks longer than it is, so seeking near the end works.
- An .mkv without a seek index now plays in VLC instead of being read in full over the network.

</details>

### MKV audio tracks and subtitles in Apple's player

_Version 1.294.0 · 2 November 2026_

- An .mkv playing in Apple's player now lists all its audio tracks, like a second language or a commentary, so you can switch between them.
- Its own subtitles (SRT and ASS) are in the Subtitles list and show over the picture.

<details markdown="1">
<summary>Everything in 1.294.0</summary>

**New**

- Every audio track Apple's player can play is in the Audio list, by its name or language.
- The file's own text subtitles are in the Subtitles list. One the file marks as default comes on by itself.

**Changed**

- An .mkv with its own text subtitles no longer goes to VLC. Only files whose picture subtitles (Blu-ray or DVD style) would come on still do.

</details>

### MKV files play in Apple's player

_Version 1.293.0 · 2 November 2026_

- An .mkv on your share now plays in Apple's player when it can, with iOS's generated subtitles, AirPlay and Picture in Picture.
- Files it can't take (DTS or TrueHD audio, say) still play in VLC, and VLC steps in if one won't play.
- Turn it off in Settings → Video Playback → Play MKV in Apple's Player.

<details markdown="1">
<summary>Everything in 1.293.0</summary>

**New**

- Tapping an .mkv on a share opens it in Apple's player when its video and audio allow. It's converted as it plays, and nothing is copied.
- Settings → Video Playback → Play MKV in Apple's Player (on). Off: every .mkv plays in VLC.

**Changed**

- An .mkv whose own subtitles would come on still plays in VLC for now, which shows them.

</details>

### Smoother scrubbing in the player

_Version 1.292.3 · 2 November 2026_

- After scrubbing with a finger on the video, the player's buttons come straight back instead of staying dimmed.
- The timeline stays where you let go instead of jumping back while the video catches up.

<details markdown="1">
<summary>Everything in 1.292.3</summary>

**Fixed**

- With Lock Buttons While Scrubbing on, the buttons (the side column included) could stay dimmed and untappable after a scrub on the video.
- Dragging the timeline no longer rubber-bands: the thumb follows your finger, and after you let go it stays there until the video gets there.

</details>

### Delete a server from its own page

_Version 1.292.0 · 1 November 2026_

- A saved server's editor now has Delete Server at the bottom — tap Edit on its page in Settings → Server List, or edit it from a list.

<details markdown="1">
<summary>Everything in 1.292.0</summary>

**New**

- Delete Server at the bottom of every saved server's editor (SMB, Dropbox, Files, S3, Jellyfin and OPDS catalogs). It asks first, then removes the server with its widgets on every Home and its saved sign-in.

</details>

### Easier sign-in for servers behind Cloudflare Access

_Version 1.291.0 · 1 November 2026_

- Adding a catalog behind Cloudflare Access now walks you through it: sign in to Cloudflare with Safari, then the server's own sign-in.
- A Kavita that signs in with Google (or another OpenID Connect login) opens that sign-in by itself once you're past Cloudflare — no password needed.

<details markdown="1">
<summary>Everything in 1.291.0</summary>

**New**

- Add Catalog shows Sign In steps for a server behind Cloudflare Access: Cloudflare with Safari first, then the server's own sign-in. For a Kavita with OpenID Connect, its sign-in opens by itself and the catalog saves with your OPDS key.
- Settings → Server List → Guided Sign-In turns the steps off, if you'd rather sign in to each yourself.

**Fixed**

- Kavita's OpenID Connect sign-in no longer asks you to sign in to Cloudflare Access a second time partway through.
- Saving a Kavita with no password points you to its OpenID Connect sign-in instead of asking for one.

</details>

### No more buttons under the tab bar

_Version 1.290.1 · 1 November 2026_

- Settings → Home Screen's New Home is now at the end of the Homes list, instead of under the tab bar's Search on the iPhone Duo.

<details markdown="1">
<summary>Everything in 1.290.1</summary>

**Fixed**

- With the floating tab bar on, Settings → Home Screen's + (New Home) sat under the bar's Search button on the iPhone Duo closed on its side. New Home is now a row at the end of the Homes list on every iPhone.

</details>

## October 2026

### Search the changelog

_Version 1.290.0 · 31 October 2026_

- Settings → Changelog has a search field: type a word to find the versions and changes that mention it.

<details markdown="1">
<summary>Everything in 1.290.0</summary>

**New**

- Search in Settings → Changelog (and in the changelog opened from What's New): every word typed has to match; only the lines that mention them show, and "No Results" when nothing does.

</details>

### What's New, and a changelog in the app

_Version 1.289.0 · 31 October 2026_

- After an update, a popup like this one lists what's new.
- Settings → Changelog lists every version's changes, starting with this one.
- Downloads can show and hide private servers' downloads from the eye button at the top.
- Homes can Always Hide Private Servers, even after Face ID.

<details markdown="1">
<summary>Everything in 1.289.0</summary>

**New**

- What's New: the first time you open the app after an update, a popup lists the highlights, with a button to the full changelog.
- Settings → Changelog: what changed in each version, newest first.
- Settings → What's New After Updates turns the popup off (or on again). The first popup offers it too.

**Changed**

- Recently: Downloads shows and hides private servers' downloads from the eye button at the top, as the Servers tab does (1.288.0).
- Recently: Settings → Home Screen → a Home → Always Hide Private Servers keeps private servers off that Home even after Face ID (1.287.0).

**Fixed**

- Recently: the tab bar's Downloads badge no longer counts hidden private servers' downloads (1.288.0).

</details>

{% endraw %}
