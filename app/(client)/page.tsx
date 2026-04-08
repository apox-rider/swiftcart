import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import HomeCategories from '@/components/HomeCategories'
import ProductGrid from '@/components/ProductGrid'
import { fetchCategories } from '@/sanity/lib'
 
 export default async function Home () {
  const categories= await fetchCategories(6)
   return (
    <>
     <Container className='max-w-full py-2.5'>
      <HomeBanner />
      <div className='py-10'>
        <ProductGrid/>
      </div>
      <div>
        <HomeCategories categories={categories}/>
      </div>
     </Container>
    </>
   )
 }
 