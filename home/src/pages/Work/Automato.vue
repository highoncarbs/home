<template>
  <div>

    <section class="section has-text-centered">
      <div class="container">
        <nav class="level">
          <p class="level-item libre is-size-2">automato</p>
          <br />
        </nav>
        <div class="level is-mobile">
          <a href="#setup" class="button level-item is-text is-size-5 libre-nm">Setup</a>
          <a
            href="https://github.com/PadamSethia/automato"
            class="button is-link is-outlined level-item is-size-5 libre-nm"
          >
            View on Github
            <span class="icon-btn">
              <i data-feather="arrow-up-right"></i>
            </span>
          </a>
        </div>
        <hr />
        <p class="header-text has-text-black this-should-be-big has-text-weight-bold" style="z-index:50">
          Let the machine
          <br />do the boring job.
        </p>
        <div class="slider">
          <figure class="image">
            <g-image
              src="~/assets/automato/hero-1.png"
              alt="Scrape data from Google Maps (Indiamart and Facebook)*"
            />
          </figure>
        </div>

        <div class="columns is-variable is-8" style="margin-top:5rem ;">
          <div class="column has-text-left">
            <figure class="image">
              <g-image src="~/assets/automato/mssg.svg" style="width: 13%;" alt />
            </figure>
            <br />
            <p class="is-size-3 is-size-4-touch has-text-weight-bold">Automate Whatsapp</p>
            <p class="is-size-5">
              Automate your whatsapp campaign , for each of your contacts. Tag your audience and send relevant
              details.
            </p>
          </div>
          <div class="column has-text-left">
            <figure class="image">
              <g-image src="~/assets/automato/scrape.svg" style="width: 13%;" alt />
            </figure>
            <br />
            <p class="is-size-3 is-size-4-touch has-text-weight-bold">Scrape Data</p>
            <p class="is-size-5">
              Scrape data from Business contacts
              from google Maps.
              <br />
              <span class="tag is-link">IndiaMart , Facebook Pages*</span>
              <br />
              <small class="is-size-7">Included Scrapers / Requires API</small>
            </p>
          </div>
          <div class="column has-text-left">
            <figure class="image">
              <g-image src="~/assets/automato/user.svg" style="width: 13%;" alt />
            </figure>
            <br />
            <p class="is-size-3 is-size-4-touch has-text-weight-bold">Manage Contacts</p>
            <p
              class="is-size-5"
            >Manage your contacts , group them into audiences. Send specialized campagins based on groups.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-light" id="setup">
      <div class="container">
        <p class="title is-size-1" style="margin-top:2rem">Setting up Automato</p>
        <br />
        <div class="columns">
          <div class="column is-6">
            <div class="is-size-5 box">
              <li>
                Clone or download
                <span class="tag is-black is-medium">https://github.com/padamsethia/automato</span>
              </li>
              <br />
              <li>
                Run
                <span class="tag is-black is-medium">pip install -r requirements.txt</span> in automato/back
              </li>
              <br />
              <li>
                <span class="tag is-black is-medium">npm run dev</span> to run the frontend at automato/front
              </li>
              <br />
              <li>
                <span class="tag is-black is-medium">python run.py</span> to run the backend at automato/back
              </li>
              <br />
              <li>
                <span class="tag is-black is-medium">python huey-consumer.py tasks.huey</span> to run the consumer at automato/back
              </li>
            </div>
          </div>
          <div class="column is-6">
            <div class="is-size-5 box">
              <p class="is-size-4 has-text-weight-medium has-text-grey">Essential Requirements</p>
              <br />
              <li>
                Automato requires
                <a href class>chrome webdriver</a> to automate whatsapp.
              </li>
              <br />
              <li>
                To scrape contacts from Google Maps , you need access
                <a href="https://developers.google.com/maps/documentation">Google Maps API -></a>
              </li>
              <br />
              <li>
                Automato is built with MySQL as it's preferred database , you are free to chose yours. Create a database with name
                <span class="tag is-medium is-link">automato</span>
              </li>
            </div>
          </div>
        </div>
        <br />
        <a
          href="https://github.com/PadamSethia/automato"
          class="is-size-5"
        >For any issues feel free to create an issue on Github -></a>
      </div>
    </section>
  </div>
</template>

<style>
body,
html {
  font-family: "Inter" !important;
  color: black;
}

.header-text {
  transform: translateY(2rem);

  font-weight: 900;
}

.slider > .image {
  position: inherit;
  box-shadow: 2px 30px 50px rgba(172, 172, 172, 0.25),
    0px 4px 15px rgba(0, 0, 0, 0.25);
}

.libre {
  font-family: "Libre Baskerville";
  font-weight: 700;
  letter-spacing: -4px;
}
.libre-nm {
  font-family: "Libre Baskerville";
  letter-spacing: -1px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .this-should-be-big {
    font-size: 3rem;
    line-height: 3.5rem !important;
    font-weight: 900;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .this-should-be-big {
    font-size: 4rem;
    line-height: 5rem !important;
    font-weight: 900;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .this-should-be-big {
    font-size: 5.5rem;
    line-height: 5.5rem !important;
    font-weight: 900;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .this-should-be-big {
    font-size: 6rem;
    line-height: 6rem !important;
    font-weight: 900;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .this-should-be-big {
    font-size: 7.5rem;
    line-height: 7.5rem !important;
    font-weight: 900;
  }
}

.icon-btn {
  margin: 7px !important;
  margin-bottom: 1px !important;
  vertical-align: middle !important;
}
</style>
