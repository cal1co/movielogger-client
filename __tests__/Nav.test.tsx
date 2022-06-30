import * as React from 'react'
import Nav from '../src/components/Nav'
import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

describe("Nav", () => {
    describe("Home button (movielog)", () => {
        it("should render without errors", () => {
            const { container } = render(<Router><Nav/></Router>)
            expect(container.childElementCount).toEqual(1)
            expect(screen.getByText(`MOVIELOG`)).toBeInTheDocument()
        })

        // it("should return user to home page ('/') page when clicked", () => {
        //     const component = render(<MemoryRouter><Nav/></MemoryRouter>)
            
        //     fireEvent.click(component)
        // })

    })
})