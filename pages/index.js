import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <Widget>
        <Widget.Header>
          <h1> The Office  </h1>
        </Widget.Header>   
          <Widget.Content>         
            <p> Lorem Ipsum Dore Ame </p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1> Quizes da Galera  </h1>
            <p> Lorem Ipsum DOre Ame </p>
          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://www.github.com/mathewscoelho/theofficequiz" />
      </QuizContainer>
    </QuizBackground>
  )
}


