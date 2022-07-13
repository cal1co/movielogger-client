import App from '../src/App'

test("that jest is working", () => {
    expect(true).toBe(true)
})

test("nav should be rendered", async () => {
    await page.goto('https://my-movies-client.netlify.app/')
    await expect(page).toMatch('LOGIN')
    await expect(page).toMatch('SIGNUP')
    await expect(page).toMatch('MOVIELOG')
})