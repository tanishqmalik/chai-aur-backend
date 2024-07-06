import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema (
    {
        videoFile:{
            type: String, //claudinary url
            required: true
        },
        thumnail:{
            type: String, //claudinary url
            required: true
        },
        title:{
            type: String, //claudinary url
            required: true
        },
        description:{
            type: String,
            required: true
        },
        duration:{
            type: Number,
            required: true
        },
        views:{
            type: Number,
            default:0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },

    },
    {
        timestamps
    }
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)