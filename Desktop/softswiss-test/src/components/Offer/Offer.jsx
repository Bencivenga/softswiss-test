import Button from '../Button';

function Offer({ title, description, smallImage, largeImage, className = '' }) {
  return (
    <li className={`offer ${className}`}>
      <picture>
        {largeImage && (
          <source media="(min-width: 1248px)" srcSet={largeImage} />
        )}
        <img src={smallImage} alt="" className="offer__image" loading="lazy" />
      </picture>

      <div className="offer__content">
        <h3 className="offer__title">{title}</h3>
        <p className="offer__description">{description}</p>
        <Button className="offer__button" as="a" href="/" variant="secondary">
          Learn more
        </Button>
      </div>
    </li>
  );
}

export default Offer;
