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
        // rate="monthly"
        benefits={[
          { title: 'Fastest transfer speed' },
          { title: '20GB bandwidth' },
          { title: '200mb filesize limit' },
          { title: '1GB outbox' }
        ]}
      />
      <PriceListing
        recommended
        name="pro"
        cost={3}
        rate="monthly"
        benefits={[
          { title: 'Fastest transfer speed' },
          { title: '100GB bandwidth' },
          { title: 'Unlimited filesize' },
          { title: '50GB outbox' }
        ]}
      />
      <PriceListing
        name="pro"
        cost={6}
        rate="monthly"
        benefits={[
          { title: 'Fastest transfer speed' },
          { title: '300GB bandwidth' },
          { title: 'Unlimited filesize' },
          { title: '100GB outbox' }
        ]}
      />
    </PricingContainer>
    <FAQ data={faqData} />
    <Footer />
  </div>
);

export { Base };
