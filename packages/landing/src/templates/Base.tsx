import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { FAQ } from '../components/FAQ';
import { PriceListing } from '../components/Pricing';
import faqData from '../data/faq';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <div className="pt-10 -mt-32 justify-center flex flex-row flex-wrap overflow-hidden">
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
      <div className="-mt-10">
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
          { title: '10GB monthly bandwidth' },
          { title: '200mb filesize limit' }
        ]}
      />
    </div>
    <FAQ data={faqData} />
    <Footer />
  </div>
);

export { Base };
