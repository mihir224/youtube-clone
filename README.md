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

### IMPORTANT
***The cookie is sent by the server is http only (to avoid potential abuse by hackers) and for that reason, it can't be read by javascript in the deployed client webpage. Thus, in deployment the put/patch/delete operations don't work as intended as the user cannot be verified by the server since there is no cookie stored.***