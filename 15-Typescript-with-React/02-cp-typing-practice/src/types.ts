type Info = {
    id: number;
    name: string;
    email: string;
};

type MoreInfo = Info & {
    role: string;
    lastLogin: Date
};

export { type Info, type MoreInfo };