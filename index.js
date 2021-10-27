/*
    Purpose: Scrape websites for information
    By: Adam Sheeres-Paulicpulle
*/

const PORT = 8000;

//packages installed
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

//init express
const app = express();

const url = 'https://www.theguardian.com/international';
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)

        const articles = []


        $('.fc-item__title ', html).each(function() {
            const title = $(this).text()
            const lookingURL = $(this).find('a').attr('href')
            articles.push({
                title,
                lookingURL
            })
        })
        console.log(articles)

    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`sever running on PORT ${PORT}`));

