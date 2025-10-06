# Starbornlab Kenya – Site Content Inventory

## Metadata (app/layout.tsx)
- Title: Starbornlab Kenya
- Description: An application for displaying starbornlab

## Navigation (components/layout/navigation.tsx)
- Logo:
  - Path: `/logo.jpeg`
  - Alt: A logo Image
  - Dimensions: width=100, height=100 (rendered 96px class)
- Nav Items / Anchors:
  - `#about`
  - `#founder`
  - `#team`
  - `#artisans`
  - `#initiatives`
  - `#impact`
  - `#faq`
  - `#blog` (anchor only, no section in current code)
  - `#location`
  - `#contact`
- CTA: Work With Us

## Footer (components/layout/footer.tsx)
- Logo:
  - Path: `/logo.jpeg`
  - Alt: A logo Image
  - Dimensions: width=100, height=100 (rendered 128px class)
- Text:
  - © {currentYear} Starbornlab Kenya
  - Empowering Africa's Future • Building Tomorrow's Leaders

## Home Page Composition (app/page.tsx)
Sections rendered in this order:
1. HeroSection
2. AboutSection
3. FounderSection
4. TeamSection
5. ArtisanDirectorySection
6. InitiativesSection
7. TestimonialsSection
8. ImpactSection
9. GetInvolvedSection
10. FaqSection
11. MapSection (Location)
12. ContactSection
13. Footer

---

## HeroSection (components/sections/hero-section.tsx)
- Badge: "🌟 Empowering Africa's Future"
- Headline:
  - Empowering
  - Vocational Talent.
  - Building Africa's Future. (typing animation)
- Subtext:
  - "Starbornlab Kenya is a social enterprise creating employment, visibility, and digital opportunities for artisans and innovators from Vocational Training Centers."
- Primary Links:
  - Learn More About Us → `#about`
  - Explore Our Ventures → `#initiatives`
  - Work With Us → `#contact`
- Main Image:
  - Path: `/hero.png?height=500&width=600`
  - Alt: Youth artisans at work in Kenya
  - Size props: width=600, height=500
- Overlaid Stats (textual):
  - 30,000+ Youth Trained
  - 150+ Artisans

## AboutSection (components/sections/about-section.tsx)
- Section ID: `#about`
- Badge: Who We Are
- Title: Transforming Vocational Talent
- Intro:
  - "We harness the power of digital tools, community-driven initiatives, and partnerships to empower skilled graduates from Vocational Training Centers across rural and peri-urban Kenya."
- Cards:
  - Our Mission:
    - "To unlock the potential of vocational skills graduates by connecting them with opportunities for employment, entrepreneurship, and digital transformation."
  - Our Vision:
    - "To develop an ecosystem where skills meet opportunity through technology, mentorship, and partnerships."
  - Core Values:
    - Empowerment
    - Innovation
    - Collaboration
    - Integrity

## FounderSection (components/sections/founder-section.tsx)
- Section ID: `#founder`
- Badge: Leadership
- Title: Meet the Founder
- Founder Image:
  - Path: `/founder.JPG?height=600&width=500`
  - Alt: Esalako Hillary - Founder & CEO
  - Size props: width=500, height=600
- Founder Name/Role:
  - Esalako Hillary — Founder
- Badges:
  - Mandela Washington Fellow
  - Digital Strategist
  - Community Leader
- Bio Paragraphs:
  - "Esalako Hillary is a Mandela Washington Fellowship alumnus and visionary changemaker who has trained over 30,000 youth across East Africa through the Google Digital Skills Program."
  - "A licensed insurance professional, digital strategist, and community leader, Hillary brings together experience from banking, digital innovation, and grassroots community development."
  - "He is the founder of multiple impact-driven ventures and a champion for inclusive economic growth through vocational skills. Hillary believes that by creating systems that support artisans, Kenya can reduce unemployment and build an economy of skilled doers."
- Highlighted stats block:
  - 30,000+ Youth Trained

