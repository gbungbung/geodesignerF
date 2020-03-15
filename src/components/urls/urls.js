const rooturl= 'http://127.0.0.1:8000'

// Authentication Urls
export const loginUrl = `${rooturl}/rest-auth/login/`;
export const regUrl = `${rooturl}/rest-auth/registration/`;
export const changepassURL = `${rooturl}/rest-auth/password/change/`;
export const resetpassURL = `${rooturl}/rest-auth/password/reset/`;
export const userURL = `${rooturl}/rest-auth/user/`;

// Category urls
export const categoryURL = `${rooturl}/cat/`;
export const addCategoryURL = `${rooturl}/add/cat/`;
export const updateCategoryURL = pk => `${rooturl}/cat/${pk}/edit/`;
export const deCategoryURL = id => `${rooturl}/delete/cat/${id}/`;

// Education url
export const eduationURL = `${rooturl}/education/`;
export const deduationURL = id => `${rooturl}/education/${id}/delete/`;

// Experience url
export const experienceURL = `${rooturl}/experience/`;
export const dexperienceURL = id => `${rooturl}/experience/${id}/delete/`;

// Skills urls
export const skillsURL = `${rooturl}/skills/`;
export const eskillsURL = id => `${rooturl}/skills/${id}/edit/`;
export const dskillsURL = id => `${rooturl}/skills/${id}/delete/`;

// User Url
export const userListURL = `${rooturl}/users/list/`;
export const userDetailsURL = slug => `${rooturl}/${slug}/`;