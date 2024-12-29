const mongoose = require('mongoose');
const { link } = require('../routes/newsRoutes');

const newsSchema = mongoose.Schema(
    {
        headline: {
            type: String,
            required: [true,"please enter headline"],
        },
        description: {
            type: String,
            required: [true,"please enter description"],
        },
        link: {
            type: String,
            required: [true,"please enter link"],
            default:0,
        },
        Img : {
            type: String,
            required: false,
            default:0,
        },
    },
    {
        timestamps: true,
    }
);
const newsmodel_1 = mongoose.model('News', newsSchema);
module.exports = newsmodel_1;