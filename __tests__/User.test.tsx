import * as React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, screen } from '@testing-library/react'
import axios from 'axios'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import User from '../src/pages/User'
import URLS from '../src/api/movieApi'



describe("user", () => {
    it("can load a users page", async () => {
        await page.goto('https://my-movies-client.netlify.app/#/calico')
        await expect(page).toMatch('@calico')
    })

    it('should be titled "Movie Logger"', async () => {
        await expect(page.title()).resolves.toMatch("Movie Logger")
    })
})