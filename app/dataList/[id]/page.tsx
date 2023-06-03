const getData = async (id) => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos/'+ id);
    const data = await responce.json();
    return data;
};

const DataList = async ({params :{ id}}) => {


    const data = await getData(id);
    return (
        <div>
            <p>
                {data.title}
            </p>
            <p>
                {data.completed}
            </p>
        </div>
    );
};

export default DataList;
