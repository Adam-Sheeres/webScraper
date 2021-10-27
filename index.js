/*
    Purpose: Scrape websites for information
    By: Adam Sheeres-Paulicpulle
*/

//packages installed
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

//init express
const app = express();