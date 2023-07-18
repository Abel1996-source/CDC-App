import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteduser, getalluser } from "../axios/users/users";

const Customers=()=>{
    let [users, setUsers]=useState([])
    let [search,setSearch]=useState("")

    const  listedesutilisateur=()=>{
       
            getalluser().then((response)=>{
                setUsers(response.data.donnees)
            }).catch((err)=>{
                console.log(err.response.data.message);
            })
       
    }

    useEffect(()=>{
        listedesutilisateur() //chargement de la liste des utilisateurs
    },[])

    const handleClick=(id)=>{
       deleteduser(id).then(res=>{
            console.log(res.data.message);
            listedesutilisateur() //actualiser la liste des utilisateurs
       }).catch(err=>{
            console.log(err.response.data.message);
       })
    }
    const handleSearch=(event)=>{
        setSearch(event.target.value)
        console.log(search);
    }
  let utilisateurs=users.map((user)=>(
                <tr key={user.id}>
                    <td>{user.name} </td>
                    <td>{user.email} </td>
                    <td>{user.profile} </td>
                    <td className="btn btn-light deleted" onClick={()=>handleClick(user.id)}><i className="bi bi-trash-fill"></i> </td>
                </tr>
  ))
  let spiner=(
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                )
    return(
        <>
            <div className="overview">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/dashboad">Dashboad</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Users</li>
                    </ol>
                </nav>
                <hr />
                <div className="content-users">
                    <div className="users-header">
                        <button className="btn btn-primary">Add User</button>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                        </form>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">statut</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length===0?spiner :utilisateurs}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Customers;