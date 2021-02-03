import Navbar from './navbar';
import Head from 'next/head'

export default function Layout({ children }) {
   return (
      <div>
         <Head>
            <title>Aprendamos NextJS con Webtutoriales</title>
            <meta name="description" content="En este curso de web tutoriales aprenderas sobre NextJS." />
         </Head>
         <Navbar></Navbar>
         <main>
            {children}
         </main>
         <style jsx>
            {`
               div {
                  min-height: 100vh;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
               }
               main {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
               }
            `}
         </style>
         <style jsx global>
            {`
               html,
               body {
                  padding: 0;
                  margin: 0;
               }
               * {
                  box-sizing: border-box;
               }
            `}
         </style>
      </div>
   )
}
