#!/usr/bin/node

// a script that prints all characters of a Star Wars movie:

const request = require('request');

const baseApiUrl = 'https://swapi.dev/api';

const movieId = process.argv[2];

const movieUrl = `${baseApiUrl}/films/${movieId}/`;

request.get(movieUrl, (error, response, body) => {
  // checks for error
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }

  const characters = JSON.parse(body).characters;

  characters.forEach((characterUrl) => {
    request.get(characterUrl, (error, response, body) => {
      if (error) {
        console.error(`Error: ${error}`);
        return;
      }

      const characterName = JSON.parse(body).name;
      console.log(characterName);
    });
  });
});