## TeamSection (components/sections/team-section.tsx)
- Section ID: `#team`
- Badge: Our Amazing Team
- Title: Meet the Team
- Team Members:
  - Esalako Hillary
    - Role: Visionary Founder & CEO
    - Image: `/founder.JPG`
    - Bio: "Transformational leader with an unwavering passion for empowering East African youth through innovative vocational skills training and cutting-edge digital transformation initiatives."
    - Socials:
      - LinkedIn: https://www.linkedin.com/in/esalakohillary/?originalSubdomain=ke
      - Phone (tel): +254704728385
      - Facebook: https://www.facebook.com/SIR.HILLERIE/
      - Email (mailto): esalako.hillary@starbornlabkenya.co.ke
  - Isaac Mayodi
    - Role: Software Engineer & System Architect
    - Image: `/system architect.JPG`
    - Bio: "Brilliant technical mastermind who architects and develops Starbornlab's robust technological infrastructure, ensuring seamless digital experiences and scalable solutions."
    - Socials:
      - LinkedIn: https://www.linkedin.com/in/isaac-mayodi-16a412304/?originalSubdomain=ke
      - Phone (tel): +254707317185
      - GitHub: https://github.com/isaacmayodi
      - Email (mailto): mayodi.isaac@starbornlabkenya.co.ke
  - Vanessa
    - Role: Operations Manager & Digital Marketing Lead
    - Image: `/graduate.png`
    - Bio: "Dynamic operations powerhouse who orchestrates daily business activities while driving strategic digital marketing campaigns that amplify our brand presence across multiple platforms."
    - Socials:
      - Email (mailto): vanessa.kegehi@starboenlabkenya.co.ke
  - Kennedy
    - Role: Fleet Manager & Bike Care Specialist
    - Image: `/bike handler.JPG`
    - Bio: "Dedicated mobility expert who ensures our bike-sharing fleet remains in pristine condition, meticulously maintaining and servicing every bicycle to guarantee safe and reliable transportation for our community."
  - Derrick
    - Role: Creative Visual Director & Photographer
    - Image: `/photographer.JPG`
    - Bio: "Artistic storyteller who captures compelling visual narratives, creating stunning photography and imagery that brings our brand to life across websites, marketing materials, and digital platforms."

## ArtisanDirectorySection (components/sections/artisan-directory-section.tsx)
- Section ID: `#artisan-directory` (navigation links point to `#artisans`)
- Badge: Our Network
- Title: Find Your Skilled Artisan
- Intro: "Connect with vetted and talented vocational graduates ready to bring their expertise to your projects."
- Artisans:
  - Grace Mbugua
    - Skill: Plumber
    - Location: Nairobi
    - Image: `/woman-plumber.jpg?height=150&width=150`
    - Bio: "Experienced plumber known for quick and reliable service. Specializes in leak detection and pipe installation."
  - Daniel Kimani
    - Skill: Welder
    - Location: Nakuru
    - Image: `/welder.jpg?height=150&width=150`
    - Bio: "Certified welder with expertise in metal fabrication and structural repairs for various projects."
  - Jacob Murimi
    - Skill: Carpenter
    - Location: Kisumu
    - Image: `/carpenter.jpg?height=150&width=150`
    - Bio: "Creative carpenter specializing in custom furniture design and intricate woodwork for homes and offices."
  - Peter Otieno
    - Skill: Electrician
    - Location: Mombasa
    - Image: `/electrician.jpg?height=150&width=150`
    - Bio: "Highly skilled electrician providing safe and efficient electrical installations, repairs, and maintenance."
  - John Kamau
    - Skill: Motor Vehicle Mechanic
    - Location: Nairobi
    - Image: `/mechanic.jpg?height=150&width=150`
    - Bio: "Expert mechanic capable of diagnosing and fixing complex vehicle issues for various makes and models."
- CTA Button: Hire One of Us → https://handiey.com

