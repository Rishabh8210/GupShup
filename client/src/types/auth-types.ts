export interface AuthticationAttributes {
    email_type: string;
    email: string;
    password: string;
    name: string
    profile?: string;
    bio?: string;
    links?: string[];
    phoneCode?: string; 
    phone?: string;
}