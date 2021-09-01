import Header from '../components/Header';
import Footer from '../components/Footer';

export default function requestFeature() {
  return (
    <>
      <Header></Header>
      <p>Work in progress...</p>
      <Footer></Footer>

      <style jsx>{`
        p {
          color: white;
          text-align: center;
          margin-top: 35px;
          margin-bottom: 35px;
        }
      `}</style>
    </>
  );
}
