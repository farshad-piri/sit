
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
function User(props){
    return(
        <>
            <div className="container">
                <div style={{height:"10vh"}} className="bg-primary rounded-3 d-flex" >
                    <div className="mx-2 mt-3">
                        <FaUserEdit   size={30}/>
                    </div>
                    <div className="m-auto  text-white">
                        {props.email}
                    </div>
                    <div>
                        <MdDelete size={20} className="mt-4" onClick={props.Deleteuser}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default User