## InitiativesSection (components/sections/initiatives-section.tsx)
- Section ID: `#initiatives`
- Badge: What We Do
- Title: Our Initiatives
- Initiative 1: Handiey.com
  - Headline: Hire Skilled Artisans with Confidence
  - Description: "Handiey.com is a digital marketplace that connects skilled graduates from VTCs with real-time job opportunities in plumbing, welding, carpentry, construction, electrical works, motor vehicle mechanics and other trades. We're building trust between clients and professionals while ensuring that artisans grow their careers through verified work. We also work with landlords and property managers to provide reliable maintenance and repair services for rental houses, offering a dependable workforce for tenant-related fixes."
  - Impact: "Empowering artisans to grow their businesses while ensuring clients access quality, vetted professionals."
  - Image: `/skilled artisan.jpg?height=400&width=500`
- Initiative 2: ValveCycle
  - Tagline: Ride for Change
  - Description: "ValveCycle is a bicycle rental and mobility initiative that promotes eco-friendly transport, fitness, and adventure in rural Kenya. Originally launched in Mbale during the COVID-19 pandemic, we have reintroduced a broader and more adventurous ValveCycle, promoting cycling as a lifestyle solution for a healthier, greener, and more connected society."
  - Services:
    - Fitness and wellness cycling
    - Tourism and cultural exploration rides
    - Eco-friendly commuting options
    - Competitive and challenging adventure circuits
  - Impact: "Healthy living, green transport, and community bonding through cycling."
  - Image: `/valve.png?height=400&width=500`
- Initiative 3: Digital Marketing
  - Tagline: Website Development & Brand Strategy
  - Description: "We provide cutting-edge digital marketing, brand strategy, and web development services for schools, small businesses, NGOs, and community organizations. We help our clients grow online so they can grow in the real world."
  - Services:
    - Social Media Campaigns
    - Branding and Graphics
    - Website Design
    - SEO & Content Writing
  - Impact: "Helping local brands reach their audiences and thrive in the digital economy."
  - Image: `/temp.png?height=400&width=500`

## TestimonialsSection (components/sections/testimonials-section.tsx)
- Badge: Success Stories
- Title: What Our Community Says
- Testimonials:
  - Name: Grace Wanjiku
    - Role: Plumber & Handiey.com Professional
    - Location: Nakuru County
    - Image: `/woman-plumber.jpg?height=100&width=100`
    - Rating: 5
    - Text: "Handiey.com has completely transformed my plumbing business! Before joining the platform, I struggled to find consistent work. Now I receive 3-4 job requests every week. The verification process gave my clients confidence, and I've been able to expand my services to three counties. Asante sana Starbornlab!"
  - Name: Samuel Kipchoge
    - Role: ValveCycle Enthusiast & Tour Guide
    - Location: Eldoret, Uasin Gishu
    - Image: `/cyclist.jpg?height=100&width=100`
    - Rating: 5
    - Text: "ValveCycle introduced me to a healthier lifestyle and opened up new opportunities! I now lead cycling tours around Eldoret, showing visitors our beautiful landscapes. The bikes are well-maintained, and the community we've built is amazing. It's more than transport - it's brought our community together for fitness and adventure."
  - Name: Moses Ambasi
    - Role: School Principal & Digital Client
    - Location: Kisumu County
    - Image: `/school principal.jpg?height=100&width=100`
    - Rating: 5
    - Text: "Starbornlab Kenya designed our school's website and managed our social media campaigns. The results were incredible! Our enrollment increased by 40% after parents could easily find information about our programs online. Their team understood our local context and created content that resonated with our community. Highly recommended!"

## ImpactSection (components/sections/impact-section.tsx)
- Section ID: `#impact`
- Badge: Our Impact
- Title: Making a Difference
- Stats:
  - 30,000+ Youth Trained — Digital skills across Kenya, Uganda, and Rwanda
  - 150+ Artisans Listed — Working through Handiey.com platform
  - 5+ Counties Reached — Through ValveCycle initiatives
  - 50+ Digital Projects — Websites and campaigns completed

