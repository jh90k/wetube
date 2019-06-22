import express from "express";
import routes from "../routes";
// '../' means outside the folder
import { upload, videoDetail, editVideo, deleteVideo, videos } from "../controllers/videoController.js";

const videoRouter = express.Router();

//아랫줄처럼 수정 videoRouter.get(routes.videos, videos);
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
//it means whole videoRouter.js is gonna be exported.