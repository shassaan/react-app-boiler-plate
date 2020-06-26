import {LoginResponse} from '../models/Account';
export class LoginManager{
    LoginData? : LoginResponse
    getLoginData(){
        return this.LoginData;
    }

    setLoginObject(LoginData:LoginResponse){
        this.LoginData = LoginData;
    }
}