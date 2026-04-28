import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";


const NewsCategoryPage = async ({ params }) => {
   const {id}= await params;
   console.log(id, 'paramsRes')

   const categories= await getCategories();
   const news= await getNewsByCategoryId(id)
    
    return (
        <div className="grid grid-cols-12 gap-3 md:gap-5 w-[97%] md:w-[85%] mx-auto mt-12">

            <LeftSidebar categories={categories} activeId={id}></LeftSidebar>

            <div className="col-span-6 ">
                <div className="font-bold text-xl md:text-2xl text-center">All News</div>

                <div className="space-y-4 mt-5">
                    {
                       news.length > 0 ? news.map((news) => {
                            return <NewsCard key={news._id} n= {news}>
                               
                            </NewsCard>
                        }) : <h2 className="text-4xl font-bold text-center mx-auto text-red-500">No news found!</h2>
                    }

                </div>
            </div>

            <div className="col-span-3 ">
                <RightSidebar ></RightSidebar>
            </div>

        </div>
    );
};

export default NewsCategoryPage;