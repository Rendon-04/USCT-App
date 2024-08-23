import React from 'react';
import '/src/components/Resources.css'

// Resources component 

export default function Resources ()  {
    const resources = [
        {
          title: "Inter-agency Strategy for Promoting Naturalization",
          description: "Learn about the federal strategies in place to promote naturalization across the U.S.",
          link: "https://www.uscis.gov/promotingnaturalization"
        },
        {
          title: "New U.S. Citizens",
          description: "Information and resources for new citizens of the United States.",
          link: "https://www.uscis.gov/citizenship-resource-center/new-us-citizens"
        },
        {
          title: "Learn About Citizenship",
          description: "Educational resources to help you learn about the citizenship process and requirements.",
          link: "https://www.uscis.gov/citizenship/learn-about-citizenship"
        },
        {
          title: "Apply for Citizenship",
          description: "Steps and guidelines to apply for U.S. citizenship.",
          link: "https://www.uscis.gov/citizenship/apply-for-citizenship"
        },
        {
          title: "Naturalization Test and Study Resources",
          description: "Study materials and resources to help you prepare for the naturalization test.",
          link: "https://www.uscis.gov/citizenship/find-study-materials-and-resources"
        },
        {
          title: "Resources for Educational Programs",
          description: "Access resources to support educational programs related to citizenship.",
          link: "https://www.uscis.gov/citizenship/resources-for-educational-programs"
        },
        {
          title: "Learn About the Citizenship and Integration Grant Program",
          description: "Information on grants available to promote citizenship and integration.",
          link: "https://www.uscis.gov/citizenship/civic-integration/learn-about-the-citizenship-and-integration-grant-program"
        },
        {
          title: "Civic Integration",
          description: "Resources and information on civic integration for new citizens.",
          link: "https://www.uscis.gov/citizenship/civic-integration"
        },
        {
          title: "Outreach Tools",
          description: "Tools to help organizations reach out to potential citizens.",
          link: "https://www.uscis.gov/citizenship/outreach-tools"
        },
        {
          title: "Naturalization-Related Data and Statistics",
          description: "Access data and statistics related to naturalization.",
          link: "https://www.uscis.gov/citizenship-resource-center/naturalization-related-data-and-statistics"
        }
      ];
      
    return (
      <div className="resources-container">
        <h1 className="resources-title">Citizenship Resource Center</h1>
        <ul className="resources-list">
          {resources.map((resource, index) => (
            <li key={index} className="resource-item">
              <h2 className="resource-title">{resource.title}</h2>
              <p className="resource-description">{resource.description}</p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                Learn More
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

