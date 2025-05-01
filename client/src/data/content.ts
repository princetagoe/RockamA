import {
  BarChart3,
  Database,
  ShieldCheck,
  FileBarChart,
  LineChart,
  Lightbulb,
  Users,
  Shield,
  Calendar,
  CalendarDays,
  Link,
  Cog
} from "lucide-react";

export const services = [
  {
    id: 1,
    icon: BarChart3,
    title: "Data Analytics & Intelligence",
    description:
      "Transform your data into actionable insights with dashboards, forecasts, and reports that drive smarter decisions.",
    link: "/services#analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    icon: Database,
    title: "Data Infrastructure & Engineering",
    description:
      "Build robust data foundations with scalable pipelines, storage solutions, and integration systems tailored to your needs.",
    link: "/services#infrastructure",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Governance & Automation",
    description:
      "Ensure data quality, security, and compliance while automating routine processes to save time and reduce errors.",
    link: "/services#governance",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

export const industries = [
  {
    id: 1,
    title: "Retail & E-commerce",
    description:
      "Drive inventory optimization, customer insights, and sales forecasting with data-driven retail analytics.",
    image: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Healthcare & Life Sciences",
    description:
      "Improve patient outcomes and operational efficiency through tailored healthcare analytics solutions.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Travel & Hospitality",
    description:
      "Optimize revenue management and enhance customer experience with travel industry data solutions.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Logistics & Supply Chain",
    description:
      "Streamline supply chain operations and improve delivery efficiency with logistics data analytics.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Education & Nonprofits",
    description:
      "Enhance learning outcomes and administrative efficiency through education-focused data solutions.",
    image: "https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Energy & Aviation",
    description:
      "Optimize resource allocation and improve sustainability with data-driven energy sector solutions.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

export const values = [
  {
    id: 1,
    icon: Shield,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from the quality of our analytics to the insights we deliver, ensuring you receive the highest standard of service.",
  },
  {
    id: 2,
    icon: Users,
    title: "Customer-Focus",
    description:
      "Your business needs and goals are at the center of everything we do. We listen, understand, and deliver solutions that address your specific challenges.",
  },
  {
    id: 3,
    icon: LineChart,
    title: "Agility",
    description:
      "Business conditions change rapidly. We adapt quickly to new challenges and opportunities, ensuring your data strategy stays ahead of the curve.",
  },
  {
    id: 4,
    icon: Shield,
    title: "Accountability",
    description:
      "We take responsibility for our work and stand by our results. You can count on us to deliver on our promises with transparency and integrity.",
  },
];

export const howItWorks = [
  {
    id: 1,
    icon: CalendarDays,
    title: "Book a Discovery Call",
    description: "We'll discuss your goals, challenges, and data sources to understand your needs.",
  },
  {
    id: 2,
    icon: Link,
    title: "Connect Data Sources",
    description: "We'll securely connect to your existing systems and data to begin analysis.",
  },
  {
    id: 3,
    icon: Cog,
    title: "We Analyze, Build, Automate",
    description: "Our team gets to work creating dashboards, reports, and automated processes.",
  },
  {
    id: 4,
    icon: FileBarChart,
    title: "You Get Clear Reports & Insights",
    description: "Access decision-ready dashboards and actionable reports on demand.",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "I didn't have to hire anyone. Rockam gave us all we needed.",
    author: "John Smith",
    position: "Clinic Operations Manager",
  },
  {
    id: 2,
    quote: "We finally understand what our numbers are saying, and what to do next.",
    author: "Emma Brown",
    position: "Fashion Retailer",
  },
  {
    id: 3,
    quote: "They feel like part of the team, but way more efficient. Rockam runs our numbers. We run the business.",
    author: "Raj Patel",
    position: "Marketing Agency Owner",
  },
  {
    id: 4,
    quote: "I used to spend Mondays building reports. Now I read them over coffee.",
    author: "Maria Rodriguez",
    position: "Supply Chain Manager",
  },
  {
    id: 5,
    quote: "We didn't need a full data department. We needed answers. Rockam delivered both.",
    author: "Thomas Walker",
    position: "Retail Pharmacy Manager",
  },
];

export const locations = [
  {
    id: 1,
    title: "Headquarters",
    address: "31 Tippett Road",
    city: "Ontario, M3H 0C8, Canada",
  }
];

export const contactInfo = {
  email: "info@rockam.ai",
  phone: "+1 (647) 555-1234",
  address: "31 Tippett Road, Ontario, M3H 0C8, Canada",
  hours: "Monday - Friday: 9am - 5pm EST",
  socialMedia: {
    twitter: "https://twitter.com/rockamdata",
    linkedin: "https://linkedin.com/company/rockam",
    facebook: "https://facebook.com/rockamdata",
    instagram: "https://instagram.com/rockamdata",
  },
};

export const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    position: "Chief Data Officer",
    bio: "Alex brings over 15 years of data science and analytics experience, leading Rockam's technical strategy and implementation.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Sophia Williams",
    position: "Head of Client Success",
    bio: "Sophia ensures every client gets maximum value from our solutions with tailored strategies and ongoing optimization.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Noah Chen",
    position: "Lead Data Engineer",
    bio: "Noah designs and implements the robust data pipelines and infrastructure that power our analytics solutions.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Olivia Patel",
    position: "Data Analytics Director",
    bio: "Olivia translates complex data into clear, actionable insights that drive meaningful business improvements.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  }
];
