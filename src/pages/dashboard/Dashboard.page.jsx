import FooterDashboard from "../../components/footer/FooterDashboard";
import NavBar from "../../components/navBar/NavBar";
import TableTaskComponent from "../../components/tasks/tableTaskComponent";

const Dashboard = () => {

    return (
        <div>
            <NavBar/>
            <TableTaskComponent/>
            <FooterDashboard/>
        </div>
    )

};  

export default Dashboard;