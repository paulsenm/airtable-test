
function ShowItem({item}){
    console.log("Showing item: ", item);
    return (
        <div className="border rounded col col-3 text-center">
            {item}
        </div>
    )
}

export default ShowItem;