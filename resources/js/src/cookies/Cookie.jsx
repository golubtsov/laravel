export default class Cookie {
    #token;
    #userId;
    #role;

    constructor(token, userId, role){
        this.#token = token;
        this.#userId = userId;
        this.#role = role;
        this.setCookies();
    }

    setCookies(){
        document.cookie = `user_id=${this.#userId}`;
        document.cookie = `user_token=${this.#token}`;
        document.cookie = `user_role=${this.#role}`;
    }
}