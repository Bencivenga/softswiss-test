import Button from '../Button';

function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__text-block">
            <h1 className="intro__title">
              Discover the vast expanses of <span>space</span>
            </h1>
            <p className="intro__description">
              Where the possibilities are <span>endless!</span>
            </p>
            <Button as="a" href="/" variant="primary" className="intro__button">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
