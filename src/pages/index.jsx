import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/ITNav';
import Header from '@components/IT/Header';
import ChooseUs from '@components/IT/ChooseUs';
import Footer from '@components/IT/Footer';

const HomeITSolutions = () => {
  return (
    <>
      <Head>
        <title>AIRING - IT Solutions</title>
      </Head>

      <MainLayout scrollTopText>
        <Navbar />
        <Header />
        <main>
          <ChooseUs />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomeITSolutions;