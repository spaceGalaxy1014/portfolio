const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Designing (UI/UX)',
        desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
        id: 2,
        title: 'Problem-Solving & Debugging',
        desc: 'I approach every challenge with a problem-solving mindset, digging deep to understand issues and fix them efficiently. Whether it is front-end glitches or back-end bugs, i am comfortable diagnosing problems, streamlining code, and making sure everything runs smoothly and reliably.',
    },
    {
        id: 3,
        title: 'Agile Development & Team Collaboration',
        desc: 'I thrive in Agile environments, where teamwork and adaptability are key. From daily stand-ups to sprint planning, I stay engaged and proactive, helping the team stay on track and deliver meaningful progress. I’m all about open communication, continuous improvement, and building solid products together.',
    },
    {
        id: 4,
        title: 'Back-End Development',
        desc: 'I enjoy working behind the scenes to build the logic that powers web applications. From setting up APIs to handling authentication and connecting services, I focus on writing clean, efficient code that keeps everything running smoothly. I’m comfortable working with tools like Node.js and Express, and I always aim for scalable, maintainable solutions that are easy to build on.',
    },
    {
        id: 5,
        title: 'Database Management',
        desc: 'I manage data efficiently, working with both SQL and NoSQL databases like PostgreSQL and MongoDB. From designing schemas to optimizing queries, I focus on keeping data organized and performance high.',
    },
    {
        id: 6,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 7,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
    {
        id: 8,
        title: 'Time Management & Task Prioritization',
        desc: 'I am great at juggling tasks and keeping things organized, even when the pressure is on. I know how to prioritize what matters most, manage my time wisely, and stay focused—making sure deadlines are met without cutting corners.',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
