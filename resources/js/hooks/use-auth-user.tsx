import { usePage } from '@inertiajs/react';

export function useAuthRoles() {
    const { props } = usePage<{
        auth?: {
            roles?: string[];
            permissions?: string[];
        };
    }>();

    const roles = props.auth?.roles ?? [];
    const permissions = props.auth?.permissions ?? [];

    const hasRole = (role: string) => roles.includes(role);
    const hasPermission = (permission: string) => permissions.includes(permission);
    
    const isAdmin = roles.includes('admin');
    const isSeller = roles.includes('seller');


    return {
        roles,
        hasRole,
        permissions,
        hasPermission,
        isAdmin,
        isSeller,
    };
}

// {isSeller && (
//   <Button>Create Book</Button>
// )}

// {isAdmin && (
//   <Button>Approve Book</Button>
// )}

// {canCreateBook && (
//   <Button>Special Permission Action</Button>
// )}