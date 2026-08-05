import Header from "@/components/Header"
import "./globals.css"
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