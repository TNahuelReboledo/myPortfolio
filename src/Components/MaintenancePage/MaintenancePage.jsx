import maintenancePageImage from "../../assets/maintenancePageImage.png";

export const MaintenancePage = () => {
   return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
         <p className="text-center text-xl">
            The site is currently down for <br/> <span className="text-4xl text-white bg-black pl-3 pr-3">MAINTENANCE</span>
         </p>
         <img className="w-64 pt-6" src={maintenancePageImage} alt="" />
      </div>
   );
};
