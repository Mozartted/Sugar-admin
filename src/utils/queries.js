import gql from 'graphql-tag'

export const UPLOAD_APARTMENT = gql`
    mutation UPLOAD_APARTMENT($name: String!, $doors: Upload, $residents: Upload){
        uploadResidents(
            input: {
                apartment_name: $name,
                doors_upload: $doors,
                residents_upload: $residents
            }
        ){
            id 
            name
        }
    }
`

export const APARTMENTS = gql`
    query APARTMENTS{
        apartments {
            id
            name
            doors {
            name
            acme_id
            id
            }
            users {
                id
                first_name
                last_name
                email
                doors {
                    name
                }
            }
        }
    }
`