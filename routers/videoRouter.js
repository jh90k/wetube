import express from "express";
import routes from "../routes";
// '../' means outside the folder
import { videoDetail, editVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController.js";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//아랫줄처럼 수정 videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload,uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
//it means whole videoRouter.js is gonna be exported.