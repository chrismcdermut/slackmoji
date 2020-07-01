# Extracting Emoji From Slack!

Slack doesn't provide an easy way to extract custom emoji from a team. (Especially teams with thousands of custom emoji)
This Gist walks you through a relatively simple approach to get your emoji out.

If you're an admin of your own team, you can get the list of emoji directly using this API: https://api.slack.com/methods/emoji.list. Once you have it, skip to Step 3

**HOWEVER!** This gist is intended for people who don't have admin access, nor access tokens for using that list.

Follow along...

## Step 1

Open your Slack team **on your browser** (I used FireFox in this example)

Next, Open your developer tools, and go to the network tab. Look for a POST request on `/emoji.list`
<img width="1074" alt="step1" src="https://user-images.githubusercontent.com/736932/52161452-d9e3e400-2679-11e9-9d4a-1c1bb317ab9a.png">

## Step 2

Right Click on the request, and choose to open it in a new tab. 
<img width="429" alt="step2" src="https://user-images.githubusercontent.com/736932/52161454-e10af200-2679-11e9-9747-6b8b1b529f4e.png">

This will cause the browser to replay the request, yielding a JSON file with all your emoji information.
<img width="956" alt="step3" src="https://user-images.githubusercontent.com/736932/52161453-e10af200-2679-11e9-9c91-7dcaf6eb764f.png">

Save this file somewhere as `emoji.json`

## Step 3

Run download.sh on the file. (Make sure you `chmod +x` it to make it executable. Details on the `download.sh` file.

```bash
./download.sh emoji.json
```

Sit back and wait. This will create a folder called `output` and will save all your emoji to it.

## Optional Step 4

To bulk upload your emoji into a new team, use this chrome extension: https://chrome.google.com/webstore/detail/neutral-face-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej

## Notes

1- This downloads files sequentially, one at a time.  I didn't want to incurr Slack's rage by hammering their edge server with concurrent downloads.
2- This will duplicate aliased emoji