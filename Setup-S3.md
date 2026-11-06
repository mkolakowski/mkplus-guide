---
title: "S3-compatible storage"
nav_order: 6
---

# Setting up S3-compatible storage

"S3" is the way many storage services let apps reach a bucket of files. MK Plus signs in with an **access key**, a pair of codes you make in your provider's console, so it needs one before it can open your bucket. MK Plus has a ready-made template for **Amazon S3**, **Cloudflare R2**, **Backblaze B2**, **Wasabi** and **DigitalOcean Spaces**, and an **Other S3-Compatible** one for anything else, such as MinIO running at home.

_Checked November 2026. Consoles change; if a button's moved, the names below should still find it._

## What you need

- An account with one of those services, and a bucket with your files in it. (A **bucket** is a top-level folder in the service.)
- About 5 to 10 minutes.
- Cost: you pay your provider for the storage as you already do. Making an access key is free. Some providers have a free allowance or trial; check each one's own pricing page.

An **access key** is two codes: an **Access Key ID** (like a username) and a **Secret Access Key** (like a password; most consoles show it only once, so copy it straight away).

## What permissions the key needs

MK Plus plays and reads what's in a bucket, and can also delete, move, copy and make folders if you ask it to. So:

| You want to | The key needs |
|---|---|
| Browse, play and download | **Read-only**: list the bucket and read its files (`s3:ListBucket`, `s3:GetObject`) |
| Also delete, move, copy, rename and make folders | **Read and write**: also write and delete files (`s3:PutObject`, `s3:DeleteObject`) |
| Leave **Bucket** blank, or use **Browse Buckets** | Also allowed to list your buckets (`s3:ListAllMyBuckets`) |

Read-only is safest if you only watch and read. Giving the key just one bucket is safer still, but then type that bucket's name into **Bucket** rather than browsing.

## Amazon S3

### In the AWS console

1. Open **https://console.aws.amazon.com/iam/** and sign in.
2. Open **Users** and choose **Create user**. Name it (`mkplus`, say). Don't tick console access. Choose **Next**.
3. Choose **Attach policies directly** and either pick **AmazonS3ReadOnlyAccess** (read-only for every bucket) or **AmazonS3FullAccess** (read and write), or choose **Create policy** to limit it to one bucket. Then choose **Next → Create user**.
4. Open the new user, then the **Security credentials** tab, and choose **Create access key**. Pick **Application running outside AWS**, choose **Next → Create access key**.
5. Copy the **Access key ID** and the **Secret access key**.
6. Find your bucket's region: open **https://console.aws.amazon.com/s3/** and look in the **AWS Region** column (for example **US East (N. Virginia) us-east-1**).

### What the template fills in

- **Region:** `us-east-1`. Change it to your bucket's region.
- **Endpoint:** `s3.<region>.amazonaws.com`, which follows the region you type.
- **Path-Style Addressing:** off.

If the bucket turns out to be in another region, MK Plus notices and tries again with the right one.

## Cloudflare R2

### In the Cloudflare dashboard

1. Open **https://dash.cloudflare.com** and sign in. Open **R2 Object Storage** (in the left menu).
2. On the R2 overview page, choose **Manage** next to **API Tokens** (it may say **Manage API Tokens**).
3. Choose **Create API token**.
4. Name it. Under **Permissions**, pick **Object Read only** (browse and play) or **Object Read & Write** (also delete, move and copy).
5. Under **Specify bucket(s)**, choose **Apply to all buckets**, or pick one bucket.
6. Choose **Create API Token**.
7. Copy the **Access Key ID**, the **Secret Access Key** and the endpoint it shows (`https://<account id>.r2.cloudflarestorage.com`). The secret isn't shown again.

### What the template fills in

- **Region:** `auto`. R2 always uses `auto`.
- **Endpoint:** blank, because it has your account's ID in it. Paste yours: `<account id>.r2.cloudflarestorage.com`. (If your bucket has a jurisdiction such as EU, use the jurisdiction-specific endpoint the token page shows instead.)
- **Path-Style Addressing:** on.

