

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
       <div>
         <h3>header About</h3> <hr />
        {children} 
        
       </div>
   
  )
}
