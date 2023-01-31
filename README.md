# pinned

## What is pinned?

**pinned**, is a simple API service that allows you to get the pinned repositories of any GitHub user.

## How to use pinned?

The API is available at `/api/user/[username]`

To use pinned, you just need to make a GET request to the API with the username of the GitHub user you want to get the pinned repositories from.

The API will return a JSON with the pinned repositories of the user.

You can use the API with the username of any GitHub user.

For example, to get my pinned repositories, you just need to make a GET request to `/api/user/rubkn`

## How to run this project?

```bash
git clone https://github.com/rubkn/pinned
cd pinned
yarn
yarn dev
```
