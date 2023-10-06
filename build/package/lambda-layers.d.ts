export declare const request: (url: string, headers?: {
    [key: string]: string;
} | undefined, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: any) => Promise<{
    [key: string]: any;
}>;
