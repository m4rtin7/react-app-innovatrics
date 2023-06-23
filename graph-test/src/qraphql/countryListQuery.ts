import { graphql } from '../gql'

export const characterListQuery = graphql(`
  query CountryList {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          name
          type
          dimension
        }
        location {
          name
          type
          dimension
        }
        image
      }
    }
  }
`)
