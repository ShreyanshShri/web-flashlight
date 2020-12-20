# web-flashlight
A simple arduino project &amp; made with johnny-five that helps you control your LED from anywhere (ofc if you turn on yr pc 24/7)

## setup
### available scripts
```
npm install
node server
```

### setting up the arduino
Firstly you need to upload the standardFirmataPlus library in arduino... Then only you will be able to run js in arduino<br>
You can find many tutorials for that. <br>
Then connect the small pin of led to gnd and longer pin in pin 13.. If you dont have leds dont worry.. Arduino provides a inbuilt led in pin 13.<br>
Then run the server and there you go :). <br>

### running yr app in remote device.. 
Open any browser and enter http://<yr-public-ip-address>:3000/. <br>
You can find yr ip by typing ipconfig in cmd... If you are on mac or linux... Well IDK :) Google it xD

## Happy learning