A token for one bucket may not be allowed to list your buckets, so type that bucket's name into **Bucket** instead of using **Browse Buckets**.

## Backblaze B2

### In the Backblaze account

1. Open **https://secure.backblaze.com/app_keys.htm** and sign in. (It's **Application Keys** in the left menu, under **Account**.)
2. Choose **Add a New Application Key**.
3. Name it. Under **Allow access to Bucket(s)**, choose **All** or pick one bucket.
4. Under **Type of Access**, pick **Read Only** (browse and play) or **Read and Write**. Leave **Allow List All Bucket Names** ticked so **Browse Buckets** works.
5. Choose **Create New Key**.
6. Copy the **keyID** and the **applicationKey**. The applicationKey is shown only once.
7. Find your bucket's endpoint: open **https://secure.backblaze.com/b2_buckets.htm** and look at the bucket's **Endpoint**, for example `s3.us-west-004.backblazeb2.com`. The part in the middle is the region.

### What the template fills in

- **Region:** `us-west-004`. Change it to the region in your bucket's endpoint.
- **Endpoint:** `s3.<region>.backblazeb2.com`, which follows the region.
- **Path-Style Addressing:** on.
- In MK Plus, the **keyID** goes in **Access Key ID** and the **applicationKey** in **Secret Access Key**.

## Wasabi

### In the Wasabi console

1. Open **https://console.wasabisys.com** and sign in.
2. Open **Access Keys** in the left menu.
3. Choose **Create Access Key**. Make one for the root account, or for a sub-user whose policy allows what you need (read-only, or read and write).
4. Copy the **Access Key** and the **Secret Key**, or choose **Download CSV**. The secret is shown only once.
5. Note the region of your bucket in **Buckets** (for example `us-east-1`, `us-east-2`, `eu-central-1`).

### What the template fills in

- **Region:** `us-east-1`. Change it to your bucket's region.
- **Endpoint:** `s3.<region>.wasabisys.com`, which follows the region.
- **Path-Style Addressing:** on.

## DigitalOcean Spaces

### In the DigitalOcean control panel

1. Open **https://cloud.digitalocean.com** and sign in. In the left menu, open **API**.
2. Open the **Spaces Keys** tab and choose **Generate New Key**.
3. Name it. Choose **Full Access**, or **Limited Access** and pick the Space with **Read** (browse and play) or **Read/Write/Delete** (also delete, move and copy).
4. Choose **Create Access Key**.
5. Copy the **Access Key** and the **Secret**. The secret is shown only once.
6. Note your Space's datacenter, which is in its address: `nyc3`, `sfo3`, `ams3` and so on.

### What the template fills in

- **Region:** `nyc3`. Change it to your Space's datacenter.
- **Endpoint:** `<region>.digitaloceanspaces.com`, which follows the region.
- **Path-Style Addressing:** off.
- In **Bucket**, type the Space's name.

## Other S3-compatible (MinIO and similar)

For any server that speaks the S3 API: MinIO, Ceph, Garage, or the S3 service built into some NAS boxes. The steps depend on the software; for MinIO:

1. Open your MinIO web console and sign in.
2. Open **Access Keys** and choose **Create Access Key**.
3. Copy the **Access Key** and **Secret Key**, then choose **Create**.
4. The key inherits its user's permissions. Give that user the built-in `readonly` policy for browsing and playing, or `readwrite` to also change things.

### What the template fills in

- **Region:** `us-east-1`. Most self-run servers accept this; use the one yours names if it has one.
- **Endpoint:** blank. Type your server's address and port, such as `minio.local:9000`. Use the S3 port, not the web console's.
- **Path-Style Addressing:** on, which most servers you run yourself need.
- **HTTPS:** on. Turn it off only for a server on your own network that doesn't have a certificate.

## In MK Plus

