import gql from "graphql-tag";
//this is the same as the test query we wrote using apollo studio explorer.
//we wrap the entire code in backticks and assign it to a variable so it
//can be reused anywhere we need in front end.
export const GET_ME = gql `
{
    me {
        _id
        username
        email 
        bookCount
        savedBooks {
            bookId
            authors
            image
            link
            title
            description
        }
    }
}

`;