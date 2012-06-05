var Todo = new Schema({
    content  : { type:String, required:true, index: true },
    done : { type:Boolean, default: false  },
    order  : Number
  });

