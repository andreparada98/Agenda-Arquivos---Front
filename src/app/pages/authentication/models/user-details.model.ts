import { Authorization } from "../../../models/authorization.model";

export class UserDetails {
    id: number;
    name: string;
    username: string;
    password: string;
    authorities: Authorization[];
    token?: string;

    constructor(userDetails: UserDetails, token: string) {
        this.id = userDetails.id;
        this.name = userDetails.name;
        this.username = userDetails.username;
        this.password = userDetails.password;
        this.token = token;
    }
}