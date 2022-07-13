import * as React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, screen } from '@testing-library/react'
import axios from 'axios'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Signup from '../src/pages/Signup'
import URLS from '../src/api/movieApi'
import puppeteer from 'puppeteer'

describe("signup", () => {

    it("can load the signup page", async () => {
        await page.goto('https://my-movies-client.netlify.app/#/user/signup')
        await expect(page).toMatch('')
    })


})