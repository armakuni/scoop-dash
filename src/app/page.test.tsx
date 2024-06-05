import {describe, it, expect} from "vitest";

import {screen, render} from "@testing-library/react";
import Home from "./page";

describe('Coming soon page', () => {
    it('should have the title of the website', async () => {
        const page = render(<Home />);

        expect(await screen.findByText("ScoopDash")).toBeVisible();
    });

    it('should say that the app is coming soon', async () => {
        const page = render(<Home />);

        expect(await screen.findByText("Coming Soon!")).toBeVisible();
    });

});