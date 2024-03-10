import './ShowItem.css';


function ShowItem({item, radioOrCheck, optionName}){
    console.log("Showing item: ", item);
    return (
        <div className=' text-center m-2 check-test'>
            <input type={radioOrCheck} className="btn-check border rounded" name={optionName} id={item} autoComplete='off' />
            <label className='btn  item-option' for={item} > {item} </label>
        </div>
    )
}

export default ShowItem;