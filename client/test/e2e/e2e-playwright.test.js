import React from 'react';
import "babel-polyfill";

const playwright = require('playwright');

const PAGE_URL = 'http://localhost:3000';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

describe(`Playwright tests`, () => {
    let browser = null;
    let page = null;
    let firstName = 'Polina';
    let lastName = 'Burtseva';
    let age = '22';
    // let currentPage = null;

    beforeEach(async () => {
        browser = await playwright['chromium'].launch();
        page = await browser.newPage();
        // currentPage = page;

        if (!page) {
            throw new Error("Connection wasn't established");
        }

        await page.goto(PAGE_URL);
        await delay(100);
    });

    afterEach(async () => {
        await page.close();
        // currentPage = null;
    });

    it(`Load start page`, async () => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    // it('Home page', async () => {
    //     expect(await page.innerText('#welcome')).toBe('Welcome to recipe book');
    // });
    //
    // it('Unknown page', async () => {
    //     await page.goto(PAGE_URL + '/hello');
    //     expect(await page.innerText('#not-exist')).toBe('Error: Page does not exist!');
    // });
    //
    // Можно запускать лишь 1 раз после поднятия
    // it('Register user', async () => {
    //     let login = 'polinb';
    //     await page.goto(PAGE_URL + '/register');
    //     await page.fill('#firstName', firstName);
    //     await page.fill('#lastName', lastName);
    //     await page.fill('#login', login);
    //     await page.fill('#age', age);
    //     await page.click('#register-submit');
    //
    //     await delay(100);
    //
    //     expect(await page.innerText('#welcome')).toBe('Welcome to recipe book');
    // });
    //
    // Можно запускать лишь 1 раз после поднятия
    // it('Login after register user', async () => {
    //     let login = 'pbs';
    //     await page.goto(PAGE_URL + '/register');
    //     await page.fill('#firstName', firstName);
    //     await page.fill('#lastName', lastName);
    //     await page.fill('#login', login);
    //     await page.fill('#age', age);
    //     await page.click('#register-submit');
    //     await delay(100);
    //
    //     await page.goto(PAGE_URL + '/login');
    //     await page.fill('#login', login);
    //     await page.click('#login-submit');
    //     await delay(100);
    //
    //     expect(await page.innerText('#welcome')).toBe('Welcome to recipe book, ' + login);
    //
    //     await page.click('#logout-navlink');
    //     await delay(100);
    //     expect(await page.innerText('#welcome')).toBe('Welcome to recipe book');
    // });
});
