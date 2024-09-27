

const CrudList = ({crudTasks,CrudDelete,crudEdit}) => {
    return (
        <div className="grid grid-cols-1 gap-3 mx-5 ">
            {crudTasks.map((item) => (
                <ul key={item.id}
                    className="flex items-center justify-between bg-slate-400 gap-3 px-5 rounded-md py-4">
                    <h1>{item.name}</h1>
                    <h1>{item.email}</h1>
                    <h1>{item.phone}</h1>
                    <p className="flex items-center gap-3 justify-center">
                        <button
                            className="bg-black py-1 px-4 text-white rounded-md"
                            onClick={()=>crudEdit(item)}
                           >Edit
                        </button>
                        <button
                            className="bg-red-600 py-1 px-4 text-white rounded-md"
                            onClick={()=>CrudDelete(item.id)}
                            >Delete
                        </button>
                    </p>
                </ul>
            ))}
        </div>
    );
};

export default CrudList;