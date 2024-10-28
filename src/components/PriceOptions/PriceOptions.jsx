import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": "$29/month",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 fitness class per week"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": "$49/month",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited fitness classes",
            "1 personal training session per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": "$79/month",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited fitness classes",
            "4 personal training sessions per month",
            "Access to sauna and spa"
          ]
        },
        {
          "id": 4,
          "name": "Family Plan",
          "price": "$99/month",
          "features": [
            "Access for up to 4 family members",
            "Access to gym equipment",
            "Locker room access",
            "Unlimited fitness classes",
            "2 personal training sessions per month"
          ]
        },
        {
          "id": 5,
          "name": "Annual Plan",
          "price": "$499/year",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited fitness classes",
            "10 personal training sessions per year",
            "Priority booking for classes and trainers"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className="text-3xl text-center">Best price in the town</h2>
            <div className=' mx-8 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                priceOptions.map((option) => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;