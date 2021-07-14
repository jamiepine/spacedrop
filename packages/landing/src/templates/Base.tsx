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
        name="pro"
        // cost={2.99}
        rate="monthly"
        benefits={[
          { title: 'Super fast transfer speed' },
          { title: '10GB monthly bandwidth' },
          { title: '200mb filesize limit' }
        ]}
      />
      <div className="lg:-mt-10">
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
      </div>
      <PriceListing
        name="pro"
        cost={6}
        rate="monthly"
        benefits={[
          { title: 'Super fast transfer speed' },
          { title: '1TB monthly bandwidth' },
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
