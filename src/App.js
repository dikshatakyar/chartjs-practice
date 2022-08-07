import "./App.css";
import BarChart from "./Components/BarChart";
import { UserData } from "./Data";
import { useState } from "react";
import LineChart from "./Components/LineChart";
import PieChart from './Components/PieChart';
const App = () => {
  const [UserInfo, SetUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["yellow", "pink", "orange", "purple", "blue"],
        borderColor: "grey",
        borderWidth: 2,
      },
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: "black",
      },
    ],
  });

  return (
    <div style={{ width: 800 }}>
      <BarChart chartData={UserInfo} />;
      <LineChart chartData={UserInfo} />
      <div style={{width : 500}}>

      <PieChart chartData={UserInfo} />
      </div>
    </div>
  );
};

export default App;
