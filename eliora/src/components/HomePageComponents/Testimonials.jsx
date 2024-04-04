import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from "../../data/reviewsData";
import Quote from '../../assets/blockquote.svg';
import styles from "../../style/Testomonials.module.css";

const Testimonials = () => {
  return (


    <section className={`${styles.testimonialContainer}`}>
      <div className={`${styles.title}`}>
      <p>What members are saying.</p>
      <h1 className='text-danger'>Testimonial</h1>
        
      </div>

      <div className={`${styles.sliderContainer}`}>
        <blockquote>
          <img className={`${styles.topQuote} ${styles.quote}`} src={Quote} alt="quote" />
          <img className={`${styles.bottomQuote} ${styles.quote}`} src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <img className={`${styles.reviewImg}`} src={review.image} alt="" />
              <div className={`${styles.content}`}>
                <p className={`${styles.text}`}>{review.text}</p>
                <div className={`${styles.info}`}>
                  <div className={`${styles.rating}`}>
                    <span className={`${styles.star}`}>&#9733;</span>
                    <span className={`${styles.star}`}>&#9733;</span>
                    <span className={`${styles.star}`}>&#9733;</span>
                    <span className={`${styles.star}`}>&#9733;</span>
                    <span className={`${styles.star}`}>&#9734;</span>
                  </div>
                  <p className={`${styles.user}`}>{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>

  );
};

export default Testimonials;