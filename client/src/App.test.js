import {render, screen} from '@testing-library/react';
import App from './components/App';
import About from "./components/about/About";
import {Link} from "react-router-dom";

const TestRenderer = require('react-test-renderer');

describe('Component tests', () => {
    describe('Component test on render about page', () => {
        it('Render page content', () => {
            render(<About/>);
            const linkElement = screen.getByText(/But behold this creation/i);
            expect(linkElement).toBeInTheDocument();
        });

        it('Render menu page content', () => {
            const testRender = TestRenderer.create(<App/>);
            const testInstance = testRender.root;
            const elements = testInstance.findAllByType(Link).map((element) =>
                element.props.children
            );
            expect(elements).toContain('Home');
            expect(elements).toContain('Register');
            expect(elements).toContain('Login');
            expect(elements).toContain('About');

            expect(elements).not.toContain('Logout');
            expect(elements).not.toContain('Trends');
        });
    });
});
