import type { NextPage } from 'next'
import { Container } from '../styles/Home'
import { FaGithub } from "react-icons/fa";
import { Header } from '../components/header';
import { Content } from '../components/content';

const Home: NextPage = () => {
  return (
    <Container>
      <nav className='container'>
        <Header />
        <Content />
      </nav>
    </Container>
  )
}

export default Home
