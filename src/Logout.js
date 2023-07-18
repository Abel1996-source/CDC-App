export const logout = () => {
    localStorage.removeItem("tokenHoras");
    window.location.replace('/login')
  };
  