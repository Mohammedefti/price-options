import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    
    const    pricingOptions= [
          {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Open from 6 AM to 9 PM"
            ]
          },
          {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Open 24/7",
              "Access to group fitness classes",
              "2 free personal training sessions"
            ]
          },
          {
            "id": 3,
            "name": "Premium",
            "price": 79.99,
            "features": [
              "Access to gym equipment",
              "Locker room access",
              "Open 24/7",
              "Unlimited group fitness classes",
              "5 free personal training sessions",
              "Access to spa and sauna",
              "Priority customer support"
            ]
          },
          // {
          //   "id": 4,
          //   "name": "VIP",
          //   "price": 99.99,
          //   "features": [
          //     "Access to gym equipment",
          //     "Locker room access",
          //     "Open 24/7",
          //     "Unlimited group fitness classes",
          //     "10 free personal training sessions",
          //     "Access to spa, sauna, and pool",
          //     "Private locker with laundry service",
          //     "Personalized meal and fitness plan",
          //     "Priority customer support"
          //   ]
          // }
        ]
      
      
    return (
        <div>
            <h2 className="text-5xl"> Best Prices in the town</h2>
            <div className="grid  md:grid-cols-3 gap-6">
            {
                pricingOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;