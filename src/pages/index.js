import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"


const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard 
          date="march 20, 2020"
          title="LOREM IPSUM ELO" 
          slug="/test" 
          excerpt="Lorem Ipsum sot dolot mir cso tam dalej"
        /> 
      </Content>
    </Container>
  )
}

export default IndexPage