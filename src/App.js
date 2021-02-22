import { Card } from "./components/card";
import { TabsBox } from "./components/tabs";
import { CardBox } from "./components/cardBox";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>My preferences</h1>
        <div className="main">
          <div className="content">
            <Card>
              <TabsBox />
            </Card>
          </div>
          <div className="aside">
            <CardBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
