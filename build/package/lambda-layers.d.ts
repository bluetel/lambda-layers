import https from 'https';
export declare const request: (url: string, options?: https.RequestOptions, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: any) => Promise<{
    [key: string]: any;
}>;
