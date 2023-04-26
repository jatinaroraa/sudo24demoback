import mongoose from "mongoose";

const data = new mongoose.Schema({
  imageName: { type: String },
  data: {},
});

const ImagedataModel = mongoose.model("imageData", data);
export default ImagedataModel;
