// /web/src/templates/category.js
import React from 'react'
import {graphql, Link} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import {getBlogUrl} from '../lib/helpers'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query AuthorTemplateQuery($id: String!) {
    authors: sanityAuthor(id: {eq: $id}) {
      name
      posts {
        title
        publishedAt
        slug {
          current
        }
      }
    }
  }
`

const AuthorPostTemplate = (props) => {
  const {data = {}, errors} = props
  const {name, publishedAt, posts} = data.authors || {}

  return (
    <Layout>
      <Container>
        {errors && <GraphQLErrorList errors={errors} />}
        {!data.category && <p>No category data</p>}
        <SEO title={name} description={name} />
        <article>
          <h1>Author: {name}</h1>
          <p>{publishedAt}</p>
          {posts && (
            <React.Fragment>
              <h2>Posts</h2>
              <ul>
                {posts.map((post) => (
                  <li key={post._id}>
                    <Link to={getBlogUrl(post.publishedAt, post.slug)}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          )}
        </article>
      </Container>
    </Layout>
  )
}

export default AuthorPostTemplate
