import cookie from 'cookie';

interface prop{
    req: any;
    headers: any;
    
}

export function parseCookies(req : prop) {
    return cookie.parse(req? req.headers.cookie || "": document.cookie);
}