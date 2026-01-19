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

NOTE: 
Microservice A is run with python and has separate instructions listed below. 
Microservices B, C, and D run with Node JS. 

__Front End__
Double-click index.html in File Explorer or right click in VS code and select "Open with Five Server"

__A_microservice_(Python Development)__ 
Double-click run_dev.bat in File Explorer or run the commands:  
    pip install -r requirements-dev.txt
    run_dev.bat

__B, C, D microservices__
Open a terminal for each microservice B, C, and D.
cd into each directory. (Directories are named in the format of B_ms_serviceDescription)
run 'npm install' in each directory
run 'node ms_b.js' in the B_ms_converTemp directory 
run 'node ms_c.js in the C_ms_changeBackground directory 
run 'node ms_d.js', in the D_ms_changeFont directory

NOTE:
If any microserivce doesn't appear to be working on the frontend, you may need to refresh the browser and try again. 





