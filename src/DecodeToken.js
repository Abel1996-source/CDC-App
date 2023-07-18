import jwt_decode from "jwt-decode";

export const DecodeToken = () => {
    const token = localStorage.getItem('tokenHoras');
    const decodagetoken = jwt_decode(token);
    return decodagetoken;
}