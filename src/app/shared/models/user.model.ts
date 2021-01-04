export interface User {
    empId: string;
    username: string;
    password: string;
    name: string;
    email: string;
    phone: number;
    isAdmin?: boolean;
}
