import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

const api="http://localhost:8888/students/"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }
  saveData(data)
  {
    return this.httpclient.post(api,data)
  }
 getDataById(id)
 {
   return this.httpclient.get(api+id);
 }
  getData()
  {
    return this.httpclient.get(api)
  }
 
  updateData(id,data)
  {
    return this.httpclient.put(api+id,data)
  }
  deleteData(id)
  {
    return this.httpclient.delete(api+id)
  }
  getUserData()
  {
    return this.httpclient.get("http://localhost:81/Php_programs/getuser.php")
  }
}
