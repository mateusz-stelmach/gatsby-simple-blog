import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper } from "../elements"
import styled from "styled-components"

export const Nav = () => {

    const data = useStaticQuery(graphql`
        query{
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
    `)


    return(
        <NavWrapper>
            <Link to="/" >
                <img src={data.logo.publicURL} alt="my logo" />
            </Link>
        </NavWrapper>
    )
}

// const LogoImg =styled.img`
//     height: 50px;
//     width: 50px;
// `