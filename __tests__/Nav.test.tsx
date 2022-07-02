import * as React from 'react'
import Nav from '../src/components/Nav'
import Search from '../src/components/Search'
import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

jest.mock('../src/components/Search', () => () => <div data-testid="search-component" />)

describe("Nav", () => {
    describe("should render without errors", () => {
        const { container } = render(<Router><Nav/></Router>)
        it("Home button (movielog)", () => {
            expect(container.childElementCount).toEqual(1)
            expect(screen.getByText(`MOVIELOG`)).toBeInTheDocument()
        })
        it("Should render <Search/> child component", () => {
            const { getByTestId } = render(<Router><Nav/></Router>)
            expect(screen.getByTestId(/search-component/)).toBeInTheDocument();
        })

        // it("should return user to home page ('/') page when clicked", () => {
        //     const component = render(<MemoryRouter><Nav/></MemoryRouter>)
            
        //     fireEvent.click(component)
        // })

    })

    describe("<Search/>", () => {
        it("Should submit a search of input query", () => {
            // 
        })
    })
})