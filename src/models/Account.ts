export interface LoginDTO{
    username: string;
    password: string;
}

export interface RegisterDTO{
    username: string;
    email:string;
    password: string;
}
export interface LoginResponse{ 
    accessToken: string;
    expiry:Date;
    refreshToken:string;

    
}


