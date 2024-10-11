export default function Projects() {
  return (
    <>
      <div className="container-sm my-5">
        <h1 style={{ fontSize: "3rem" }}><b>Projects</b></h1>

        <h2 className="mt-5 mb-4 text-center"><b>Lenny</b></h2>
        <hr className="w-25 mx-auto my-3 border-2" />
        <p className="text-center">
          A feature-rich Discord bot written in JavaScript
        </p>
        <img src="lenny_icon.png" alt="placeholder" className="img-fluid rounded mx-auto d-block" id="lenny_img" />
        <a href="https://github.com/jkl2k2/lenny" target="_blank" className="btn btn-secondary justify-content-center mx-auto d-grid col-2 mt-5">
          View on GitHub
        </a>
        <div className="row mx-auto mt-4 p-2 d-flex text-center justify-content-center">
          <div className="col-md-3">
            <b className="border-bottom border-secondary border-2">Code Stack</b><br />
            JavaScript<br />
            Node.js<br />
            Discord.js<br />

          </div>
          <div className="col-md-3">
            <b className="border-bottom border-secondary border-2">CI/CD</b><br />
            AWS Lightsail<br />
            Docker<br />
            GitHub Actions<br />
            GitHub Container Registry<br />
          </div>
        </div>
      </div>
    </>
  );
}