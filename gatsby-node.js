/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({actions: {createPage}}) => {
    const products = require("./src/data/products.json")

    products.forEach(product => {
        createPage({
            path: `/product/${product.id}`,
            component: require.resolve("./src/templates/product.js"),
            context: product
        })
    });
}