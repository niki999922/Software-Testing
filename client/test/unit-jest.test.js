import React from "react";
import {trendsCount} from "../src/components/trends/Trends"

describe('Unit tests jest', () => {
    it('Count trends on null', () => {
        expect(trendsCount(null)).toBe(null)
    });

    it('Count trends on undefined', () => {
        expect(trendsCount(undefined)).toBe(null)
    });

    it('Count trends on real list', () => {
        const trends = {trends: [
            {
                name: "Три полоски",
                description: "Песня из 2007 о полосках? просто девушка в парке Победы"
            }, {
                name: "Чувства",
                description: "Очень чувственная песня, из 2018"
            }, {
                name: "Дыши",
                description: "Ночь, фонарик, конечно аптека"
            }, {
                name: "Этажи",
                description: "Как порой сложно подниматься наверх"
            }
        ]}
        expect(trendsCount(trends.trends)).toBe(4)
    });
});