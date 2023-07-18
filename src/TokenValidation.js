import jwt_decode from 'jwt-decode';

export const isAuthenticated = () => {

    let tokenValid = false;

    try {
      if (localStorage.getItem("tokenHoras").replace(/["]+/g, '')) {
        if(jwt_decode(localStorage.getItem("tokenHoras").replace(/["]+/g, '')).exp){
            tokenValid = true
        }else{
            tokenValid = false;
        }
      }
    } catch (error) {
      tokenValid = false
    }
    return tokenValid;

  }
