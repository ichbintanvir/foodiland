import { cn } from "../../../lib/cn"

const H1 = ({ children, className }) => {
  return (
    <h1
      className={cn(
        `font-semibold text-black 
         text-[32px]        // Mobile default
         sm:text-[40px]     // Small devices (tablet)
         md:text-[48px]     // Medium devices (larger tablets)
         lg:text-[64px]     // Large devices (desktop)`,
        className
      )}
    >
      {children}
    </h1>
  )
}

export default H1
