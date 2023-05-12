#!/usr/bin/node

// a script that prints all characters of a Star Wars movie:

const request = require('request');

const movieId = process.argv[2]; // retrieve movie id from command line arguments

request(`https://swapi.dev/api/films/${movieId}/`, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const movie = JSON.parse(body);
  const charactersUrls = movie.characters;

  // make a request for each character URL and print the name
  charactersUrls.forEach((url) => {
    request(url, (error, response, body) => {
      // checks for error
      if (error) {
        console.error(error);
        return;
      }
      // pasing JSON Object
      const character = JSON.parse(body);
      console.log(character.name);
    });
  });

