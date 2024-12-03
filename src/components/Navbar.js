import { GiHamburgerMenu } from "react-icons/gi";
import { CiVideoOn } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-2">



        <div className="flex items-center">
          <GiHamburgerMenu size={"24px"} />
          <img
            className="px-4"
            width={"115px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"
            alt="ytlogo"
          />
        </div>



        <div className="flex w-[40%] items-center">
          <div className="w-[100%] py-2 px-4 border border-gray-400 rounded-l-full">
            <input placeholder="Search"
              type="text"
              className="w-full outline-none"
            />
          </div>
          <button className="py-2 border border-gray-400 rounded-r-full px-4" ><CiSearch size={"24px"} /></button>
        </div>



        <div className="flex w-[10%] justify-between items-center">
          <CiVideoOn size={"24px"} className="cursor-pointer"/>
          <IoIosNotificationsOutline size={"24px"} className="cursor-pointer"/>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyd4yeu9TenGRKMdglB5jEzdkxgwfGolxzAhajlem5eYyqodVsgsr0Ro&s"
            size={35}
            round={true}
          />
        </div>




      </div>
    </div>
  );
};

export default Navbar;
