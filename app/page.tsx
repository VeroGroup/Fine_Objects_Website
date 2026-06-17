const productSeries = [
  {
    code: "FO-RP Series",
    name: "3D Reproduction Prints",
    image: "/images/catalog/rp-texture.jpg",
    alt: "Close-up textured 3D reproduction print surface",
    body:
      "Not a flat print. A textured reproduction. 3D reproduction prints that recreate color, surface depth, and brushstroke relief for project-scale art programs.",
    specs: [
      "Size: Custom",
      "Texture: Up to 6 mm relief",
      "Substrates: Canvas, Paper, Metal, Acrylic",
      "Price: From $0.029 / sq in",
      "MOQ: Price based on 50 pieces"
    ],
    featured: true
  },
  {
    code: "FO-LL Series",
    name: "Laminated Layered Art",
    image: "/images/catalog/laminated-interior.jpg",
    alt: "Laminated layered art installed above a warm interior sofa",
    body:
      "Dimensional layered compositions for refined residential, hospitality, and commercial interiors."
  },
  {
    code: "FO-WF Series",
    name: "Wood Veneer & Natural Fiber Art",
    image: "/images/catalog/natural-fiber-interior.jpg",
    alt: "Natural fiber wall art installed in a warm residential interior",
    body:
      "Warm, tactile wall art using natural textures and organic visual language."
  },
  {
    code: "FO-MA Series",
    name: "Metal Art",
    image: "/images/catalog/metal-art.jpg",
    alt: "Handmade dimensional metal wall art with sculptural detail",
    body:
      "Handmade 3D metal wall art with sculptural presence for bold commercial spaces."
  }
];

const reasons = [
  {
    title: "Project-Ready Specification",
    body:
      "Products are organized by series, size, price, MOQ, and packaging details to support trade evaluation and procurement."
  },
  {
    title: "Tactile Materials",
    body:
      "From textured reproduction prints to layered, natural fiber, wood veneer, and metal artworks, each series is selected for visual and material presence."
  },
  {
    title: "Built for Trade Buyers",
    body:
      "Designed for designers, art advisors, hospitality groups, developers, and commercial buyers sourcing for real projects."
  },
  {
    title: "Customization Available",
    body:
      "Selected products can be adjusted by size, substrate, finish, framing, or packaging requirements depending on project needs."
  }
];

const applications = [
  {
    name: "Hospitality",
    image: "/images/catalog/laminated-interior.jpg"
  },
  {
    name: "Residential",
    image: "/images/catalog/hero-wall-art.jpg"
  },
  {
    name: "Art Advisors",
    image: "/images/catalog/rp-gallery.jpg"
  },
  {
    name: "Commercial Interiors",
    image: "/images/catalog/natural-fiber-interior.jpg"
  }
];

const processSteps = [
  {
    title: "Select Series",
    body:
      "Choose from FO-RP, FO-LL, FO-WF, or FO-MA based on project style and application."
  },
  {
    title: "Confirm Specification",
    body:
      "Review size, substrate, finish, packaging, and quantity requirements."
  },
  {
    title: "Request Quote",
    body:
      "Send product codes, quantity, destination, and timeline."
  },
  {
    title: "Production & Packaging",
    body:
      "We confirm production details, packaging dimensions, and delivery requirements before manufacturing."
  }
];

