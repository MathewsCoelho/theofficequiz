import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

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
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title> The Office Quiz </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1> The Office  </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('submit pelo react');
            }}
            >
              <input
                placeholder="Diz ai seu nome"
                onChange={(infosDoEvento) => {
                  setName(infosDoEvento.target.value);
                }}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
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
  );
}
