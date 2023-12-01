const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

 
const typesArray = loadFilesSync(path.join(__dirname, './**/type.js'))
const resolversArray = loadFilesSync(path.join(__dirname, './**/resolver.js'))
const typeDefs = mergeTypeDefs(typesArray)
const resolvers = mergeResolvers(resolversArray)


module.exports = {typeDefs,resolvers}