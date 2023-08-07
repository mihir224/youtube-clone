# MS-Tube 

In this project I've tried to create a video sharing app where one can share their videos, like and comment on other videos, basically cloning the whole functionality and UI of YouTube. As of now, routing and database have been implemented on the server side whereas the whole YouTube similar UI has been developed on the frontend side. 

### NOTE
*In production, the data being fetched from the hosted server takes a while thus usually on the first load, it might take about a minute for the contents of the website to load properly* 

## Get started

1. Clone the repo

   `git clone https://github.com/mihir224/youtube-clone`

2. Run `npm install` to install all of the necessary package
3. Create a .env file in the project directory to store your mongoDB credentials
5. Then, in both the client and server directories, run `npm start` separately.
6. The project should now be accessible at `localhost:3000`

### Note
*** There seems to be an issue with the storage of access token in production. For this reason, in production mode, the subscriber count and other post operations aren't working as intended. They're working fine in dev mode. I'm currently working to resolve this. ***