export default function BottomMenu({ children }) {
  return (
    <section className="btmmenu__wrapper">
      <div className="btmmenu">
        <ul className="menu__list">
          <li className="menu__item">Roofs</li>
          <li className="menu__item">Additions</li>
          <li className="menu__item">Remodeling</li>
          <li className="menu__item">Kitchen & Baths</li>
          <li className="menu__item">Decks & Porches</li>
        </ul>
      </div>
    </section>
  );
}
