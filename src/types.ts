export type AppContextType = {
    userDetails: userInfoType;
    dispatch: React.Dispatch<AppActionType>
}

export type AppActionType = {
    type: string;
    payload?: {
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        city?: string;
        country?: string;
        jobTitle?: string;
    }
}

export type userInfoType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    jobTitle: string;
}