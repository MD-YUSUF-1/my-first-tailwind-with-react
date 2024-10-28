import PropTypes from 'prop-types';


const Route = ({route}) => {
    const {path,component}=route
    return (
        <div>
            
            <li className="ml-6 rounded-lg p-1 hover:bg-red-300"><a href={path}> {component}</a></li>
        </div>
    );
};
Route.propTypes = {

    route: PropTypes.object,
}
export default Route;