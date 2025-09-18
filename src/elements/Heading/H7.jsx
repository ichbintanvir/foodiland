import { cn } from "../../../lib/cn"

const H7 = ({ children, className }) => {
  return (
    <p
      className={cn(
        `font-semibold text-black 
         text-[14px]        // Mobile default
         sm:text-[16px]     // Small tablets
         md:text-[17px]     // Medium tablets
         lg:text-[18px]     // Large screens`,
        className
      )}
    >
      {children}
    </p>
  )
}

export default H7
