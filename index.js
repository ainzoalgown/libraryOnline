const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Rakhim:Kunfu_77@cluster1.z4fac.mongodb.net/libraryOnline",
    {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server has been started...");
    });
    console.log("Сервер успешно подключился к базе данных");
  })
  .catch((e) => {
    console.log("Ошибка с подключением к базе данных");
  });
