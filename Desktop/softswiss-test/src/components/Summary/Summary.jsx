function Summary() {
  return (
    <div className="container">
      <article className="summary">
        <h2 className="summary__title">Embark on a space journey</h2>
        <input type="checkbox" className="summary__toggle" id="read-more" />
        <div className="summary__content">
          <p className="summary__text">
            Traveling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </p>
          <label
            htmlFor="read-more"
            className="summary__toggle-label"
            role="button"
            tabIndex="0"
          >
            Read more
          </label>
        </div>
      </article>
    </div>
  );
}

export default Summary;
