import LandingPage from "@/styles/LandingPage.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Testimonials() {
  return (
    <>
      <div className={LandingPage.Testimonials}>
        <h1 className={poppins.className}>Testimonials</h1>
        <div className={LandingPage.TestimonialContainer}>
          <div className={LandingPage.Testimony2}>
            <img src="man2.png" alt="" width={200} />
            <h2 className={poppins.className}>Jenna</h2>
            <p className={poppins.className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              sodales nibh, ac pharetra libero. Aenean nulla urna, lobortis vel
              nibh nec, pharetra semper diam. Maecenas in tincidunt sem.
            </p>
          </div>
          <div className={LandingPage.Testimony}>
            <img src="woman.png" alt="" width={200} />
            <h2 className={poppins.className}>Jenna</h2>
            <p className={poppins.className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              sodales nibh, ac pharetra libero. Aenean nulla urna, lobortis vel
              nibh nec, pharetra semper diam. Maecenas in tincidunt sem.
            </p>
          </div>
          <div className={LandingPage.Testimony2}>
            <img src="man1.png" alt="" width={200} />
            <h2 className={poppins.className}>Jenna</h2>
            <p className={poppins.className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              sodales nibh, ac pharetra libero. Aenean nulla urna, lobortis vel
              nibh nec, pharetra semper diam. Maecenas in tincidunt sem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
