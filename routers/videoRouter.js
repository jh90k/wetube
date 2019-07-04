import express from "express";
import routes from "../routes";
// '../' means outside the folder
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//아랫줄처럼 수정 videoRouter.get(routes.videos, videos);

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
//it means whole videoRouter.js is gonna be exported.