## GetInvolvedSection (components/sections/get-involved-section.tsx)
- Badge: Get Involved
- Title: Join Our Mission
- Options:
  - Partner with Us
    - Description: Work with county governments, NGOs, TVET institutions, and financial institutions to create sustainable employment pathways.
    - Button: Become a Partner
  - Join Our Network
    - Description: Are you a vocational graduate? Register with us to be listed on Handiey.com or participate in our programs.
    - Button: Join Network
  - Support Our Work
    - Description: Support our mission through donations, sponsorship, or volunteering your professional services.
    - Button: Support Us

## FAQ (components/sections/faq-section.tsx)
- Section ID: `#faq`
- Badge: FAQs
- Title: Common Questions
- Items:
  - What is Starbornlab Kenya's primary mission?
    - "Our primary mission is to empower vocational skills graduates by connecting them with opportunities for employment, entrepreneurship, and digital transformation across East Africa."
  - How does Handiey.com work?
    - "Handiey.com is a digital marketplace where clients can find and hire skilled artisans (plumbers, welders, carpenters, etc.) vetted by Starbornlab Kenya for various job opportunities. It provides visibility and job access for our trained graduates."
  - What is ValveCycle?
    - "ValveCycle is our bicycle rental and mobility initiative. It promotes eco-friendly transport, fitness, and adventure in rural Kenya, offering services like fitness cycling, tourism exploration, and competitive adventure circuits."
  - How can I partner with Starbornlab Kenya?
    - "We welcome partnerships with county governments, NGOs, TVET institutions, and financial institutions. Please visit our 'Get Involved' section or contact us directly to explore collaboration opportunities."
  - Do you offer digital marketing services for businesses?
    - "Yes, we provide cutting-edge digital marketing, brand strategy, and web development services tailored for schools, small businesses, NGOs, and community organizations."

## MapSection (components/sections/map-section.tsx)
- Section ID: `#location`
- Props on Home Page:
  - Latitude: 0.080972
  - Longitude: 34.722056
  - Title: Visit Starbornlab Kenya
  - Description: Find us at our main office!
  - Marker Title: Starbornlab Kenya
  - Zoom: 16
- Map tiles: OpenStreetMap
- Action Buttons inside popup and page:
  - Get Directions → opens Google Maps driving directions for provided lat/lng
  - Copy Link → copies `http://maps.google.com/maps?q={lat},{lng}`

## ContactSection (components/sections/contact-section.tsx)
- Section ID: `#contact`
- Badge: Contact Us
- Title: Let's Connect
- Contact Info:
  - Location: Vihiga County, Kenya
  - Email: info@starbornlabkenya.co.ke
  - Phone: +254 0472 8385
- Social Buttons (icons only; colors configured):
  - Facebook
  - Instagram
  - Linkedin
- Form fields:
  - First Name
  - Last Name
  - Email Address
  - Your Message
- Submit: Send Message

---

## Public Assets (public/)
All image files discovered in `public/`:
- /bike handler.JPG
- /carpenter.jpg
- /construction worker.jpg
- /cyclist.jpg
- /electrician.jpg
- /founder.JPG
- /graduate.png
- /hero.png
- /local community.png
- /logo.jpeg
- /maps.png
- /mechanic.jpg
- /photographer.JPG
- /plumber.jpg
- /school principal.jpg
- /skilled artisan.jpg
- /skilled artisan.png
- /system architect.JPG
- /temp bike.png
- /temp.png
- /valve.png
- /welder.jpg
- /woman-plumber.jpg

Note: Components often request query parameters for size, e.g., `?height=400&width=500`. The base asset paths above are the actual files in `public/`.

---

## Miscellaneous
- Global stylesheet: `app/globals.css`
- Favicon: `app/favicon.ico`
- Tech stack: Next.js 15, React 19, TailwindCSS, Lucide Icons, Leaflet for maps, shadcn/ui components.
