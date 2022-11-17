const mongoose = require("mongoose");
const Schema1 = mongoose.Schema;

const useroffers = new Schema1({
  offer_id: {
    type: String,
  },
  offer_title: {
    type: String,
  },
  offer_description: {
    type: String,
  },
  offer_image: {
    type: String,
  },
  offer_sort_order:Number,
  content: [
    {
        quantity:Number,
    },
    {
    quantity:Number,
    }
],
schedule:{
    "days_of_week":Object,
    "days_of_month":Object,
    "days_of_year":Object,
},
target: String,
pricing:[
    {
        currency:String,
        cost:Number,
    }
]

});

const Offer = mongoose.model('Offer',useroffers)
module.exports = Offer;
