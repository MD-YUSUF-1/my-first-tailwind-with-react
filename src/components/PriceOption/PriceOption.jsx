import PropTypes from 'prop-types';
import Feature from './../Feature/feature';

const PriceOption = ({option}) => {
    const{name,price,features} = option;
    return (
        <div className='text-center bg-blue-500 rounded-md p-4 text-white flex flex-col'>
            <h3 className='text-6xl font-bold'>{price}</h3>
            <p className='text-3xl'>{name}</p>
            <div className='flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature} ></Feature>)
            }
            </div>
            <button className='mt-12 bg-green-400 hover:bg-teal-300 w-full py-3 text-xl rounded-lg'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {

    option: PropTypes.object,
}
export default PriceOption;