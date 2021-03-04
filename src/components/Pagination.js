import React from "react"
import { render } from "react-dom"
import {PaginationWrapper, PaginationElement} from "../elements"

export const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {
    render(
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            <PaginationElement to={prevPage}>Previous Page</PaginationElement>
            <PaginationElement to={nextPage}>Next Page</PaginationElement>
        </PaginationWrapper>
    )
}