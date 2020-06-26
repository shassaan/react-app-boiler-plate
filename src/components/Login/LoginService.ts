import { Config } from "../../Helpers/Service.config";
import {LoginDTO, LoginResponse} from "../../models/Account";
export const  Login = async (LoginObject:LoginDTO) :Promise<LoginResponse> =>{
    let headers = new Headers();
  headers.append("Content-Type", "application/json");
  let response = await fetch(
    `${new Config().getBaseUrl()}/api/account/login`,
    {
      method: "POST",
      body:JSON.stringify(LoginObject),
      headers
    }
  );
  if(!response.ok){}
   
  return await response.json()
  .catch(error => 
    {
      
    });
}