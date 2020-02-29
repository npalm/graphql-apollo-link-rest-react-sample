import React, { PureComponent } from 'react';
import { TalksData } from '../../apis/talks';

interface Props {
  data?: TalksData;
  error: boolean;
  loading: boolean;
}
class TalksView extends PureComponent<Props> {
  public render() {
    const { error, loading, data } = this.props;
    if (loading) {
      return <div>fetching</div>;
    }
    if (error || data === undefined) {
      return <div>errored</div>;
    }
    const talks = data.talks;
    console.log(talks)
    return (
      <ul>
        {talks.map(talk => <li key={talk.id}>
          {talk.title}
          {/* talk.speakers.map(speaker => <li key={speaker.id}>{speaker.name}</li>) */}
        </li>)}
      </ul>
    )
  }
}

export default TalksView;
