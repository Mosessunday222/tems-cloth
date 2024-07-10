import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
    const base = "text-xs inline-block py-2 px-5 md:px-6 md:py-2.4 font-semibold text-stone-800 tracking-widest rounded-[10px] uppercase transition-colors focus-outline-none";
    const styles = {
        signout: base + " bg-orange-500",
        signin: base + " border-2 border-red-500",
        order: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm bg-green-500 text-white",  
        //  footerButton: base + "bg-red-500 w-[288.29px] h-[454px] p-[10px] gap-[10px] rounded-[20px] border-[1px] opacity-[0] sm:w-full sm:h-auto sm:p-4 sm:gap-4",
        secondary: base + " bg-transparent border-2 border-orange-500 text-stone-400 hover:bg-stone-300 hover:text-orange-500 transition-colors duration-1000 focus:ring focus:ring-pink-600 focus:ring-offset-2 active:bg-red-700 py-2.5 px-3 md:px-6 md:py-3.5 "
    };

    if (to) {
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        );
    }

    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    );
}

Button.propTypes = {
    disabled: PropTypes.bool.isRequired,
    children: PropTypes.string,
    to: PropTypes.string,
    type: PropTypes.string
};

export default Button;
