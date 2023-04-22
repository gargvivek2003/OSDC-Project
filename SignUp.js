const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  const MyModel = mongoose.model('MyModel', mySchema);
  
  const mySchema = new mongoose.Schema({
    name: String,
    email: String,
    number:integer,
    password:String,
  });


  

$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})