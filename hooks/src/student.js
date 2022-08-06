
const Student= ({name, dispatch, id, isHere})=>{
    console.log(name, dispatch, id,isHere);
    return (
        <div>
            <span 
                style={{
                    textDecoration: isHere ? 'line-through' : 'none',
                    color: isHere ? 'green' : 'black',
                }}
                onclick={()=>{
                    console.log('[SPAN] mark-student')
                    dispatch({
                        type: 'mark-student',
                        payload: { id },
                    });
                }}
            >
                {name}
            </span>
            <button onClick={()=>{
                dispatch({
                    type:'delete-student', 
                    payload:{id},
                });
            }}> Delete</button>
        </div>
    )
};
export default Student;