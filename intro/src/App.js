import "./App.css";
import explorerData from "./componentFolderStructure/data";
import Folder from "./componentFolderStructure/Folder";
// import TODO from "./componentFunction/TODO";
// import TodoApp from "./componentFunction/ToDoList";
// import Timer from "./componentClassLifeCycle/Timer";
// import Counter from "./componentClass/Counter";
// import Welcome from "./componentClass/Welcome";
// import MyComponent from "./componentClass/MyComponent";
// import ProfileCard from "./componentsProps/ProfileCard";
// import Child1 from "./componentsProps/Child1";
// import UserList from "./components/UserList";
// import FilterData from "./components/FilterData";
// import Destructuring from "./components/Destructuring";
// import Counter from "./components/Counter";
// import Profile from "./components/Profile";
// import Fruits from "./components/Fruits";
// import FruitList from "./components/FruitList";
// import FruitListId from "./components/FruitListId";

function App() {
  return (
    <div className="d-flex gap-3 justify-content-center mt-5">
      {/* <FruitList/> */}
      {/* <FruitListId /> */}
      {/* <Fruits /> */}
      {/* <Profile /> */}
      {/* <Counter /> */}
      {/* <Destructuring /> */}

      {/* <FilterData/> */}
      {/* <UserList/> */}
      {/* <Child1 name="Pawan" rollno="123"/> */}
      {/* <ProfileCard
        name="Pawan"
        roll="Frontend"
        image="images.jpeg"
        bio="I am Good Boy"
      /> */}
      {/* <ProfileCard
        name="Pawan"
        roll="Frontend"
        image="images.jpeg"
        bio="I am Good Boy"
      /> */}
      {/* <ProfileCard
        name="Pawan"
        roll="Frontend"
        image="images.jpeg"
        bio="I am Good Boy"
      /> */}

      {/* <MyComponent/> */}
      {/* <Welcome name="Pawan" roll="Frontend" /> */}
      {/* <Counter /> */}
      {/* <Timer /> */}
      {/* <TodoApp/> */}
      {/* <TODO/> */}
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
