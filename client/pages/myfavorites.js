import Header from '../components/Header';
import Footer from '../components/Footer';

export default function requestFeature() {
  return (
    <>
      <Header></Header>
      <p>Her vil du kunne se alle de produkter som du har tilføjet som favoritter.</p>
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
