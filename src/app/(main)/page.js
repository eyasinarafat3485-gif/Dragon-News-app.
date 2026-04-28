import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { redirect } from "next/navigation";

const default_category_id= '01'

const Home=  async ()=> {
  redirect(`/category/${default_category_id}`)
  
}
export default Home;
