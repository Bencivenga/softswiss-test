import Offer from '../Offer/Offer';
import offerBg1 from '../../assets/images/offer-bg-sm-1.jpg';
import offerBg2 from '../../assets/images/offer-bg-sm-2.jpg';
import offerBg3 from '../../assets/images/offer-bg-sm-3.jpg';
import offerBg4 from '../../assets/images/offer-bg-sm-4.jpg';
import offerBg1FullWidth from '../../assets/images/offer-bg-lg-1.jpg';
import offerBg4FullWidth from '../../assets/images/offer-bg-lg-4.jpg';

function Offers() {
  return (
    <section className="offers">
      <div className="container">
        <h2 className="offers__title">Offers</h2>
        <ul className="offers__list">
          <Offer
            title="Move the borders of&nbsp;reality!"
            description="Go on a space adventure"
            smallImage={offerBg1}
            largeImage={offerBg1FullWidth}
            className="full-width"
          />
          <Offer
            title="Space is not just stars and planets"
            description="it is a majestic journey to"
            smallImage={offerBg2}
          />
          <Offer
            title="For those who dream of stars"
            description="Our offer: make your dream come true"
            smallImage={offerBg3}
          />
          <Offer
            title="Fulfill your fantastic dreams"
            description="Space has never been so close"
            smallImage={offerBg4}
            largeImage={offerBg4FullWidth}
            className="full-width"
          />
        </ul>
      </div>
    </section>
  );
}

export default Offers;
