export const home = (req, res) => res.render("home", {pageTitle:"Home"});
//export const home = (req, res) => res.send("Home");
//pug를 사용하기 위해 send에서 render로 변경
//렌더 함수의 인자로 템플릿 파일의 이름을 쓰면되며 소문자만 사용!
export const search = (req, res) => {
    const {query : {term : searchingBy}} = req;
    res.render("search", {pageTitle:"Search", searchingBy});
}
export const videos = (req, res) => res.render("videos", {pageTitle:"Videos"});
export const upload = (req, res) => res.render("upload", {pageTitle:"Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle:"Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle:"Delete Video"});