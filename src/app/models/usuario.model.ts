import { Role } from "./role.model";

export class UsuarioModel {
    id: Number
    name: String;
    email: String;
    password: String;
    confirmPassword: String;
    role: Role
}