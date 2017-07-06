'use strict';
$.getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=ARstBy7ZbBhQXgzK2Ggf4NkvNwi4FM6MILFo0N9EJCRuwuA9dgAAAAA&fields=id%2Cname%2Curl%2Cdescription%2Ccreator%2Ccreated_at%2Ccounts%2Creason%2Cprivacy%2Cimage', (data)=>{
	console.log(data);
});