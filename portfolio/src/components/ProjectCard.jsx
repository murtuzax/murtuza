export default function ProjectCard({ title, description, url, address }) {
    return (
        <a href={url} target="_blank" className="project">
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <p className="web-address">{address}</p>

            <svg className="link-icon lucide lucide-move-up-right preview-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
            </svg>
        </a>
    )
}