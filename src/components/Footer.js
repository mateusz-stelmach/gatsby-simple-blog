import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialIcons, FooterSocialWrapper } from "../elements"


export const Footer = () => {

    const data = useStaticQuery(graphql`

        query{
            facebook: file(relativePath: {eq: "facebook.svg"}){
                publicURL
            }
            instagram: file(relativePath: {eq: "instagram.svg"}){
                publicURL
            }
        }
    `)

    return(
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a 
                        href="https://facebook.pl"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={data.facebook.publicURL} alt="Facebook icon" />
                    </a>
                    <a 
                        href="https://instagram.pl"
                        target="_blank"
                        rel="noopener noreferrer">
                            <img src={data.instagram.publicURL} alt="Instagram icon" />
                    </a>
                </FooterSocialIcons>
                <p> 2020 Company. All rights reserved</p>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}