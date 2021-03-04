import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {useStaticQuery, graphql} from "gatsby"
import {FeatureImageWrapper} from "../elements"

export const FeatureImage = ({ fixed }) => {
    return(
        <FeatureImageWrapper>
            <StaticImage 
                src="../images/hero.jpg" 
                alt=" a hero image"
                placeholder="blurred"                
                loading= "lazy"
                
            />
        </FeatureImageWrapper>
    )
}