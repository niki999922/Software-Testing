import React from "react";
import About from "../../src/components/about/About";
import TestRenderer from "react-test-renderer";

describe('Component tests jest', () => {
    it('Render home page text', () => {
        const testRender = TestRenderer.create(<About />);

        const testInstance = testRender.root;
        const paragraphs = testInstance.findByType('div');
        const paragraphs1 = paragraphs.props.children[0].props.children;
        const paragraphs2 = paragraphs.props.children[1].props.children;

        expect(paragraphs1.substring(0, 40)).toEqual('This page was developed by a novice fron');
        expect(paragraphs2).toEqual('But behold this creation');
    });
});