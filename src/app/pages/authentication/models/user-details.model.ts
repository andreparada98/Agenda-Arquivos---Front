import { Authorization } from "../../../models/authorization.model";
import { Role } from "../../../models/role.model";

export class UserDetails {
    id: number;
    name: string;
    username: string;
    password: string;
    authorities: Authorization[];
    jwtToken?: string;
    role: Role
}