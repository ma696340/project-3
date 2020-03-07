const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = {
  authors: ["Kobe Bryant"],
  description: "The Mamba Mentality: How I Play is Kobe Bryant’s personal perspective of his life and career on the basketball court and his exceptional, insightful style of playing the game—a fitting legacy from the late Los Angeles Laker superstar. In the wake of his retirement from professional basketball, Kobe “The Black Mamba” Bryant decided to share his vast knowledge and understanding of the game to take readers on an unprecedented journey to the core of the legendary “Mamba mentality.” Citing an obligation and an opportunity to teach young players, hardcore fans, and devoted students of the game how to play it “the right way,” The Mamba Mentality takes us inside the mind of one of the most intelligent, analytical, and creative basketball players ever. In his own words, Bryant reveals his famously detailed approach and the steps he took to prepare mentally and physically to not just succeed at the game, but to excel. Readers will learn how Bryant studied an opponent, how he channeled his passion for the game, how he played through injuries. They’ll also get fascinating granular detail as he breaks down specific plays and match-ups from throughout his career. Bryant’s detailed accounts are paired with stunning photographs by the Hall of Fame photographer Andrew D. Bernstein. Bernstein, long the Lakers and NBA official photographer, captured Bryant’s very first NBA photo in 1996 and his last in 2016—and hundreds of thousands in between, the record of a unique, twenty-year relationship between one athlete and one photographer. The combination of Bryant’s narrative and Bernstein’s photos make The Mamba Mentality an unprecedented look behind the curtain at the career of one of the world’s most celebrated and fascinating athletes.",
  image: "http://books.google.com/books/content?id=lqRdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  link: "http://books.google.com/books?id=lqRdDwAAQBAJ&printsec=frontcover&dq=kobe+bryant&hl=&cd=1&source=gbs_api",
  title: "The Mamba Mentality",
}


db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });