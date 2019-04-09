import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CATS = gql`
    query {
        cats {
            cat_id
            thumbnail
        }
    }
`;

const Home: React.FunctionComponent = () => {
  return (
    <Query query={GET_CATS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return data.cats.map((cat: { cat_id: string, thumbnail: string }) => (
          <>
            <div key={cat.cat_id}>{cat.cat_id}</div>
            <div key={cat.thumbnail}>{cat.thumbnail}</div>
          </>
        ));
      }}
    </Query>
  );
};

export default Home;
