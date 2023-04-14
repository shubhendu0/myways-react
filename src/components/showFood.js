import React,{useState, useEffect} from 'react';
import './showFood.css'

const ShowFood = () => {
    const getLocalItem = () =>{
        let list = localStorage.getItem("foodList");
        if(list){
            return JSON.parse(list);
        }
        else{
            return [];
        }
    }

    const [list, setList] = useState(getLocalItem);
    const [filterList, setFilterList] = useState(list);
    const [category, setCategory] = useState("");
    const [time, setTime] = useState(3000);


    useEffect(()=>{
        console.log(category+" "+time)
        const newList = list.filter(item => {
            if(category === ""){
                return item.time < time
            }
            return (item.category === category && item.time < time)
        })
        setFilterList(newList);
    },[category, time])

    
    return (   
    <>
        <div className='filter'>
            <div className='filter-item'> Food Type : 
                <select defaultValue="" onChange={(e)=>setCategory(e.target.value)}>
                    <option value="" disabled>Choose here</option>
                    <option value="Delicious Food">Delicious Food</option>
                    <option value="Nutritious Food">Nutritious Food</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Desserts">Desserts</option>
                </select>
            </div>
            <div className='filter-item'> Max Delivery Time : 
                <input type="number" value={time} onChange={(e)=>setTime(e.target.value)}/>
            </div>
        </div>

        <div className='show-items'>
            {
                filterList !== null
                ?
                
                    filterList.map((item, index) => 
                        <div className='items'>
                            <h2> {item.name} </h2>
                            <h5> {item.category} </h5>
                            <h5> {item.time} </h5>
                        </div>
                    )
                
                :
                ( <h2> No items to show ;-( </h2> )
            }

        </div>
    </>
  )
}

export default ShowFood
