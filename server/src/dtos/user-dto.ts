export interface CreateUserDto {
    name: string;
    email: string;
    email_type: string;
    password: string;
    bio?: string;
    profile_pic?: string;
    phone_number?: string;
    country_code?: number;
}

export interface UpdateUserDto {

}

export interface FilterUserDto {
    _id?: string;
    email?: string;
    phone_number?: string;
}

