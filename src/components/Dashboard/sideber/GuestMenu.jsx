import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "./MenuItem";

const GuestMenu = () => {
    return (
        <>
           <MenuItem icon={BsFillHouseAddFill} label='My Booking' address='my-booking' /> 
        </>
    );
};

export default GuestMenu;