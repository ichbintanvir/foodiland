import { cn } from "../../../lib/cn"

const P3 = ({ children, className }) => {
  return (
    <p
      className={cn(
        `font-semibold text-black 
         text-[16px]        // Mobile default
         sm:text-[17px]     // Small tablets
         md:text-[18px]     // Medium tablets
         lg:text-[18px]     // Large screens`,
        className
      )}
    >
      {children}
    </p>
  )
}

export default P3
