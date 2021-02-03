import Layout from '../components/layout'
import Title from '../components/title'

export default function Home() {
   return (
      <Layout>
         <Title>Home Page</Title>
         <p>Aprendamos NextJS con WebTutoriales</p>
         <style jsx>
            {`
               p {
                  color: darkgray;
               }
               p:hover {
                  color: darkred;
               }
            `}
         </style>
      </Layout>
   )
}