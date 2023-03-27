import { test, expect } from '@playwright/test';


test.describe("Test on Onboard Page", () => {
    test('Check onboard page to see if correct title ', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        await expect(page).toHaveTitle("Artner - Welcome");
    })
    test('Check onboard page to see if meta tag description is correct', async ({ page }) => {
        await page.goto('http://localhost:3000/')
        const metaTagDescription = page.locator('meta[name="description"]')
        await expect(metaTagDescription).toHaveAttribute("content", "Artner - Your partner in art")
    })
})


test.describe("Test on Home Page", () => {
    test("Check box border on home page", async ({ page }) => {
        await page.goto('http://localhost:3000/home')
        const boxBorder = page.locator('#firstBox');
        const checkingBorder = await boxBorder.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("border")
        })
        console.log(checkingBorder);
        expect(checkingBorder).toBe("1px solid rgb(0, 0, 0)");
    })

    test("Check box colour on home page", async ({ page }) => {
        await page.goto('http://localhost:3000/home')
        const boxColour = page.locator('#firstBox');
        const checkingBoxColour = await boxColour.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        console.log(checkingBoxColour);
        expect(checkingBoxColour).toBe("rgb(244, 245, 240)");
    })

    test("Check box border radius on home page", async ({ page }) => {
        await page.goto('http://localhost:3000/home')
        const borderRadius = page.locator('#firstBox');
        const checkingBorderRadius = await borderRadius.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("border-radius")
        })
        console.log(checkingBorderRadius);
        expect(checkingBorderRadius).toBe("10px");
    })

    test("Check main container margin on home page", async ({ page }) => {
        await page.goto('http://localhost:3000/home')
        const mainContainer = page.locator('#mainCont');
        const checkingMargin = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin")
        })
        console.log(checkingMargin);
        expect(checkingMargin).toBe("32px");
    })
})

test.describe("Test on Artchive Page", () => {
    test("Check artchive artist name font size", async ({ page }) => {
        await page.goto('http://localhost:3000/artchive')
        const artistNameSize = page.locator('#artistName');
        const checkingSize = await artistNameSize.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("font-size")
        })
        console.log(checkingSize);
        expect(checkingSize).toBe("16px");
    })

    test("Check artchive description name padding", async ({ page }) => {
        await page.goto('http://localhost:3000/artchive')
        const descName = page.locator('#descriptionName');
        const checkingPadding = await descName.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })
        console.log(checkingPadding);
        expect(checkingPadding).toBe("0px");
    })
})

test.describe("Test on Resource Page", () => {
    test("Check resource background colour", async ({ page }) => {
        await page.goto('http://localhost:3000/resources')
        const resourceBackground = page.locator('#resourceDiv');
        const checkingColour = await resourceBackground.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        console.log(checkingColour);
        expect(checkingColour).toBe("rgb(240, 240, 240)");
    })
})


test.describe("Test on About Page", () => {
    test("Check display type on about page", async ({ page }) => {
        await page.goto('http://localhost:3000/about')
        const aboutDisplay = page.locator('#aboutFlex');
        const checkingDisplay = await aboutDisplay.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })
        console.log(checkingDisplay);
        expect(checkingDisplay).toBe("flex");
    })

    test("Check flex-direction on about page", async ({ page }) => {
        await page.goto('http://localhost:3000/about')
        const aboutFlexDirection = page.locator('#aboutFlex');
        const checkingDirection = await aboutFlexDirection.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("flex-direction")
        })
        console.log(checkingDirection);
        expect(checkingDirection).toBe("column");
    })
})