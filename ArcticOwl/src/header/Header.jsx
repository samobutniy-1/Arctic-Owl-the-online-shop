export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div>
            <a className="header__logo-container" href="/">
              <svg className="header__logo" width="100" height="100">
                <use href="/symbol-defs.svg#logo-owl"></use>
              </svg>
            </a>
            <div className="header__input-container">
              <input
                type="text"
                placeholder="Search"
                className="header__input"
              />
              <button className="header__search-btn">
                <svg>
                  <use href="/symbol-defs.svg#icon-search"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="header__buttons buttons">
            <a className="buttons__action-btn" href="/">
              <svg className="buttons__cart-icon">
                <use href="/symbol-defs.svg#icon-cart"></use>
              </svg>
            </a>
            <a className="buttons__burger" href="/">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
