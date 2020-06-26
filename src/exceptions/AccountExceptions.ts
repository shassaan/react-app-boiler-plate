export class InvalidLoginCredentialsException extends Error{
    constructor(){
        super("Invalid login credentials");
        this.name = "Invalid login credentials"
    }
    
}