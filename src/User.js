import { useEffect } from "react";
import { connect } from "react-redux"
import { fetchUser } from "./redux/action";

function User(props){
    console.log(props);
    const {fetchUsers, users} = props
    useEffect(() => {
      fetchUsers()
      console.log('useEffect called');
    }, [fetchUsers])
    return(
        <>
        <div>
            {users.users.map((user, index) => {
                return(
                    <div key={index}>
                        {user.name}
                    </div>  
                )
            })}
        </div>
        </>
    )
}

const mapStatetoProps = (state) => {
    return{
        users: state.user
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        fetchUsers: () => dispatch(fetchUser())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(User)