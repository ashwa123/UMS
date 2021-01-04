export interface User {
    /**Employee ID of the user */
    empId: string;
    /**Username of the user */
    username: string;
    /**Password of the user */
    password: string;
    /**Name of the user */
    name: string;
    /**Email of the user */
    email: string;
    /**Phone number of the user */
    phone: number;
    /**Checks the logged in user is admin */
    isAdmin?: boolean;
}
