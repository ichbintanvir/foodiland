import { cn } from "../../../lib/cn"

const H6 = ({ children, className }) => {
  return (
    <h6
      className={cn(
        `font-semibold text-black 
         text-[14px]        // Mobile default
         sm:text-[16px]     // Small tablets
         md:text-[18px]     // Medium tablets
         lg:text-[20px]     // Large screens`,
        className
      )}
    >
      {children}
    </h6>
  )
}

export default H6
