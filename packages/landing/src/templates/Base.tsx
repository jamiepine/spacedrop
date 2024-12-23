import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { FAQ } from '../components/FAQ';
import { PriceListing, PricingContainer } from '../components/Pricing';
import faqData from '../data/faq';

const Base = () => (
  <div className="antialiased ">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <PricingContainer>
      <PriceListing
        name="free"
        rate="monthly"
        benefits={[
          { title: '20GB internet transfer' },
          { title: '300mb filesize limit' },
          { title: 'Fastest transfer speed' },
          { title: 'Unlimited local transfers' }
        ]}
      />
      <PriceListing
        recommended
        name="pro"
        cost={3}
        rate="monthly"
        benefits={[
          { title: '100GB internet transfer' },
          { title: 'Unlimited filesize' },
          { title: 'Fastest transfer speed' },
          { title: 'Unlimited local transfers' }
        ]}
      />
      <PriceListing
        name="pro"
        cost={9}
        rate="monthly"
        benefits={[
          { title: '1TB internet transfer' },
          { title: 'Unlimited filesize' },
          { title: 'Fastest transfer speed' },
          { title: 'Unlimited local transfers' }
        ]}
      />
    </PricingContainer>
    <FAQ data={faqData} />
    <Footer />
  </div>
);

export { Base };
