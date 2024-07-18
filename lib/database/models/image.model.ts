import { Document, model, models, Schema } from "mongoose";

export interface IImage extends Document {
  title: String;
  transformationType: String;
  publicId: String;
  secureUrl: String;
  width: Number;
  height: Number;
  config: Object;
  transformationUrl: string;
  aspectRation: String;
  color: String;
  prompt: String;
  author: {
    _id: string;
    firstName: String;
    lastName: string;
  };
  createAt: Date;
  updateAt: Date;
}
const ImageSchema = new Schema({
  title: { type: String, require: true },
  transformationType: { type: String, require: true },
  publicId: { type: String, require: true },
  secureUrl: { type: String, require: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRation: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
