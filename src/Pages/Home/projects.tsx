import project1 from '../../assets/News Website Project.png';

export function Projects() {
  return (
    <div id="projects" className="flex justify-center m-10 pt-[500px]">
      <div className="font-extrabold text-center">
        Projects
        <img src={project1} className="w-96 flex justify-center"></img>
      </div>
    </div>
  );
}
