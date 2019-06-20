import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

const linkify = (string) => {
  return { __html: string.replace(/\[(.+?)\]\((https?:\/\/[a-zA-Z0-9/.(]+?)\)/g, '<a href="$2">$1<a/>')}
}

const IndexPage = ({ data }) => {
  console.log(data)
  let content = data.allMarkdownRemark.edges[0].node.frontmatter
  let quotes = content.Quotes
  let logos = content.Section_2_Logos
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{content.Header_Title}</h1>
      <p dangerouslySetInnerHTML={linkify(content.Header_Description)}></p>
      <Link to={content.Header_Button_Link}>{content.Header_Button_Text}</Link>


      <h2>{content.Section_1_Header}</h2>
      <h3>{content.Section_1_Title}</h3>
      <p>{content.Section_1_Text}</p>

      <h2>{content.Section_2_Header}</h2>
      <h3>{content.Section_2_Title}</h3>
      <p>{content.Section_2_Text}</p>
      <Link to={content.Section_2_Button_Text}>{content.Section_2_Button_Text}</Link>
      {logos.map(logo => <>
        <img src={logo.image.publicURL}/>
        <p>{logo.title}</p>
      </>)}

      {quotes.map(quote => <>
        <p>{quote.quote}</p>
        <p>- {quote.by}</p>
      </>)}

      <h2>{content.Homepage_Products}</h2>
      <p>{content.Homepage_Products_Description}</p>

      <div>
        <img src={content.Homepage_Product_1_Icon}></img>
        <h3>{content.Homepage_Product_1_Title}</h3>
        <p>{content.Homepage_Product_1_Description}</p>
        <Link to={content.Homepage_Product_1_Button_Link}>{content.Homepage_Product_1_Button_Text}</Link>
      </div>

      <div>
        <img src={content.Homepage_Product_2_Icon}></img>
        <h3>{content.Homepage_Product_2_Title}</h3>
        <p>{content.Homepage_Product_2_Description}</p>
        <Link to={content.Homepage_Product_2_Button_Link}>{content.Homepage_Product_2_Button_Text}</Link>
      </div>

      <div>
        <img src={content.Homepage_Product_3_Icon}></img>
        <h3>{content.Homepage_Product_3_Title}</h3>
        <p>{content.Homepage_Product_3_Description}</p>
        <Link to={content.Homepage_Product_3_Button_Link}>{content.Homepage_Product_3_Button_Text}</Link>
      </div>

      <div>
        <h2>{content.Call_to_Action_Title}</h2>
        <p>{content.Call_to_Action_Description}</p>
        <Link to={content.Call_to_Action_Button_Link}>{content.Call_to_Action_Button_Text}</Link>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          Header_Title
          Header_Description
          Header_Button_Text
          Header_Button_Link
          Section_1_Header
          Section_1_Title
          Section_1_Text
          Section_2_Header
          Section_2_Title
          Section_2_Text
          Section_2_Button_Text
          Section_2_Button_Link
          Section_2_Logos {
            image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240 ) {
                  srcSet
                }
              }
            }
            title
          }
          Quotes {
            quote
            by
          }
          Homepage_Products
          Homepage_Products_Description
          Homepage_Product_1_Icon
          Homepage_Product_1_Title
          Homepage_Product_1_Description
          Homepage_Product_1_Button_Text
          Homepage_Product_1_Button_Link
          Homepage_Product_2_Title
          Homepage_Product_2_Description
          Homepage_Product_2_Button_Text
          Homepage_Product_2_Button_Link
          Homepage_Product_3_Title
          Homepage_Product_3_Description
          Homepage_Product_3_Button_Text
          Homepage_Product_3_Button_Link
          Call_to_Action_Title
          Call_to_Action_Description
          Call_to_Action_Button_Text
          Call_to_Action_Button_Link
        }
      }
    }
  }
}
`
