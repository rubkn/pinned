# pinned

## What is pinned?

**pinned**, is a simple API service that allows you to get the pinned repositories of any github user.

## How to use pinned?

To use pinned, you just need to make a GET request to the pinned API with the username of the github user you want to get the pinned repos from.

The API will return a JSON with the pinned repos of the user.

The API is available at `/api/user/[username]`

You can use the API with the username of any github user.

For example, to get the [Vercel](https://vercel.com/) pinned repositories, you just need to make a GET request to `/api/user/vercel`

## How to run this project?

```bash
git clone https://github.com/rubkn/pinned
cd pinned
yarn
yarn dev
```
