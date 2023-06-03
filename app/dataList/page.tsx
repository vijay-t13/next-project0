import Link from "next/link";

const getData = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await responce.json();
    return data;
};

const DataList = async () => {
    const data = await getData();
    return (
        <div>
            {data.map((item) => {
                return <>
                <Link href={`/dataList/${item?.id}`}>{item?.title}</Link>;
                </>
            })}
        </div>
    );
};

export default DataList;
