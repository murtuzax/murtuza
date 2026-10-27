import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Aether - Invite link",
        description: "A invite link for my personal discord server",
        url: "https://murtuzax.github.io/aether-discord/",
        address: "murtuzax.github.io/aether-discord/",
    },
    {
        title: "SpaceX - To Mars",
        description: "A clone of SpaceX",
        url: "https://murtuzax.github.io/spaceX-web/",
        address: "murtuzax.github.io/spaceX-web/",
    },
    {
        title: "Snake Game",
        description: "A fun snake game to improve my JS logic",
        url: "https://murtuzax.github.io/snake-game/",
        address: "murtuzax.github.io/snake-game/",
    },
];

export default function LandingPage() {
    return (
        <main>
            <section id="hero">
                <div className="stars">
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                    <span className="star"></span>
                </div>

                <div className="content">
                    <div className="my-image-div">
                        <img
                            className="my-image"
                            src="https://cdn.britannica.com/37/255737-050-9BB3FEDA/Christopher-Nolan-Movie-film-director-Oppenheimer-UK-premiere-2023.jpg"
                            alt="Murtuza"
                        />
                    </div>

                    <h1 className="name">Murtuza</h1>

                    <div className="information">
                        <p>Hey! I'm Murtuza, a student learning programming</p>

                        <p>
                            Dreaming up cool ideas and making them come true
                            is where my passion lies. I am enthusiastic about
                            building tools that help myself and others to be
                            more productive and enjoy the process of crafting.
                            You can find my full projects list here.
                        </p>

                        <p>
                            Outside of programming, I enjoy learning about
                            philosophy and science. I regularly post on my
                            socials.
                        </p>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="content">
                    <h2>About</h2>

                    <div
                        className="information"
                        style={{ marginBottom: "20px" }}
                    >
                        <p>
                            I'm currently learning web development inluding
                            html, css, react, and more
                        </p>
                    </div>

                    <div className="about-information">
                        <div>
                            Tech Stack -

                            <div className="about-info-card">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 600 600"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M127 0h27v26.7h24.8V0h27v81h-27V53.7H154V81h-27zm114.4 26.8h-23.8V0h74.7v26.8h-23.9V81h-27zM304.1 0h28.2l17.4 28.4L367 0h28.2v81h-27V40.7l-18.5 28.8h-.5l-18.6-28.8V81H304zm104.6 0h27v54.2h38v26.7h-65zm65.1 551.7L512.5 118h-425L126 552l173.7 48zm-249-291.9 4.8 54.5h193.9l-1.3 14.3L409 477.7l-109 30.2h-.2l-109-30.2-7.5-83.6h53.4l3.8 42.5 59.3 16 59.4-16 6.1-69H181l-14.3-161H433l-4.7 53.2z"
                                    />
                                </svg>
                                Html
                            </div>

                            <div className="about-info-card">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 600 600"
                                >
                                    <path
                                        fill="#264DE4"
                                        d="m299.7 600-173.6-48.2L87.5 118h425l-38.7 433.8z"
                                    />
                                    <path
                                        fill="#2965F1"
                                        d="m440.7 524.1 33-370.7H300V563z"
                                    />
                                    <path
                                        fill="#EBEBEB"
                                        d="m176.1 314.3 4.8 53.2H300v-53.2zm-9.5-107.7 4.8 53.2H300v-53.2zM300 452.5h-.2l-59.3-16-3.8-42.4h-53.4l7.4 83.6 109 30.3.3-.1z"
                                    />
                                    <path
                                        fill="#000"
                                        d="M187.5 0H252v27h-37.5v27H252v26.9h-64.5zm77.3 0h64.5v23.4h-37.5v4.7h37.5v54h-64.5V57.3h37.5v-4.7h-37.5zm77.4 0h64.4v23.4h-37.5v4.7h37.5v54h-64.4V57.3h37.5v-4.7h-37.5z"
                                    />
                                    <path
                                        fill="#fff"
                                        d="m423.5 314.3 9.6-107.7H299.8v53.2h75l-4.8 54.5h-70.2v53.2h65.5l-6.1 69-59.4 16V508L409 477.7l.8-9 12.5-140z"
                                    />
                                </svg>
                                Css
                            </div>

                            <div className="about-info-card">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 600 600"
                                >
                                    <g clipPath="url(#devicon-javascript-1-a)">
                                        <path
                                            fill="#F7DF1E"
                                            d="M0 0h600v600H0z"
                                        />
                                        <path
                                            fill="#000"
                                            d="m157.8 501.4 45.9-27.8c8.8 15.7 16.9 29 36.2 29 18.5 0 30.2-7.2 30.2-35.4V275.5h56.4V468c0 58.4-34.2 85-84.2 85-45 0-71.2-23.4-84.5-51.6m199.3-6 46-26.6c12 19.7 27.7 34.2 55.5 34.2 23.4 0 38.3-11.7 38.3-27.8 0-19.3-15.3-26.2-41-37.4l-14.2-6c-40.7-17.4-67.6-39.1-67.6-85 0-42.3 32.2-74.6 82.5-74.6 35.9 0 61.6 12.5 80.2 45.1l-44 28.2c-9.6-17.3-20-24.1-36.2-24.1-16.5 0-27 10.4-27 24.1 0 17 10.5 23.8 34.7 34.3l14 6c48 20.6 75 41.5 75 88.6 0 50.8-39.9 78.6-93.5 78.6-52.3 0-86.1-25-102.7-57.6"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="devicon-javascript-1-a">
                                            <path
                                                fill="#fff"
                                                d="M0 0h600v600H0z"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Javascript
                            </div>

                            <div className="about-info-card">
                                <svg
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                                        fill="#53C1DE"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2624 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4569 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4129 22.9332 14.2816 23.974 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.534 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6941 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5419 20.3793 11.5771ZM16.0143 8.0481C16.605 8.66897 17.1974 9.3623 17.7798 10.1145C16.5986 10.0603 15.4158 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8368 22.6531 14.2448 21.8971C15.4329 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9053 19.1657 23.1742 19.9809C22.3043 20.1734 21.3657 20.3285 20.3757 20.4435C21.015 19.4608 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1017 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7567 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                                        fill="#53C1DE"
                                    />
                                </svg>
                                React
                            </div>
                        </div>

                        <div>
                            Working at -
                            <div className="about-info-card">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z" />
                                </svg>
                                Home
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="content">
                    <h2>Projects</h2>

                    <div className="project-cards">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.url}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                                address={project.address}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="content">
                    <div className="contacts">
                        <p>Find me on</p>

                        <div>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/murtuzax"
                            >
                                Github
                                <svg
                                    className="github-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        fill="currentColor"
                                        d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.7 5.7 0 0 0-1.837-2.415a1 1 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.4 4.4 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182M20.737 5.377q.049-.187.09-.42a6.3 6.3 0 0 0-.408-3.293a1 1 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.9 13.9 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a1 1 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357q.037.191.079.354a6.27 6.27 0 0 0-1.256 3.83a8 8 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a5 5 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.7 1.7 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a7 7 0 0 1-.033-.738a4.26 4.26 0 0 1 .92-2.713a3 3 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.4 3.4 0 0 1-.155-.555a4.1 4.1 0 0 1 .079-1.616a7.5 7.5 0 0 1 2.415 1.18a1 1 0 0 0 .827.133a11.8 11.8 0 0 1 6.173.001a1 1 0 0 0 .83-.138a7.6 7.6 0 0 1 2.406-1.19a4 4 0 0 1 .087 1.578a3.2 3.2 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.12 4.12 0 0 1 20 9.203a7 7 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3 3 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a5 5 0 0 0-.155-1.311a4 4 0 0 0-.116-.416a6.51 6.51 0 0 0 5.445-6.424A9 9 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826"
                                    />
                                </svg>
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://x.com/murtuzax"
                            >
                                Twitter
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="#ffffff"
                                    className="bi bi-twitter-x"
                                    viewBox="0 0 16 16"
                                    id="Twitter-X--Streamline-Bootstrap"
                                    height="16"
                                    width="16"
                                >
                                    <path
                                        d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
                                        strokeWidth="1"
                                    />
                                </svg>
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://instagram.com/murtuza.math"
                            >
                                Instagram
                                <svg
                                    fill="#ffffff"
                                    viewBox="0 0 32 32"
                                    id="Camada_1"
                                    version="1.1"
                                    xmlSpace="preserve"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />
                                            <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />
                                            <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
                                        </g>
                                    </g>
                                </svg>
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://murtuzax.github.io/aether-discord/"
                            >
                                Discord
                                <svg
                                    viewBox="0 -28.5 256 256"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    preserveAspectRatio="xMidYMid"
                                    fill="#000000"
                                    stroke="#000000"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path
                                                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405061,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405061,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.761324,108.914901 193.539891,108.914901 193.539891,108.914901 Z"
                                                fill="#ffffff"
                                                fillRule="nonzero"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <p>
                        If you find my projects useful or enjoy what I build,
                        consider supporting my work. Your support motivates me
                        to keep learning, creating, and building things that
                        make a difference. Thank you!
                    </p>
                </div>
            </section>
        </main>
    );
}
