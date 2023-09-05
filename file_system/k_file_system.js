const fs = require("fs");
const csv = require("csv-parse");

function readCSV() {
  const stream = fs.createReadStream("./file_system/kepler_data.csv").pipe(
    csv.parse({
      comment: "#",
      columns: true,
    })
  );
  stream.on("data", (data) => {
    console.log(data);
  });

  stream.on("error", (error) => {
    console.log(error);
  });
  stream.on("end", () => {
    console.log("progress completed...");
  });
}

function readText() {
  const stream = fs.createReadStream(`${__dirname}/my.txt`, "utf8");
  stream.on("data", (data) => {
    console.log(data);
  });
  stream.on("error", (error) => {
    console.log(error);
  });
  stream.on("end", () => {
    console.log("progress completed...");
  });
}

module.exports = {
  readCSV,
  readText,
};
