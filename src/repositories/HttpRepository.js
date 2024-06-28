import axios from 'axios';
class HttpService{        
     constructor(scheme,baseDomain,port,path) {
        let apiClient=axios.create({            
            baseURL:scheme+"://"+baseDomain+":"+port+"/"+path,
            headers: {                
                'Accept':'application/json',                
                // 'Access-Control-Allow-Origin': '*',
                'Content-Type':'application/json;charset=utf-8',
                // 'Access-Control-Allow-Credentials': true,
            },
        })        
        this.apiClient=apiClient;
    }
    updateBearToken(token){
        let baseURL=this.apiClient.defaults.baseURL
        this.bearToken=token;
        let apiClient=axios.create({            
            baseURL:baseURL,
            headers: {                
                'Accept':'application/json',
                // 'Access-Control-Allow-Origin': '*',                
                'Content-Type':'application/json;charset=utf-8',
                // 'Access-Control-Allow-Credentials': true,
                'Authorization': "Bearer "+token
            },
        })
        this.apiClient=apiClient;
    }
    async callAPIMethodGet(endPoint,params){        
        let response=await this.apiClient.get(endPoint,params);        
        if (response.status==200)
            return response.data;
        return response
    }
    async callAPIMethodPost(endPoint,params){        
        let response=await this.apiClient.post(endPoint,params);        
        if (response.status==200){            
            return response.data;
        }
        return response
    }
    async callAPIMethodPUT(endPoint,params){
        let response=await this.apiClient.put(endPoint,params);
        return response;
    }
    async callAPIMethodDelete(endPoint,params){
        let response=await this.apiClient.delete(endPoint,params);
        return response;
    }
}
let callAPI=new HttpService("https","dym-vietnam.dev","443","api");
// const callAPI=new HttpService("http","localhost","88","api");
export default callAPI;