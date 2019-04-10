const request={};
const config=require('./config');
const _=require('lodash');
const queryString=require('query-string');
request.get=function (api,params) {
    if (params) {
        api+='?'+queryString.stringify(params);
    }
    return fetch(api)
        .then((response) => response.json());
}
request.post=function (api,body){
    const options=_.extend(config.header,{
        body:JSON.stringify(body)
    })
    return fetch(api,options)
        .then((response)=>response.json())
        .then()
}
export  default request;