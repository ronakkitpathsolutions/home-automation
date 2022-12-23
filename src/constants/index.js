export const CONSTANT = {
    USER_CREDENTIALS: 'USER_CREDENTIALS',
    LOG_OUT: 'LOG_OUT'
}

export const adminLinks = [
    {
        id: 'devices',
        label: 'All Devices',
        path: '/devices',
    },
    {
        id: 'user_management',
        label: 'User Management',
        path: '/user-management'
    }
]

export const profileLinks = [
    {
        id: "profile",
        label: "Profile",
        redirect: '/profile'
      },
      {
        id: "log_out",
        label: "Log Out"
      }
]