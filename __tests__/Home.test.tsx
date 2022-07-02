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

    // it('renders without crashing', () => {
    //     // const div = document.createElement("div");
    //     // ReactDOM.render(<Home/>, div);
    //     // ReactDOM.unmountComponentAtNode(div)
    //     jest.spyOn(React, "useEffect").mockImplementation(cb => cb())
    //     const handleLoad = jest.fn() 
    //     const { container } = render(<Home/>)
    //     expect(handleLoad).toHaveBeenCalled
    // })
    // const {container} = render(<Home />)
    // console.log(container)
    // expect(container.childElementCount).toEqual(1)
    // expect(screen.getByText(`TODAY'S TOP PICKS ▶`)).toBeInTheDocument();

    // Tests to write/find out how to write
    // it("renders ")

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