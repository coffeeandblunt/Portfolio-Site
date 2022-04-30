// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';
import projectfrenchimp from '../assets/frenlogo.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Project</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Project Fren-Chimp</h3>
                    <img src={projectfrenchimp} alt="Project Fren-Chimp" />
                    <p>This is my first project in web3. Objectives -  Make as many friends in this space as possible while learning and building something cool and unique. I've drawn most of the art using the mouse pad on my laptop and have been teaching myself code watching mostly youtube videos. So far so good lol. Shout out hashlips and dapp univeristy. Lots more to come...   
                    </p>

                    <a href="https://spliffchimp.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Uniswap/v2-core" target="_blank" className="button">Code</a>
                </div>

             

            
            </div>
        </section>
    );
}

export default Projects;