import "./footer.css";
import { BiLogoInstagram } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { IoLogoWhatsapp } from "react-icons/io";
import { Outlet } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <div>
        <section className="footerConsulta">
          <h4>Consultas & Contacto</h4>
        </section>

        <div className="footerDiv">
          <p>Buenos Aires, Argentina</p>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <a href="">
              <CgMail size={35} />
            </a>
            <a href="">
              <IoLogoWhatsapp size={35} />
            </a>
            <a href="">
              <BiLogoInstagram size={35} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
