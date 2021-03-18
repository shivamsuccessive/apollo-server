# apollo-server
training on graphQL

1] What is GraphQL?
Answer => It is a query language to fetch only required data with the help of API's. GraphQL helps to get all the data in single request, while Typical REST API's require loading from multiple URL's. GraphQL allows us to add new fields and types to our GraphQL API without impacting existing queries.

2] Difference between GraphQL and Rest.
Answer => A REST API is an architectural concept for network-based software. GraphQL, on the other hand, is a query language, a specification, and a set of tools that operates over a single endpoint using HTTP. REST has been used to make new APIs, while the focus of GraphQL has been to optimize for performance and flexibility.

3] Write down about Schema and Resolvers
Aswers => 
        #] Schema ->
                     It defines the server's API, allowing clients to know which operations can be performed by the server. The schema is written using the GraphQL schema language. With it, you can define object types and fields to represent data that can be retrieved from the API as well as root types that define the group of operations that the API allows.
        
        # Resolvers ->
                    A resolver is a function that's responsible for populating the data for a single field in schema. Whenever a client queries for a particular field, the resolver for that field fetches the requested data from the appropriate data source.
                    