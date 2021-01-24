import React from 'react';
import "babel-polyfill";
import playwright from "playwright";

describe(`e2e tests with playwright`, () => {
    const BASE_URL = 'http://localhost:3000';
    const delay = (ms) => new Promise(res => setTimeout(res, ms));

    let browser = null;
    let page = null;

    beforeEach(async () => {
        browser = await playwright['chromium'].launch();
        page = await browser.newPage();

        if (!page) {
            throw new Error("Connection wasn't established, try again");
        }

        await page.goto(BASE_URL);
        await delay(100);
    });

    afterEach(async () => {
        await browser.close();
    });

    it(`Home page`, async () => {
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    it('About page', async () => {
        await page.goto(`${BASE_URL}/about`);

        expect(await page.innerText('.home-p-k')).toBe('But behold this creation');
    });

    it(`Test open Register page, register user, login user, see user name in main page, see trends, logout`, async () => {
        let randomString = (length) => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        let login = randomString(7) + "@yandex.ru";
        let password = randomString(7);

        await page.goto(`${BASE_URL}/register`);
        await page.fill('#login', login);
        await page.fill('#password', password);
        await page.click('#submit-reg');

        await page.goto(`${BASE_URL}/login`);
        await page.fill('#login', login);
        await page.fill('#password', password);
        await page.click('#submit-log');

        expect(await page.innerText('#helloText')).toBe(`Welcome to homepage, ${login}`);

        await page.click('#trendsL');
        await page.click('#trendsL');

        expect(await page.innerText('.list-style-title')).toBe(`Три полоски`);

        await page.click('#logoutL');
    });
});
