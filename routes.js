// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Gallery
const GALLERY = "/gallery";
const UPLOAD = "/upload";
const GALLERY_DETAIL = "/gallery/:id";
const EDIT_GALLERY = "/:id/edit";
const DELETE_GALLERY = "/:id/delete";

// Github
const GITHUB = "/auth/github";
const UPLOAD = "/upload";
const GITHUB_CALLBACK = "/auth/github/callback";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    upload: UPLOAD,
    search: SEARCH,
    editGallery : (id) => {
        if(id){
            return `/gallery/${id}/edit`;
        }else{
            return EDIT_GALLERY;
        }
    },
    deleteGallery : (id) => {
        if(id){
            return `/gallery/${id}/delete`;
        }else{
            return DELETE_GALLERY;
        }
    },
    galleryDetail : (id) => {
        if(id){
            return `/gallery/${id}`;
        }else{
            return GALLERY_DETAIL;
        }
    },
    userDetail : (id) => {
        if(id) {
            return `/${id}`
        } else {
            return USER_DETAIL;
        }
    }
};

export default routes;