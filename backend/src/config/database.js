const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose
  .connect("mongodb://localhost/consultorio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => console.warn("ok"))
  .catch((err) => console.warn("erro"));
