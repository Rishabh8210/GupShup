export interface UserAttributes {
    name?: string;
    email: string;
    password: string;
    email_type: string;
    phone_number?: string;
    country_code?: number;
    bio?: string;
    profile_pic?: string;
}