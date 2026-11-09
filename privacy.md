---
title: Privacy Policy
nav_order: 99
permalink: /privacy/
---

# MK Plus — Privacy Policy

*Last updated: November 8, 2026*

MK Plus is a player and reader for your own media: videos, music, comics and books on servers and storage you add yourself. This policy explains what the app does with your information. The short version is that **the developer doesn't collect anything unless you choose to send feedback**.

## What the developer collects

Only what you choose to send as feedback (see Feedback and TestFlight below). MK Plus has no accounts, no analytics, no advertising and no tracking, and it includes no third-party analytics or advertising code. Apart from that feedback, the developer doesn't receive your servers, your files, what you watch or read, or how you use the app.

## What stays on your devices

- **Servers you add** (SMB shares, Jellyfin, Kavita, Komga and other OPDS catalogs, S3 buckets, Dropbox, Google Drive, OneDrive, Box, folders in the Files app): their addresses and names, your settings, Homes and widgets, and where you are in each video and book are stored on your iPhone or iPad.
- **Passwords, tokens and keys** are kept in the iOS Keychain. Some sync between your own devices through iCloud Keychain, if you use it.
- **iCloud Backup** (Settings → iCloud Backup, on by default) keeps your saved servers, Homes, themes and appearance in your own iCloud account so they're there on your other devices. Passwords are never included. This goes to Apple under your Apple Account; the developer can't see it. You can turn it off at any time.
- **Backups you make** (Settings → Backup) are files you choose where to save. An encrypted backup includes your passwords; one without a password doesn't.
- **Activity Log** (Settings → Privacy): a record of what went wrong in the app (for example, a video that wouldn't open), kept on your device only. Names, web and IP addresses, file paths and email addresses in it are replaced by codes. It leaves your device only if you attach it to feedback, or copy or share it yourself. You can turn it off or clear it in Settings → Privacy.
- **Generated subtitles** are made on your device by Apple's speech recognition or by Whisper. Your audio isn't sent anywhere.

## Who the app talks to

- **The servers you add**, to list and play your media. What they record is up to whoever runs them.
- **Your local network**, to find servers on it (Jellyfin, SMB, and book servers like Kavita), when you allow local network access.
- **Dropbox**, if you add a Dropbox, under your Dropbox account.
- **Google Drive**, if you add one, under your Google account. The app asks for access to your whole Drive so it can browse, play, download, manage and back up your files there, as on any other server. That goes directly between your device and Google; the developer doesn't receive any of it. You can remove the app's access in your Google Account at any time.
- **Microsoft OneDrive**, if you add one, under your Microsoft account (personal, work or school). As with Google Drive, the app asks for access to your files so it can browse, play, download, manage and back them up, and that goes directly between your device and Microsoft. You can remove the app's access in your Microsoft account, or your organization's admin can.
- **Box**, if you add one, under your Box account, through a Box app you make yourself. The same applies: your files go directly between your device and Box, and you can remove the app's access in your Box account.
- **Hugging Face**, only if you download a Whisper model for generated subtitles (Settings → Video Playback → Subtitles). Only the model file is fetched.
- **Cloudflare Access**, only for a server of yours that sits behind it, to sign you in.
- **GitHub Pages**, which hosts the guide site, when Settings → Changelog or the What's New popup shows a picture of a release (loaded from the guide site when it's on screen, like any web page you open). **Pictures from the Guide**, at the top of Settings → Changelog, turns this off.
- **Cloudflare**, only when you send feedback, as described below. It passes reports on to GitHub and attachments to Backblaze B2.

## Feedback and TestFlight

If you use **Provide Feedback**, the app sends what you write, the app's version, and your device model and iOS version. Pictures (up to five), files (up to three) and the Activity Log are sent only if you attach them, and you can read the log before sending it. Pictures are re-encoded first, which removes their location and other details; files are sent as they are, so check they hold nothing you'd rather keep private. Reports don't include your name or contact details unless you type them. The form has an optional **email** field, for when you'd like an answer: an address you type there goes in your report and is used only to reply to it.

Reports pass through a small service the developer runs on Cloudflare. What you write, and an email address if you give one, is stored on GitHub, in a private repository that isn't open to the public. Attached pictures, files and the Activity Log are stored privately on Backblaze B2 and deleted automatically after 90 days (an image or log sent from a version before 1.307.2 isn't kept). Cloudflare sees your IP address, as any web service does. It isn't added to your report; to limit how many reports can be sent, a hash of it is kept for about two hours.

While **Keep Sent Feedback** is on (Settings, under Provide Feedback), the app keeps a copy of each report it sends on your device, in Settings → Sent Feedback: what you wrote, the email you gave and the names of what you attached, not the attachments themselves. It isn't sent anywhere. You can delete reports there one at a time or all at once, and turn the switch off to stop keeping copies.

If a report can't be sent, you can choose to email it instead: your email goes to the developer at appledev@iptater.net with the same details and anything you attached.

While testing through **TestFlight**, Apple shares the feedback, screenshots and crash reports you choose to send with the developer, under [Apple's TestFlight terms](https://www.apple.com/legal/internet-services/itunes/testflight/sren/terms.html). These are used only to fix and improve the app.

## Children

MK Plus isn't directed at children and doesn't knowingly collect anything from anyone.

## Changes

If this policy changes, the date above changes with it.

## Contact

Questions about privacy: **appledev@iptater.net**
