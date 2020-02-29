import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import TalksView from './TalksView';
import { GET_TALKS, TalksData } from '../../apis/talks';

class TalksQuery extends Query<TalksData> { }

const Talks = () => (
  <TalksQuery query={GET_TALKS}>
    {({ data, error, loading }: QueryResult<TalksData>) => <TalksView data={data} error={error !== undefined} loading={loading} />}
  </TalksQuery>
);

export default Talks;
