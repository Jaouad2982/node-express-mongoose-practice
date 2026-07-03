const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
// To start a server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(202).send("/");
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, "utf-8"),
);

// console.log(tours);

app.get("/api/v1/tours", (req, res) => {
  res.status(202).json({
    status: "success",
    results: tours.length,
    message: "data retrieved",
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFileSync(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    "utf-8",
    (err) => {
      console.log("error pushing tour ");
    },
  );
  res.status(202).json({
    status: "success",
    message: "tour pushed to Tours",
    data: {
      tour: newTour,
    },
  });
});

app.get("/api/v1/tours/:id", (req, res) => {
  console.log(req.params.id);
  const newId = req.params.id * 1;
  const tour = tours.find((el) => el.id === newId);
  res.status(202).json({
    status: " success",
    message: "trip was found",
    data: {
      tour,
    },
  });
});

app.patch("/api/v1/tours/:id", (req, res) => {
  res.status(202).json({
    message: "patch request",
  });
});

app.put("/api/v1/tours/:id", (req, res) => {
  res.status(202).json({
    message: "put request",
  });
});
