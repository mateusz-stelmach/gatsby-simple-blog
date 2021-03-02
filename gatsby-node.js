// exports.createPages = async ({ graphql, actions }) => {
//     // **Note:** The graphql function call returns a Promise
//     // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
//     const {data} = await graphql`
//         query {
//             allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//                 edges {
//                     node {
//                         frontmatter {
//                         slug
//                         }
//                         id
//                     }
//                 }
//             }
//         }
//     `
//     // Create paginated pages for posts

//     const postPerPage = 3

//     const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//     Array.from({ length: numPages }).forEach((_, i) => {
//         actions.createPages({
//             path: i === 0 ? `/` : `/${ i+2 }`,
//             component: require.resolve("./src/templates/allPosts.js"),
//             context: {
//                 limit: postPerPage,
//                 skip: i * postPerPage,
//                 numPages,
//                 currentPage: i + 1,
//             }

//         })
//     })

//     //Create single blog posts

//     data.allMdx.edges.forEach(edge => {
//         const slug = edge.node.frontmatter.slug
//         const id = edge.node.id
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singlePost.js`),
//             context: {id},
//         })        
//     })   
    
// }