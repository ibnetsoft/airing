import Head from 'next/head';
import Script from 'next/script';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import Navbar from '@components/Navbars/ITNav';
import Footer from '@components/IT/Footer';
import Dashboard from '@components/PnlAnalysis/Dashboard';

const PnlAnalysisPage = () => {
    return (
        <>
            <Head>
                <title>Bybit P&L Analysis | AIRING</title>
            </Head>

            <Script
                src="https://cdn.jsdelivr.net/npm/chart.js"
                strategy="beforeInteractive"
            />

            <MainLayout scrollTopText>
                <Navbar />
                <main className="pt-100">
                    <Dashboard />
                </main>
                <Footer />
            </MainLayout>
        </>
    )
}

export default PnlAnalysisPage;
