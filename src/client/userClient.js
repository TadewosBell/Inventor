import { request } from './clientReq';

export async function register(...userData){
    const postData = {
        user: userData,
    }
    const response = await request('POST', 'register', postData);
    console.log(response.success);
    return await response;
}