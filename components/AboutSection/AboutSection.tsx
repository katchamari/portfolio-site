import { Fragment } from "react/jsx-runtime";
import PillSections from "../PillSections/PillSections";
import Tags from "../Tags/Tags";
import styles from "./AboutSection.module.css";
export default function AboutSection() {
  const currentYear = parseInt(
    new Date().toLocaleDateString("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
    }),
  );
  const yearsOfExperience = currentYear - 2019;
  return (
    <section>
      <h2>About me</h2>
      <p>
        I&apos;m Momo, but you can also call me Momie! (he/they) I&apos;m a web
        developer and artist based in California. I&apos;m a full stack
        developer with a passion and strength for front end. In my most recent
        position, I worked full time as a senior full stack developer, but was
        forced to resign after my employer failed to pay their employees for
        over two months. I am looking for freelance work while I hunt for a more
        permanent position.
      </p>

      <h2>My qualifications</h2>
      <p>
        In May 2020, I graduated from American River College with a degree in
        Art New Media, with an emphasis on web design and development. In tandem
        I studied independently through online courses, and interned at a local
        design company as a front end developer. In June 2020, I started my
        first job in the field. I have been working professionally as a
        programmer for {yearsOfExperience} years since my internship.
      </p>
      <div className={styles.skills}>
        <div>
          <h2>My skills</h2>
          <p>
            In {yearsOfExperience} years of working in the industry, I&apos;ve
            gained a large skillset!
          </p>
        </div>
        <PillSections
          sections={[
            {
              title: "Technical Skills",
              section: (
                <Fragment>
                  <Tags
                    tags={[
                      "HTML",
                      "CSS",
                      "SASS/SCSS",
                      "JavaScript",
                      "jQuery",
                      "Bootstrap",
                      "Bulma CSS",
                      "ReactJS",
                      "NextJS",
                      "TypeScript",
                      "Wordpress",
                      "NodeJS",
                      "Express",
                      "MongoDB",
                      "Mongoose",
                      "Git",
                      "Github",
                      "Bitbucket",
                      "Jira",
                      "Monday",
                      "Adobe Illustrator",
                      "Figma",
                    ]}
                  />
                </Fragment>
              ),
            },
            {
              title: "Other Skills",
              section: (
                <Fragment>
                  <Tags
                    tags={[
                      "Attentive to detail",
                      "Organized",
                      "Quick and eager learner",
                      "Clear communicator",
                      "Can work independently",
                      "Can work in a team",
                      "Problem solver",
                      "Considerate of others' needs",
                      "Driven and passionate",
                      "Creative mind",
                    ]}
                  />
                </Fragment>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
