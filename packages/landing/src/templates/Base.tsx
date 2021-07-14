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
          { title: 'Super fast transfer speed' },
          { title: '2GB monthly bandwidth' },
          { title: '200mb filesize limit' }
        ]}
      />
      <PriceListing
        recommended
        name="pro"
        cost={3}
        rate="monthly"
        benefits={[
          { title: 'Super fast transfer speed' },
          { title: '100GB monthly bandwidth' },
          { title: 'Unlimited filesize' },
          { title: 'Send to offline contacts' },
          { title: 'Vanity URL spacedrop.to/yourname' }
        ]}
      />
      <PriceListing
        name="pro"
        cost={6}
        rate="monthly"
        benefits={[
          { title: 'Super fast transfer speed' },
          { title: '300GB monthly bandwidth' },
          { title: 'Unlimited filesize' },
          { title: 'Send to offline contacts' },
          { title: 'Vanity URL spacedrop.to/yourname' },
          { title: 'Ownership of a literal planet with intelligent life' }
        ]}
      />
    </PricingContainer>
    <FAQ data={faqData} />
    <Footer />
  </div>
);

export { Base };
