/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}

var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		
var http = require("http");
var tweet = require("twitter").post;
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
            
if(response.status == "200"){
	var result = JSON.parse(response.body);
     	var country = result.country;
        if(!storage.local[country]){
            storage.local[country] = {count :1}
        }else{
            storage.local[country].count += 1;
        }      
        var message= "Thank you for tweeting from scriptr. There are now " + storage.local[country].count +  " tweets from " + country + ".";
        var tweetResult = tweet(message);
        return "You've just tweeted [" + message + "] from scriptr, you can check it <a href='http://twitter.com/scriptrdemo' target='_blank'>here</a>.";
}else{
       	return "Ooops, we failed in getting your location"  
}
	    		   				   				   							