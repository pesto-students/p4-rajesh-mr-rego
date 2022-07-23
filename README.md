# The Rego Zone

Welcome to The Rego Zone. Here's where I'm going to learn stuff... hopefully :)


## How Does A Damn Broswer Work?
<br>
-1. Navigation.

Here's where you enter the website into the address bar of your favourite browser.

![Navigation](https://github.com/mr-rego/p4-rajesh-mr-rego/blob/week1/res/navigation.png?raw=true)

DNS Lookup is where the your browser is going to start searching for the IP address of the website. For eg. www.heyip.com will be returned as 101.25.101.74.
Once that's in the box, there's an 8-step process to be completed. The TCP handshake takes up 3 steps to negotiate and start the TCP session between your broswer (computer) and the web server, and the TLS Negotiation takes the remaining 5 to determine the communication encryption, server verification and a secure channel for communication.

<br>
-2. Response
Once your computer and webserver have decided to talk, the web server sends a response, typically in HTML.

![Response](https://github.com/mr-rego/p4-rajesh-mr-rego/blob/week1/res/response.png?raw=true)

The first packet is 14KB, which is part of TCP Slow Start. After receipt of the the 14KB packet, the server increases the size of consequent packets till the optimal bandwidth is utilized, mostly doubled everytime. Make sure you have a good internet connection. I use ACT... not an ad for ACT :)

Congestion control ensures that the server doesnt send too many packets quickly, else these are going to be dropped if your computer can't handle it.

<br>
![Parsing](https://github.com/mr-rego/p4-rajesh-mr-rego/blob/week1/res/parsing.png?raw=true)


