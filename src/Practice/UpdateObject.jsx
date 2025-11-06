function Update(){


    const [data,setData]=useState({
        name:'Anil',
        address:{
            city:'Delhi',
            country:'India'
        }
    })

    const handleName=(val)=>{
        data.name=val

        setData({...data})
    }
    const handleCity=(city)=>{
        data.adress.city=city;
        console.log(data);
        setData({...data,address:{...data.address,city}})
    }
}