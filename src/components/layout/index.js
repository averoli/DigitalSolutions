import s from "./style.module.css";

const Layout = ({ title, children }) =>{
    return(
                <>
                    <h3 className={s.h3_footer}>{ title }</h3>
                    <p className={s.text_footer}>{ children }</p>
                </>
    );
};

export default Layout;