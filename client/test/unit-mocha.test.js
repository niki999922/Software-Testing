const assert = require('chai').assert;

function trendsCount(trends) {
    if (trends === null || trends === undefined) {
        return null;
    }
    return trends.length;
}

describe('Unit tests mocha', () => {
    it('Count trends on null', () => {
        assert.equal(trendsCount(null), null)
    });

    it('Count trends on undefined', () => {
        assert.equal(trendsCount(undefined), null)
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
        assert.equal(trendsCount(trends.trends), 4)
    });
});