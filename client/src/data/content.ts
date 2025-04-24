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
    icon: Lightbulb,
    title: "Actionable Insights",
    description:
      "We deliver clear, practical intelligence that drives real business decisions, not just fancy charts.",
  },
  {
    id: 2,
    icon: LineChart,
    title: "AI Forecasting",
    description:
      "Our predictive models help you see what's coming, so you can plan better and react faster.",
  },
  {
    id: 3,
    icon: Database,
    title: "Data Engineering",
    description:
      "We build reliable data pipelines and infrastructure that grow with your business needs.",
  },
  {
    id: 4,
    icon: Shield,
    title: "Secure Infrastructure",
    description:
      "Your data's safety is our priority with enterprise-grade security and compliance standards.",
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
    quote: "Rockam gave us all we needed to make better inventory decisions.",
    author: "Sarah Chen",
    position: "COO, RetailPlus",
  },
  {
    id: 2,
    quote: "We finally understand our numbers and what they mean for our business.",
    author: "Michael Johnson",
    position: "CEO, HealthFirst Clinic",
  },
  {
    id: 3,
    quote: "They feel like part of the team, but without the overhead of hiring.",
    author: "Priya Patel",
    position: "CFO, LogisTech Solutions",
  },
  {
    id: 4,
    quote: "Rockam runs our numbers. We run the business.",
    author: "David Wilson",
    position: "Director, EduTrack Systems",
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
