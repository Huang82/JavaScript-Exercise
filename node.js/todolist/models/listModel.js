var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo',{useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected!");
});

var listSchema = new mongoose.Schema({
    title: String,
    content: String,
    status: Boolean
});

listSchema.set('collection', 'list');
var model = mongoose.model('list', listSchema);


// var content = new model({title: "test",
//                              content: "contentTest",
//                              status: false});

// content.save(function(err) {
//     if(err) console.log(err);

//     console.log("Save Success!!");
// });