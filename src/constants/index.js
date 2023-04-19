import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets";

export const navLinks = [
	{
		id: "About",
		title: "About",
	},
	{
		id: "Projects",
		title: "Projects",
	},
	{
		id: "Contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "LinkedIn",
		link: "https://www.linkedin.com/in/iqman-singh-bhatia-8b7642222/",
	},
	{
		title: "GitHub",
		link: "https://github.com/IqmanS",
	},
	{
		title: "Kaggle",
		link: "https://www.kaggle.com/iqmansingh",
	},
	{
		title: "LEETCODE",
		link: "https://leetcode.com/ibhatia_be21/",
	},
	{
		title: "Hackerrank",
		link: "https://www.hackerrank.com/Iqman_Singh",
	},
	{
		title: "Medium",
		link: "https://medium.com/@ibhatia_be21",
	},
	{
		title: "Gmail",
		link: "mailto:ibhatia_be21@thapar.edu",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "B.E. Computer Engineering",
		company_name: "Thapar Institute of Engineering & Technology, Patiala",
		icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFh1jLt9uOwEWlVoGF2ZesD1CqBVwPLLT8FeDfGU&s",
		iconBg: "#E6DEDD",
		date: "August 2021 - Present",
		points: ["Present CGPA: 9.22/10"],
		// points: [
		// 	"Developing and maintaining web applications using React.js and other related technologies.",
		// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		// 	"Implementing responsive design and ensuring cross-browser compatibility.",
		// 	"Participating in code reviews and providing constructive feedback to other developers.",
		// ],
	},
	{
		title: "CBSE Non - Medical (10+2)",
		company_name: "GHPS, Vasant Vihar, New Delhi",
		icon: "https://www.schoolmykids.com/smk-media/2018/10/Guru-Harkrishan-Public-School-Vasant-Vihar-Delhi.png",
		iconBg: "#383E56",
		date: "March 2008 - April 2021",
		points: ["Percentage: 96%"],
		// points: [
		// 	"Developing and maintaining web applications using React.js and other related technologies.",
		// 	"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		// 	"Implementing responsive design and ensuring cross-browser compatibility.",
		// 	"Participating in code reviews and providing constructive feedback to other developers.",
		// ],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Beaver - Chess Engine",
		description:
			"Beaver is a Chess Engine made using Python. It employs advanced searching algorithms like Min-Max, Nega-Max and Alpha-Beta Pruning Algorithms along with Piece-Positional Score Table to provide an efficient and accurate gameplay. ",
		tags: [
			{
				name: "Artificial Intelligence",
				color: "green-text-gradient",
			},
			{
				name: "PyGame",
				color: "peach-text-gradient",
			},
		],
		image:
			"https://raw.githubusercontent.com/IqmanS/beaver-chess-engine/master/images/beaver-chess-logo%20(2).png",
		source:
			"https://static-00.iconduck.com/assets.00/itch-io-icon-512x512-wwio9bi8.png",
		link2: false,
		source_code_link_2: "https://iqman-s.itch.io/battleship-ai",
		source_code_link: "https://github.com/IqmanS/beaver-chess-engine",
	},
	{
		name: "Lemur - Battleship Game AI",
		description:
			"The Lemur AI project involves designing and implementing an artificial intelligence system for playing the classic board game Battleship. The AI system is designed to play against human opponents, providing a challenging gameplay experience.",
		tags: [
			{
				name: "Artificial Intelligence",
				color: "green-text-gradient",
			},
			{
				name: "PyGame",
				color: "peach-text-gradient",
			},
		],
		image:
			"https://raw.githubusercontent.com/IqmanS/lemur-battleship-ai/master/BattleshipLogo.png",
		source:
			"https://static-00.iconduck.com/assets.00/itch-io-icon-512x512-wwio9bi8.png",
		link2: true,
		source_code_link_2: "https://iqman-s.itch.io/battleship-ai",
		source_code_link: "https://github.com/IqmanS/lemur-battleship-ai",
	},
	{
		name: "Titanic Dataset",
		description:
			"This is the legendary Titanic Machine Learning problem. The objective is to use machine learning to create a model that predicts which passengers survived the Titanic shipwreck.",
		tags: [
			{
				name: "Machine Learning",
				color: "pink-text-gradient",
			},
			{
				name: "Kaggle",
				color: "blue-text-gradient",
			},
		],
		image:
			"https://raw.githubusercontent.com/IqmanS/ai_ml/main/titanic_dataset/titanic.jpg",
		source_code_link:
			"https://github.com/IqmanS/ai_ml/tree/main/titanic_dataset",
		link2: true,
		source:
			"https://storage.scolary.com/storage/file/public/71b68248-ba0a-4b26-b15f-0c77cdf341cd.svg",
		source_code_link_2: "https://www.kaggle.com/code/iqmansingh/titanic",
	},
	{
		name: "Spaceship Titanic Dataset",
		description:
			"The Spaceship Titanic Machine Learning Problem is the evolution of Titanic ML Problem. The objective is to use machine learning to create a model that predicts which passengers were transported by the collision.",
		tags: [
			{
				name: "Machine Learning",
				color: "pink-text-gradient",
			},
			{
				name: "Kaggle",
				color: "blue-text-gradient",
			},
		],
		image:
			"https://raw.githubusercontent.com/IqmanS/ai_ml/main/spaceship_titanic/spaceship-titanic.jpg",
		source_code_link:
			"https://github.com/IqmanS/ai_ml/tree/main/spaceship_titanic",
		link2: true,
		source:
			"https://storage.scolary.com/storage/file/public/71b68248-ba0a-4b26-b15f-0c77cdf341cd.svg",
		source_code_link_2:
			"https://www.kaggle.com/code/iqmansingh/spaceship-titanic",
	},
	{
		name: "Meali - Meal Catalog App",
		description:
			"Meali is a mobile application that allows users to browse through a wide variety of dishes and recipes, organized into categories for easy navigation. Users can filter and browse collections of recipes and get Step-by-Step Cooking Guide and Detailed Ingredients list",
		tags: [
			{
				name: "Flutter",
				color: "orange-text-gradient",
			},
			{
				name: "Firebase",
				color: "yellow-text-gradient",
			},
		],
		image:
			"https://raw.githubusercontent.com/IqmanS/meali-meals-app/master/icon/icon.jpg",
		source_code_link: " https://github.com/IqmanS/meali-meals-app",
		link2: false,
		source: "",
		source_code_link_2: "",
	},
	{
		name: "UniWalet - College Payments App",
		description:
			"UniWallet was developed as a team project in HackTU 4.0. It is a Payments App UI Redesign focused on Teenagers and Young Adults, it tries to make it easy to track expenditure by changing the Theme of the App based on the target balance user has for the given period.",
		tags: [
			{
				name: "Flutter",
				color: "orange-text-gradient",
			},
			{
				name: "Firebase",
				color: "yellow-text-gradient",
			},
		],
		image:
			"https://raw.githubusercontent.com/IqmanS/UniWallet-Payments-App/master/UniWallet.png",
		source_code_link: "https://github.com/IqmanS/UniWallet-Payments-App",
		link2: false,
		source: "",
		source_code_link_2: "",
	},
];

export { services, technologies, experiences, testimonials, projects };
