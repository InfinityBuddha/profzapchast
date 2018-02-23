import React from 'react'
import Catalog from '../components/Catalog/Catalog'

export default ({data}) => {
    return <Catalog data={data.allContentfulProduct.edges} title='Каталог Redverg'/>
}

export const query = graphql`
   query GetRedvergProduct {
        allContentfulProduct {
        edges {
          node {
            name
            price
            category
            photo {
              file {
                url
                fileName
                contentType
              }
            }
          }
        }
    }
  }
`