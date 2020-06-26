export class Config{
     private readonly development?:string = "https://localhost:44369";
     private readonly production?:string = "https://localhost:44369";

     getBaseUrl(): string{
         return process.env.NODE_ENV === "development" 
         ? this.development!:this.production!;
     }

}

