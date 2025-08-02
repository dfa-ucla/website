import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "DFA",
  lastName: "UCLA",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design for America Chapter",
  avatar: "/images/avatar.jpg",
  email: "dfaucla@gmail.com",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dfaucla",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/dfaucla/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "DFA UCLA",
  description: "Design for America at UCLA - Building community through human-centered design",
  headline: <>Building community through human-centered design</>,
  featured: {
    display: true,
    title: <>Latest from our blog</>,
    href: "/blog",
  },
  subline: (
    <>
      We're a student-led organization at UCLA working to solve pressing social issues through design thinking and community engagement.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About Us",
  title: "About Us – DFA UCLA",
  description: "Learn about the Design for America chapter at UCLA and our mission to solve social issues through design",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Our Chapter",
    description: (
      <>
        DFA UCLA is a student-led organization that leverages human-centered design to tackle pressing social issues in our local community and beyond. We bring together students from diverse backgrounds to collaborate on projects that create meaningful impact.
      </>
    ),
    sections: [
      {
        title: "Why We Exist",
        content: "Too often, well-intentioned solutions miss the mark because creators jump straight to implementation without deeply understanding the problems they're trying to solve. Founded in May 2025, DFA UCLA emerged to change this pattern. By partnering with Design for America National, we bring time-tested design methodologies to UCLA, ensuring our interventions are both thoughtful and effective."
      },
      {
        title: "How We Work",
        content: "We're building a collaborative ecosystem across campus, partnering with student organizations to leverage each group's unique expertise. Whether it's working with engineering students on accessible technology solutions or partnering with policy groups on systemic change initiatives, we believe the most impactful solutions emerge when different perspectives unite around shared challenges."
      },
      {
        title: "Who We're Looking For",
        content: "We're currently seeking students passionate about design thinking, community organizations with challenges to tackle, and campus groups interested in collaborative problem-solving."
      }
    ],
  },
  contact: {
    title: "Get Involved",
    description: "Ready to turn your passion into impact? Join us in designing solutions that truly serve our community.",
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Latest Updates from DFA UCLA",
  description: "Read about our projects, events, and insights from the DFA UCLA community",
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const opportunities = {
  path: "/opportunities",
  label: "Opportunities",
  title: "Join DFA UCLA",
  description: "Discover opportunities to get involved with DFA UCLA and make an impact through design",
  opportunities: [
    // Empty for now - will show "coming soon" message
    // When adding opportunities, use this structure:
    // {
    //   title: "Role Title",
    //   description: "Role description",
    //   requirements: ["Requirement 1", "Requirement 2"],
    //   timeCommitment: "X hours per week",
    // }
  ],
  applicationLink: "https://forms.gle/XYZ",
};

const team = {
  title: "Our Team",
  members: [
    {
      name: "Jakob Jensen",
      role: "Studio Lead / Co-Founder",
      bio: "B.A. Business Economics '26",
      image: "/images/team/jakob-jensen.jpeg",
      linkedin: "https://www.linkedin.com/in/jakob-jensen-jb12/",
      email: "jakobjensen.b@gmail.com",
    },
    {
      name: "Yash Goyal",
      role: "Studio Lead / Co-Founder",
      bio: "B.S. Computer Science '26",
      image: "/images/team/yash-goyal.jpeg",
      linkedin: "https://www.linkedin.com/in/yashgoyal01/",
      email: "yashgoyal@ucla.edu",
    },
    {
      name: "Morgan Taylor-Cohen",
      role: "Alumni Director / Co-Founder",
      bio: "B.A. Business Economics & Psychology '25",
      image: "/images/team/morgan-taylor-cohen.jpeg",
      linkedin: "https://www.linkedin.com/in/morgantc/",
      email: "1morgantc@gmail.com",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, opportunities, team };
