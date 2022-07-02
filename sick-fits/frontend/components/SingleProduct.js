import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import DisplayError from './ErrorMessage';

const SINGLE_ITEM_QUERY = gql`
  query {
    Product(where: { id: "62ba1c27e1d740565c17e861" }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  return (
    <div>
      <h2>{data.Product.name}</h2>
    </div>
  );
}
