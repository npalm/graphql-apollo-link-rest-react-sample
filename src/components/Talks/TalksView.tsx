import React, { PureComponent } from 'react';
import { Speaker, Talk, TalksData } from '../../apis/talks';
import { Feed, Container, Grid, Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

interface Props {
  data?: TalksData;
  error: boolean;
  loading: boolean;
}
interface TalkCardProps {
  talk: Talk;
}



const StyledCard = styled(Card)`
  #border-color: 2px solid red;
  #border-radius: 30px;
  font-weight: bold;
  height: 280px;
  max-height: 280px;
`


const TalkCard = (talk: Talk) => {

  return (
    <Grid.Column>
      <StyledCard >
        <Card.Content>
          <Card.Header>{talk.title}</Card.Header>
          {talk.speakers.map(speaker => {
            return <SpeakerCard key={speaker.id} {...speaker} />
          })}
          <Card.Description style={{ textAlign: 'left', maxHeight: 60, height: 60, overflow: 'hidden' }}>
            {talk.summary}
          </Card.Description>


        </Card.Content>
      </StyledCard>
    </Grid.Column>
  )
}

const SpeakerCard = (speaker: Speaker) => {

  return (
    <Feed>
      <Feed.Event>
        <Icon name='user' />
        <Feed.Label content={speaker.name} />

      </Feed.Event>

    </Feed>
  )

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
      <Container>
        <Grid columns={4}>
          {talks.map(talk => {
            return <TalkCard key={talk.id} {...talk} />
          })}
        </Grid>
      </Container >
    )
  }
}

export default TalksView;