1. On the Server List, tap the **+** button and choose **Add Server**.
2. Tap **S3-Compatible Storage**.
3. Under **Storage**, set **Service** to your provider. **Region** and **Endpoint** fill themselves in. Change **Region** to your bucket's, and paste the **Endpoint** if the template left it blank.
4. Fill in **Bucket**, or leave it blank to open on every bucket the key can list, as folders. Or tap **Browse Buckets** to pick from a list.
5. Under **Keys**, paste the **Access Key ID** and the **Secret Access Key**.
6. Under **Advanced**, check **Path-Style Addressing** and **HTTPS** against your provider's section above.
7. Set **Name** (it's required), optionally switch the server to private, then tap **Save**.

**Save** stays greyed out until **Name**, **Endpoint**, **Access Key ID** and **Secret Access Key** are filled in. **Browse Buckets** needs a valid **Endpoint** and an **Access Key ID**.

<!-- screenshots: add-form, console steps (phase 2/3) -->

## What went wrong

Problems listing buckets show an alert titled **Couldn't List Buckets**. Messages that come later, while you browse, appear on the server itself.

| What you see | Why | What to do |
|---|---|---|
| "That endpoint doesn't look right." | **Endpoint** is empty or has something other than an address in it. | Type just the address, like `s3.us-east-1.amazonaws.com`. A pasted `https://` and path are trimmed off for you. |
| "That access key ID wasn't recognized. Check it in the server's settings." | The **Access Key ID** has a typo, or it belongs to a different provider or account. | Copy it again, and check that **Service** and **Endpoint** are your provider's. |
| "That secret access key wasn't accepted. Check it in the server's settings." | The **Secret Access Key** has a typo or a stray space, or is for a different key. | Paste it again. If you didn't copy it when it was shown, make a new key. |
| "These keys aren't allowed to do that." | The key's permissions don't cover this: reading a bucket, listing buckets, or writing or deleting. | Give the key the permissions in the table at the top, then try again. For a key limited to one bucket, type the **Bucket** instead of browsing. |
| "There's no bucket by that name at this endpoint." | The **Bucket** name is wrong, or the bucket is at another endpoint or region. | Check the spelling, or tap **Browse Buckets**. |
| "That file isn't there any more." | The file was moved or deleted. | Refresh the folder. |
| "This device's clock is too far off for the server to accept the request. Check Date & Time in the Settings app." | Requests are signed with the time, and the server refuses ones that look old or from the future. | In the iPhone's **Settings → General → Date & Time**, switch on **Set Automatically**. |
| "The bucket is in another region. Change the server's region to the bucket's." | **Region** doesn't match where the bucket lives. | Change **Region** to the bucket's. Use the one in its console or endpoint. |
| "Open a bucket first — the top of this server lists its buckets." | You tried to change something at the top level, which only lists buckets. | Open a bucket first. |
| "Whole buckets can't be deleted, moved or copied here — only what's in them." | MK Plus doesn't delete, move or copy a bucket itself. | Do that in your provider's console. |
| "The server answered: …" followed by a message and a number, such as (500) or (503) | The service sent an error of its own, which MK Plus passes on as it came. | Read the message. It often names the cause. For 5xx numbers, try again shortly. |

## Good to know

- **The secret stays on your iPhone.** It's kept in the Keychain; the Access Key ID is saved with the server.
- **Playing a video.** MK Plus gives the player a temporary signed link, good for 12 hours, so a movie streams straight from the bucket and you can skip around in it.
- **Folders.** S3 has no real folders. MK Plus treats a slash in a file's name as a folder, and a folder you make in MK Plus is an empty placeholder that the consoles also show as one.
- **Rename and move.** S3 can't rename, so MK Plus copies the file and deletes the original. That needs both the read and write permissions.
- **Buckets with dots in their names** always use path-style addressing, whatever the switch says.
- **Another bucket, same key.** In **Add Server**, use **Copy a Saved Server** and change **Bucket**.

Next: [Folders in the Files app](Setup-Files-Folders.html).
