import * as React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup, screen } from '@testing-library/react'
import axios from 'axios'
import renderer from 'react-test-renderer'

import Home from '../src/pages/Home'
import URLS from '../src/api/movieApi'
import { getPopularFilms, popFilms, getTopFilms, topFilms } from '../src/utils/HomeUtils'



jest.mock("axios")
const mockedAxios = axios as jest.Mocked<typeof axios>


// afterEach(cleanup)
describe("Home", () => {
    
    beforeEach(() => {
        jest.spyOn(React, "useEffect").mockImplementation(cb => cb())
    })

    describe("When calls are successful", () => {
        it("should return a list of popular films", async () => {
            mockedAxios.get.mockResolvedValueOnce(popFilms)
            const result = await getPopularFilms()
            expect(axios.get).toHaveBeenCalledWith(`${URLS.POPULAR}`);
            expect(result).toEqual(popFilms)
        })

        it("should render results of getPopularFilms", () => {
            
        })

        it("should return a list of top films", async () => {
            mockedAxios.get.mockResolvedValueOnce(topFilms)
            const result = await getTopFilms()
            expect(axios.get).toHaveBeenCalledWith(`${URLS.TOP_RATED}`);
            expect(result).toEqual(topFilms)
        })
        it("should render results of getTopFilms", () => {

        })
        it("should render results of getTrendingFilmsWeekly", () => {

        })
    })

    describe("scrollGroup", () => {
        it("should scroll target to next block", () => {

        })


    })
})