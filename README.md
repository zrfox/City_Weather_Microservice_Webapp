# City_Weather_Microservice_Webapp
Landing repo for City Weather webapp composed of 5 microservices. Part of OSU curriculum. Below are links to the original repositories. 
However, the content of each has been copied into the current repo for convenience.

Frontend.
https://github.com/zrfox/361-repo

Microservice A. Dynamic weather icons (Created by partner per assignment criteria, modified by zrfox.)
https://github.com/zrfox/weather_icons

Microservice B. Converts Kelvin to Fahrenheit or Celsius
https://github.com/zrfox/ms_b_convertTemp

Microservice C Background Change
https://github.com/zrfox/ms_c

Microservice D. Change Font
https://github.com/zrfox/ms_d



## To Run Dev Build:

Below are instructions on how to run the development build.

__Add OpenWeather API Key__
1. Acquire an OpenWeather API key and assign the key value to the OPEN_WEATHER_API_KEY environment variable in ./Back_End/env.example.
2. Change file name from .env.example to .env

NOTE: 
-   Microservice A is run with python and has separate instructions listed below. 
    Microservices B, C, and D run with Node JS.
-   The python script is run in a virtual environment. If VS Code says modules are missing etc, this can be ignored. 


__Front End__
Double-click index.html in File Explorer or right click in VS code and select "Open with Five Server"

__A_microservice_(Python Development)__ 
Double-click run_dev.bat in File Explorer or run the commands:  
    pip install -r requirements-dev.txt
    run_dev.bat

__B, C, D microservices__
Open a terminal for each microservice B, C, D, and D.

Open a terminal for server.js in Back_end (this runs the express server)

cd into each directory. (B_ms, C_ms, D_ms, and Back_End)

run 'npm run install:all' OR run 'npm install' in each directory (B, C, and D)

run 'node ms_b.js' in the B_ms_converTemp directory 

run 'node ms_c.js in the C_ms_changeBackground directory 

run 'node ms_d.js', in the D_ms_changeFont directory

NOTE:
If any microserivce doesn't appear to be working on the frontend, you may need to refresh the browser and try again. 





