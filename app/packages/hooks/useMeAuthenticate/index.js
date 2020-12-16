import { gql, useQuery } from "@apollo/client";

const QUERY_ME_AUHTENTICATE = gql`
   query getMe {
      me {
         id
         username
         email
         confirmed
      }
   }
`;

export default function useMeAuthenticate() {
   const { data, loading } = useQuery(QUERY_ME_AUHTENTICATE);
   return {
      loading,
      data,
      isAuthenticate : !!data
   };
}
