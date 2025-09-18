import { cn } from "../../../lib/cn"

const H5 = ({ children, className }) => {
  return (
    <h5
      className={cn(
        `font-semibold text-black 
         text-[16px]        // Mobile default
         sm:text-[20px]     // Small tablets
         md:text-[22px]     // Medium tablets
         lg:text-[24px]     // Large screens`,
        className
      )}
    >
      {children}
    </h5>
  )
}

export default H5
