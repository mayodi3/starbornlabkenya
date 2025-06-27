import type { BlogPost } from "./types";

export const allPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Empowering Artisans: A Digital Journey",
    category: "Success Story",
    date: "June 20, 2025",
    image: "/placeholder.svg?height=300&width=500",
    excerpt:
      "Read about how Starbornlab Kenya is transforming the lives of vocational graduates through digital literacy and job connections...",
    author: "Sarah Johnson",
    readTime: "5 min read",
    content: `
      <p>In the heart of Kenya, a digital revolution is taking place that's transforming the lives of vocational graduates. Starbornlab Kenya has been at the forefront of this change, bridging the gap between traditional craftsmanship and modern technology.</p>
      
      <h2>The Challenge</h2>
      <p>Many skilled artisans in Kenya possess incredible talent but lack the digital literacy needed to showcase their work and connect with potential clients in today's interconnected world.</p>
      
      <h2>Our Solution</h2>
      <p>Through comprehensive digital literacy programs, we've empowered over 500 artisans to create online portfolios, manage digital payments, and build sustainable businesses.</p>
      
      <h2>The Impact</h2>
      <p>The results speak for themselves: a 300% increase in income for participating artisans and countless success stories of individuals who have transformed their lives through digital empowerment.</p>
    `,
    tags: ["Digital Literacy", "Empowerment", "Success"],
  },
  {
    id: "post-2",
    title: "The Future of Vocational Training in East Africa",
    category: "Industry Insights",
    date: "June 15, 2025",
    image: "/placeholder.svg?height=300&width=500",
    excerpt:
      "An in-depth look at emerging trends and opportunities in vocational education and its impact on economic growth...",
    author: "Michael Ochieng",
    readTime: "8 min read",
    content: `
      <p>East Africa stands at a crossroads of opportunity. With a young, dynamic population and growing economies, the region is perfectly positioned to leverage vocational training for sustainable development.</p>
      
      <h2>Current Landscape</h2>
      <p>The vocational training sector in East Africa has seen remarkable growth, with enrollment increasing by 40% over the past five years.</p>
      
      <h2>Emerging Trends</h2>
      <p>Digital integration, industry partnerships, and skills-based learning are reshaping how vocational education is delivered and consumed.</p>
      
      <h2>Future Opportunities</h2>
      <p>The potential for growth is immense, with projections showing that skilled vocational graduates could contribute up to 25% of the region's GDP by 2030.</p>
    `,
    tags: ["Education", "East Africa", "Future Trends"],
  },
  {
    id: "post-3",
    title: "Partnership Spotlight: Empowering Rural Communities",
    category: "Partnerships",
    date: "June 10, 2025",
    image: "/placeholder.svg?height=300&width=500",
    excerpt:
      "Discover our latest collaboration with a local NGO to bring digital skills to underserved rural areas...",
    author: "Grace Wanjiku",
    readTime: "6 min read",
    content: `
      <p>Rural communities often face unique challenges in accessing quality education and training opportunities. Our latest partnership aims to bridge this gap through innovative outreach programs.</p>
      
      <h2>The Partnership</h2>
      <p>Working with local NGOs, we've established mobile training units that bring digital skills directly to rural communities.</p>
      
      <h2>Community Impact</h2>
      <p>Over 200 individuals in remote areas have gained essential digital skills, opening new pathways to economic opportunities.</p>
      
      <h2>Lessons Learned</h2>
      <p>Community-driven approaches and local partnerships are key to sustainable impact in rural development initiatives.</p>
    `,
    tags: ["Partnerships", "Rural Development", "Community"],
  },
  {
    id: "post-4",
    title: "Behind the Scenes: A Day at Handiey.com",
    category: "Case Study",
    date: "May 28, 2025",
    image: "/placeholder.svg?height=300&width=500",
    excerpt:
      "Get a glimpse into the daily operations of our Handiey.com platform and the impact it creates for artisans...",
    author: "David Kimani",
    readTime: "4 min read",
    content: `
      <p>Handiey.com has become more than just a platform—it's a thriving ecosystem where artisans connect with opportunities and build sustainable livelihoods.</p>
      
      <h2>Platform Overview</h2>
      <p>Our platform serves as a bridge between skilled artisans and clients seeking quality services, facilitating thousands of connections monthly.</p>
      
      <h2>Daily Operations</h2>
      <p>From quality assurance to customer support, every aspect of our operations is designed to ensure the best experience for both artisans and clients.</p>
      
      <h2>Success Metrics</h2>
      <p>With over 1,000 active artisans and a 95% satisfaction rate, Handiey.com continues to set new standards in the industry.</p>
    `,
    tags: ["Platform", "Operations", "Success"],
  },
  {
    id: "post-5",
    title: "Innovator Spotlight: Meet Our Youngest Mechanic",
    category: "Success Story",
    date: "May 20, 2025",
    image: "/placeholder.svg?height=300&width=500",
    excerpt:
      "Learn about the inspiring journey of one of our bright young mechanics breaking barriers in the automotive industry...",
    author: "Jane Muthoni",
    readTime: "7 min read",
    content: `
      <p>At just 19 years old, Peter Mwangi is already making waves in Kenya's automotive industry, challenging stereotypes and inspiring a new generation of young mechanics.</p>
      
      <h2>Early Beginnings</h2>
      <p>Peter's journey began at our vocational training center, where his passion for automotive technology quickly became apparent.</p>
      
      <h2>Breaking Barriers</h2>
      <p>As one of the youngest certified mechanics in the region, Peter has overcome numerous challenges to establish his own successful workshop.</p>
      
      <h2>Inspiring Others</h2>
      <p>Today, Peter mentors other young people, showing them that age is no barrier to success in the automotive industry.</p>
    `,
    tags: ["Innovation", "Youth", "Automotive"],
  },
];

// Utility functions for blog data
export const getPostById = (id: string): BlogPost | undefined => {
  return allPosts.find((post) => post.id === id);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getUniqueCategories = (): string[] => {
  return Array.from(new Set(allPosts.map((post) => post.category)));
};

export const getFeaturedPosts = (count = 3): BlogPost[] => {
  return allPosts.slice(0, count);
};

export const getRelatedPosts = (
  currentPostId: string,
  count = 3
): BlogPost[] => {
  return allPosts.filter((post) => post.id !== currentPostId).slice(0, count);
};
