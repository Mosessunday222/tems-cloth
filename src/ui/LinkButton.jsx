import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function LinkButton({children, to}) {
    const navigate = useNavigate();
    const className = 'text-small text-blue-500 hover:blue-700 hover:underline';
    
    if (to === '-1') 
        return (
            <button className={className} onClick={() => navigate(-1)}>
                {children}
            </button>
        );
    
    
    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}

LinkButton.propTypes = {
    children: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default LinkButton;
