import Typical from "react-typical";
import styles from './index.module.scss'

const LongContent = () => {
  return (
    <section className="container-fluid p-0">
      <div className="long-content">
        <div className="container">
          <div className="row align-items-stretch" style={{ height: "70vh" }}>
            <div className="col-md-9 d-flex align-items-center text-white">
              <section>
                <h1 className={styles.cdHeadline}>
                  <span className={styles.staticHeadline}>
                    Ayudamos a <br />
                    personas a crear <br />
                  </span>
                  <span>
                    <Typical
                      steps={[
                        "estrategias",
                        1000,
                        "desarrollos",
                        1000,
                        "experiencias",
                        1000,
                      ]}
                      loop={Infinity}
                      wrapper="b"
                    />
                  </span>
                  <span className={styles.staticHeadline}>digitales.</span>
                </h1>
                <p className="pt-2">
                  Somos creadores digitales, vivimos y disfrutamos del ambiente
                  online. <br />
                  Nos especializamos en diseñar y desarrollar sitios y
                  aplicaciones web a la medida.
                </p>
                <a href="/" className="btn btn-sm btn-primary px-3 py-2 ">
                  Saber más
                </a>
              </section>
            </div>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `
                <video
                    id="myVideo"
                    loop
                    muted
                    autoplay
                    playsinline
                    src="/assets/img/videobg.mp4"
                />,
            `,
          }}
        ></div>
      </div>
    </section>
  );
};

export default LongContent;
