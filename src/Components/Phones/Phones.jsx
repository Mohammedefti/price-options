import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import {Audio} from 'react-loader-spinner'


const Phones = () => {

    const [phones,setPhones]= useState([]);
    const [loading,setLoading]= useState(true);

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=> res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=> {
            // accourate object ke get korar jonno
            const phoneData = data.data.data;
            const phonesWithFakeData = 
            // proti ta phone data get korar jonno map
            phoneData.map(phone=>{
                const obj ={
                    name: phone.phone_name,
                    // price e aita newar mane hoilo price er slug tare split korsi then 2 number element ta nisi. 
                    price: 
                    parseInt(phone.slug.split('-')[1])
                }
                // ar ak er beshi line likhle return likha must
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData);
            setLoading(false);
        })

    },[])

    return (
        <div> {loading && <div>
            <Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
  />
            </div>}
            

            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={2600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;