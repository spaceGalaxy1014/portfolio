const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Lausanne',
                degree: 'Bachelor of Science (BSc) in Information Systems ',
                detail: "completed both technical aspects, such as programming, algorithms, and web development, as well as applied aspects, focusing on how information systems are utilized in businesses.",
                year: '2021-2024'
            },
            {
                id: 1,
                title: 'ETH Zurich',
                degree: 'Bachelor of Science (BSc) in Computer Science',
                detail: "Deep understanding of core computer science subjects, including algorithms, databases, programming, and web technologies.",
                year: '2015-2018'
            },
            // {
            //     id: 2,
            //     title: 'Falcon Academy',
            //     degree: 'SSC, Science Subjects',
            //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
            //     year: '2013-2015'
            // },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'freelancermap',
                role: 'Full-stack Developer',
                url: 'https://www.freelancermap.ch/',
                desc: 'As a Full-stack developer, I have developed strong skills in back-end development and database management, building scalable and efficient systems.',
                year: '09/2024 - Present',
                location: 'online, Switzerland'
            },
            {
                id: 2,
                title: 'Fiver',
                role: 'Frontend Developer',
                url: 'https://www.fiverr.com/',
                desc: 'As a Junior Developer, I gained expertise in several frameworks such as MERN, MEAN, Next.js, Nuxt.js, and more.',
                year: '09/2021 - 09/2024',
                location: 'online, Switzerland'
            },
            {
                id: 3,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'https://www.uster.com/',
                desc: 'As an Internee, I learned how to use React & JavaScript, Vue and Angular to build interactive websites.',
                year: '09/2018 - 07/2021',
                location: 'Uster, Switzerland'
            },
            // {
            //     id: 3,
            //     title: 'Encoder Bytes',
            //     role: 'PHP Developer',
            //     url: 'https://www.encoderbytes.com/',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
