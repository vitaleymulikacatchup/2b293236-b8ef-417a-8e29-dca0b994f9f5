"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Sparkles, Bed, Star, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Hospitality"
          description="Discover unparalleled comfort and elegance at Grand Luxe Hotel, where every detail is crafted for your perfect stay"
          tag="5-Star Excellence"
          tagIcon={Award}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "View Rooms",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/1755288/pexels-photo-1755288.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel exterior with elegant architecture"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Grand Luxe"
          description={[
            "For over 50 years, Grand Luxe Hotel has been the epitome of refined hospitality, combining timeless elegance with modern luxury.",
            "Our commitment to exceptional service and attention to detail has made us the preferred choice for discerning travelers seeking an unforgettable experience."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Experience luxury at its finest with our comprehensive range of premium amenities and services"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our award-winning spa featuring therapeutic treatments and wellness programs",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel spa wellness center"
            },
            {
              title: "Fine Dining Experience",
              description: "Savor exquisite cuisine crafted by world-renowned chefs in our elegant restaurants and bars",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant fine dining"
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your fitness routine in our fully equipped modern gym and fitness center",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center"
            },
            {
              title: "Resort-Style Pool",
              description: "Relax and unwind at our stunning rooftop pool with panoramic city views",
              imageSrc: "https://images.pexels.com/photos/10563314/pexels-photo-10563314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel swimming pool"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering comfort, style, and breathtaking views"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe Room",
              price: "From $299/night",
              imageSrc: "https://images.pexels.com/photos/5371570/pexels-photo-5371570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel deluxe room"
            },
            {
              id: "suite",
              name: "Presidential Suite",
              price: "From $899/night",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite bedroom"
            },
            {
              id: "standard",
              name: "Grand Standard",
              price: "From $199/night",
              imageSrc: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel standard room"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why travelers choose Grand Luxe Hotel for their most important stays"
          tag="Guest Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "Tech Innovations",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              company: "Capital Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Travel Writer",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3754312/pexels-photo-3754312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David & Lisa Kim",
              role: "Anniversary Guests",
              company: "Celebrating 25 Years",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5217854/pexels-photo-5217854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David and Lisa Kim portrait"
            },
            {
              id: "5",
              name: "Amanda Foster",
              role: "Executive VP",
              company: "Global Consulting",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Amanda Foster portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Hotel Brands"
          description="Join the network of premium hospitality partners who trust our exceptional standards"
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/17394906/pexels-photo-17394906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Luxe Hotel"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for our guests. Please contact the concierge to arrange pickup times."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three award-winning restaurants, a rooftop bar, and 24-hour room service. Our culinary team offers everything from casual dining to fine dining experiences."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer both self-parking and valet parking services. Valet parking is complimentary for suite guests and available for a fee for other room categories."
            },
            {
              id: "5",
              title: "What amenities are included?",
              content: "All rooms include complimentary Wi-Fi, fitness center access, concierge services, and use of our business center. Spa and dining services are available for additional fees."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Perfect Stay"
          description="Ready to experience luxury hospitality? Contact us to make your reservation or inquire about our services."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkout",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or additional information...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation Request"
          imageSrc="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby reception"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "product"
                },
                {
                  label: "Amenities",
                  href: "feature"
                },
                {
                  label: "Dining",
                  href: "feature"
                },
                {
                  label: "Spa & Wellness",
                  href: "feature"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "contact"
                },
                {
                  label: "Business Center",
                  href: "contact"
                },
                {
                  label: "Event Planning",
                  href: "contact"
                },
                {
                  label: "Transportation",
                  href: "contact"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                },
                {
                  label: "About Us",
                  href: "about"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Luxe Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}