import React from 'react'
import {render} from "@testing-library/react"
import Star from './index'

test("Should have props []value, height, width, spacing", () => {
    const height = 48, width= 48, spacing=4
    const starYellow = "div.stars div.star:not(.placeholder)"

    expect(container.querySelector("div.stars")).toBeInThedocument()
    expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`))
    expect(container.querySelector("starYellow")).toBeInThedocument()

})