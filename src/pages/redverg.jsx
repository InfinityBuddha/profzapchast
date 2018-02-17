import React from 'react'
import Catalog from '../components/Catalog/Catalog'

export default ({data}) => {
    return <Catalog data={data}/>
}

export const query = graphql`
   query MyQueryName {
     markdownRemark {
      frontmatter {
        title
        price
        path
      }
    }
  }
`