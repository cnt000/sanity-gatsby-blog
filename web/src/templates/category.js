// /web/src/templates/category.js
import React from 'react'
import {graphql, Link} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import {getBlogUrl} from '../lib/helpers'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: {eq: $id}) {
      title
      description
      posts {
        _id
        title
        publishedAt
        slug {
          current
        }
      }
    }
  }
`

const CategoryPostTemplate = (props) => {
  const {data = {}, errors} = props
  const {title, description, posts} = data.category || {}

  return (
    <Layout>
      <Container>
        {errors && <GraphQLErrorList errors={errors} />}
        {!data.category && <p>No category data</p>}
        <SEO title={title} description={description} />
        <article>
          <h1>Category: {title}</h1>
          <p>{description}</p>
          {/*
            If there are any posts, add the heading,
            with the list of links to the posts
          */}
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

export default CategoryPostTemplate
