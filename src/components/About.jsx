import { React } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, link }) => {
	return (
		<Tilt className="xs:w-[250px] w-full cursor-pointer">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full peach-pink-gradient p-[2px] rounded-[20px] shadow-card"
				onClick={() => window.open(link, "_blank")}
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col"
				>
					{/* <img src={icon} alt={title} className="w-16 h-16 object-contain" /> */}
					<h1 className="font-design text-[70px] text-quat">
						{title.toLowerCase().charAt(0)}
					</h1>
					<h3 className="text-white text-center text-[20px] font-bold">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>
					Overview<span className="text-quat">.</span>
				</h2>
				<motion.p
					className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
					variants={fadeIn("", "", 0.1, 1)}
				>
					<ul className="list-disc">
						<li>
							Upcoming Data Analyst Intern at PayPal for the Summer of 2024.
						</li>

						<li>
							Ex-Research Intern at Samsung R&D Institute India - Bangalore,
							worked on the domain of GANs & Applied Machine Learning on 5G
							Mobile Networking.
						</li>
						<li>
							Kaggle Notebooks Master (Ranked 120 globally) & Datasets Expert
							(Ranked 600 globally).
						</li>
						<li>
							Currently exploring fields of Artificial intelligence and Machine
							Learning. I have worked on several projects, including Meali - a
							Meal Catalog App, Lemur - BattleShip Board Game AI and Beaver - a
							Chess Engine designed to provide a challenging and immersive
							experience for players of all levels.
						</li>
					</ul>
				</motion.p>
				<p className={styles.sectionSubText + " mt-32"}>My Relevant Profiles</p>
				<h2 className={styles.sectionHeadText}>
					Profiles<span className="text-quat">.</span>
				</h2>
				<div className="mt-20 flex flex-wrap gap-10">
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							title={service.title}
							link={service.link}
							index={index}
							{...services}
						/>
					))}
				</div>
			</motion.div>
		</>
	);
};

export default SectionWrapper(About, "About");
