import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import NavBar from "../shared/NabBar/NavBar";


const News = () => {
    const news=useLoaderData()
    const{id}=useParams();
    //  console.log("News array:", news);
// Check if news is available and then find the specific news item
  const item = news && news.find((item) => item._id === id);
    
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-4xl">News Details</h2>
                    {item ? (
            <>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <img src={item.image_url} alt="" />
              <p>{item.details}</p>
            </>
          ) : (
            <p>News not found</p>
          )}
                   
                   
                   
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;