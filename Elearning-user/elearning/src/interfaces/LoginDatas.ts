export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    code: number;
    message: string;
    timestamp: number;
    privacy: string;
    result: string;
}

export interface User {
    username: string;
    userId: number;
    roles: string[];
    issuedAt: number;
    expiresAt: number;
}
