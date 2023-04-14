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
    const [category, setCategory] = useState("");
    const [time, setTime] = useState(200);

    const handleCategoryFilter = (e) => {
        setCategory(e.currentTarget.value)
        const newList = list.filter(item => item.category === category)
        setList(newList)
        console.log(list);
    }

    const handleTimeFilter = (e) => {
        setTime(e.currentTarget.value)
        const newList = list.filter(item => item.time < time)
        setList(newList)
        console.log(list);
    }
    
  return (   
    <>
        <div className='filter'>
            <div className='filter-item'> Food Type : 
                <select id="cars" onChange={e=>handleCategoryFilter(e)}>
                    <option value="" disabled>Choose here</option>
                    <option value="Delicious Food">Delicious Food</option>
                    <option value="Nutritious Food">Nutritious Food</option>
                    <option value="Fast Food">Fast Food</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Desserts">Desserts</option>
                </select>
            </div>
            <div className='filter-item'> Max Delivery Time : 
                <input type="number" value={time} onChange={e=>handleTimeFilter(e)}/>
            </div>
        </div>

        <div className='show-items'>
            {
                list !== null
                ?
                
                    list.map((item, index) => 
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
