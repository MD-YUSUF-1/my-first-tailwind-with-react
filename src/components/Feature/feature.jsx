import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div className="text-start">
            <li className="text-lg">{feature}</li>
        </div>
    );
};
Feature.propTypes = {

    feature: PropTypes.string,
}
export default Feature;