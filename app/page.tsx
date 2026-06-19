const productSeries = [
  {
    number: "01",
    code: "FO-RP",
    name: "3D Reproduction Prints",
    image: "/images/catalog/rp-texture.jpg",
    alt: "Close-up of a textured reproduction print",
    body: "Color, surface depth, and brushstroke relief recreated for project-scale art programs.",
    note: "Up to 6 mm relief / Custom sizes"
  },
  {
    number: "02",
    code: "FO-LL",
    name: "Laminated Layered Art",
    image: "/images/catalog/laminated-interior.jpg",
    alt: "Layered wall art in a warm interior",
    body: "Dimensional compositions developed for refined residential, hospitality, and commercial interiors.",
    note: "Layered construction / Project ready"
  },
  {
    number: "03",
    code: "FO-WF",
    name: "Wood Veneer & Natural Fiber",
    image: "/images/catalog/natural-fiber-interior.jpg",
    alt: "Natural fiber wall art in a residential interior",
    body: "Warm, tactile wall art shaped by natural textures and an organic material language.",
    note: "Natural materials / Tactile finish"
  },
  {
    number: "04",
    code: "FO-MA",
    name: "Metal Art",
    image: "/images/catalog/metal-art.jpg",
    alt: "Dimensional handmade metal wall art",
    body: "Handmade dimensional metal work with sculptural presence for bold interior environments.",
    note: "Hand finished / Sculptural form"
  }
];

const audiences = [
  "Interior designers",
  "Hospitality groups",
  "Art advisors",
  "Property developers",
  "Commercial interiors"
];

const capabilities = [
  ["01", "Clear specification", "Series, dimensions, pricing, MOQ, and packaging information organized for evaluation."],
  ["02", "Material character", "Relief, layered construction, natural fiber, wood veneer, and hand-finished metal."],
  ["03", "Trade focused", "Practical support for sourcing, presentation, procurement, and project delivery."],
  ["04", "Customization", "Selected sizes, substrates, finishes, framing, and packaging can be adapted by project."]
];

const steps = [
  ["01", "Select a series", "Choose a material direction and share the product codes that fit your project."],
  ["02", "Confirm the brief", "Tell us the sizes, quantities, destination, and target installation date."],
  ["03", "Receive a quote", "We confirm product specifications, project pricing, and production timing."],
  ["04", "Production and delivery", "Your order moves into production with packaging and delivery planned for the project."]
];

