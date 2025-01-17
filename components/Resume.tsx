"use client";

import { useState, useEffect } from "react";
import {
  Code,
  Server,
  Smartphone,
  Briefcase,
  Calendar,
  Terminal,
  Database,
  Globe,
  Palette,
  Plus,
  GitBranch,
  BookOpen,
  Users,
  Download,
} from "lucide-react";
import AnimatedTechIcons from "./AnimatedTechIcons";
import AnimatedTimeline from "./AnimatedTimeline";
import { Theme, Job, Service, Skill, Activity } from "../types/resume";

interface ResumeProps {
  theme: Theme;
}

export default function Resume({ theme }: ResumeProps) {
  console.log('theme ', theme);
  console.log('button color ', theme.button);
  const [name, setName] = useState<string>("Sudhanshu Kumar");
  const [title, setTitle] = useState<string>("Senior Software Developer");
  const [about, setAbout] = useState<string>(
    "I have 3+ years of experience in software development, specializing in creating efficient, data-driven web solutions. I am keen to apply my development expertise to deliver scalable, on-time projects. Proficient in building end-to-end applications with React.js, Node.js, Express.js, MongoDB, and Next.js, I am skilled in database design, RESTful API development, testing, and deployment."
  );
  const [experience, setExperience] = useState<Job[]>([
    {
      title: "Senior Software Developer",
      company: "Mindfire solutions",
      year: "MAY 2022 - Present",
      description: [
        "Leading a team of developers in creating cutting-edge web applications using React and Next.js.",
        "Implementing best practices and design patterns to improve code quality and maintainability.",
        "Collaborating with cross-functional teams to deliver high-quality software solutions.",
      ],
    },
    {
      title: "Associate Software Developer",
      company: "Accenture India",
      year: "Sep 2021 - May 2022",
      description: [
        "Developed and maintained multiple client websites using JavaScript, React, and Node.js.",
        "Worked on optimizing application performance and improving user experience.",
        "Participated in code reviews and contributed to the team's knowledge sharing sessions.",
      ],
    },
  ]);

  const [services, setServices] = useState<Service[]>([
    {
      icon: <Code />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using modern JavaScript frameworks.",
    },
    {
      icon: <Server />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs using Node.js and Express.",
    },
    {
      icon: <Smartphone />,
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications using React Native.",
    },
  ]);

  const [skills, setSkills] = useState<Skill[]>([
    {
      category: "Frontend",
      icon: <Code />,
      items: ["JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server />,
      items: ["Node.js", "Express", "GraphQL", "REST APIs"],
    },
    {
      category: "Database",
      icon: <Database />,
      items: ["MongoDB", "PostgreSQL", "Redis"],
    },
    {
      category: "DevOps",
      icon: <Terminal />,
      items: ["Docker", "Kubernetes", "CI/CD", "AWS"],
    },
    {
      category: "Design",
      icon: <Palette />,
      items: ["Figma", "Adobe XD", "Responsive Design"],
    },
    {
      category: "Languages",
      icon: <Globe />,
      items: ["TypeScript", "Python", "Java"],
    },
  ]);

  const [activities, setActivities] = useState<Activity[]>([
    {
      icon: <GitBranch />,
      title: "Open Source Contributor",
      description:
        "Actively contributing to various open-source projects in the JavaScript ecosystem.",
    },
    {
      icon: <BookOpen />,
      title: "Tech Blogger",
      description:
        "Writing articles on modern web development techniques and best practices.",
    },
    {
      icon: <Users />,
      title: "Meetup Organizer",
      description:
        "Organizing local JavaScript meetups to foster community learning and networking.",
    },
  ]);

  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    const isEditMode = localStorage.getItem("editMode") === "true";
    setEditMode(isEditMode);
  }, []);

  const ButtonRipple = () => <span className={theme.buttonRipple} />;

  return (
    <div className="max-w-4xl mx-auto">
       <section className="mb-16 p-8 rounded-lg relative overflow-hidden" 
        style={{ background: theme.heroPattern }}>
        <AnimatedTechIcons theme={theme} />
        <div className="relative z-10">
          <h1 className={`text-4xl font-bold mb-4 ${theme.text}`}>{name}</h1>
          <p className={`text-xl mb-6 ${theme.text}`}>{title}</p>
          <p className="mb-4 text-gray-700">{about}</p>
          <a
            href="/path-to-your-cv.pdf"
            download
            className={`${theme.button} inline-flex items-center mb-4`}
          >
            <Download size={16} className="mr-2" />
            Download CV
          </a>
          {editMode && (
            <button 
              onClick={() => setAbout(prompt('Update your about section:', about) || about)}
              className={theme.button}
            >
              <ButtonRipple />
              Edit
            </button>
          )}
        </div>
      </section>

      <section id="experience" className="mb-16">
        <h2 className={`text-3xl font-semibold mb-8 ${theme.text}`}>
          Experience
        </h2>
        <AnimatedTimeline experience={experience} theme={theme} />
        {editMode && (
          <button
            onClick={() => {
              const newJob = {
                title: prompt("Job title:") || "",
                company: prompt("Company:") || "",
                year: prompt("Year:") || "",
                description: [
                  prompt("Job description (first bullet point):") || "",
                ],
              };
              if (newJob.title && newJob.company) {
                setExperience([...experience, newJob]);
              }
            }}
            className={`${theme.button} flex items-center mt-8`}
          >
            <ButtonRipple />
            <Plus size={16} className="mr-2" /> Add Job
          </button>
        )}
      </section>

      <section id="services" className="mb-16">
        <h2 className={`text-3xl font-semibold mb-8 ${theme.text}`}>
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className={theme.card}>
              <div
                className={`w-12 h-12 rounded-full ${theme.iconBackground} flex items-center justify-center mb-4`}
              >
                <div className={theme.icon}>{service.icon}</div>
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${theme.text}`}>
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        {editMode && (
          <button
            onClick={() => {
              const newService: Service = {
                title: prompt("Service title:") || "",
                description: prompt("Service description:") || "",
                icon: <Code />,
              };
              if (newService.title && newService.description) {
                setServices([...services, newService]);
              }
            }}
            className={`${theme.button} flex items-center mt-8`}
          >
            <ButtonRipple />
            <Plus size={16} className="mr-2" /> Add Service
          </button>
        )}
      </section>

      <section id="skills" className="mb-16">
        <h2 className={`text-3xl font-semibold mb-8 ${theme.text}`}>Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className={theme.skillCard}>
              <div className="flex items-center mb-4">
                <div
                  className={`w-8 h-8 rounded-full ${theme.iconBackground} flex items-center justify-center mr-3`}
                >
                  <div className={theme.icon}>{skillCategory.icon}</div>
                </div>
                <h3 className={`text-xl font-semibold ${theme.text}`}>
                  {skillCategory.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-700"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${theme.timeline.dot} mr-2`}
                    ></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {editMode && (
          <button
            onClick={() => {
              const category = prompt("Enter skill category:");
              const skill = prompt("Enter new skill:");
              if (category && skill) {
                const updatedSkills = [...skills];
                const categoryIndex = updatedSkills.findIndex(
                  (c) => c.category.toLowerCase() === category.toLowerCase()
                );
                if (categoryIndex !== -1) {
                  updatedSkills[categoryIndex].items.push(skill);
                } else {
                  updatedSkills.push({
                    category,
                    icon: <Code />,
                    items: [skill],
                  });
                }
                setSkills(updatedSkills);
              }
            }}
            className={`${theme.button} flex items-center mt-8`}
          >
            <ButtonRipple />
            <Plus size={16} className="mr-2" /> Add Skill
          </button>
        )}
      </section>

      <section id="activities" className="mb-16">
        <h2 className={`text-3xl font-semibold mb-8 ${theme.text}`}>
          Extra Activities
        </h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`${theme.activityCard} flex items-start`}
            >
              <div
                className={`w-12 h-12 rounded-full ${theme.iconBackground} flex items-center justify-center mr-4 flex-shrink-0`}
              >
                <div className={theme.icon}>{activity.icon}</div>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-2 ${theme.text}`}>
                  {activity.title}
                </h3>
                <p className="text-gray-700">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
        {editMode && (
          <button
            onClick={() => {
              const newActivity: Activity = {
                title: prompt("Activity title:") || "",
                description: prompt("Activity description:") || "",
                icon: <GitBranch />,
              };
              if (newActivity.title && newActivity.description) {
                setActivities([...activities, newActivity]);
              }
            }}
            className={`${theme.button} flex items-center mt-8`}
          >
            <ButtonRipple />
            <Plus size={16} className="mr-2" /> Add Activity
          </button>
        )}
      </section>
    </div>
  );
}