const projectTypes = [
  "Interior Design",
  "Hospitality",
  "Art Advisory",
  "Development",
  "Commercial Interiors",
  "Other"
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />

      <section
        id="home"
        className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-16"
      >
        <div className="flex min-h-[560px] flex-col justify-center border-y border-line py-12 lg:min-h-[720px]">
          <p className="mb-8 text-xs uppercase tracking-[0.24em] text-bronze">
            Trade wall art and decorative objects
          </p>
          <h1 className="max-w-4xl font-display text-[3.6rem] leading-[0.92] tracking-normal text-ink sm:text-[5.5rem] lg:text-[6.4rem]">
            Textured Wall Art & Decorative Objects for Interior Projects
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Fine Objects supplies project-ready wall art and decorative objects
            for designers, hospitality groups, art advisors, developers, and
            commercial interiors.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="button button-primary" href="#series">
              View Product Series
            </a>
            <a className="button button-secondary" href="#catalogue">
              Request Trade Catalogue
            </a>
          </div>
        </div>

        <figure className="relative min-h-[520px] overflow-hidden lg:min-h-[720px]">
          <img
            src="/images/catalog/hero-wall-art.jpg"
            alt="White textured wall art in a warm minimal interior"
            className="fine-image h-full w-full object-cover"
          />
          <figcaption className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-white/40 bg-paper/86 px-4 py-3 text-xs uppercase tracking-[0.2em] text-muted backdrop-blur-sm">
            <span>Textured relief</span>
            <span>Trade specification</span>
          </figcaption>
        </figure>
      </section>

      <section id="series" className="section-rule px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="eyebrow">Product Series</p>
              <h2 className="section-title">Product Series</h2>
              <p className="section-copy">
                Four distinct product families designed for trade buyers,
                interior projects, and project-scale specification.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {productSeries.map((series) => (
                <article
                  key={series.code}
                  className={
                    series.featured
                      ? "group border border-line bg-[#FBF9F5] p-5 md:col-span-2 lg:grid lg:grid-cols-[0.86fr_1fr] lg:gap-10 lg:p-8"
                      : "group border border-line bg-paper p-5 transition duration-300 hover:border-bronze/60 hover:bg-[#FBF9F5]"
                  }
                >
                  <div>
                    <div className="mb-7 aspect-[4/3] overflow-hidden border border-line bg-paper">
                      <img
                        src={series.image}
                        alt={series.alt}
                        className="fine-image h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                    <p className="mb-6 text-xs uppercase tracking-[0.22em] text-bronze">
                      {series.code}
                    </p>
                    <h3 className="font-display text-4xl leading-none text-ink sm:text-5xl">
                      {series.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-muted">
                      {series.body}
                    </p>
                  </div>
                  {series.specs ? (
                    <dl className="mt-8 grid gap-0 border-t border-line text-sm text-muted lg:mt-0">
                      {series.specs.map((spec) => {
                        const [label, value] = spec.split(": ");
                        return (
                          <div
                            key={spec}
                            className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4"
                          >
                            <dt className="text-ink">{label}</dt>
                            <dd>{value}</dd>
                          </div>
                        );
                      })}
                    </dl>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="border-y border-line py-14 lg:py-20">
            <p className="eyebrow">Our Vision</p>
            <h2 className="font-display text-5xl leading-[0.96] text-ink sm:text-7xl">
              Our Vision
            </h2>
          </div>
          <p className="max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            To become a distinctive source for warm, artful, and
            character-rich decorative objects - helping designers, hospitality
            groups, and interior projects create spaces that feel alive,
            personal, and visually memorable.
          </p>
        </div>
      </section>

      <section className="section-rule px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Trade support</p>
              <h2 className="section-title">Why Fine Objects</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted">
              Distinctive materials, clear trade information, and practical
              customization support for real project procurement.
            </p>
          </div>
          <div className="grid border-t border-line md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="border-b border-line py-8 md:border-r md:px-6 lg:min-h-[260px]"
              >
                <h3 className="font-display text-3xl leading-tight text-ink">
                  {reason.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-muted">
                  {reason.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="eyebrow">Applications</p>
              <h2 className="section-title">
                Designed for Spaces That Need Character
              </h2>
              <p className="section-copy">
                Fine Objects supports spaces where decoration should feel
                intentional, warm, and memorable - not generic.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {applications.map((application, index) => (
                <article
                  key={application.name}
                  className="group overflow-hidden border border-line bg-[#FBF9F5]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={application.image}
                      alt={`${application.name} interior application`}
                      className="fine-image h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      style={{
                        objectPosition:
                          index === 0
                            ? "30% 50%"
                            : index === 1
                              ? "48% 45%"
                              : index === 2
                                ? "78% 50%"
                                : "54% 58%"
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between px-5 py-5">
                    <h3 className="font-display text-3xl text-ink">
                      {application.name}
                    </h3>
                    <span className="h-px w-10 bg-bronze" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="catalogue"
        className="bg-charcoal px-5 py-20 text-paper sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.24em] text-[#C7B596]">
              Trade Catalogue
            </p>
            <h2 className="font-display text-6xl leading-none sm:text-7xl">
              Trade Catalogue
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#D9D2C8]">
              Download the Fine Objects trade catalogue for product images,
              dimensions, USD pricing, MOQ notes, and bulk packaging
              information.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="button button-on-dark"
                href="/catalog/FINE_OBJECTS_Product_Price_Catalog.pdf"
                download
              >
                Download Catalogue
              </a>
              <a className="button button-dark-outline" href="#contact">
                Request Project Pricing
              </a>
            </div>
          </div>
          <figure className="border border-white/15 p-3">
            <img
              src="/images/catalog/trade-catalogue-preview.jpg"
              alt="Fine Objects trade catalogue page with product details and pricing"
              className="fine-image aspect-[5/3] w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section className="section-rule px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12">
            <p className="eyebrow">Process</p>
            <h2 className="section-title">How We Work</h2>
          </div>
          <div className="grid gap-0 border-t border-line">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-5 border-b border-line py-7 sm:grid-cols-[6rem_0.7fr_1fr] sm:items-baseline"
              >
                <span className="text-xs uppercase tracking-[0.22em] text-bronze">
                  0{index + 1}
                </span>
                <h3 className="font-display text-3xl text-ink">{step.title}</h3>
                <p className="text-base leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-rule px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Request Trade Pricing</h2>
            <p className="section-copy">
              For designers, art advisors, hospitality groups, developers, and
              commercial buyers.
            </p>
            <div className="mt-10 border-t border-line pt-7 text-sm leading-7 text-muted">
              <p>
                <span className="text-ink">Location:</span> Irvine, California
              </p>
              <p>
                <span className="text-ink">Email:</span>{" "}
                <a
                  className="hover:text-bronze"
                  href="mailto:trade@fineobjects.com"
                >
                  trade@fineobjects.com
                </a>
              </p>
            </div>
          </div>

          <form
            className="grid gap-4"
            action="mailto:trade@fineobjects.com"
            method="post"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <label className="field">
                <span>Project Type</span>
                <select name="project-type">
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <Field label="Product Series / Codes" name="product-series" />
              <Field label="Quantity" name="quantity" />
              <Field label="Destination" name="destination" />
              <Field label="Timeline" name="timeline" />
            </div>
            <label className="field">
              <span>Message</span>
              <textarea name="message" rows={6} />
            </label>
            <button className="button button-primary w-full sm:w-fit" type="submit">
              Send Trade Inquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="font-display text-2xl text-ink">
          Fine Objects
        </a>
        <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.2em] text-muted md:flex">
          <a className="nav-link" href="#series">
            Product Series
          </a>
          <a className="nav-link" href="#catalogue">
            Trade Catalogue
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </div>
        <a
          className="hidden text-xs uppercase tracking-[0.2em] text-bronze md:block"
          href="#contact"
        >
          Request Pricing
        </a>
      </nav>
    </header>
  );
}

function Field({
  label,
  name,
  type = "text"
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input name={name} type={type} />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 text-sm text-muted sm:flex-row">
        <p className="font-display text-2xl text-ink">Fine Objects</p>
        <p>Trade wall art and decorative objects for interior projects.</p>
      </div>
    </footer>
  );
}