export default function Home() {
  return (
    <main>
      <Header />

      <section className="hero" id="home">
        <div className="hero-kicker reveal">Trade wall art and decorative objects</div>
        <h1 className="hero-title reveal reveal-delay">
          Objects that give interiors a point of view.
        </h1>
        <div className="hero-foot reveal reveal-delay-2">
          <p>
            Fine Objects supplies tactile, project-ready wall art for spaces
            that should feel considered, warm, and memorable.
          </p>
          <a className="text-link" href="#series">
            Explore the collection <span aria-hidden="true">&#8595;</span>
          </a>
        </div>
      </section>

      <section className="image-stage" aria-label="Featured installation">
        <img
          src="/images/catalog/hero-wall-art.jpg"
          alt="White textured wall art in a warm minimal interior"
        />
        <div className="image-stage-caption">
          <p>Textured relief</p>
          <p>Made for interior projects</p>
        </div>
      </section>

      <section className="statement dark-section">
        <p className="section-label">What we make</p>
        <h2>
          Material-led wall art for hospitality, residential, and commercial
          spaces.
        </h2>
        <div className="statement-bottom">
          <p>
            We bring together distinctive surface, useful trade information,
            and flexible project support.
          </p>
          <a className="text-link text-link-light" href="#contact">
            Start a project <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </section>

      <section className="series" id="series">
        <div className="series-intro">
          <p className="section-label">The collection</p>
          <h2>Four series. Four ways to add character.</h2>
        </div>

        {productSeries.map((series, index) => (
          <article className={`series-row ${index % 2 ? "series-row-reverse" : ""}`} key={series.code}>
            <figure className="series-image">
              <img src={series.image} alt={series.alt} />
            </figure>
            <div className="series-copy">
              <div className="series-meta">
                <span>{series.number}</span>
                <span>{series.code} Series</span>
              </div>
              <h3>{series.name}</h3>
              <p className="series-body">{series.body}</p>
              <p className="series-note">{series.note}</p>
              <a className="circle-link" href="#contact" aria-label={`Request details for ${series.name}`}>
                <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="audience dark-section">
        <p className="section-label">Designed for</p>
        <div className="audience-list">
          {audiences.map((audience) => (
            <p key={audience}>{audience}</p>
          ))}
        </div>
        <p className="audience-aside">
          For teams sourcing distinctive work at project scale, with the
          practical information needed to make decisions.
        </p>
      </section>

      <section className="editorial-grid" id="about">
        <div className="editorial-copy">
          <p className="section-label">Our point of view</p>
          <h2>Decoration should feel intentional, never generic.</h2>
          <p>
            We believe the objects in a room should create warmth, rhythm, and
            a lasting visual memory. Material presence matters.
          </p>
        </div>
        <figure className="editorial-image editorial-image-tall">
          <img src="/images/catalog/rp-gallery.jpg" alt="Gallery display of textured artwork" />
        </figure>
        <figure className="editorial-image editorial-image-wide">
          <img src="/images/catalog/laminated-interior.jpg" alt="Layered artwork in a quiet interior" />
        </figure>
      </section>

      <section className="capabilities">
        <div className="capabilities-heading">
          <p className="section-label">Why Fine Objects</p>
          <h2>Made easier for trade.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map(([number, title, body]) => (
            <article className="capability-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="catalogue" id="catalogue">
        <figure className="catalogue-image">
          <img
            src="/images/catalog/trade-catalogue-preview.jpg"
            alt="Fine Objects trade catalogue product preview"
          />
        </figure>
        <div className="catalogue-copy">
          <p className="section-label">Trade catalogue</p>
          <h2>Specifications for a clearer decision.</h2>
          <p>
            Request the current trade catalogue for product images,
            dimensions, USD pricing, MOQ notes, and packaging information.
          </p>
          <a className="outline-link" href="#contact">
            Request the catalogue <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
      </section>

      <section className="process">
        <div className="process-heading">
          <p className="section-label">Process</p>
          <h2>From selection to delivery.</h2>
        </div>
        <div className="process-list">
          {steps.map(([number, title, body]) => (
            <article className="process-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact dark-section" id="contact">
        <div className="contact-heading">
          <p className="section-label">Start a conversation</p>
          <h2>Tell us what you are working on.</h2>
          <a className="contact-email" href="mailto:trade@fineobjects.com">
            trade@fineobjects.com <span aria-hidden="true">&#8599;</span>
          </a>
        </div>
        <form className="contact-form" action="mailto:trade@fineobjects.com" method="post">
          <Field label="Name" name="name" />
          <Field label="Company" name="company" />
          <Field label="Email" name="email" type="email" />
          <Field label="Project type" name="project-type" />
          <Field label="Product series or codes" name="product-series" />
          <Field label="Quantity" name="quantity" />
          <Field label="Destination" name="destination" />
          <Field label="Timeline" name="timeline" />
          <label className="form-field form-field-wide">
            <span>Message</span>
            <textarea name="message" rows={4} />
          </label>
          <button className="submit-button" type="submit">
            Send inquiry <span aria-hidden="true">&#8594;</span>
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Fine Objects home">
        <span>FINE</span>
        <span>OBJECTS</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#series">Collection</a>
        <a href="#about">About</a>
        <a href="#catalogue">Catalogue</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#contact">
        Trade inquiry <span aria-hidden="true">&#8599;</span>
      </a>
    </header>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input name={name} type={type} />
    </label>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-wordmark">Fine Objects</div>
      <div className="footer-meta">
        <p>Trade wall art and decorative objects</p>
        <p>Irvine, California</p>
        <p>&copy; {new Date().getFullYear()} Fine Objects LLC</p>
      </div>
    </footer>
  );
}
