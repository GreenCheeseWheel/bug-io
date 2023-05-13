enum roles {
    admin= 0,
    manager,
    developer,
}

interface user_schema
{
    user_name:string,
    user_password:string,
    user_role:roles,
}

export default roles;
export type {user_schema}
export {roles}