import Header from "@/components/Header"
import "./globals.css"

export const metadata ={
   title: {
    default: "E-fashion",
    template: " %s | E-fashion"

   },
   description: "Online ecommerce platfoem for clothes and shoes",
   keywords: "Online shopping in Nepal"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <body>{children}</body>
          </div>
      </body>
    </html>
  )
}

export default RootLayout